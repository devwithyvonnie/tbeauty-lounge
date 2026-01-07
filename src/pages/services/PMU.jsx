// src/pages/services/PMU.jsx
import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

/** ---------------- DATA ---------------- */

const PMU_GROUPS = [
  {
    id: "brows",
    title: "Brows",
    intro:
      "Soft, natural-looking brows tailored to your features. All brow services include detailed mapping and aftercare.",
    services: [
      {
        id: "powder-ombre",
        name: "Powder / Ombré Brows",
        description:
          "Softly shaded brows with a gentle gradient for a natural, “filled-in” look. Ideal for most skin types.",
        price: 500,
        duration: "2 hrs",
      },
    ],
  },
  {
    id: "eyes",
    title: "Lash Line & Eyeliner",
    intro:
      "Define the eyes with subtle lash enhancement or bolder eyeliner looks designed for your eye shape.",
    services: [
      {
        id: "top-eyeliner",
        name: "Top Eyeliner",
        description:
          "Defined top liner customized to your preferred thickness and shape.",
        priceRange: [350, 400],
        duration: "2 hrs",
      },
      {
        id: "bottom-eyeliner",
        name: "Bottom Eyeliner",
        description:
          "Soft definition along the lower lash line for subtle enhancement.",
        price: 180,
        duration: "2 hrs",
      },
      {
        id: "top-bottom-eyeliner",
        name: "Top & Bottom Eyeliner",
        description:
          "Complete eyeliner definition for both upper and lower lash lines.",
        price: 500,
        duration: "2 hrs",
      },
    ],
  },
  {
    id: "lips",
    title: "Lips",
    intro:
      "Restore soft color and shape to the lips with natural-looking tint that heals beautifully.",
    services: [
      {
        id: "full-lips",
        name: "Full Lips",
        description:
          "Full lip color to enhance tone, define shape, and create an even, long-lasting look.",
        price: 600,
        duration: "2 hrs",
      },
    ],
  },
  {
    id: "touchups",
    title: "Touch-Ups & Maintenance",
    intro:
      "Most permanent makeup is a two-step process. Touch-ups help refine color, shape, and longevity.",
    services: [
      {
        id: "correction",
        name: "Correction",
        description:
          "Adjustments to shape/tone for previous work before proceeding with a new PMU service.",
        price: 150,
        duration: "Varies",
      },
      {
        id: "touch-up",
        name: "Touch Up",
        description:
          "Maintenance visit to refresh color and definition after healing or as needed.",
        price: 300,
        duration: "Varies",
      },
    ],
  },
  {
    id: "removal",
    title: "Removal",
    intro:
      "Removal pricing varies by area. Sessions and expected results will be reviewed at consultation.",
    services: [
      {
        id: "tattoo-removal-face",
        name: "Tattoo Removal – Face",
        description:
          "Removal service for smaller areas on the face. Pricing per session.",
        price: 180,
        duration: "Varies",
      },
      {
        id: "tattoo-removal-body",
        name: "Tattoo Removal – Body",
        description: "Removal service for body areas. Pricing per session.",
        price: 300,
        duration: "Varies",
      },
    ],
  },
];

const PMU_FAQ = [
  {
    q: "Does permanent makeup hurt?",
    a: "Most guests describe PMU as mildly scratchy or pressure-like rather than painful. We use medical-grade topical numbing to keep you as comfortable as possible throughout the appointment.",
  },
  {
    q: "How long does PMU last?",
    a: "Brows typically last 1–3 years, lips around 2–3 years, and eyeliner 3+ years, depending on your skin type, lifestyle, and sun exposure. Color fades softly over time.",
  },
  {
    q: "Is a touch-up required?",
    a: "Yes. PMU is a two-step process. The perfecting visit allows us to fine-tune color, symmetry, and retention once the first session has healed.",
  },
  {
    q: "Can you work over previous permanent makeup?",
    a: "We recommend a consultation first. If old work is very dark, saturated, or outside your desired shape, removal or lightening may be recommended before new PMU.",
  },
];

