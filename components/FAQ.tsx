import { siteConfig } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-semibold text-stone-900">Frequently Asked Questions</h2>
      <div className="mt-8 space-y-4">
        {siteConfig.faqs.map((item) => (
          <details key={item.question} className="rounded-xl border border-stone-200 bg-white p-5">
            <summary className="cursor-pointer font-medium text-stone-900">{item.question}</summary>
            <p className="mt-3 text-stone-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
