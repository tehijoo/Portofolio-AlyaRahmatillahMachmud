/**
 * Tehijoo Studio — credit badge untuk React / Next.js (App Router & Pages Router).
 * Tanpa dependensi. Salin file ini ke folder components/ project Anda.
 *
 * Contoh:
 *   import TehijooCredit from '@/components/TehijooCredit';
 *   <TehijooCredit from="Hidayah TV" />                 // teks, tema terang
 *   <TehijooCredit variant="pill" theme="dark" />
 *   <TehijooCredit variant="stack" theme="auto" label="Dikembangkan oleh" />
 *
 * Props:
 *   variant : 'text' | 'pill' | 'stack' | 'mini'   (default 'text')
 *   theme   : 'light' | 'dark' | 'auto'            (default 'light')
 *   label   : string                               (default 'Developed by')
 *   from    : nama website klien, dikirim ke pesan WhatsApp (mis. 'Hidayah TV')
 *   href    : string                               (opsional; default halaman kontak Tehijoo Studio)
 *   accent  : warna CSS untuk nama "Tehijoo Studio", mis. 'var(--color-primary)' atau '#FFFFFF'.
 *             Ikon daun tetap hijau Tehijoo; teks pengantar mengikuti warna footer.
 */

// Halaman perantara: sekarang meneruskan ke WhatsApp Tehijoo Studio,
// nanti ke website usaha (cukup diubah di go/index.html repo portofolio).
const DEFAULT_HREF = 'https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/go/';
const NAME = 'Tehijoo Studio';

const DARK =
  '--tj-label:#B8C4BC;--tj-name:#FFFFFF;--tj-name-text:#A7D9AE;--tj-bg:#16241B;' +
  '--tj-border:#2E4235;--tj-tile:#2B6A44;--tj-kicker:#A3ADA6;--tj-ring:#8BCB93;';

const CSS = `
.tjc{display:inline-block;vertical-align:middle;
  --tj-label:#4B5563;--tj-name:#1F5135;--tj-name-text:#1F5135;--tj-bg:#FFFFFF;
  --tj-border:#DCE5D8;--tj-tile:#1F5135;--tj-leaf:#8BCB93;--tj-kicker:#5B6B60;--tj-ring:#1F5135;
  --tj-font:ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}
.tjc[data-theme="dark"]{${DARK}}
@media (prefers-color-scheme:dark){.tjc[data-theme="auto"]{${DARK}}}
.tjc .tjc-tile{fill:var(--tj-tile)}.tjc .tjc-leaf{fill:var(--tj-leaf)}
.tjc .tjc-stem{fill:none;stroke:var(--tj-leaf)}.tjc .tjc-vein{fill:none;stroke:var(--tj-tile)}
.tjc a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}
.tjc a:focus-visible{outline:2px solid var(--tj-ring);outline-offset:3px}
.tjc .tjc-mark{display:block;flex:none}
.tjc .tjc-name{font-weight:700;color:var(--tj-name)}
.tjc .tjc-text{display:inline-flex;align-items:center;gap:.4em;font:inherit;color:inherit;border-radius:4px}
.tjc .tjc-text .tjc-mark{width:1.15em;height:1.15em}
.tjc .tjc-text .tjc-name{color:var(--tj-name-text)}
.tjc .tjc-text:hover .tjc-name{text-decoration:underline;text-underline-offset:3px}
.tjc .tjc-pill{display:inline-flex;align-items:center;gap:8px;padding:5px 15px 5px 5px;border-radius:999px;
  background:var(--tj-bg);border:1px solid var(--tj-border);font:500 13px/1.2 var(--tj-font);color:var(--tj-label);
  transition:border-color .2s ease,transform .2s ease}
.tjc .tjc-pill:hover{border-color:var(--tj-ring);transform:translateY(-1px)}
.tjc .tjc-stack{display:inline-flex;align-items:center;gap:10px;padding:8px 18px 8px 8px;border-radius:14px;
  background:var(--tj-bg);border:1px solid var(--tj-border);font-family:var(--tj-font);text-align:left;
  transition:border-color .2s ease,transform .2s ease}
.tjc .tjc-stack:hover{border-color:var(--tj-ring);transform:translateY(-1px)}
.tjc .tjc-txt{display:flex;flex-direction:column;gap:3px}
.tjc .tjc-kicker{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;line-height:1.1;color:var(--tj-kicker)}
.tjc .tjc-stack .tjc-name{font-size:16px;font-weight:800;letter-spacing:-.01em;line-height:1.1}
.tjc .tjc-mini{display:inline-flex;align-items:center;padding:3px;border-radius:999px;background:var(--tj-bg);
  border:1px solid var(--tj-border);font:700 13px/1 var(--tj-font);color:var(--tj-name);transition:border-color .25s ease}
.tjc .tjc-reveal{max-width:0;opacity:0;overflow:hidden;white-space:nowrap;
  transition:max-width .3s ease,opacity .2s ease,padding .3s ease}
.tjc .tjc-mini:hover,.tjc .tjc-mini:focus-visible{border-color:var(--tj-ring)}
.tjc .tjc-mini:hover .tjc-reveal,.tjc .tjc-mini:focus-visible .tjc-reveal{max-width:12em;opacity:1;padding:0 11px 0 8px}
@media (prefers-reduced-motion:reduce){.tjc .tjc-pill,.tjc .tjc-stack,.tjc .tjc-mini,.tjc .tjc-reveal{transition:none}
  .tjc .tjc-pill:hover,.tjc .tjc-stack:hover{transform:none}}
`;

