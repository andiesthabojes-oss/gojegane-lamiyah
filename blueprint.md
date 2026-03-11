# Blueprint Markdown — **Gojegane Lamiyah**

## Ringkasan

Dokumen ini adalah blueprint implementasi UI untuk aplikasi **Gojegane Lamiyah** dengan pendekatan:

* **HTML structure**
* **CSS custom theme**
* **Next.js + Tailwind CSS**
* **fitur upload/tampil logo**
* **panduan deploy**

Tema visual mengikuti referensi logo: **hangat, santai, guyub, kekeluargaan**, dengan dominasi warna emas, cokelat, krem, dan hijau daun.

---

# 1. Identitas Visual

## Nama aplikasi

**Gojegane Lamiyah**

## Tagline

**Menang Kalah Ora Plenting, Seng Plenting Podo Cekakan.**

## Nuansa visual

* hangat
* santai
* ramah untuk keluarga
* guyub
* playful tapi tetap rapi
* cocok untuk acara keluarga lintas umur

---

# 2. Stack yang Dipakai

## Frontend

* **Next.js (App Router)**
* **Tailwind CSS**
* **CSS variables** untuk token tema

## Deployment

* **Vercel** untuk opsi paling cepat
* alternatif: **Netlify**

---

# 3. Struktur Folder yang Disarankan

```text
gojegane-lamiyah/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── mlebu-kamar/
│   │   └── page.tsx
│   ├── lobby/
│   │   └── page.tsx
│   ├── host/
│   │   └── page.tsx
│   ├── pemain/
│   │   └── page.tsx
│   └── hasil/
│       └── page.tsx
├── components/
│   ├── BrandLogo.tsx
│   ├── BrandHeader.tsx
│   ├── TeamCard.tsx
│   ├── QuestionStage.tsx
│   ├── ScoreBoard.tsx
│   ├── HostQuestionForm.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Panel.tsx
├── public/
│   └── assets/
│       └── logo-gojegane-lamiyah.png
├── lib/
│   └── theme.ts
├── package.json
├── tailwind.config.ts
├── postcss.config.js
└── tsconfig.json
```

---

# 4. Design Tokens

## Warna tema

```css
:root {
  --bg-main: #f7ead9;
  --bg-soft: #fff6ea;
  --panel: #fffaf3;
  --panel-strong: #f2dfc2;

  --brown-dark: #4b2e1f;
  --brown-medium: #7a4b2a;
  --brown-soft: #a26a3d;

  --gold-main: #e6b325;
  --gold-soft: #f4cf62;
  --gold-deep: #c99314;

  --cream: #fff0d8;
  --leaf: #5f8f3a;
  --leaf-soft: #87b05a;

  --text-main: #3d2618;
  --text-soft: #6b4b34;
  --text-on-dark: #fff8ef;

  --danger: #b94a3a;
  --success: #4e8b45;
}
```

## Font

```css
:root {
  --font-display: "Baloo 2", "Fredoka", cursive;
  --font-body: "Nunito", "Poppins", sans-serif;
}
```

---

# 5. Global CSS untuk Next.js

File: `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --bg-main: #f7ead9;
  --bg-soft: #fff6ea;
  --panel: #fffaf3;
  --panel-strong: #f2dfc2;
  --brown-dark: #4b2e1f;
  --brown-medium: #7a4b2a;
  --brown-soft: #a26a3d;
  --gold-main: #e6b325;
  --gold-soft: #f4cf62;
  --gold-deep: #c99314;
  --cream: #fff0d8;
  --leaf: #5f8f3a;
  --leaf-soft: #87b05a;
  --text-main: #3d2618;
  --text-soft: #6b4b34;
  --text-on-dark: #fff8ef;
  --danger: #b94a3a;
  --success: #4e8b45;
}

html, body {
  padding: 0;
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-main);
  background:
    radial-gradient(circle at top, rgba(244, 207, 98, 0.25), transparent 30%),
    linear-gradient(180deg, var(--bg-soft) 0%, var(--bg-main) 100%);
}

* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

.brand-display {
  font-family: var(--font-display);
}

.panel-theme {
  background: linear-gradient(180deg, var(--panel) 0%, #fff6ea 100%);
  border: 2px solid rgba(122, 75, 42, 0.12);
  box-shadow: 0 12px 32px rgba(75, 46, 31, 0.12);
}

.btn-gold {
  background: linear-gradient(180deg, var(--gold-soft), var(--gold-main));
  color: var(--brown-dark);
  box-shadow: 0 10px 24px rgba(201, 147, 20, 0.24);
}

.btn-leaf {
  background: linear-gradient(180deg, var(--leaf-soft), var(--leaf));
  color: var(--text-on-dark);
  box-shadow: 0 10px 24px rgba(95, 143, 58, 0.22);
}
```

