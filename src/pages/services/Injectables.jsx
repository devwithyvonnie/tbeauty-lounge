// src/pages/services/Injectables.jsx
import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

/** ---------------- DATA ---------------- */

// 🧊 Neurotoxin pricing (per unit)
const NEUROTOXIN_SECTION = {
  id: "neurotoxins",
  name: "Neurotoxins",
  tagline:
    "Softening lines and preventing new ones with precise, conservative dosing customized to your features.",
  accent: "mint",
  variants: [
    {
      label: "Botox",
      priceDisplay: "$14 / unit",
      duration: "30–45 min",
      note:
        "Forehead, frown lines, crow’s feet, and more. Average treatment ranges 20–60 units depending on area.",
    },
    {
      label: "Dysport",
      priceDisplay: "$5.25 / unit",
      duration: "30–45 min",
      note:
        "Alternative neurotoxin with a different unit conversion. Great for larger areas like the forehead.",
    },
    {
      label: "Daxxify",
      priceDisplay: "$9 / unit",
      duration: "30–45 min",
      note:
        "A long-lasting neurotoxin option that may provide extended smoothing results compared to traditional formulas.",
    },
  ],
  footnote:
    "Final dosing and pricing are determined in consultation based on your anatomy, muscle movement, and treatment goals.",
};

// 💉 Fillers & skin boosters
const FILLER_SECTION = {
  id: "fillers",
  name: "Fillers & Skin Boosters",
  tagline:
    "Subtle volume, contour, and hydration for lips, cheeks, and more—focused on balanced, natural-looking results.",
  accent: "gold",
  variants: [
    {
      label: "Lip Filler",
      priceDisplay: "$650",
      duration: "45–60 min",
      chips: ["Priced per syringe / treatment"],
      note: "Customized lip shaping and hydration. Includes consultation and numbing.",
    },
    {
      label: "RHA Filler",
      priceDisplay: "$800",
      duration: "60 min",
      chips: ["Priced per syringe / treatment"],
      note:
        "Resilient hyaluronic acid filler designed to move naturally with expression.",
    },
    {
      label: "Skinvive",
      priceDisplay: "$725",
      duration: "45–60 min",
      chips: ["Priced per treatment"],
      note:
        "Microdroplet skin booster to improve cheek smoothness and subtle glow.",
    },
  ],
  footnote:
    "The number of syringes recommended varies based on your goals and starting anatomy. Your provider will review options and pricing before treatment.",
};

// 🌱 Regenerative & lipodissolve
const REGENERATIVE_SECTION = {
  id: "regenerative",
  name: "Regenerative & Lipodissolve",
  tagline:
    "Support collagen, improve texture, and refine small areas with regenerative therapies and targeted contouring.",
  accent: "mint",
  variants: [
    {
      label: "PCDC Lipodissolve",
      priceDisplay: "$450",
      duration: "45–60 min",
      note:
        "Chemical lipolysis for small, stubborn pockets of fat. Number of sessions varies by area.",
    },
    {
      label: "PRF Under-Eye",
      priceDisplay: "$450",
      duration: "45–60 min",
      note:
        "Platelet-rich fibrin for under-eye creping and hollowness. Best in a series.",
    },
    {
      label: "PRF Hair Restoration",
      priceDisplay: "$550",
      duration: "60 min",
      note:
        "PRF injections to support hair density and scalp health. Typically performed in a series.",
    },
    {
      label: "Sculptra & Hyperdilute Radiesse",
      priceDisplay: "$900",
      duration: "60 min",
      note:
        "Biostimulatory treatments to gradually support collagen and improve skin tone and firmness.",
    },
  ],
  footnote:
    "Most regenerative treatments are performed in a series for best results. Your provider will discuss an appropriate plan during your visit.",
};

// ✂️ PDO Threads
const THREADS_SECTION = {
  id: "threads",
  name: "PDO Threads",
  tagline:
    "Collagen-stimulating threads to subtly lift, refine, and contour areas such as the jawline, cheeks, and brows.",
  accent: "gold",
  variants: [
    {
      label: "Smooth Threads (Collagen-Boosting)",
      duration: "45–60 min",
      priceDisplay: "Starting at $300",
      note:
        "Used to improve skin texture, fine lines, and overall firmness. Best performed in a series.",
    },
    {
      label: "Lift Threads (Lifting / Repositioning)",
      duration: "60–75 min",
      priceDisplay: "Starting at $850",
      note:
        "Designed to gently lift areas like the jawline or cheeks. Exact pricing depends on the number of threads needed.",
    },
    {
      label: "Full Face Thread Lift",
      duration: "75–90 min",
      priceDisplay: "Starting at $1,600",
      note:
        "Comprehensive thread treatment for multiple lift points and enhanced contouring.",
    },
  ],
  footnote:
    "A consultation is required to determine thread type, quantity, and the best treatment plan for your goals.",
};

