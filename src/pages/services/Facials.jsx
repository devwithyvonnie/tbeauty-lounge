// src/pages/services/Facials.jsx
import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

const BOOK_URL = "https://booking.mangomint.com/532777";

/* -------------------------
   DATA
-------------------------- */

// 🌿 Signature Glow tiers (60 / 75 / 90)
const SIGNATURE_TIERS = [
  {
    id: "sunlit-glow",
    tier: "60 min",
    name: "The Sunlit Glow Treatment",
    tagline: "Gentle enzyme resurfacing and barrier-loving hydration.",
    bestFor: "Maintenance, quick pick-me-ups, or simple skin goals.",
    includes:
      "Full double cleanse, custom enzyme, targeted extractions, and a specialized treatment mask.",
    price: 99,
  },
  {
    id: "velvet-glow",
    tier: "75 min",
    name: "The Velvet Glow Treatment",
    tagline:
      "Deep nourishment, custom modalities, and grounding facial massage.",
    bestFor: "Specific concerns like acne, pigment, or dynamic aging.",
    includes:
      "Everything in the Sunlit Glow, plus dermaplaning and a targeted treatment mask (firming peptide or charcoal).",
    price: 140,
  },
  {
    id: "golden-hour",
    tier: "90 min",
    name: "The Golden Hour",
    tagline:
      "An all-inclusive, top-to-bottom skin ritual: customized exfoliation, extractions, targeted barrier care, a specialty mask, and extended neck, shoulder, and facial sculpting.",
    bestFor:
      "First-time clients needing a deep overhaul, premium skin revision, or maximum luxury and relaxation.",
    includes:
      "Your choice of our advanced protocols (Beyond Botox, Oxygen Rx, or Swich) paired with an extended facial, neck, and shoulder massage.",
    price: 200,
  },
];

// 🧴 Specialty treatments (on the Signature tab, below the tiers)
const SPECIALTY_TREATMENTS = [
  {
    id: "dewy-renewal",
    name: "Dewy Renewal Facial",
    tagline:
      "Dermaplaning to remove peach fuzz and dull surface buildup for instant smoothness and glow.",
    focus: ["Brightening", "Smoothing"],
    duration: "60 min",
    price: 70,
  },
  {
    id: "back-glow",
    name: "Back Glow Treatment",
    tagline: "Targets congestion and dryness on the back.",
    focus: ["Back Treatment"],
    duration: "60 min",
    price: 100,
  },
  {
    id: "clarifying-back",
    name: "Clarifying Back Treatment",
    tagline: "Deep cleanse and extractions for the back.",
    focus: ["Clarifying", "Back"],
    duration: "60 min",
    price: 115,
  },
];

// 💎 HydroDiamond tiers
const HYDRODIAMOND_TIERS = [
  {
    id: "glass-skin-express",
    tier: "Tier 1 · 60 min",
    name: "The Glass Skin Express",
    tagline: "Quick diamond-tip polishing and deep pore flush.",
    includes:
      "HydroDiamond exfoliation and deep vacuum pore cleansing, followed by an immediate oxygen infusion of hydrating peptides.",
    bestFor:
      "Tight schedules, congestion, or a quick, zero-downtime skin reset before an event.",
    price: 160,
  },
  {
    id: "velvet-infusion",
    tier: "Tier 2 · 75 min",
    name: "The Velvet Infusion Treatment",
    tagline:
      "Full fluid exfoliation, targeted active infusion, and facial contouring.",
    includes:
      "The full HydroDiamond resurfacing and extraction sequence, layered with a firming mask and cold hammer or RF, finished with oxygen infusion.",
    bestFor:
      "Deep pore refinement, brighter-looking pigmentation, and smoother skin.",
    price: 190,
  },
  {
    id: "lit-from-within",
    tier: "Tier 3 · 90 min",
    name: "The Lit From Within",
    tagline:
      "Maximum hydration, lifting modalities, and zero-downtime plumping.",
    includes:
      "Ninety minutes of uninterrupted skin renewal: the full Zemits diamond-tip hydro-resurfacing protocol, active infusions, and slow sculptural massage across the face, neck, and décolleté, finished with a collagen sheet mask. No add-ons or guesswork, just complete restoration and a soft velvet glow.",
    bestFor:
      "Maximum anti-aging results, deep relaxation, and total pampering.",
    price: 220,
  },
];

const GLOW_EXPRESS = {
  id: "glow-express",
  name: "HydroDiamond Glow Express",
  tagline:
    "Pairs HydroDiamond with Cold Therapy for instantly refreshed, smooth, and radiant skin.",
  focus: ["Express", "Glow"],
  duration: "30 min",
  price: 80,
};

// 💉 Microneedling / advanced block (unchanged)
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

// ✨ Add-ons
const FACIAL_ADDONS = [
  {
    id: "hand-foot-scrub",
    name: "Hand / Foot Scrub",
    description: "Gentle exfoliation for hands or feet.",
    price: 15,
  },
  {
    id: "hand-foot-paraffin",
    name: "Hand / Foot Paraffin",
    description: "Warm paraffin treatment for softness and hydration.",
    price: 20,
  },
];

/* -------------------------
   TABS
-------------------------- */

const TABS = [
  { id: "signature", label: "Signature Glow" },
  { id: "hydrodiamond", label: "HydroDiamond" },
  { id: "microneedling", label: "Microneedling" },
  { id: "addons", label: "Add-Ons" },
];

