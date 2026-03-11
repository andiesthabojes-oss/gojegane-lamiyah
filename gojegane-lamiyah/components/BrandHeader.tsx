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
