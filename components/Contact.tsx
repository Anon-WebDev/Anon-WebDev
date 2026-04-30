import { siteConfig } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="bg-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold text-stone-900">Contact & Hours</h2>
          <p className="mt-4 text-stone-700">Call, email, or submit the form and our team will help you schedule the ideal treatment.</p>
          <div className="mt-6 space-y-2 text-stone-800">
            <p><strong>Phone:</strong> <a href={`tel:${siteConfig.phone}`} className="underline">{siteConfig.phone}</a></p>
            <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="underline">{siteConfig.email}</a></p>
            <p><strong>Address:</strong> {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}</p>
          </div>
          <h3 className="mt-6 text-xl font-semibold text-stone-900">Business Hours</h3>
          <ul className="mt-2 space-y-1 text-stone-700">
            {siteConfig.hours.map((hour) => <li key={hour}>{hour}</li>)}
          </ul>
        </div>

        <form className="rounded-2xl bg-white p-6 shadow-sm" aria-label="Contact form">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-stone-800" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="rounded-md border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            <label className="text-sm font-medium text-stone-800" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="rounded-md border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            <label className="text-sm font-medium text-stone-800" htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" className="rounded-md border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            <label className="text-sm font-medium text-stone-800" htmlFor="service">Service</label>
            <select id="service" name="service" className="rounded-md border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700">
              <option>Swedish Massage</option><option>Deep Tissue Massage</option><option>Signature Facial</option><option>Hydrating Facial</option><option>Hot Stone Therapy</option><option>Couples Massage</option>
            </select>
            <label className="text-sm font-medium text-stone-800" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} className="rounded-md border border-stone-300 px-3 py-2 focus:border-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-700" />
            <button type="submit" className="mt-2 rounded-full bg-amber-700 px-6 py-3 font-medium text-white transition hover:bg-amber-800">Schedule Your Visit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
