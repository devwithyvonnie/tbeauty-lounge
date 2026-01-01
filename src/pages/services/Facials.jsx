import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

// 🧴 Signature facials
const SIGNATURE_FACIALS = [
  {
    id: "deluxe-refreshing",
    name: "Deluxe Refreshing Facial",
    tagline: "Deep cleanse, exfoliation, and relaxation for all skin types.",
    focus: ["Balanced", "All Skin Types"],
    duration: "60 min",
    price: 75,
  },
  {
    id: "deluxe-refresh-back",
    name: "Deluxe Refreshing Back Facial",
    tagline: "Targets congestion and dryness on the back.",
    focus: ["Back Treatment"],
    duration: "60 min",
    price: 100,
  },
  {
    id: "acne",
    name: "Acne Facial",
    tagline: "Clarifying treatment focused on breakouts and congestion.",
    focus: ["Clarifying", "Problem Skin"],
    duration: "60 min",
    price: 95,
  },
  {
    id: "acne-back",
    name: "Acne Back Facial",
    tagline: "Deep cleanse and extractions for the back.",
    focus: ["Clarifying", "Back"],
    duration: "60 min",
    price: 115,
  },
  {
    id: "antiaging",
    name: "Anti-Aging Facial",
    tagline: "Hydrating, firming care to soften the look of fine lines.",
    focus: ["Anti-Aging"],
    duration: "60 min",
    price: 95,
  },
  {
    id: "proc-mini",
    name: "Pro-C Mini Facial",
    tagline: "Quick vitamin C pick-me-up with glow.",
    focus: ["Brightening", "Express"],
    duration: "30 min",
    price: 55,
  },
  {
    id: "goddess",
    name: "Goddess Facial",
    tagline: "Spa-forward ritual for deep relaxation and radiance.",
    focus: ["Relaxing", "Glow"],
    duration: "75 min",
    price: 125,
  },
  {
    id: "seasonal-enzyme",
    name: "Seasonal Enzyme Facial",
    tagline: "Seasonal enzyme blend to gently refine texture.",
    focus: ["Enzyme", "Texture"],
    duration: "60 min",
    price: 160,
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    tagline:
      "Hydra-dermabrasion treatment for deep cleanse and intense hydration.",
    focus: ["Hydrating", "All Skin Types"],
    duration: "60 min",
    price: 199,
  },
  {
    id: "beyond-botox",
    name: "Beyond Botox Facial",
    tagline: "Advanced facial designed to complement injectable treatments.",
    focus: ["Advanced", "Firming"],
    duration: "75 min",
    price: 200,
  },
];

// 💉 Microneedling / advanced block
const MICRONEEDLING_BLOCK = {
  id: "microneedling",
  name: "Microneedling & Advanced Collagen",
  tagline:
    "Collagen induction therapies that help soften texture, scarring, and fine lines.",
  focus: ["Advanced", "Texture", "Collagen"],
  variants: [
    { label: "Microneedling", duration: "60 min", price: 400 },
    { label: "Microneedling with PRP", duration: "60–75 min", price: 550 },
    { label: "Microneedling with Exosomes", duration: "60–75 min", price: 650 },
    { label: "Nanoneedling", duration: "45–60 min", price: 200 },
  ],
};

// 💎 HydraDiamond block
const HYDRADIAMOND_BLOCK = {
  id: "hydradiamond",
  name: "HydraDiamond® Skin Renewal",
  tagline:
    "HydroDiamond® gently exfoliates and hydrates the skin by combining diamond microdermabrasion with serum infusion technology.",
  focus: ["Hydration", "Glow", "Texture"],
  variants: [
    {
      label: "Glow Express Facial",
      duration: "30 min",
      price: 120,
      description:
        "Pairs HydroDiamond® with Cold Therapy for instantly refreshed, smooth, and radiant skin.",
    },
    {
      label: "Hydration Boost Facial",
      duration: "45 min",
      price: 150,
      description:
        "Combines DermeDrop serum infusion and Oxygen Spray to deliver intense hydration and restore glow.",
    },
    {
      label: "Brightening Detox Facial",
      duration: "50 min",
      price: 170,
      description:
        "Uses Ultrasonic Scrubber and Serum Infusion to detoxify, brighten, and even skin tone.",
    },
    {
      label: "Contour Renewal Facial",
      duration: "60 min",
      price: 185,
      description:
        "Incorporates RF therapy and Cold Therapy to tighten, tone, and rejuvenate facial contours.",
    },
    {
      label: "Signature Meso Glow",
      duration: "60 min",
      price: 200,
      description:
        "Enhanced with DermeBoost mesotherapy, Cold Therapy, and Oxygen Infusion to deeply nourish and restore radiance.",
    },
    {
      label: "Full Revive Protocol",
      duration: "90 min",
      price: 225,
      description:
        "Our most advanced protocol layering Meso infusion, RF therapy, Oxygen Spray, and Cold Therapy for complete rejuvenation.",
    },
  ],
};

