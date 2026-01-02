import { useEffect, useMemo, useState } from "react";
import MiniFAQ from "../../components/MiniFAQ";

const LASH_SETS = [
  {
    name: "Classic",
    tagline: "Soft, natural enhancement.",
    vibe: ["Natural", "Everyday"],
    prices: { full: 130, fill2: 65, fill3: 80 },
    badge: "Great for first-timers",
  },
  {
    name: "Classic Hybrid",
    tagline: "A little extra fullness with soft texture.",
    vibe: ["Natural+", "Date Night"],
    prices: { full: 140, fill2: 70, fill3: 85 },
  },
  {
    name: "Volume",
    tagline: "Fluffy, full lash line with dimension.",
    vibe: ["Full", "Fluffy"],
    prices: { full: 140, fill2: 70, fill3: 85 },
    badge: "Most popular",
  },
  {
    name: "Volume Hybrid",
    tagline: "Bold fullness with a wispy finish.",
    vibe: ["Glam", "Photo Ready"],
    prices: { full: 160, fill2: 80, fill3: 95 },
  },
  {
    name: "Extra Volume",
    tagline: "Bigger, denser, ultra-fluffy.",
    vibe: ["Full Glam"],
    prices: { full: 155, fill2: 77, fill3: 92 },
  },
  {
    name: "Mega Volume",
    tagline: "Maximum density and drama.",
    vibe: ["Ultra Glam"],
    prices: { full: 170, fill2: 90, fill3: 110 },
  },
  {
  id: "wispy-volume",
  name: "Wispy Volume Lashes",
  tagline: "Soft, textured volume with wispy peaks for a dramatic yet airy finish.",
  vibe: ["Wispy", "Ultra Glam"],
  prices: {
    full: 150,
    fill2: 90,
    fill3: 110,
  },
},
];

const LASH_EXTRAS = [
  {
    name: "Extra Length / Extra Volume",
    description:
      "For extra long or extra full designs that require more time and product.",
    price: 10,
  },
  {
    name: "Extra Wispy",
    description:
      "For extra long or extra full designs that require more time and product.",
    price: 15,
  },
  {
    name: "Foreign Fill",
    description:
      "Filling lashes applied at another studio. Includes extra time to assess and refine.",
    price: 20,
  },
  {
    name: "Lash Removal",
    description: "Gentle professional removal to protect your natural lashes.",
    price: 20,
  },
  {
    name: "Color Lashes",
    description: "Subtle color, glitter, or themed designs. Priced per look.",
    price: 15,
  },
];

const TABS = [
  { id: "sets", label: "Lash Sets" },
  { id: "extras", label: "Extras & Upgrades" },
];