---

# 6. Tailwind Config

File: `tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f7ead9",
          soft: "#fff6ea",
          panel: "#fffaf3",
          brownDark: "#4b2e1f",
          brownMedium: "#7a4b2a",
          gold: "#e6b325",
          goldSoft: "#f4cf62",
          leaf: "#5f8f3a",
          leafSoft: "#87b05a",
          cream: "#fff0d8",
        },
      },
      borderRadius: {
        brand: "28px",
      },
      fontFamily: {
        display: ["Baloo 2", "cursive"],
        body: ["Nunito", "sans-serif"],
      },
      boxShadow: {
        brand: "0 12px 32px rgba(75,46,31,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
```

---

# 7. Blueprint HTML Struktur Landing

```html
<section class="landing">
  <div class="landing-card panel-theme">
    <div class="logo-wrapper">
      <img src="/assets/logo-gojegane-lamiyah.png" alt="Logo Gojegane Lamiyah" class="logo-image" />
    </div>

    <h1 class="brand-title">Gojegane Lamiyah</h1>
    <p class="brand-tagline">Menang Kalah Ora Plenting, Seng Plenting Podo Cekakan.</p>

    <div class="landing-actions">
      <button class="btn-primary">Mlebu Kamar</button>
    </div>
  </div>
</section>
```

---

# 8. Blueprint CSS Landing Manual

```css
.landing {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 24px;
}

.landing-card {
  max-width: 760px;
  width: 100%;
  padding: 40px 28px;
  border-radius: 32px;
  text-align: center;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo-image {
  width: min(420px, 82vw);
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 12px 24px rgba(75, 46, 31, 0.2));
}

.brand-title {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: var(--gold-main);
  text-shadow: 0 2px 0 var(--brown-dark), 0 8px 18px rgba(75,46,31,.16);
  margin: 0;
}

.brand-tagline {
  color: var(--text-soft);
  font-weight: 800;
  margin-top: 12px;
  margin-bottom: 24px;
}

.btn-primary {
  border: none;
  border-radius: 999px;
  padding: 14px 26px;
  font-weight: 800;
  font-size: 1rem;
  cursor: pointer;
  background: linear-gradient(180deg, var(--gold-soft), var(--gold-main));
  color: var(--brown-dark);
}
```

---

# 9. Komponen Next.js untuk Logo

File: `components/BrandLogo.tsx`

```tsx
import Image from "next/image";

type BrandLogoProps = {
  src?: string;
  alt?: string;
  size?: "large" | "small";
};

export default function BrandLogo({
  src = "/assets/logo-gojegane-lamiyah.png",
  alt = "Logo Gojegane Lamiyah",
  size = "large",
}: BrandLogoProps) {
  const width = size === "large" ? 420 : 120;

  return (
    <div className="flex justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={width}
        className={size === "large" ? "h-auto w-[min(420px,82vw)] object-contain drop-shadow-xl" : "h-auto w-[120px] object-contain"}
        priority
      />
    </div>
  );
}
```

---

# 10. Komponen Header Brand

File: `components/BrandHeader.tsx`

```tsx
import BrandLogo from "./BrandLogo";

type BrandHeaderProps = {
  showTagline?: boolean;
};

export default function BrandHeader({ showTagline = true }: BrandHeaderProps) {
  return (
    <div className="text-center">
      <BrandLogo size="large" />
      <h1 className="brand-display mt-4 text-4xl font-extrabold text-brand-gold md:text-6xl">
        Gojegane Lamiyah
      </h1>
      {showTagline && (
        <p className="mx-auto mt-3 max-w-2xl text-sm font-extrabold text-brand-brownMedium md:text-base">
          Menang Kalah Ora Plenting, Seng Plenting Podo Cekakan.
        </p>
      )}
    </div>
  );
}
```

---

# 11. Landing Page Next.js + Tailwind

File: `app/page.tsx`