// ✨ Facial add-ons
const FACIAL_ADDONS = [
  {
    id: "gold-leaf",
    name: "24K Treatment Gold Leaf Mask",
    description: "Luxurious gold mask to brighten and firm.",
    price: 49,
  },
  {
    id: "hand-foot-scrub",
    name: "Hand / Foot Scrub",
    description: "Gentle exfoliation for hands or feet.",
    price: 10,
  },
  {
    id: "hand-foot-paraffin",
    name: "Hand / Foot Paraffin",
    description: "Warm paraffin treatment for softness and hydration.",
    price: 15,
  },
  {
    id: "dermaplaning-addon",
    name: "Dermaplaning Add-On",
    description: "Blade exfoliation to remove peach fuzz and smooth texture.",
    price: 30,
  },
  {
    id: "carboxy",
    name: "Carboxy CO₂ Add-On",
    description: "Targets circulation and skin vitality.",
    price: 58,
  },
  {
    id: "glycolic-peel",
    name: "Glycolic Peel",
    description: "Chemical resurfacing to refine texture and brighten.",
    price: 125,
  },
  {
    id: "vitamin-c-peel",
    name: "Vitamin C Peel",
    description: "Brightening peel for dull or uneven tone.",
    price: 125,
  },
  {
    id: "hydrojelly",
    name: "Hydrojelly Mask & Ice Globes",
    description: "Soothing mask and cooling globes to calm and depuff.",
    price: 35,
  },
];

/** ---------- tabs ---------- */
const TABS = [
  { id: "signature", label: "Signature Facials" },
  { id: "hydradiamond", label: "HydraDiamond®" },
  { id: "microneedling", label: "Microneedling" },
  { id: "addons", label: "Add-Ons" },
];