function Mark({ size, round = false, stem = false }) {
  const vw = size <= 20 ? 8 : size <= 28 ? 7 : 6;
  return (
    <svg className="tjc-mark" width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <rect className="tjc-tile" width="100" height="100" rx={round ? 50 : 26} />
      {stem && <path className="tjc-stem" d="M22 78L31 69" strokeWidth="6" strokeLinecap="round" />}
      <path
        className="tjc-leaf"
        d={round ? 'M30 70C30 44 46 30 72 28 70 54 56 70 30 70Z' : 'M28 72C28 42 46 26 76 24 74 54 58 72 28 72Z'}
      />
      <path
        className="tjc-vein"
        d={round ? 'M38 62L60 40' : 'M37 63L62 38'}
        strokeWidth={vw}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function TehijooCredit({
  variant = 'text',
  theme = 'light',
  label = 'Developed by',
  href,
  from,
  accent,
  className = '',
}) {
  const target = href || (from ? `${DEFAULT_HREF}?from=${encodeURIComponent(from)}` : DEFAULT_HREF);
  const link = { href: target, target: '_blank', rel: 'noopener', title: 'Hubungi Tehijoo Studio' };
  let content;

  if (variant === 'pill') {
    content = (
      <a className="tjc-pill" {...link}>
        <Mark size={24} round />
        <span>{label}</span>{' '}
        <span className="tjc-name">{NAME}</span>
      </a>
    );
  } else if (variant === 'stack') {
    content = (
      <a className="tjc-stack" {...link}>
        <Mark size={36} stem />
        <span className="tjc-txt">
          <span className="tjc-kicker">{label}</span>{' '}
          <span className="tjc-name">{NAME}</span>
        </span>
      </a>
    );
  } else if (variant === 'mini') {
    content = (
      <a className="tjc-mini" {...link} aria-label={`${label} ${NAME}`} title={`${label} ${NAME}`}>
        <Mark size={28} round />
        <span className="tjc-reveal" aria-hidden="true">{NAME}</span>
      </a>
    );
  } else {
    content = (
      <a className="tjc-text" {...link}>
        <span>{label}</span>{' '}
        <Mark size={18} />{' '}
        <span className="tjc-name">{NAME}</span>
      </a>
    );
  }

  return (
    <span
      className={`tjc ${className}`.trim()}
      data-theme={theme}
      style={accent ? { '--tj-name': accent, '--tj-name-text': accent, '--tj-ring': accent } : undefined}
    >
      <style>{CSS}</style>
      {content}
    </span>
  );
}