export default function LashesPage() {
  const defaultTab = TABS[0].id;
  const [active, setActive] = useState(defaultTab);
  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);

  // allow deep linking: /services/lashes#extras
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && tabSet.has(hash)) setActive(hash);
  }, [tabSet]);

  const onSelect = (id) => {
    setActive(id);
    // update hash without scroll jump
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/lashes/hero.png"
            alt="Eyelash extensions"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                EYELASH EXTENSIONS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Eyelash Extensions
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Classic, Hybrid, Volume, Extra Volume, and Mega Volume sets
                customized to your eye shape, natural lashes, and desired level
                of glam.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Natural → Full Glam
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Customized mapping
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Sensitive-safe options
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=lashes"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Lashes
                </a>
                <a
                  href="/policy"
                  className="rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-brand-forest ring-1 ring-black/10 hover:bg-white"
                >
                  View Policies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDER CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Sticky tabs */}
        <section className="mt-8">
          <div className="sticky top-3 z-20">
            <div className="rounded-2xl bg-white/85 backdrop-blur ring-1 ring-black/5 shadow-sm p-3">
              <div className="-mx-1 overflow-x-auto">
                <div className="px-1 flex gap-2 min-w-max">
                  {TABS.map((t) => {
                    const isActive = t.id === active;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => onSelect(t.id)}
                        className={[
                          "rounded-full px-4 py-2 text-sm transition whitespace-nowrap",
                          isActive
                            ? "bg-brand-forest text-white"
                            : "bg-brand-cream text-brand-forest hover:bg-brand-cream/70",
                        ].join(" ")}
                        aria-pressed={isActive}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TAB: SETS */}
        {active === "sets" ? (
          <section className="mt-6">
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {LASH_SETS.map((set) => (
                <article
                  key={set.name}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                >
                  <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />

                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest">
                          {set.name}
                        </h3>
                        {set.tagline ? (
                          <p className="mt-1 text-sm text-brand-forest/80">
                            {set.tagline}
                          </p>
                        ) : null}

                        {set.vibe?.length ? (
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
                        ) : null}
                      </div>

                      {set.badge ? (
                        <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-[11px] font-medium text-brand-forest whitespace-nowrap">
                          {set.badge}
                        </span>
                      ) : null}
                    </div>

                    <div className="mt-4 rounded-xl bg-brand-cream/70 px-3 py-3">
                      <dl className="space-y-2 text-sm text-brand-forest/90 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
                        <PriceItem label="Full Set" value={set.prices.full} />
                        <PriceItem label="2 Week Fill" value={set.prices.fill2} />
                        <PriceItem label="3 Week Fill" value={set.prices.fill3} />
                      </dl>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-brand-forest/75">
                      <span className="rounded-full bg-brand-cream px-2 py-1">
                        Most popular fills: 2–3 weeks
                      </span>
                      <span className="rounded-full bg-brand-cream px-2 py-1">
                        Customized mapping included
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {/* TAB: EXTRAS */}
        {active === "extras" ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Lash Extras & Upgrades
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Fine-tune your set with extra length, color, removals, and more.
              </p>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {LASH_EXTRAS.map((extra) => (
                <div
                  key={extra.name}
                  className="flex items-start justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-brand-cream"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-brand-forest">
                      {extra.name}
                    </h3>
                    {extra.description ? (
                      <p className="mt-1 text-xs text-brand-forest/75">
                        {extra.description}
                      </p>
                    ) : null}
                  </div>
                  <div className="ml-3 shrink-0 text-sm font-semibold text-brand-forest">
                    ${extra.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
              <p className="text-sm font-semibold text-brand-forest">
                Not sure what to add?
              </p>
              <p className="mt-1 text-sm text-brand-forest/80 max-w-3xl">
                We’ll recommend upgrades based on your natural lashes, the look
                you want, and how often you plan to come in for fills.
              </p>
            </div>
          </section>
        ) : null}

        {/* TAB: FAQ */}
        {active === "faq" ? (
          <section className="mt-6">
            <MiniFAQ
              title="Lash Extension FAQ"
              faqs={[
                {
                  q: "How often do I need fills?",
                  a: "We recommend every 2–3 weeks with at least 40–50% of your extensions remaining. After 3+ weeks or very low retention, a full set may be needed.",
                },
                {
                  q: "Do lash extensions damage my natural lashes?",
                  a: "When applied properly with safe isolation and lengths that match your natural lashes, they should not cause damage.",
                },
                {
                  q: "Can I book a fill if my lashes were done somewhere else?",
                  a: "Yes — foreign fills are welcome. We may need extra time to assess the work and retention, so a small foreign-fill fee may apply.",
                },
                {
                  q: "How should I prepare for my appointment?",
                  a: "Arrive with clean lashes and no eye makeup or mascara. Avoid oil-based products around the eye area and limit caffeine so you can fully relax.",
                },
                {
                  q: "How long do appointments take?",
                  a: "Full sets typically take longer than fills. Timing varies by lash type, your natural lashes, and the final design—your provider will confirm when booking.",
                },
              ]}
            />
          </section>
        ) : null}

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Not sure which set or upgrades you need? Book a{" "}
            <span className="font-medium">lash consultation</span> and we’ll map
            out the perfect look for your natural lashes and lifestyle.
          </p>
          <a
            href="/booking?service=lashes"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Lash Appointment
          </a>
        </section>
      </div>
    </div>
  );
}

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
