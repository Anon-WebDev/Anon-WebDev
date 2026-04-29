import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section id="top" className="bg-stone-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-800">Spa & Wellness Studio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">{siteConfig.hero.headline}</h1>
          <p className="mt-5 max-w-xl text-lg text-stone-700">{siteConfig.hero.supportingCopy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-amber-700 px-6 py-3 text-center font-medium text-white transition hover:bg-amber-800">Book an Appointment</a>
            <a href="#services" className="rounded-full border border-stone-300 bg-white px-6 py-3 text-center font-medium text-stone-800 transition hover:bg-stone-100">View Services</a>
          </div>
          <ul className="mt-7 grid grid-cols-1 gap-2 text-sm text-stone-700 sm:grid-cols-3">
            {siteConfig.hero.badges.map((badge) => (
              <li key={badge} className="rounded-lg border border-stone-200 bg-white px-3 py-2">{badge}</li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={siteConfig.hero.image.src} alt={siteConfig.hero.image.alt} width={siteConfig.hero.image.width} height={siteConfig.hero.image.height} priority className="h-full w-full rounded-2xl object-cover shadow-xl" />
        </div>
      </div>
    </section>
  );
}