```tsx
import BrandHeader from "@/components/BrandHeader";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-4xl place-items-center">
        <div className="panel-theme w-full rounded-[32px] px-6 py-10 text-center md:px-10 md:py-14">
          <BrandHeader showTagline />

          <p className="mx-auto mt-5 max-w-2xl text-base font-bold text-brand-brownMedium md:text-lg">
            Dolanan kulawarga sing rame, santai, lan gawe kabeh podo guyub.
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              href="/mlebu-kamar"
              className="btn-gold rounded-full px-7 py-4 text-base font-extrabold transition hover:-translate-y-0.5"
            >
              Mlebu Kamar
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# 12. Halaman Mlebu Kamar

File: `app/mlebu-kamar/page.tsx`

```tsx
export default function MlebuKamarPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8">
      <section className="mx-auto max-w-2xl">
        <div className="panel-theme rounded-[28px] p-6 md:p-8">
          <h1 className="brand-display text-3xl font-extrabold text-brand-brownDark">
            Mlebu Kamar
          </h1>
          <p className="mt-2 text-sm font-bold text-brand-brownMedium">
            Isi jenengmu lan milih regu kanggo gabung dolanan.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-2 block font-extrabold text-brand-brownMedium">Jenengmu</label>
              <input className="w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3 outline-none" placeholder="Tulisen jenengmu" />
            </div>

            <div>
              <label className="mb-2 block font-extrabold text-brand-brownMedium">Milih Regu</label>
              <select className="w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3 outline-none">
                <option>Bolone Mbah Ngarmi</option>
                <option>Bolone Mbah Lasmi</option>
                <option>Bolone Mbah Ahmad Dahlan</option>
                <option>Bolone Mbah Iskak</option>
              </select>
            </div>

            <button className="btn-gold w-full rounded-full px-6 py-3 font-extrabold">
              Mlebu Saiki
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
```

---

# 13. Halaman Host

File: `app/host/page.tsx`

```tsx
export default function HostPage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-8">
      <section className="mx-auto max-w-7xl space-y-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-wide text-brand-brownMedium">
              Wektune Gojegan!
            </p>
            <h1 className="brand-display text-3xl font-extrabold text-brand-brownDark md:text-5xl">
              Otak Atik Gathuk
            </h1>
          </div>

          <div className="btn-leaf rounded-full px-5 py-3 text-sm font-extrabold md:text-base">
            Sisa Wektu: 24 detik
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <div className="panel-theme rounded-[32px] p-6 md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-brand-brownMedium">
              Pitakon Aktif
            </p>
            <div className="mt-4 rounded-[28px] bg-white/70 p-6 text-center shadow-brand">
              <p className="brand-display text-3xl font-extrabold text-brand-brownDark md:text-4xl">
                Dikoleki pas perlu, nek ora perlu ngilang dewe.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="btn-gold rounded-full px-5 py-3 font-extrabold">Pilih Pitakon</button>
              <button className="rounded-full border-2 border-brand-brownMedium/15 bg-brand-cream px-5 py-3 font-extrabold text-brand-brownDark">Skip Pitakon</button>
              <button className="btn-leaf rounded-full px-5 py-3 font-extrabold">Bukak Jawaban</button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel-theme rounded-[28px] p-6">
              <h2 className="brand-display text-2xl font-extrabold text-brand-brownDark">Status Jawaban</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold text-brand-brownMedium">
                <li>Bolone Mbah Ngarmi — Wis ngirim</li>
                <li>Bolone Mbah Lasmi — Durung</li>
                <li>Bolone Mbah Ahmad Dahlan — Wis ngirim</li>
                <li>Bolone Mbah Iskak — Wis ngirim</li>
              </ul>
            </div>

            <div className="panel-theme rounded-[28px] p-6">
              <h2 className="brand-display text-2xl font-extrabold text-brand-brownDark">Papan Nilai</h2>
              <ul className="mt-4 space-y-3 text-sm font-bold text-brand-brownMedium">
                <li>1. Bolone Mbah Ahmad Dahlan — 90 poin</li>
                <li>2. Bolone Mbah Ngarmi — 85 poin</li>
                <li>3. Bolone Mbah Iskak — 82 poin</li>
                <li>4. Bolone Mbah Lasmi — 78 poin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

# 14. Halaman Host: Form Kirim Pertanyaan dan Jawaban

File: `components/HostQuestionForm.tsx`

```tsx
export default function HostQuestionForm() {
  return (
    <div className="panel-theme rounded-[28px] p-6">
      <h2 className="brand-display text-2xl font-extrabold text-brand-brownDark">
        Kirim Pitakon lan Jawaban
      </h2>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-extrabold text-brand-brownMedium">Kategori</label>
          <select className="w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3">
            <option>Barang Omah</option>
            <option>Panganan</option>
            <option>Kewan</option>
            <option>Kebiasaan</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-extrabold text-brand-brownMedium">Tingkat</label>
          <select className="w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3">
            <option>Gampang</option>
            <option>Sedheng</option>
            <option>Lucu Mumet</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-extrabold text-brand-brownMedium">Pitakon</label>
          <textarea className="min-h-[120px] w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3" placeholder="Tulis pitakon neng kene" />
        </div>

        <div className="md:col-span-2">
          <label className="mb-2 block font-extrabold text-brand-brownMedium">Jawaban Bener</label>
          <input className="w-full rounded-2xl border-2 border-brand-brownMedium/15 bg-white px-4 py-3" placeholder="Tulisen jawaban bener" />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        <button className="btn-gold rounded-full px-5 py-3 font-extrabold">Simpen Pitakon</button>
        <button className="btn-leaf rounded-full px-5 py-3 font-extrabold">Kirim Saiki</button>
        <button className="rounded-full border-2 border-brand-brownMedium/15 bg-brand-cream px-5 py-3 font-extrabold text-brand-brownDark">Resikna Form</button>
      </div>
    </div>
  );
}
```

