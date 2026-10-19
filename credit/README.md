# Tehijoo Credit Kit

Elemen **"Developed by Tehijoo Studio"** untuk dipasang di footer project klien, plus file logo.

## Isi paket

| File | Untuk apa |
|---|---|
| `tehijoo-credit.js` | Elemen kredit siap pakai (`<tehijoo-credit>`). Untuk HTML biasa, Laravel Blade, Google Apps Script, Blogger, WordPress. |
| `react/TehijooCredit.jsx` | Versi komponen React untuk project Next.js / React. |
| `index.html` | Halaman kit: pratinjau semua gaya + kode yang tinggal disalin. Online di https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/credit/ |
| `logo/` | Ikon Tehijoo (SVG & PNG): versi warna, bulat, satu warna gelap/putih, favicon. |

## Empat gaya

| `variant` | Tampilan | Cocok untuk |
|---|---|---|
| `text` (default) | Developed by [ikon] **Tehijoo Studio** | Baris footer biasa, paling halus |
| `pill` | Lencana bulat panjang dengan ikon | Landing page, website perusahaan |
| `stack` | Lencana dua baris "DEVELOPED BY / Tehijoo Studio" | Footer rata tengah, halaman Tentang |
| `mini` | Ikon saja, melebar saat di-hover | Aplikasi/dashboard yang sempit |

Atribut lain:

- `theme="light" | "dark" | "auto"` — `auto` mengikuti mode gelap perangkat pengunjung.
- `label="Dikembangkan oleh"` — ganti teks pengantar (default `Developed by`).
- `from="Nama Klien"` — nama website klien yang ikut tertulis di pesan WhatsApp (web component otomatis memakai nama domain kalau dikosongkan).
- `href="..."` — ganti tujuan tautan (default ke halaman kontak `/go/`).

---

## Langkah 1 — Taruh skrip sekali di GitHub Pages (disarankan)

Simpan `tehijoo-credit.js` di repo portofolio Anda supaya semua project memakai satu file yang sama:

1. Di repo `Portofolio-AlyaRahmatillahMachmud`, buat folder `credit/`.
2. Masukkan `tehijoo-credit.js` ke folder itu, lalu commit & push.
3. File akan bisa diakses di:
   `https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/credit/tehijoo-credit.js`

## Ke mana kredit diarahkan

Semua kredit membuka `https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/go/`, halaman perantara yang **sekarang meneruskan ke WhatsApp Tehijoo Studio** dengan pesan pembuka berisi nama website asal pengunjung.

Kalau nanti website usaha sudah jadi, buka `go/index.html` di repo portofolio dan isi baris `var WEBSITE = '';` dengan alamatnya. Semua website klien langsung ikut mengarah ke sana tanpa perlu diedit satu per satu.

> Kalau website klien punya kebijakan keamanan ketat (CSP) yang melarang skrip dari luar, salin saja `tehijoo-credit.js` ke dalam project itu dan panggil dari path lokalnya.

## Langkah 2 — Pasang di project

### HTML biasa / Laravel Blade / Blogger / WordPress

```html
<footer class="site-footer">
  <span>© 2026 Nama Klien. All Rights Reserved.</span>

  <tehijoo-credit variant="text" theme="light">
    <!-- cadangan: tetap tampil sebagai tautan biasa kalau skrip gagal dimuat -->
    <a href="https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/go/">Developed by Tehijoo Studio</a>
  </tehijoo-credit>
</footer>

<script src="https://tehijoo.github.io/Portofolio-AlyaRahmatillahMachmud/credit/tehijoo-credit.js" defer></script>
```

Untuk Laravel, taruh blok di atas di partial footer (misalnya `resources/views/partials/footer.blade.php`).

### Google Apps Script (HtmlService)

Sama seperti HTML biasa — tempel tag `<script src=...>` dan elemen `<tehijoo-credit>` di `Index.html`. Tautan otomatis terbuka di tab baru, jadi aman di dalam iframe GAS.

### Next.js / React

1. Salin `react/TehijooCredit.jsx` ke `components/TehijooCredit.jsx`.
2. Pakai di komponen footer:

```jsx
import TehijooCredit from '@/components/TehijooCredit';

export default function Footer() {
  return (
    <footer className="flex justify-between items-center py-6">
      <span>© 2026 Hidayah Canopy. All Rights Reserved.</span>
      <TehijooCredit variant="text" theme="light" from="Hidayah Canopy" />
    </footer>
  );
}
```

Proyek TypeScript: ganti nama file menjadi `TehijooCredit.tsx` (kodenya tetap jalan; tambahkan tipe props bila perlu).

---

## Logo

| File | Pakai untuk |
|---|---|
| `tehijoo-mark.svg` | Ikon utama (kotak membulat) — avatar, kop surat, invoice |
| `tehijoo-mark-round.svg` | Ikon bulat — foto profil Instagram/LinkedIn/WhatsApp |
| `tehijoo-mark-mono-dark.svg` / `-mono-white.svg` | Satu warna, untuk stempel, latar foto, atau cetak hitam-putih |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` | Favicon website Anda sendiri |
| `tehijoo-mark-512.png` | Versi PNG ikon utama |

Logo lengkap dengan tulisan "tehijoo STUDIO" bisa diunduh sebagai PNG/PDF dari kanvas desain (papan *01 · Tehijoo Studio*).

Favicon untuk portofolio Anda:

```html
<link rel="icon" href="logo/favicon.svg" type="image/svg+xml">
<link rel="icon" href="logo/favicon-32.png" sizes="32x32">
<link rel="apple-touch-icon" href="logo/apple-touch-icon.png">
```

## Etika pemasangan

- Baris copyright tetap atas nama klien (`© 2026 Nama Klien`). Kredit Anda ditaruh di sebelahnya.
- Minta izin klien dulu, idealnya cantumkan di kesepakatan kerja.
- Untuk aplikasi internal perusahaan (misalnya sistem internal bank atau kantor), biasanya tautan keluar tidak diizinkan — tanyakan dulu, atau lewati kredit untuk project tersebut.

## Warna brand

| Nama | Hex |
|---|---|
| Matcha | `#1F5135` |
| Daun Teh | `#8BCB93` |
| Seduhan | `#E9F2E4` |
| Arang | `#16241B` |