const TAB_ORDER = [
  { id: "brows", label: "Brows" },
  { id: "eyes", label: "Eyes" },
  { id: "lips", label: "Lips" },
  { id: "touchups", label: "Touch-Ups" },
  { id: "removal", label: "Removal" },
];

/** ---------------- HELPERS ---------------- */

const money = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

function formatPrice(svc) {
  if (svc.priceDisplay) return svc.priceDisplay;

  if (Array.isArray(svc.priceRange) && svc.priceRange.length === 2) {
    const [min, max] = svc.priceRange;
    return `${money(min)}–${money(max)}`;
  }

  if (typeof svc.price === "number") return money(svc.price);

  return null;
}

/** ---------------- PAGE ---------------- */

export default function PMUPage() {
  const groupMap = useMemo(() => {
    const map = new Map();
    PMU_GROUPS.forEach((g) => map.set(g.id, g));
    return map;
  }, []);

  const tabSet = useMemo(() => new Set(TAB_ORDER.map((t) => t.id)), []);
  const [active, setActive] = useState(TAB_ORDER[0]?.id ?? "brows");

  // Deep link support: /services/pmu#lips
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && tabSet.has(hash)) setActive(hash);
  }, [tabSet]);

  const onSelect = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const activeGroup = groupMap.get(active) ?? PMU_GROUPS[0];

  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/pmu/hero.png"
            alt="Permanent makeup services"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                PERMANENT MAKEUP
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Permanent Makeup (PMU)
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Wake up with brows, liner, and lips that already look softly
                polished. Every PMU service includes a detailed consultation,
                mapping, and aftercare guidance.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Custom-mapped for your features
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Medical-grade numbing used
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Soft, natural healed results
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=pmu"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book PMU Consultation
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
        {/* Sticky Tabs */}
        <section className="mt-8">
          <div className="sticky top-3 z-20">
            <div className="rounded-2xl bg-white/85 backdrop-blur ring-1 ring-black/5 shadow-sm p-3">
              <div className="-mx-1 overflow-x-auto">
                <div className="px-1 flex gap-2 min-w-max">
                  {TAB_ORDER.map((t) => {
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

        {/* ACTIVE CATEGORY */}
        <section className="mt-6">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {activeGroup.title}
            </h2>
            {activeGroup.intro ? (
              <p className="mt-1 text-sm text-brand-forest/80">
                {activeGroup.intro}
              </p>
            ) : null}
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {activeGroup.services.map((svc, idx) => (
              <ServiceCard
                key={svc.id}
                svc={svc}
                accent={idx % 2 === 0 ? "mint" : "gold"}
              />
            ))}
          </div>
        </section>

        {/* FAQ (BOTTOM — not a tab) */}
        <MiniFAQAccordion title="PMU FAQ" faqs={PMU_FAQ} />
      </div>
    </div>
  );
}

/** ---------------- CARD ---------------- */

function ServiceCard({ svc, accent = "mint" }) {
  const bar =
    accent === "gold"
      ? "from-brand-gold via-brand-mint to-brand-gold"
      : "from-brand-mint via-brand-gold to-brand-mint";

  const priceText = formatPrice(svc);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className={`h-1 bg-gradient-to-r ${bar}`} />

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-brand-forest">
              {svc.name}
            </h3>

            {svc.description ? (
              <p className="mt-1 text-sm text-brand-forest/80">
                {svc.description}
              </p>
            ) : null}

            {!!svc.duration && (
              <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                  {svc.duration}
                </span>
              </div>
            )}
          </div>

          {priceText ? (
            <div className="ml-2 shrink-0 text-right">
              <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                {Array.isArray(svc.priceRange) ? "Range" : "Starting at"}
              </p>
              <p className="text-base font-semibold text-brand-forest">
                {priceText}
              </p>
            </div>
          ) : null}
        </div>

        {svc.priceNote ? (
          <p className="mt-3 text-xs text-brand-forest/70">{svc.priceNote}</p>
        ) : null}
      </div>
    </article>
  );
}
