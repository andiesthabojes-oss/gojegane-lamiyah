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