---

# 15. Fitur Upload Logo

## Tujuan

Host/admin bisa mengganti logo aplikasi sesuai kebutuhan acara keluarga.

## Skenario

* jika logo tersedia → tampilkan file logo
* jika belum ada → tampilkan fallback teks

## Komponen Upload Logo

File: `components/LogoUploader.tsx`

```tsx
"use client";

import { ChangeEvent, useState } from "react";
import Image from "next/image";

export default function LogoUploader() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div className="panel-theme rounded-[28px] p-6">
      <h2 className="brand-display text-2xl font-extrabold text-brand-brownDark">
        Upload Logo
      </h2>
      <p className="mt-2 text-sm font-bold text-brand-brownMedium">
        Gunakake logo PNG transparan supaya luwih rapi.
      </p>

      <input type="file" accept="image/png,image/webp,image/jpeg" onChange={handleChange} className="mt-4 block w-full text-sm" />

      <div className="mt-6 flex justify-center rounded-[24px] border-2 border-dashed border-brand-brownMedium/20 bg-white/70 p-6">
        {preview ? (
          <Image src={preview} alt="Preview Logo" width={280} height={280} className="h-auto w-[220px] object-contain" unoptimized />
        ) : (
          <div className="rounded-full bg-gradient-to-b from-brand-goldSoft to-brand-gold px-6 py-4 font-display text-2xl font-extrabold text-brand-brownDark">
            Gojegane Lamiyah
          </div>
        )}
      </div>
    </div>
  );
}
```

---

# 16. Layout Utama Next.js

File: `app/layout.tsx`

```tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gojegane Lamiyah",
  description: "Dolanan kulawarga sing rame, santai, lan guyub.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
```

---

# 17. Langkah Instalasi Next.js + Tailwind

## Buat project

```bash
npx create-next-app@latest gojegane-lamiyah
```

## Masuk folder project

```bash
cd gojegane-lamiyah
```

## Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Jalankan lokal

```bash
npm run dev
```

---

# 18. Langkah Deploy ke Vercel

## Cara paling mudah

1. Push project ke GitHub
2. Buka Vercel
3. Klik **Add New Project**
4. Pilih repository `gojegane-lamiyah`
5. Klik **Deploy**

## Build settings default

Untuk Next.js, biasanya Vercel otomatis mendeteksi:

* framework: Next.js
* build command: `next build`
* output: default

## Setelah deploy

* Vercel akan memberi URL preview
* bisa ditambahkan custom domain jika perlu

---

# 19. Alternatif Deploy Manual

## Build production

```bash
npm run build
```

## Jalankan production lokal

```bash
npm run start
```

---

# 20. Checklist Implementasi

```md
- [ ] Buat project Next.js
- [ ] Pasang Tailwind CSS
- [ ] Tambahkan global theme di globals.css
- [ ] Simpan logo ke public/assets/
- [ ] Buat komponen BrandLogo
- [ ] Buat landing page
- [ ] Buat halaman Mlebu Kamar
- [ ] Buat halaman Host
- [ ] Buat form kirim pitakon lan jawaban
- [ ] Tambahkan fitur upload logo
- [ ] Uji tampilan mobile
- [ ] Deploy ke Vercel
```

---

# 21. Catatan UX

Agar tetap sesuai tema logo dan suasana keluarga:

* gunakan sudut membulat besar
* hindari tampilan terlalu formal
* tombol harus besar dan jelas
* teks penting dibuat tebal
* warna emas dan cokelat tetap dominan
* elemen hijau digunakan sebagai aksen segar
* beri ruang cukup antar elemen supaya terasa lega

---

# 22. Penutup

Blueprint ini bisa dipakai sebagai fondasi awal untuk mengembangkan **Gojegane Lamiyah** dalam bentuk aplikasi Next.js yang hangat, santai, guyub, dan konsisten dengan identitas visual logo.
