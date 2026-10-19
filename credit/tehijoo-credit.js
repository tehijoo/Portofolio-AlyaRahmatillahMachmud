/*!
 * Tehijoo Studio — credit badge v1.0.0
 *
 * Pemakaian (cukup sekali per halaman):
 *   <script src="https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/credit/tehijoo-credit.js" defer></script>
 *
 * Lalu taruh elemen di footer:
 *   <tehijoo-credit variant="text" theme="light"></tehijoo-credit>
 *
 * Atribut:
 *   variant : text | pill | stack | mini         (default: text)
 *   theme   : light | dark | auto                (default: light; auto = ikut mode gelap perangkat)
 *   label   : teks pengantar                     (default: "Developed by")
 *   href    : tujuan tautan                      (default: portofolio Tehijoo Studio)
 */
(function () {
  'use strict';
  if (typeof window === 'undefined' || !window.customElements || window.customElements.get('tehijoo-credit')) return;

  var DEFAULT_HREF = 'https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/';
  var NAME = 'Tehijoo Studio';
  var VARIANTS = ['text', 'pill', 'stack', 'mini'];

  var DARK_VARS =
    '--tj-label:#B8C4BC;--tj-name:#FFFFFF;--tj-name-text:#A7D9AE;--tj-bg:#16241B;' +
    '--tj-border:#2E4235;--tj-tile:#2B6A44;--tj-kicker:#A3ADA6;--tj-ring:#8BCB93;';

  var CSS =
    ':host{display:inline-block;vertical-align:middle;' +
      '--tj-label:#4B5563;--tj-name:#1F5135;--tj-name-text:#1F5135;--tj-bg:#FFFFFF;' +
      '--tj-border:#DCE5D8;--tj-tile:#1F5135;--tj-leaf:#8BCB93;--tj-kicker:#5B6B60;--tj-ring:#1F5135;' +
      '--tj-font:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}' +
    ':host([hidden]){display:none}' +
    ':host([theme="dark"]){' + DARK_VARS + '}' +
    '@media (prefers-color-scheme:dark){:host([theme="auto"]){' + DARK_VARS + '}}' +
    '.tile{fill:var(--tj-tile)}.leaf{fill:var(--tj-leaf)}.stem{fill:none;stroke:var(--tj-leaf)}.vein{fill:none;stroke:var(--tj-tile)}' +
    'a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}' +
    'a:focus-visible{outline:2px solid var(--tj-ring);outline-offset:3px}' +
    '.mark{display:block;flex:none}' +
    '.name{font-weight:700;color:var(--tj-name)}' +
    /* text */
    '.text{display:inline-flex;align-items:center;gap:.4em;font:inherit;color:inherit;border-radius:4px}' +
    '.text .mark{width:1.15em;height:1.15em}' +
    '.text .name{color:var(--tj-name-text)}' +
    '.text:hover .name{text-decoration:underline;text-underline-offset:3px}' +
    /* pill */
    '.pill{display:inline-flex;align-items:center;gap:8px;padding:5px 15px 5px 5px;border-radius:999px;' +
      'background:var(--tj-bg);border:1px solid var(--tj-border);font:500 13px/1.2 var(--tj-font);color:var(--tj-label);' +
      'transition:border-color .2s ease,transform .2s ease}' +
    '.pill:hover{border-color:var(--tj-ring);transform:translateY(-1px)}' +
    /* stack */
    '.stack{display:inline-flex;align-items:center;gap:10px;padding:8px 18px 8px 8px;border-radius:14px;' +
      'background:var(--tj-bg);border:1px solid var(--tj-border);font-family:var(--tj-font);text-align:left;' +
      'transition:border-color .2s ease,transform .2s ease}' +
    '.stack:hover{border-color:var(--tj-ring);transform:translateY(-1px)}' +
    '.stack .txt{display:flex;flex-direction:column;gap:3px}' +
    '.stack .kicker{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1.1;color:var(--tj-kicker)}' +
    '.stack .name{font-size:16px;font-weight:800;letter-spacing:-.01em;line-height:1.1}' +
    /* mini */
    '.mini{display:inline-flex;align-items:center;padding:3px;border-radius:999px;background:var(--tj-bg);' +
      'border:1px solid var(--tj-border);font:700 13px/1 var(--tj-font);color:var(--tj-name);transition:border-color .25s ease}' +
    '.mini .reveal{max-width:0;opacity:0;overflow:hidden;white-space:nowrap;' +
      'transition:max-width .3s ease,opacity .2s ease,padding .3s ease}' +
    '.mini:hover,.mini:focus-visible{border-color:var(--tj-ring)}' +
    '.mini:hover .reveal,.mini:focus-visible .reveal{max-width:12em;opacity:1;padding:0 11px 0 8px}' +
    '@media (prefers-reduced-motion:reduce){.pill,.stack,.mini,.mini .reveal{transition:none}.pill:hover,.stack:hover{transform:none}}';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function safeHref(h) {
    if (!h || /^\s*(javascript|data|vbscript):/i.test(h)) return DEFAULT_HREF;
    return h;
  }

  // round = ikon bulat (pil & mini); stem = tangkai daun (ukuran besar)
  function mark(size, round, stem) {
    var rx = round ? 50 : 26;
    var leaf = round ? 'M30 70C30 44 46 30 72 28 70 54 56 70 30 70Z' : 'M28 72C28 42 46 26 76 24 74 54 58 72 28 72Z';
    var vein = round ? 'M38 62L60 40' : 'M37 63L62 38';
    var vw = size <= 20 ? 8 : size <= 28 ? 7 : 6;
    return '<svg class="mark" width="' + size + '" height="' + size + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
      '<rect class="tile" width="100" height="100" rx="' + rx + '"></rect>' +
      (stem ? '<path class="stem" d="M22 78L31 69" stroke-width="6" stroke-linecap="round"></path>' : '') +
      '<path class="leaf" d="' + leaf + '"></path>' +
      '<path class="vein" d="' + vein + '" stroke-width="' + vw + '" stroke-linecap="round"></path>' +
      '</svg>';
  }

  class TehijooCredit extends HTMLElement {
    static get observedAttributes() { return ['variant', 'theme', 'label', 'href']; }

    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
      this._render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    _render() {
      var v = this.getAttribute('variant');
      if (VARIANTS.indexOf(v) === -1) v = 'text';
      var rawLabel = this.getAttribute('label') || 'Developed by';
      var label = esc(rawLabel);
      var href = esc(safeHref(this.getAttribute('href')));
      var open = '<a class="' + v + '" href="' + href + '" target="_blank" rel="noopener"';
      var html;

      if (v === 'pill') {
        html = open + '>' + mark(24, true, false) +
          '<span class="label">' + label + '</span> <span class="name">' + NAME + '</span></a>';
      } else if (v === 'stack') {
        html = open + '>' + mark(36, false, true) +
          '<span class="txt"><span class="kicker">' + label + '</span> <span class="name">' + NAME + '</span></span></a>';
      } else if (v === 'mini') {
        html = open + ' aria-label="' + esc(rawLabel + ' ' + NAME) + '" title="' + esc(rawLabel + ' ' + NAME) + '">' +
          mark(28, true, false) + '<span class="reveal" aria-hidden="true">' + NAME + '</span></a>';
      } else {
        html = open + '><span class="label">' + label + '</span> ' + mark(18, false, false) +
          ' <span class="name">' + NAME + '</span></a>';
      }

      this.shadowRoot.innerHTML = '<style>' + CSS + '</style>' + html;
    }
  }

  window.customElements.define('tehijoo-credit', TehijooCredit);
})();
