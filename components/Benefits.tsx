import { siteConfig } from "@/lib/site";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-stone-900">Benefits You Can Feel</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.benefits.map((benefit) => (
            <div key={benefit} className="rounded-xl border border-stone-200 bg-white p-5 font-medium text-stone-800">{benefit}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
