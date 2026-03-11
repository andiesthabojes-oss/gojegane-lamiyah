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
