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
