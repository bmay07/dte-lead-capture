// Shared SEO head-tag helper for the prototype.
//
// This site will move to WordPress, where Yoast owns title/description/canonical/OG
// mechanics per-page through its own editor fields. This module is NOT a permanent
// SEO system — it exists only so every page in this prototype has a real, working
// example of the fields Yoast will need, in one place, instead of hand-writing
// <meta> tags per file. When the WP build lands, this whole file (and every
// applySEO() call site) gets deleted; the CMS takes over.
//
// DOMAIN is a placeholder — confirm the final production domain before go-live.
export const DOMAIN = 'https://www.dte-equipment.com.au';

function upsertMeta(attr, key, content) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attr, key); document.head.appendChild(tag); }
  tag.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) { tag = document.createElement('link'); tag.setAttribute('rel', rel); document.head.appendChild(tag); }
  tag.setAttribute('href', href);
}

/**
 * Applies the fields a WordPress/Yoast build would generate per page.
 * @param {Object} meta
 * @param {string} meta.title - full <title> text, e.g. "Reach Mowers | DTE Equipment"
 * @param {string} meta.description - meta description, ~155 chars
 * @param {string} meta.path - page path from the site root, e.g. "products.html?category=reach-mowers", used to build the canonical URL
 * @param {string} [meta.image] - absolute OG image URL; falls back to a site default
 * @param {string} [meta.type] - og:type, default "website" ("article" for News/Article pages)
 * @param {string} [meta.lang] - html lang attribute, default "en-AU"
 */
export function applySEO(meta) {
  if (!meta) return;
  const title = meta.title || 'DTE Equipment';
  const description = meta.description || '';
  const canonical = DOMAIN + '/' + (meta.path || '');
  const image = meta.image || (DOMAIN + '/uploads/Orchard Image - The Best.jpg');
  const type = meta.type || 'website';

  document.title = title;
  document.documentElement.setAttribute('lang', meta.lang || 'en-AU');
  upsertMeta('name', 'description', description);
  upsertLink('canonical', canonical);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:url', canonical);
  upsertMeta('property', 'og:image', image);
  upsertMeta('property', 'og:type', type);
  upsertMeta('property', 'og:site_name', 'DTE Equipment');
  upsertMeta('name', 'twitter:card', 'summary_large_image');
}

export default { DOMAIN, applySEO };
