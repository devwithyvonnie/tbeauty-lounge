import MiniFAQ from '../../components/MiniFAQ';
const LASH_SETS = [
  {
    name: 'Classic',
    tagline: 'Soft, natural enhancement.',
    vibe: ['Natural', 'Everyday'],
    prices: {
      full: 130,
      fill2: 65,
      fill3: 80,
    },
    badge: 'Great for first-timers',
  },
  {
    name: 'Classic Hybrid',
    tagline: 'A little extra fullness with soft texture.',
    vibe: ['Natural+', 'Date Night'],
    prices: {
      full: 140,
      fill2: 70,
      fill3: 85,
    },
  },
  {
    name: 'Volume',
    tagline: 'Fluffy, full lash line with dimension.',
    vibe: ['Full', 'Fluffy'],
    prices: {
      full: 140,
      fill2: 70,
      fill3: 85,
    },
  },
  {
    name: 'Volume Hybrid',
    tagline: 'Bold fullness with a wispy finish.',
    vibe: ['Glam', 'Photo Ready'],
    prices: {
      full: 160,
      fill2: 80,
      fill3: 95,
    },
    badge: 'Most requested glam set',
  },
  {
    name: 'Extra Volume',
    tagline: 'Bigger, denser, ultra-fluffy.',
    vibe: ['Full Glam'],
    prices: {
      full: 155,
      fill2: 77,
      fill3: 92,
    },
  },
  {
    name: 'Mega Volume',
    tagline: 'Maximum density and drama.',
    vibe: ['Ultra Glam'],
    prices: {
      full: 170,
      fill2: 85,
      fill3: 100,
    },
  },
];

// 👇 Fill these with your real extras + prices from your menu
const LASH_EXTRAS = [
  {
    name: 'Extra Length / Density Upgrade',
    description:
      'For extra long or extra full designs that require more time and product.',
    price: 15, // TODO: update to your real price
  },
  {
    name: 'Foreign Fill',
    description:
      'Filling lashes applied at another studio. Includes extra time to assess and refine.',
    price: 15, // TODO
  },
  {
    name: 'Lash Removal',
    description: 'Gentle professional removal to protect your natural lashes.',
    price: 25, // TODO
  },
  {
    name: 'Color Lashes',
    description: 'Subtle color, glitter, or themed designs. Priced per look.',
    price: 10, // TODO (per add-on)
  },
];

export default function LashesPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* PAGE INTRO */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          EYELASH EXTENSIONS
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Eyelash Extensions
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Classic, Hybrid, Volume, Extra Volume, and Mega Volume sets customized
          to your eye shape, natural lashes, and desired level of glam.
        </p>

        {/* Little “chips” that explain the vibes */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Natural → Full Glam
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Customized to your eye shape
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Sensitive-safe adhesives available
          </span>
        </div>
      </header>

      {/* COLUMN LABELS (desktop) */}
      <div className="mt-6 hidden text-xs font-medium uppercase tracking-wide text-brand-forest/60 md:flex md:justify-end">
        <div className="w-full max-w-md pr-4 flex justify-between">
          <span>Full Set</span>
          <span>2 Week Fill</span>
          <span>3 Week Fill</span>
        </div>
      </div>

      {/* MAIN SETS – GRID */}
      <section className="mt-3 grid gap-4 md:grid-cols-2">
        {LASH_SETS.map((set) => (
          <article
            key={set.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            {/* Accent bar */}
            <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />

            <div className="flex flex-1 flex-col p-4 md:p-5">
              {/* Name + badge */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-brand-forest">
                    {set.name}
                  </h2>
                  {set.tagline && (
                    <p className="mt-1 text-sm text-brand-forest/80">
                      {set.tagline}
                    </p>
                  )}

                  {/* Vibe tags */}
                  {set.vibe && set.vibe.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                      {set.vibe.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {set.badge && (
                  <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-[11px] font-medium text-brand-forest whitespace-nowrap">
                    {set.badge}
                  </span>
                )}
              </div>

              {/* Prices */}
              <div className="mt-4 rounded-xl bg-brand-cream/70 px-3 py-3">
                <dl className="space-y-2 text-sm text-brand-forest/90 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
                  <PriceItem label="Full Set" value={set.prices.full} />
                  <PriceItem label="2 Week Fill" value={set.prices.fill2} />
                  <PriceItem label="3 Week Fill" value={set.prices.fill3} />
                </dl>
              </div>

              <p className="mt-3 text-xs text-brand-forest/65">
                Fills are recommended every 2–3 weeks with at least 40–50% of
                your extensions remaining. After 3+ weeks or for lower
                retention, a full set may be required.
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* EXTRAS & UPGRADES */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              Lash Extras & Upgrades
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Fine-tune your set with extra length, color, removals, and more.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {LASH_EXTRAS.map((extra) => (
            <div
              key={extra.name}
              className="flex items-start justify-between gap-3 rounded-2xl bg-white/80 px-4 py-3 ring-1 ring-brand-cream"
            >
              <div>
                <h3 className="text-sm font-semibold text-brand-forest">
                  {extra.name}
                </h3>
                {extra.description && (
                  <p className="mt-1 text-xs text-brand-forest/75">
                    {extra.description}
                  </p>
                )}
              </div>
              <div className="ml-3 shrink-0 text-sm font-semibold text-brand-forest">
                ${extra.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      <MiniFAQ
        title="Lash Extension FAQ"
        faqs={[
          {
            q: 'How often do I need fills?',
            a: 'We recommend every 2–3 weeks with at least 40–50% of your extensions remaining. After 3+ weeks or very low retention, a full set may be needed.',
          },
          {
            q: 'Do lash extensions damage my natural lashes?',
            a: 'When applied properly with safe isolation and lengths that match your natural lashes, they should not cause damage.',
          },
          {
            q: 'Can I book a fill if my lashes were done somewhere else?',
            a: 'Yes — foreign fills are welcome. We may need extra time to assess the work and retention, so a small foreign-fill fee may apply.',
          },
          {
            q: 'How should I prepare for my appointment?',
            a: 'Arrive with clean lashes and no eye makeup or mascara. Avoid oil-based products around the eye area and limit caffeine so you can fully relax.',
          },
        ]}
      />

      {/* FINAL CTA – keep this last */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-top border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Not sure which set or upgrades you need? Book a{' '}
          <span className="font-medium">lash consultation</span> and we&apos;ll
          map out the perfect look for your natural lashes and lifestyle.
        </p>
        <a
          href="/booking?service=lashes"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Lash Appointment
        </a>
      </section>
    </div>
  );
}

/* Small helper for a labeled price item */
function PriceItem({ label, value }) {
  return (
    <div className="flex items-center justify-between md:flex-col md:items-start">
      <dt className="text-[11px] uppercase tracking-wide text-brand-forest/70">
        {label}
      </dt>
      <dd className="text-sm font-semibold text-brand-forest">${value}</dd>
    </div>
  );
}
