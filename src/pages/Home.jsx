import { Link } from 'react-router-dom';
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

function Divider() {
  return <div className="h-px bg-white/15" />;
}

function TrustRow({ value, label }) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="text-base font-semibold">{value}</div>
      <div className="text-xs text-white/85 text-right max-w-[60%] leading-snug">
        {label}
      </div>
    </div>
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
      <div className="absolute inset-0 flex items-center">
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
    <div className="space-y-8">
      <PodiumWidget />
      <PodiumPopup />
      
      {/* FULL-WIDTH HERO */}
      <Hero />

      {/* CONSTRAINED CONTENT */}
      <main className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* STATS */}
        <section className="rounded-[--radius-card] bg-brand-primary text-white shadow-sm border border-white/10 overflow-hidden">
  <TrustRow value="10+ years" label="Experience you can trust" />
  <Divider />
  <TrustRow value="5K+ clients" label="Satisfied customers served" />
  <Divider />
  <TrustRow value="100%" label="Personalized care plans" />
</section>


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
