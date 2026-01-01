export default function IntroCards() {
  return (
    <section className="mt-6">
      {/* One row, two columns on md+; same-height cards because they share the same grid row */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Card 1 — Meet Teresa */}
        <article className="relative overflow-hidden rounded-[--radius-card]">
          {/* background image */}
          <img
            src="/images/team/teresa.png"
            alt="Provider portrait"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* soft overlay for legibility */}
          <div className="absolute inset-0 bg-brand-cream/55" />

          {/* content */}
          <div className="relative z-10 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-brand-forest">Meet Teresa Le, FNP-C</h3>
            <p className="mt-3 max-w-prose text-brand-forest/85">
              Teresa brings years of expertise in cosmetic injections, skin rejuvenation, and wellness treatments. 
              Known for her gentle approach and eye for detail, Teresa is passionate about helping clients look 
              and feel their absolute best.
            </p>
            <a
              href="/services/injectables"
              className="mt-5 inline-block rounded-full border border-brand-gold px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
            >
              Teresa's Services
            </a>
          </div>
        </article>

        {/* Card 2 — Meet T Beauty Lounge */}
        <article className="relative overflow-hidden rounded-[--radius-card]">
          {/* background image */}
          <img
            src="/images/home/building.png"
            alt="T Beauty Lounge exterior"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* soft overlay for legibility */}
          <div className="absolute inset-0 bg-brand-cream/58" />

          {/* content */}
          <div className="relative z-10 p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-brand-forest">Meet T Beauty Lounge</h3>
            <p className="mt-3 max-w-prose text-brand-forest/85">
              We believe beauty is more than skin deep—it’s about feeling empowered and 
              confident in your own skin. Our journey began with a vision to create a sanctuary 
              where self-care meets innovation. 
            </p>
            <a
              href="/about"
              className="mt-5 inline-block rounded-full border border-brand-gold px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
            >
              Our Story
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}