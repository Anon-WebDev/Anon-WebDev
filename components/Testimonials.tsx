import { siteConfig } from "@/lib/site";

function Stars({ rating }: { rating: number }) {
  return <p aria-label={`${rating} out of 5 stars`} className="text-amber-600">{"★".repeat(rating)}</p>;
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-stone-900">What Clients Are Saying</h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {siteConfig.testimonials.map((item) => (
            <blockquote key={item.name} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <Stars rating={item.rating} />
              <p className="mt-3 text-stone-700">“{item.review}”</p>
              <footer className="mt-4 font-medium text-stone-900">— {item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
