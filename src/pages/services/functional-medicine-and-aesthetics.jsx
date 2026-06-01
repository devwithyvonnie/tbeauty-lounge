import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

/** ---------------- DATA ---------------- */

const FUNCTIONAL_MEDICINE_SECTION = {
  id: "functional-medicine",
  name: "Functional Medicine",
  tagline:
    "Personalized, root-cause wellness care designed to support energy, hormones, metabolism, longevity, and overall health.",
  accent: "mint",
  variants: [
    {
      label: "Functional Medicine Consultation",
      priceDisplay: "$149",
      duration: "Consultation",
      note:
        "A personalized visit with Teresa to review your goals, symptoms, health history, and next steps.",
    },
    {
      label: "Comprehensive Lab Testing",
      priceDisplay: "$325",
      duration: "Labs",
      note:
        "Lab work helps guide a personalized wellness plan based on what your body actually needs.",
    },
  ],
  footnote:
    "Additional therapies, treatments, and wellness protocols are personalized and discussed during your consultation. Pricing for those services is available through the booking site or during your visit.",
};

const LONGEVITY_SECTION = {
  id: "longevity",
  name: "Longevity & Wellness",
  tagline:
    "Wellness treatments focused on optimizing how you feel, function, and age from the inside out.",
  accent: "gold",
  variants: [
    {
      label: "Bioidentical Hormone Support",
      priceDisplay: "Consult Required",
      duration: "Personalized plan",
      note:
        "Support for hormone-related concerns such as fatigue, mood changes, weight changes, and feeling out of balance.",
    },
    {
      label: "Peptide Therapy",
      priceDisplay: "Consult Required",
      duration: "Personalized plan",
      note:
        "Peptide protocols may support wellness goals such as recovery, metabolism, energy, and healthy aging.",
    },
    {
      label: "IV Therapy & Nutrient Support",
      priceDisplay: "Book for pricing",
      duration: "Varies",
      note:
        "Nutrient support may be recommended based on your symptoms, goals, and wellness plan.",
    },
    {
      label: "NAD+ Wellness Support",
      priceDisplay: "Book for pricing",
      duration: "Varies",
      note:
        "NAD+ support may be recommended for clients focused on energy, cellular wellness, and longevity.",
    },
    {
      label: "Regenerative Wellness",
      priceDisplay: "Consult Required",
      duration: "Personalized plan",
      note:
        "Advanced wellness options may be discussed during consultation depending on your goals and candidacy.",
    },
  ],
  footnote:
    "Functional medicine services are not one-size-fits-all. Teresa will recommend options based on your consultation, labs, and goals.",
};

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
        "Forehead, frown lines, crow’s feet, and more. Final dosing is determined during consultation.",
    },
    {
      label: "Daxxify",
      priceDisplay: "$9 / unit",
      duration: "30–45 min",
      note:
        "A long-lasting neurotoxin option. Final dosing is determined during consultation.",
    },
    {
      label: "Dysport",
      priceDisplay: "$5.25 / unit",
      duration: "30–45 min",
      note:
        "Alternative neurotoxin with a different unit conversion. Great for larger areas like the forehead.",
    },
  ],
  footnote:
    "Final dosing and total price are determined in consultation based on your anatomy, muscle movement, and goals.",
};

const FILLER_SECTION = {
  id: "fillers",
  name: "Fillers & Skin Boosters",
  tagline:
    "Subtle volume, contour, and hydration—focused on balanced, natural-looking results.",
  accent: "gold",
  variants: [
    {
      label: "RHA Fillers",
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
    "The number of syringes/treatments recommended varies by goals and starting anatomy. Your provider will review options before treatment.",
};

const REGENERATIVE_SECTION = {
  id: "regenerative-aesthetics",
  name: "Regenerative Aesthetics",
  tagline:
    "Support collagen, improve texture, and refine targeted areas with regenerative therapies and advanced options.",
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
      label: "PRF",
      priceDisplay: "$400",
      duration: "45–60 min",
      note:
        "Platelet-rich fibrin treatment to support skin quality and texture. Best in a series.",
    },
    {
      label: "PRF Hair",
      priceDisplay: "$550",
      duration: "60 min",
      note:
        "PRF injections to support hair density and scalp health. Typically performed in a series.",
    },
    {
      label: "Hair Exosomes",
      priceDisplay: "$1,600",
      duration: "60–75 min",
      note:
        "Advanced regenerative hair/scalp treatment. Plan is customized during consultation.",
    },
    {
      label: "Hair Exosomes Maintenance",
      priceDisplay: "$700",
      duration: "45–60 min",
      chips: ["Maintenance"],
      note:
        "Maintenance treatment pricing. Your provider will confirm timing and eligibility.",
    },
    {
      label: "Sculptra & Hyperdiluted Radiesse",
      priceDisplay: "$900",
      duration: "60 min",
      note:
        "Biostimulatory treatments to gradually support collagen and improve skin tone and firmness.",
    },
  ],
  footnote:
    "Most regenerative treatments are performed in a series for best results. Your provider will recommend a plan during your visit.",
};

