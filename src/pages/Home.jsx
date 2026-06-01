import MiniFAQ from '../sections/MiniFAQ';
import SocialProof from '../sections/SocialProof';
import IntroCards from '../sections/IntroCard';
import FeaturedServiceTabs from '../sections/FeaturedServiceTabs';
import MembershipTiers from '../sections/MembershipTiers';
import PodiumWidget from "../components/WebchatWidget";
import PodiumPopup from '../components/Popup';

function SectionHeader({ title, desc }) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-brand-forest">
        {title}
      </h2>
      {desc ? (
        <p className="mt-1 max-w-2xl text-sm md:text-base text-brand-forest/70">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function ServiceMarquee() {
  const services = [
    "Facials",
    "Japanese Head Spa",
    "Eyelash Extensions",
    "Brow Lamination",
    "Waxing",
    "Permanent Makeup",
    "Cosmetic Injections",
    "Skin Rejuvenation",
    "Laser Treatments",
    "Functional Medicine",
    "Hormone Optimization",
    "IV Therapy",
  ];

  const marqueeItems = [...services, ...services];

  return (
    <section className="relative w-full max-w-full overflow-hidden border-y border-brand-forest/10 bg-brand-cream py-4">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-brand-cream to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-brand-cream to-transparent" />

      <div className="marquee-track">
        <div className="marquee-group">
          {services.map((service) => (
            <span key={service} className="marquee-item">
              {service} <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>

        <div className="marquee-group" aria-hidden="true">
          {services.map((service) => (
            <span key={`${service}-copy`} className="marquee-item">
              {service} <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <img
        src="/images/home/home-hero.png"
        alt="Eucalyptus leaves"
        className="h-[52vh] w-full object-cover md:h-[58vh]"
      />

      {/* brand-friendly overlays */}
      <div className="absolute inset-0 bg-brand-cream/55" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/15" />

      {/* wide container aligns with page; inner text stays readable */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-brand-forest">
              Experience rejuvenation
              <br className="hidden sm:block" />
              like never before.
            </h1>

            <p className="mt-3 max-w-2xl text-base md:text-lg text-brand-forest/80">
              Cutting-edge treatments in a calm, spa-like environment—built
              around your goals.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              {/* External booking link */}
              <a
                href="https://www.vagaro.com/tbeautylounge/book-now"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <PodiumWidget />
      <PodiumPopup />
      
      {/* FULL-WIDTH HERO */}
      <Hero />

      {/* SERVICES MARQUEE */}
      <ServiceMarquee />

      {/* CONSTRAINED CONTENT */}
      <main className="mx-auto w-[92%] max-w-7xl space-y-8 pt-6 pb-8 md:pt-8 md:pb-10">
        {/* INTRO */}
        <IntroCards />

        {/* FEATURED SERVICES */}
        <FeaturedServiceTabs />

        {/* MEMBERSHIPS */}
        <MembershipTiers />

        {/* MINI FAQ */}
        <section className="space-y-3">
          <SectionHeader title="Questions before you book?" />
          <MiniFAQ />
        </section>

        {/* SOCIAL PROOF */}
        <section className="space-y-3">
          <SectionHeader
            title="Loved by our clients"
            desc="Real feedback from guests who keep coming back."
          />
          <SocialProof />
        </section>
      </main>
    </div>
  );
}