/* -------------------------
   SHARED CARDS
-------------------------- */

function TierCard({ item, accent = "mint" }) {
  const bar =
    accent === "gold"
      ? "from-brand-gold via-brand-mint to-brand-gold"
      : "from-brand-mint via-brand-gold to-brand-mint";

  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ${
        item.badge ? "ring-2 ring-brand-gold/60" : "ring-black/5"
      }`}
    >
      <div className={`h-1 bg-gradient-to-r ${bar}`} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-brand-cream px-2.5 py-0.5 text-[11px] font-medium text-brand-forest/90">
            {item.tier}
          </span>
          {item.badge ? (
            <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-[11px] font-medium text-brand-forest whitespace-nowrap">
              {item.badge}
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-brand-forest">
          {item.name}
        </h3>
        <p className="mt-1 text-2xl font-semibold text-brand-forest">
          ${item.price}
        </p>

        <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
          {item.tagline}
        </p>

        <div className="mt-4 space-y-3 rounded-xl bg-brand-cream/70 p-3 text-sm">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-forest/60">
              Includes
            </p>
            <p className="mt-1 text-brand-forest/85 leading-relaxed">
              {item.includes}
            </p>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-brand-forest/60">
              Best for
            </p>
            <p className="mt-1 text-brand-forest/85 leading-relaxed">
              {item.bestFor}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function SimpleCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
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
              Price
            </p>
            <p className="text-base font-semibold text-brand-forest">
              ${item.price}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* -------------------------
   SECTIONS
-------------------------- */

function SignatureSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          Signature Glow Treatments
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          Three tiers, each customized to your skin. Pick the time and depth
          that fits your goals.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {SIGNATURE_TIERS.map((item, idx) => (
          <TierCard
            key={item.id}
            item={item}
            accent={idx % 2 === 0 ? "mint" : "gold"}
          />
        ))}
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold text-brand-forest">
          Specialty Treatments
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          Focused services for smoothing and back care.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SPECIALTY_TREATMENTS.map((item) => (
          <SimpleCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function HydroDiamondSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          HydroDiamond® Skin Renewal
        </h2>
        <p className="mt-1 max-w-3xl text-sm text-brand-forest/80">
          HydroDiamond® gently exfoliates and hydrates the skin by combining
          diamond microdermabrasion with serum infusion technology.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {HYDRODIAMOND_TIERS.map((item, idx) => (
          <TierCard
            key={item.id}
            item={item}
            accent={idx % 2 === 0 ? "gold" : "mint"}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-brand-forest">
          Short on time?
        </p>
        <div className="mt-3 md:max-w-xl">
          <SimpleCard item={GLOW_EXPRESS} />
        </div>
      </div>
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
                    <dt className="font-semibold text-brand-forest">
                      {v.label}
                    </dt>
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
        <h2 className="text-xl font-semibold text-brand-forest">Add-Ons</h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          Our tiered treatments already include their upgrades. These extras
          pair with any facial.
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

/* -------------------------
   PAGE
-------------------------- */

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
      {/* WIDE HERO (match Lashes page) */}
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
                From our Signature Glow treatments to advanced HydroDiamond® and
                microneedling, every treatment is customized to your skin type,
                concerns, and goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  60, 75 &amp; 90-minute tiers
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Custom plans by skin concern
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Upgrades built into every tier
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Facials <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/policy"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-brand-forest ring-1 ring-black/10 hover:bg-white"
                >
                  View Policies <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDER CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Sticky tabs (same pattern as Lashes) */}
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
        {active === "hydrodiamond" ? <HydroDiamondSection /> : null}
        {active === "microneedling" ? <MicroneedlingSection /> : null}
        {active === "addons" ? <AddOnsSection /> : null}

        {/* FAQ (at bottom like Lashes) */}
        <MiniFAQAccordion
          title="Facial & Skin Treatment FAQ"
          faqs={[
            {
              q: "Which facial should I choose?",
              a: "The Sunlit Glow (60 min) is great for maintenance and simple goals. The Velvet Glow (75 min) adds dermaplaning and a targeted mask for concerns like acne, pigment, or aging. The Golden Hour (90 min) is our most complete ritual and a great choice for first-time clients. Prefer HydroDiamond? Those tiers follow the same 60/75/90 pattern.",
            },
            {
              q: "Do I need to stop using retinol or active products before my facial?",
              a: "For most facials, we recommend pausing retinol, strong exfoliants, and acne prescriptions for 3–5 days before your visit. For advanced peels or microneedling, your provider may recommend a longer break.",
            },
            {
              q: "Is there downtime after a facial?",
              a: "Most facials have little to no downtime—your skin may look slightly flushed but generally radiant. Advanced services like microneedling may involve temporary redness, dryness, or light flaking.",
            },
            {
              q: "Can facials help with acne or dark spots?",
              a: "Yes. The Velvet Glow and our HydroDiamond® tiers target concerns like breakouts and uneven tone, and microneedling can support smoother texture and more even tone over a series of treatments.",
            },
            {
              q: "Can I wear makeup after my facial?",
              a: "For best results, we recommend avoiding makeup for the rest of the day so your skin can fully absorb the benefits. For advanced treatments, your provider will give you specific post-care instructions.",
            },
          ]}
        />
      </div>
    </div>
  );
}
