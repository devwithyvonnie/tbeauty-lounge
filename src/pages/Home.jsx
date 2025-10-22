import MiniFAQ from '../sections/MiniFAQ';
import SocialProof from '../sections/SocialProof';
import IntroCards from "../sections/IntroCard";
import FeaturedServiceTabs from '../sections/FeaturedServiceTabs';
import MembershipTiers from '../sections/MembershipTiers';
import OfferOfTheDay from '../sections/OfferOfTheDay';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      {/* HERO card */}
      <section className="relative overflow-hidden rounded-[--radius-card]">
        <img
          src="https://images.unsplash.com/photo-1614270532523-e1978d1f2711?q=80&w=1600&auto=format&fit=crop"
          alt="Eucalyptus leaves"
          className="h-[58vh] w-full object-cover md:h-[64vh]"
        />

        {/* cream-tinted overlay for contrast */}
        <div className="absolute inset-0 bg-brand-cream/65" />

        {/* gradient to add depth on the right edge (optional) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />

        {/* text block */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-11/12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-brand-forest">
              Experience rejuvenation
              <br className="hidden sm:block" />
              like never before.
            </h1>

            <p className="mt-3 max-w-2xl text-base md:text-lg text-brand-forest/80">
              Our expert team offers cutting-edge treatments designed to enhance
              your natural beauty and well-being in a serene, spa-like
              environment.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="/services"
                className="rounded-full bg-brand-gold px-6 py-3 text-white hover:brightness-95"
              >
                Let’s Start
              </a>
              <a
                href="/services"
                className="rounded-full border border-brand-gold px-6 py-3 text-brand-forest hover:bg-brand-cream/70"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* STAT CARDS row */}
      <section className="mt-4 grid gap-4 md:grid-cols-3">
        {[
          { t1: '10+ years of', t2: 'experience' },
          { t1: '5K+ satisfied', t2: 'customers' },
          { t1: '100% personalized', t2: 'care' },
        ].map((s) => (
          <div
            key={s.t2}
            className="rounded-[--radius-card] bg-brand-primary text-white px-6 py-5 text-center shadow-sm"
          >
            <div className="text-xl md:text-2xl font-semibold leading-tight">
              {s.t1}
            </div>
            <div className="text-xl md:text-2xl font-semibold leading-tight">
              {s.t2}
            </div>
          </div>
        ))}
      </section>

      <IntroCards />

      <FeaturedServiceTabs />

      {/* FEATURED MEMBERSHIPS (Featured + 3) */}
      <MembershipTiers />
      
      {/* MINI FAQ TEASER */}
      <MiniFAQ />

      <OfferOfTheDay />

      {/* SOCIAL PROOF */}
      <SocialProof />

      <Footer />

    </div>
  );
}
