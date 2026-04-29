import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Page() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Benefits />
        <Gallery />
        <Testimonials />
        <section className="bg-amber-50">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-stone-900">Ready to Feel Your Best?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-700">Take a pause from your routine and enjoy expert care that helps you look and feel renewed.</p>
            <a href="#contact" className="mt-7 inline-block rounded-full bg-amber-700 px-7 py-3 font-medium text-white transition hover:bg-amber-800">Schedule Your Visit</a>
          </div>
        </section>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
