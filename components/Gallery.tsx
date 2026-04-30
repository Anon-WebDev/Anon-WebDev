import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-stone-900">Spa Gallery</h2>
      <p className="mt-3 text-stone-700">Take a look inside our calming studio spaces and treatment experiences.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.gallery.map((image) => (
          <figure key={image.src} className="overflow-hidden rounded-xl">
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} className="h-full w-full object-cover transition duration-300 hover:scale-105" />
          </figure>
        ))}
      </div>
    </section>
  );
}
