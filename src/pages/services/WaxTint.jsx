import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

// ✨ Brow & face waxing
const WAXING_SERVICES = [
  {
    id: "brow-shape",
    name: "Brow Shaping & Wax",
    description:
      "Custom brow mapping, trim, and wax for clean, polished brows that suit your features.",
    price: 25,
    duration: "20–25 min",
  },
  {
    id: "brow-shape-tint",
    name: "Brow Shape, Wax & Tint",
    description:
      "Shape, wax, and tint combined for fuller-looking, defined brows with a soft makeup effect.",
    price: 40,
    duration: "30–35 min",
  },
  {
    id: "lip-wax",
    name: "Lip Wax",
    description: "Quick, gentle hair removal for the upper lip.",
    price: 12,
    duration: "10–15 min",
  },
  {
    id: "chin-wax",
    name: "Chin Wax",
    description: "Removes stray hairs for a smoother jawline.",
    price: 12,
    duration: "10–15 min",
  },
  {
    id: "lip-chin",
    name: "Lip & Chin Wax",
    description: "Bundled treatment for both lip and chin.",
    price: 20,
    duration: "15–20 min",
  },
  {
    id: "full-face",
    name: "Full Face Wax (excl. brows)",
    description:
      "Cheeks, jawline, and lip/chin area for a smoother overall complexion. Brows can be added on.",
    price: 45,
    duration: "30–40 min",
  },
];

// 🎨 Brow & lash enhancements
const TINTING_SERVICES = [
  {
    id: "brow-lamination",
    name: "Brow Lamination",
    description:
      "Smooths and redirects brow hairs for a fuller, fluffier look. Includes shaping and finishing.",
    price: 70,
    duration: "45–60 min",
  },
  {
    id: "brow-tint",
    name: "Brow Tint",
    description:
      "Tints the brow hairs to enhance shape and definition with a soft, natural finish.",
    price: 35,
    duration: "20–25 min",
  },
  {
    id: "henna-tint",
    name: "Henna Brow Tint",
    description:
      "Longer-lasting tint that stains both skin and hair for a bolder brow look.",
    price: 45,
    duration: "30–40 min",
  },
  {
    id: "lash-tint",
    name: "Lash Tint",
    description:
      "Darkens natural lashes to make them appear fuller and more defined without mascara.",
    price: 35,
    duration: "20–25 min",
  },
  {
    id: "lash-perm",
    name: "Lash Lift (Perm)",
    description:
      "Gently curls lashes from the base to open the eyes and enhance length.",
    price: 80,
    duration: "45–60 min",
  },
  {
    id: "lift-tint",
    name: "Lash Lift & Tint",
    description: "Combines a lash lift with tint for maximum “no-mascara” impact.",
    price: 95,
    duration: "60 min",
  },
];

const WAX_TINT_FAQ = [
  {
    q: "How long do waxing results last?",
    a: "Most guests enjoy 3–4 weeks of smoothness, depending on hair growth. With consistent visits, hair can grow back finer over time.",
  },
  {
    q: "How long do tints and lamination last?",
    a: "Brow tints typically last 2–4 weeks on the hairs, while lamination can last 4–6 weeks. Lash tints usually last about 3–4 weeks.",
  },
  {
    q: "Can I get waxed if I use retinoids or acne medication?",
    a: "If you are using prescription retinoids, Accutane, or have very sensitized skin, waxing may not be appropriate. Please mention all skincare and medications during your visit so we can advise safely.",
  },
  {
    q: "Do I need to grow my brows out before shaping?",
    a: "We recommend allowing some growth so we can see your natural brow pattern. Avoid tweezing for at least 2–3 weeks before your visit if possible.",
  },
];

const TABS = [
  { id: "waxing", label: "Waxing" },
  { id: "enhancements", label: "Enhancements" },
];

export default function WaxTintPage() {
  const defaultTab = TABS[0].id;
  const [active, setActive] = useState(defaultTab);
  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);

  // deep link support: /services/wax-tint#faq
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && tabSet.has(hash)) setActive(hash);
  }, [tabSet]);

  const onSelect = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`); // no scroll jump
  };

  return (
    <div className="py-8">
      {/* WIDE HERO (like lashes/facials) */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/wax-tint/hero.png"
            alt="Waxing and tinting services"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                WAXING &amp; TINTING
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Brow, Lash &amp; Face Waxing
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Shape, smooth, and define—whether you&apos;re looking for a simple
                clean-up or a polished, camera-ready finish.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Gentle waxing techniques
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Customized brow shaping
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Lash &amp; brow enhancement options
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=wax-tint"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Wax &amp; Tint
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
        {/* Sticky tabs (prevents scrolling back up) */}
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

        {/* TAB: WAXING */}
        {active === "waxing" ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Brow &amp; Face Waxing
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Clean, polished, and tailored to your features. Perfect as a
                stand-alone service or paired with facials and PMU.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {WAXING_SERVICES.map((svc) => (
                <ServiceCard key={svc.id} svc={svc} accent="mint" />
              ))}
            </div>
          </section>
        ) : null}

        {/* TAB: ENHANCEMENTS */}
        {active === "enhancements" ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Lash &amp; Brow Enhancements
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Lamination, tinting, and lifts to give your natural hair more
                presence—with or without makeup.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {TINTING_SERVICES.map((svc) => (
                <ServiceCard key={svc.id} svc={svc} accent="gold" />
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
              <p className="text-sm font-semibold text-brand-forest">
                Want the “done” look with minimal makeup?
              </p>
              <p className="mt-1 text-sm text-brand-forest/80 max-w-3xl">
                Try a Brow Lamination + Tint for fluffy, defined brows, or a Lash
                Lift + Tint for the most natural “no mascara” boost.
              </p>
            </div>
          </section>
        ) : null}

        {/* TAB: FAQ */}
        {active === "faq" ? (
          <section className="mt-6">
            <MiniFAQAccordion title="Waxing & Tinting FAQ" faqs={WAX_TINT_FAQ} />
          </section>
        ) : null}

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Want brows and lashes that look finished even on makeup-free days?
            Book a{" "}
            <span className="font-medium">brow, lash, or waxing appointment</span>{" "}
            and we&apos;ll help you choose the right combo.
          </p>
          <a
            href="/booking?service=wax-tint"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Wax &amp; Tint
          </a>
        </section>
      </div>
    </div>
  );
}

function ServiceCard({ svc, accent = "mint" }) {
  const bar =
    accent === "gold"
      ? "from-brand-gold via-brand-mint to-brand-gold"
      : "from-brand-mint via-brand-gold to-brand-mint";

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className={`h-1 bg-gradient-to-r ${bar}`} />
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-brand-forest">{svc.name}</h3>
            {svc.description ? (
              <p className="mt-1 text-sm text-brand-forest/80">{svc.description}</p>
            ) : null}

            {svc.duration ? (
              <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                  {svc.duration}
                </span>
              </div>
            ) : null}
          </div>

          <div className="ml-2 shrink-0 text-right text-sm">
            <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
              Starting at
            </p>
            <p className="text-base font-semibold text-brand-forest">${svc.price}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
