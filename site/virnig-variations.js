// Virnig variable products.
//
// Every Virnig record ships as one page carrying several SKUs - "DRM60 / DRM72" - // with the per-model figures crammed into single spec cells. This module splits
// each record into a WooCommerce-shaped variable product:
//
//   Parent (variable product)     the existing record            v70-drum-mulcher
//   Global attribute  pa_model    terms = the model codes        DRM60 | DRM72
//   Variation                     one SKU, its own spec table    ?p=v70-drum-mulcher&model=drm72
//
// Nothing is hand-listed: variations are derived from the "Models" spec row, and a
// spec cell becomes per-variation only when it splits into exactly as many parts as
// there are models. Anything else stays shared, so "Recommended flow = 14–25 / 25–42 /
// 33–45 GPM by motor" (a motor choice, not a size) is correctly left alone.

// Split on " / " at bracket depth zero, so "(1524 mm)" and "5/8" survive intact.
function splitTop(s) {
  const out = [];
  let depth = 0, buf = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === '(' || c === '[') depth++;
    else if (c === ')' || c === ']') depth--;
    if (depth === 0 && c === '/' && s[i - 1] === ' ' && s[i + 1] === ' ') {
      out.push(buf.trim()); buf = ''; i++; continue;
    }
    buf += c;
  }
  out.push(buf.trim());
  return out.filter((x) => x !== '');
}

const isBareNumber = (s) => /^[\d.,]+$/.test(s);

// "699 kg (1,180 – 1,540 lb)" -> "kg"   |   "84\" (…)" -> "\""
function unitOf(s) {
  const m = s.match(/^[\d.,]+\s*([^\s(]*)/);
  return m ? m[1] : '';
}

function distribute(value, n, codes) {
  // Cells that name each model outright, separated by '·'.
  if (value.indexOf('·') >= 0) {
    const byDot = value.split('·').map((x) => x.trim()).filter(Boolean);
    if (byDot.length === n) {
      return byDot.map((x) => x.replace(/\s*\((?:[A-Z]{2,4}\d{2,3}[A-Z-]*)\)\s*$/, '').trim());
    }
  }
  let parts = splitTop(value);
  if (parts.length !== n) return null;

  // A trailing parenthetical may hold the metric equivalents for every model:
  // '84" (1676 / 1829 / 1981 / 2134 mm)' -> one bracket per model.
  const last = parts[n - 1];
  const pm = last.match(/^(.+?)\s*\((.+)\)\s*$/);
  if (pm) {
    const inner = splitTop(pm[2]);
    if (inner.length === 1 && /[– - ]/.test(pm[2])) {
      // '(1829 – 2286 mm)' is the span across all models - not the last one's figure
      parts[n - 1] = pm[1].trim();
    } else if (inner.length === n) {
      const innerUnit = (inner[n - 1].match(/[\d.,]+\s*(.+)$/) || [])[1] || '';
      parts = parts.map((p, i) => {
        const head = i === n - 1 ? pm[1].trim() : p;
        const tail = i === n - 1 ? inner[i] : (isBareNumber(inner[i]) ? inner[i] + ' ' + innerUnit : inner[i]);
        return head + ' (' + tail.trim() + ')';
      });
    }
  }

  // '535 / 601 / 651 / 699 kg (…)' - carry the unit back onto the bare numbers.
  const unit = unitOf(parts[n - 1]);
  if (unit) {
    parts = parts.map((p, i) => (i < n - 1 && isBareNumber(p) ? p + ' ' + unit : p));
  }

  // '34 (DRM60)' - the model code is already the column heading.
  parts = parts.map((p) => p.replace(/\s*\((?:[A-Z]{2,4}\d{2,3}[A-Z-]*)\)\s*$/, '').trim());
  return parts;
}

export function buildVirnigFamily(p) {
  if (!p || p.brand !== 'Virnig' || !p.specs) return null;

  const modelsRow = p.specs.find((s) => /^models?$/i.test(s[0]));
  const codes = modelsRow ? splitTop(modelsRow[1]) : splitTop(p.model || '');
  if (codes.length < 2) return null;
  const n = codes.length;

  const shared = [];
  const perModel = {};
  codes.forEach((c) => { perModel[c] = []; });

  p.specs.forEach((row) => {
    const [label, value] = row;
    if (/^models?$/i.test(label)) return;
    // A slash in the LABEL means the cell holds two different measurements,
    // not two models - leave it shared.
    if (label.indexOf(' / ') >= 0 && value.indexOf('·') < 0) { shared.push(row); return; }
    const parts = distribute(value, n, codes);
    if (!parts) { shared.push(row); return; }
    codes.forEach((c, i) => perModel[c].push([label, parts[i]]));
  });

  // A model that gained nothing of its own isn't a real variation axis.
  if (!codes.some((c) => perModel[c].length > 0)) return null;

  const cutWidth = (code) => {
    const row = perModel[code].find((r) => /^cut width$/i.test(r[0]));
    return row ? row[1].replace(/\s*\(.*\)$/, '') : '';
  };

  return {
    slug: p.slug,
    isVirnigFamily: true,
    attribute: { key: 'model', name: 'Model', taxonomy: 'pa_model' },
    variations: codes.map((code) => ({
      code: code,
      term: code.toLowerCase(),
      label: code,
      sublabel: cutWidth(code),
      name: p.name + ' ' + code,
      specs: perModel[code].concat(shared)
    }))
  };
}

export function virnigVariation(family, term) {
  if (!family) return null;
  return family.variations.find((v) => v.term === String(term || '').toLowerCase()) || family.variations[0];
}

export default { buildVirnigFamily, virnigVariation };