function SignatureSection() {
  return (
    <section className="mt-6">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-brand-forest">
            Signature Facials
          </h2>
          <p className="mt-1 text-sm text-brand-forest/80">
            Relaxing, result-focused facials tailored to your skin’s current
            needs.
          </p>
        </div>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {SIGNATURE_FACIALS.map((item) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />

            <div className="flex flex-1 flex-col p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-brand-forest">
                    {item.name}
                  </h3>
                  {item.tagline ? (
                    <p className="mt-1 text-sm text-brand-forest/80">
                      {item.tagline}
                    </p>
                  ) : null}

                  <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                    {item.duration ? (
                      <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                        {item.duration}
                      </span>
                    ) : null}
                    {item.focus?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="ml-2 shrink-0 text-right">
                  <p className="text-xs uppercase tracking-wide text-brand-forest/60">
                    Starting at
                  </p>
                  <p className="text-base font-semibold text-brand-forest">
                    ${item.price}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HydraDiamondSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          {HYDRADIAMOND_BLOCK.name}
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-brand-forest/80">
          {HYDRADIAMOND_BLOCK.tagline}
        </p>
        <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
          {HYDRADIAMOND_BLOCK.focus.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
        <div className="p-4 md:p-5">
          <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
            <dl className="space-y-3 text-sm text-brand-forest/90">
              {HYDRADIAMOND_BLOCK.variants.map((v) => (
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
                        <span className="rounded-full bg-brand-cream px-2 py-0.5">
                          {v.duration}
                        </span>
                      </div>
                    </div>
                    <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                      ${v.price}
                    </dd>
                  </div>

                  {v.description ? (
                    <p className="text-xs text-brand-forest/80">{v.description}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-3 text-xs text-brand-forest/65">
            All HydraDiamond® facials are customized for your skin type and can
            be paired with add-ons for enhanced results.
          </p>
        </div>
      </article>
    </section>
  );
}

function MicroneedlingSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          {MICRONEEDLING_BLOCK.name}
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          {MICRONEEDLING_BLOCK.tagline}
        </p>
        <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
          {MICRONEEDLING_BLOCK.focus.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
        <div className="p-4 md:p-5">
          <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
            <dl className="space-y-3 text-sm text-brand-forest/90">
              {MICRONEEDLING_BLOCK.variants.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center justify-between gap-3 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                >
                  <div>
                    <dt className="font-semibold text-brand-forest">{v.label}</dt>
                    <div className="mt-0.5 text-[11px] text-brand-forest/75">
                      {v.duration}
                    </div>
                  </div>
                  <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                    ${v.price}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-3 text-xs text-brand-forest/65">
            A consultation is recommended prior to advanced treatments to review
            your skin history, expectations, and pre/post-care.
          </p>
        </div>
      </article>
    </section>
  );
}

function AddOnsSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">Facial Add-Ons</h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          Enhance any facial with targeted boosters for glow, texture, or relaxation.
        </p>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {FACIAL_ADDONS.map((addon) => (
          <div
            key={addon.id}
            className="flex items-start justify-between gap-3 rounded-2xl bg-white/90 px-4 py-3 ring-1 ring-brand-cream"
          >
            <div>
              <h3 className="text-sm font-semibold text-brand-forest">
                {addon.name}
              </h3>
              {addon.description ? (
                <p className="mt-1 text-xs text-brand-forest/75">
                  {addon.description}
                </p>
              ) : null}
            </div>
            <div className="ml-3 shrink-0 text-sm font-semibold text-brand-forest">
              ${addon.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function FacialsPage() {
  const defaultTab = TABS[0].id;
  const [active, setActive] = useState(defaultTab);

  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);

  // deep links like /services/facials#microneedling
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
            src="/images/services/facials/hero.png"
            alt="Facials and skin treatments"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                FACIALS &amp; SKIN
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Facials &amp; Skin Treatments
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                From calming spa facials to advanced HydraDiamond® and
                microneedling, every treatment is customized to your skin type,
                concerns, and goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Sensitive-skin friendly options
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Custom plans by skin concern
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Add-ons to boost results
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=facials"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Facials
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
        {/* Sticky tabs (no scrolling back up) */}
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

        {/* Active tab content only */}
        {active === "signature" ? <SignatureSection /> : null}
        {active === "hydradiamond" ? <HydraDiamondSection /> : null}
        {active === "microneedling" ? <MicroneedlingSection /> : null}
        {active === "addons" ? <AddOnsSection /> : null}

        {/* FAQ */}
        <MiniFAQAccordion
          title="Facial & Skin Treatment FAQ"
          faqs={[
            {
              q: "Do I need to stop using retinol or active products before my facial?",
              a: "For most facials, we recommend pausing retinol, strong exfoliants, and acne prescriptions for 3–5 days before your visit. For advanced peels or microneedling, your provider may recommend a longer break.",
            },
            {
              q: "Is there downtime after a facial?",
              a: "Most facials have little to no downtime—your skin may look slightly flushed but generally radiant. Advanced services like peels or microneedling may involve temporary redness, dryness, or light flaking.",
            },
            {
              q: "Can facials help with acne or dark spots?",
              a: "Yes. We offer targeted acne and brightening facials, plus HydraDiamond® and microneedling options that can support smoother texture and more even tone over a series of treatments.",
            },
            {
              q: "Can I wear makeup after my facial?",
              a: "For best results, we recommend avoiding makeup for the rest of the day so your skin can fully absorb the benefits. For advanced treatments, your provider will give you specific post-care instructions.",
            },
          ]}
        />

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Not sure which facial is right for you? Book a{" "}
            <span className="font-medium">skin consultation</span> or let your
            provider customize a treatment the day of your visit.
          </p>
          <a
            href="/booking?service=facials"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Facial Appointment
          </a>
        </section>
      </div>
    </div>
  );
}
