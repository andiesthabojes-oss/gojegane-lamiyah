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
