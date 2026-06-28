import Image from "next/image";

export function ItalyHeroVisual() {
  return (
    <figure className="italy-hero-visual" aria-label="GIUVA Italia, volontari, comunita, prevenzione e solidarieta europea">
      <Image
        src="/brand/giuva-italia-hero.png"
        alt="GIUVA Italia - Global Initiative for Urban Volunteering & Awareness, volontari e comunita davanti al Quirinale con bandiere Italia e Unione Europea"
        width={2048}
        height={879}
        priority
        sizes="(min-width: 1024px) 58vw, calc(100vw - 40px)"
      />
    </figure>
  );
}
