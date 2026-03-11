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
