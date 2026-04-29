import { siteConfig } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-stone-900">About {siteConfig.name}</h2>
        <p className="mt-4 max-w-3xl text-stone-700">{siteConfig.about.story}</p>
        <ul className="mt-6 space-y-2 text-stone-700">
          {siteConfig.about.reasons.map((reason) => (
            <li key={reason}>• {reason}</li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {siteConfig.about.stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-stone-200 bg-stone-50 p-5 text-center">
              <p className="text-3xl font-semibold text-stone-900">{stat.value}</p>
              <p className="mt-1 text-sm text-stone-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
