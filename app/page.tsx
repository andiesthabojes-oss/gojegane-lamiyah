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
