export default function IntroCards() {
  return (
    <section className="mt-6">
      <div className="grid gap-4 md:grid-cols-2">
        {/* Card 1 — Meet Teresa */}
        <article className="relative overflow-hidden rounded-[--radius-card] min-h-[360px]">
          <img
            src="/images/team/teresa.png"
            alt="Provider portrait"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* calmer overlay + subtle vignette */}
          <div className="absolute inset-0 bg-brand-cream/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/85 via-brand-cream/35 to-transparent" />

          {/* content */}
          <div className="relative z-10 p-5 md:p-7 h-full flex items-end">
            <div className="w-full rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-black/5 shadow-sm p-4 md:p-5">
              <h3 className="text-xl md:text-2xl font-semibold text-brand-forest">
                Meet Teresa Le, FNP-C
              </h3>

              <p className="mt-2 text-sm md:text-base text-brand-forest/85 leading-relaxed">
              Teresa brings years of expertise in aesthetic medicine and functional wellness. Her philosophy focuses on helping clients look and feel their best by combining natural-looking aesthetic results with 
              a deeper, inside-out approach to health and longevity.
              </p>

              <a
                href="/services/injectables"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-forest px-5 py-2 text-sm text-white hover:brightness-110"
              >
                Teresa&apos;s Services
              </a>
            </div>
          </div>
        </article>

        {/* Card 2 — Meet T Beauty Lounge */}
        <article className="relative overflow-hidden rounded-[--radius-card] min-h-[360px]">
          <img
            src="/images/home/building.png"
            alt="T Beauty Lounge exterior"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* calmer overlay + subtle vignette */}
          <div className="absolute inset-0 bg-brand-cream/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-cream/85 via-brand-cream/35 to-transparent" />

          {/* content */}
          <div className="relative z-10 p-5 md:p-7 h-full flex items-end">
            <div className="w-full rounded-2xl bg-white/85 backdrop-blur-sm ring-1 ring-black/5 shadow-sm p-4 md:p-5">
              <h3 className="text-xl md:text-2xl font-semibold text-brand-forest">
                Meet T Beauty Lounge
              </h3>

              <p className="mt-2 text-sm md:text-base text-brand-forest/85 leading-relaxed">
                We believe beauty is more than skin deep—it’s about feeling empowered and
                confident in your own skin. Our journey began with a vision to create a sanctuary
                where self-care meets innovation.
              </p>

              <a
                href="/about"
                className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-forest px-5 py-2 text-sm text-white hover:brightness-110"
              >
                Our Story
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