const THREADS_SECTION = {
  id: "threads",
  name: "PDO Threads",
  tagline:
    "Collagen-stimulating threads to subtly lift, refine, and contour targeted areas.",
  accent: "gold",
  variants: [
    { label: "Full Face: Cheeks & Jawline", priceDisplay: "$3,500", duration: "75–90 min" },
    { label: "Cheeks", priceDisplay: "$1,800", duration: "60–75 min" },
    { label: "Jawline", priceDisplay: "$2,000", duration: "60–75 min" },
    { label: "Forehead / Brows", priceDisplay: "$1,500", duration: "45–60 min" },
    { label: "Cat Eyes", priceDisplay: "$1,000", duration: "45–60 min" },
    { label: "Nose", priceDisplay: "$1,500", duration: "45–60 min" },
    { label: "Neck", priceDisplay: "$2,000", duration: "60–75 min" },
    { label: "Lips", priceDisplay: "$500", duration: "45–60 min" },
  ],
  footnote:
    "A consultation is required to confirm candidacy, thread type, and a personalized treatment plan.",
};

const SECTIONS = [
  FUNCTIONAL_MEDICINE_SECTION,
  LONGEVITY_SECTION,
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

                    <dd className="shrink-0 text-right text-sm font-semibold text-brand-forest">
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
  const defaultTab = SECTIONS[0]?.id ?? "functional-medicine";
  const [active, setActive] = useState(defaultTab);

  const sectionMap = useMemo(() => {
    const m = new Map();
    SECTIONS.forEach((s) => m.set(s.id, s));
    return m;
  }, []);

  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && sectionMap.has(hash)) setActive(hash);
  }, [sectionMap]);

  const current = sectionMap.get(active) ?? SECTIONS[0];

  const onSelect = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="py-8">
      {/* HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/injectables/hero.png"
            alt="Functional medicine and aesthetics"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-brand-cream/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                FUNCTIONAL MEDICINE & AESTHETICS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Functional Medicine & Aesthetics
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Personalized wellness care and natural-looking aesthetic
                treatments by Teresa Le, FNP-C — designed to help you look,
                feel, and function your best from the inside out.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Functional medicine
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Hormone & longevity support
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Cosmetic injectables
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Natural-focused results
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.vagaro.com/tbeautylounge/book-now"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book with Teresa
                </a>

                <a
                  href="#functional-medicine"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelect("functional-medicine");
                  }}
                  className="rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-brand-forest ring-1 ring-black/10 hover:bg-white"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">

        {/* Sticky tabs */}
        <section>
          <div className="sticky top-3 z-20">
            <div className="rounded-2xl bg-white/85 p-3 shadow-sm ring-1 ring-black/5 backdrop-blur">
              <div className="-mx-1 overflow-x-auto">
                <div className="flex min-w-max gap-2 px-1">
                  {SECTIONS.map((s) => {
                    const isActive = s.id === active;

                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelect(s.id)}
                        className={[
                          "whitespace-nowrap rounded-full px-4 py-2 text-sm transition",
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

        <PricingBlock section={current} />

        <MiniFAQAccordion
  title="Functional Medicine & Aesthetics FAQ"
  faqs={[
    {
      q: "What is functional medicine?",
      a: "Functional medicine focuses on identifying possible root causes behind symptoms instead of only addressing surface concerns. Teresa may use consultation, health history, lab work, and personalized planning to support your wellness goals.",
    },
    {
      q: "What are neurotoxins used for?",
      a: "Neurotoxins may help soften the appearance of fine lines and wrinkles caused by repeated facial movements. Common treatment areas include the forehead, frown lines, crow’s feet, and other areas discussed during your consultation.",
    },
    {
      q: "What are PDO threads?",
      a: "PDO threads are minimally invasive treatments designed to help support, lift, and stimulate collagen production in targeted areas of the face or body. Teresa will recommend the best approach based on your goals and facial structure.",
    },
    {
      q: "How long do aesthetic treatment results last?",
      a: "Results vary depending on the treatment, lifestyle, and individual response. Neurotoxin treatments typically last several months, while collagen-supporting treatments like PDO threads may continue improving over time.",
    },
    {
      q: "Can I combine injectables with functional medicine?",
      a: "Yes. Many clients choose to combine aesthetic treatments with wellness support for a more complete inside-out approach.",
    },
  ]}
/>
      </div>
    </div>
  );
}