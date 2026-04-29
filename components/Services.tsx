import { siteConfig } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-stone-900">Our Signature Services</h2>
      <p className="mt-3 max-w-3xl text-stone-700">Choose from restorative massage and advanced skincare treatments tailored to your goals.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">{service.title}</h3>
            <p className="mt-3 text-stone-700">{service.description}</p>
            <p className="mt-4 text-stone-900"><span className="font-semibold">Starting at:</span> {service.price}</p>
            <p className="text-stone-900"><span className="font-semibold">Duration:</span> {service.duration}</p>
            <a href={service.href} className="mt-5 inline-block rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700">Book this service</a>
          </article>
        ))}
      </div>
    </section>
  );
}
