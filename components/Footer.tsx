import { navigationLinks, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-white">{siteConfig.name}</h2>
          <p className="mt-2 text-sm text-stone-300">Calm, therapeutic care for body and skin.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {navigationLinks.map((link) => <li key={link.href}><a href={link.href} className="hover:text-white">{link.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Popular Services</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {siteConfig.services.slice(0, 4).map((service) => <li key={service.title}>{service.title}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <p className="mt-3 text-sm">{siteConfig.phone}</p>
          <p className="text-sm">{siteConfig.email}</p>
          <p className="mt-1 text-sm">{siteConfig.address.street}, {siteConfig.address.city}</p>
        </div>
      </div>
      <div className="border-t border-stone-700 py-4 text-center text-xs text-stone-400">© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</div>
    </footer>
  );
}
