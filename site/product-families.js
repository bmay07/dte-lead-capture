// Greentec variable-product families.
//
// Mirrors a WooCommerce variable product 1:1 so this can be rebuilt on WordPress
// without redesigning the data:
//
//   Parent (variable product)      family.slug          e.g. reach-mower-scorpion-330
//   Global attribute  pa_arm-type  family.attributes[0] terms: s | plus
//   Global attribute  pa_config    family.attributes[1] terms: standard | bf
//   Variation                      family.variations[]  -> one existing model record (the SKU)
//
// Variation URLs match Woo's own query-arg form:
//   ?f=<parent-slug>&arm=<term>&config=<term>   ==   ?attribute_pa_arm-type=…&attribute_pa_config=…
//
// Families are DERIVED from the catalogueue, never hand-maintained. A model that has
// no sibling variant stays a simple product and is returned untouched.

const ARM = { s: 'S', plus: 'PLUS' };
const CONFIG = { standard: 'Standard', bf: 'BF' };

// Series that ship in S / PLUS arm variants. Everything else is a simple product.
const VARIANT_SERIES = ['Scorpion'];

function parseModel(p) {
  if (!p || p.brand !== 'Greentec') return null;
  if (VARIANT_SERIES.indexOf(p.series) < 0) return null;
  // "Greentec Reach Mower Scorpion 330 PLUS BF" / slug "reach-mower-scorpion-330-plus-bf"
  const m = (p.slug || '').match(/scorpion-(\d{3})(?:-(plus|s))?(?:-(bf))?$/i);
  if (!m) return null;
  return {
    size: m[1],
    arm: (m[2] || 's').toLowerCase(),
    config: m[3] ? 'bf' : 'standard'
  };
}

export function buildFamilies(products) {
  const byKey = {};
  const simple = [];

  products.forEach((p) => {
    const info = parseModel(p);
    if (!info) { simple.push(p); return; }
    const key = p.series + '-' + info.size;
    if (!byKey[key]) {
      byKey[key] = {
        slug: 'reach-mower-' + p.series.toLowerCase() + '-' + info.size,
        series: p.series,
        size: info.size,
        brand: p.brand,
        category: p.category,
        variations: []
      };
    }
    byKey[key].variations.push({
      arm: info.arm,
      config: info.config,
      armLabel: ARM[info.arm],
      configLabel: CONFIG[info.config],
      product: p
    });
  });

  const families = [];
  Object.keys(byKey).forEach((k) => {
    const f = byKey[k];
    if (f.variations.length < 2) { simple.push(f.variations[0].product); return; }

    // stable ordering: S before PLUS, standard before BF
    f.variations.sort((a, b) =>
      (a.config === b.config ? (a.arm === b.arm ? 0 : a.arm === 's' ? -1 : 1)
        : a.config === 'standard' ? -1 : 1));

    const arms = [];
    const configs = [];
    f.variations.forEach((v) => {
      if (arms.indexOf(v.arm) < 0) arms.push(v.arm);
      if (configs.indexOf(v.config) < 0) configs.push(v.config);
    });

    f.attributes = [
      { key: 'arm', name: 'Arm type', taxonomy: 'pa_arm-type', terms: arms.map((t) => ({ slug: t, label: ARM[t] })) },
      { key: 'config', name: 'Configuration', taxonomy: 'pa_config', terms: configs.map((t) => ({ slug: t, label: CONFIG[t] })) }
    ].filter((a) => a.terms.length > 1);

    const base = f.variations[0].product;
    f.name = base.brand + ' ' + base.type.replace(/^\w/, (c) => c.toUpperCase()) + ' ' + f.series + ' ' + f.size;
    f.name = base.name.replace(/\s+(PLUS|S)(\s+BF)?$/i, '');
    f.image = base.image;
    f.fit = base.fit;
    f.summary = base.summary;
    f.vehicles = base.vehicles;
    f.markets = base.markets;
    f.variantLabel = f.variations.map((v) => v.armLabel + (v.config === 'bf' ? ' BF' : '')).join(' · ');
    f.isFamily = true;
    families.push(f);
  });

  return { families: families, simple: simple };
}

// A flat list for the catalogueue grid: one card per family, plus every simple product.
let virnigMod = null;
export function attachVirnig(mod) { virnigMod = mod; }

function virnigLabel(p) {
  if (!virnigMod || p.brand !== 'Virnig') return '';
  const f = virnigMod.buildVirnigFamily(p);
  return f ? f.variations.map((v) => v.label).join(' · ') : '';
}

export function catalogueueEntries(products) {
  const { families, simple } = buildFamilies(products);
  const entries = families.map((f) => ({
    isFamily: true,
    href: 'product.html?f=' + f.slug,
    slug: f.slug,
    name: f.name,
    brand: f.brand,
    category: f.category,
    summary: f.summary,
    image: f.image,
    fit: f.fit,
    vehicles: f.vehicles,
    markets: f.markets,
    variantLabel: f.variantLabel,
    variantCount: f.variations.length,
    family: f
  })).concat(simple.map((p) => ({
    isFamily: false,
    href: 'product.html?p=' + p.slug,
    slug: p.slug,
    name: p.name,
    brand: p.brand,
    category: p.category,
    summary: p.summary,
    image: p.image,
    fit: p.fit,
    vehicles: p.vehicles,
    markets: p.markets,
    variantLabel: virnigLabel(p),
    variantCount: 1
  })));

  // preserve the catalogueue's own order
  const order = {};
  products.forEach((p, i) => { order[p.slug] = i; });
  entries.sort((a, b) => {
    const ai = a.isFamily ? order[a.family.variations[0].product.slug] : order[a.slug];
    const bi = b.isFamily ? order[b.family.variations[0].product.slug] : order[b.slug];
    return ai - bi;
  });
  return entries;
}

export function familyBySlug(products, slug) {
  return buildFamilies(products).families.find((f) => f.slug === slug) || null;
}

// Given any variation's product slug, find the family it belongs to.
export function familyForProduct(products, productSlug) {
  const fams = buildFamilies(products).families;
  for (let i = 0; i < fams.length; i++) {
    const v = fams[i].variations.find((x) => x.product.slug === productSlug);
    if (v) return { family: fams[i], variation: v };
  }
  return null;
}

export function pickVariation(family, arm, config) {
  if (!family) return null;
  return family.variations.find((v) => v.arm === arm && v.config === config)
    || family.variations.find((v) => v.arm === arm)
    || family.variations.find((v) => v.config === config)
    || family.variations[0];
}

export default { buildFamilies, catalogueueEntries, familyBySlug, familyForProduct, pickVariation };