const SECTIONS = [
  NEUROTOXIN_SECTION,
  FILLER_SECTION,
  REGENERATIVE_SECTION,
  THREADS_SECTION,
];

/** ---------------- UI HELPERS ---------------- */

function AccentBar({ accent = "mint" }) {
  const cls =
    accent === "gold"
      ? "bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold"
      : "bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint";
  return <div className={`h-1 ${cls}`} />;
}

function PricingBlock({ section }) {
  return (
    <section className="mt-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-brand-forest">
            {section.name}
          </h2>
          {section.tagline ? (
            <p className="mt-1 text-sm text-brand-forest/80">
              {section.tagline}
            </p>
          ) : null}
        </div>
      </div>

      <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <AccentBar accent={section.accent} />
        <div className="p-4 md:p-5">
          <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
            <dl className="space-y-3 text-sm text-brand-forest/90">
              {section.variants.map((v) => (
                <div
                  key={v.label}
                  className="flex flex-col gap-1 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <dt className="font-semibold text-brand-forest">
                        {v.label}
                      </dt>

                      <div className="mt-0.5 flex flex-wrap gap-1 text-[11px] text-brand-forest/75">
                        {v.duration ? (
                          <span className="rounded-full bg-brand-cream px-2 py-0.5">
                            {v.duration}
                          </span>
                        ) : null}

                        {v.chips?.map((c) => (
                          <span
                            key={c}
                            className="rounded-full bg-brand-mint/30 px-2 py-0.5"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                      {v.priceDisplay}
                    </dd>
                  </div>

                  {v.note ? (
                    <p className="text-xs text-brand-forest/80">{v.note}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>

          {section.footnote ? (
            <p className="mt-3 text-xs text-brand-forest/65">
              {section.footnote}
            </p>
          ) : null}
        </div>
      </article>
    </section>
  );
}

/** ---------------- PAGE ---------------- */

export default function InjectablesPage() {
  const defaultTab = SECTIONS[0]?.id ?? "neurotoxins";
  const [active, setActive] = useState(defaultTab);

  const sectionMap = useMemo(() => {
    const m = new Map();
    SECTIONS.forEach((s) => m.set(s.id, s));
    return m;
  }, []);

  // Allow deep linking like /services/injectables#threads
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && sectionMap.has(hash)) setActive(hash);
  }, [sectionMap]);

  const current = sectionMap.get(active) ?? SECTIONS[0];

  const onSelect = (id) => {
    setActive(id);
    // update hash without jumping/scrolling
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/injectables/hero.png"
            alt="Cosmetic injections"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                COSMETIC INJECTIONS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Cosmetic Injections
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Neurotoxins, fillers, biostimulatory treatments, and regenerative
                options—planned and performed with a focus on natural, balanced
                results that fit your features and goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Consultation-first planning
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Subtle, natural-focused outcomes
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Provider-performed injections
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=injectables"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Injectables
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

      {/* CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Sticky tabs */}
        <section className="mt-8">
          <div className="sticky top-3 z-20">
            <div className="rounded-2xl bg-white/85 backdrop-blur ring-1 ring-black/5 shadow-sm p-3">
              <div className="-mx-1 overflow-x-auto">
                <div className="px-1 flex gap-2 min-w-max">
                  {SECTIONS.map((s) => {
                    const isActive = s.id === active;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelect(s.id)}
                        className={[
                          "rounded-full px-4 py-2 text-sm transition whitespace-nowrap",
                          isActive
                            ? "bg-brand-forest text-white"
                            : "bg-brand-cream text-brand-forest hover:bg-brand-cream/70",
                        ].join(" ")}
                        aria-pressed={isActive}
                      >
                        {s.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active section only (no long scrolling) */}
        <PricingBlock section={current} />

        {/* FAQ */}
        <MiniFAQAccordion
          title="Cosmetic Injections FAQ"
          faqs={[
            {
              q: "Do I need a consultation before injectables?",
              a: "Yes. Your first visit will always include a consultation to review your health history, goals, and whether treatment is appropriate for you that day.",
            },
            {
              q: "How long do neurotoxin results last?",
              a: "Most guests enjoy smoother lines for about 3–4 months, though this can vary by dose, area, and individual metabolism.",
            },
            {
              q: "Will I bruise or swell after injections?",
              a: "Mild redness, swelling, or bruising is possible with any injectable. We recommend avoiding blood-thinning medications or supplements when medically appropriate and following all aftercare instructions.",
            },
            {
              q: "When should I schedule before an event?",
              a: "For neurotoxins, schedule at least 2 weeks before an event to allow results to settle. For filler or regenerative treatments, we recommend 2–4 weeks in case of temporary swelling or touch-ups.",
            },
          ]}
        />

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Not sure where to start? Book a{" "}
            <span className="font-medium">cosmetic injection consultation</span>{" "}
            and we’ll walk you through options, pricing, and a personalized plan.
          </p>
          <a
            href="/booking?service=injectables"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Injectable Appointment
          </a>
        </section>
      </div>
    </div>
  );
}
