import { useEffect, useMemo, useState } from "react";

const CATEGORIES = [
  {
    id: "lashes",
    title: "Eyelash Extensions",
    blurb:
      "From classic to mega volume, plus lash lifts & tints. Designed to enhance your eye shape with comfortable, long-wear results.",
    image: "/images/home/eyelash.png",
    duration: "90–120 mins",
    notes: "best in a series • low maintenance options",
    href: "/services/lashes",
  },
  {
    id: "skin",
    title: "Facials",
    blurb:
      "Our custom facials blend gentle exfoliation, targeted treatment masks, and soothing massage to calm inflammation and restore your natural glow. Whether you’re managing breakouts, dryness, or sensitivity, we tailor each step to your skin type and goals. Expect clean, non-irritating ingredients, quiet ambiance, and results you can see and feel—without downtime.",
    image: "/images/home/facial.png",
    duration: "60–120 mins",
    notes: "little to no downtime",
    href: "/services/facials",
  },
  {
    id: "injectables",
    title: "Injectables & Functional Medicine",
    blurb:
      "Neurotoxin, filler, and functional medicine treatments available on-site through Teresa Le, MSN, FNP-C, an independent nurse practitioner.",
    image: "/images/home/injectables.png",
    duration: "30–60 mins",
    notes: "results build over time • consultation included",
    href: "/services/functional-medicine-and-aesthetics",
  },
  {
    id: "laser",
    title: "Laser Hair Removal",
    blurb:
      "Smooth, long-term reduction for face and body with packages for the areas you treat most.",
    image: "/images/home/laser.png",
    duration: "15–60 mins",
    notes: "series recommended • shave 24h prior",
    href: "/services/laser",
  },
  {
    id: "pmu",
    title: "Permanent Makeup",
    blurb:
      "Brow, liner, and lip enhancements that save time daily and keep your features softly defined.",
    image: "/images/home/permanentmakeup.png",
    duration: "2–3 hrs",
    notes: "includes follow-up • custom color mapping",
    href: "/services/pmu",
  },
];

function Badge({ children }) {
  return (
    <span className="rounded-full bg-brand-mint/25 px-3 py-1 text-[11px] md:text-[13px] font-medium text-brand-forest ring-1 ring-brand-mint/30">
      {children}
    </span>
  );
}

export default function FeaturedServiceTabs() {
  // Hash → preselect category (e.g., #injectables)
  const initial = useMemo(() => {
    const h = (typeof window !== "undefined" ? window.location.hash : "")
      .replace("#", "")
      .toLowerCase();
    return CATEGORIES.find((c) => c.id === h)?.id || "skin";
  }, []);
  const [active, setActive] = useState(initial);

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (CATEGORIES.some((c) => c.id === h)) setActive(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-8 md:py-10">
      {/* Heading */}
      <div className="text-center">
        <p className="text-[11px] tracking-[0.22em] text-brand-forest/60">
          OUR SERVICES
        </p>
        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-brand-forest">
          Where beauty meets science,
          <br className="hidden sm:block" />
          tailored to your unique needs
        </h2>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Service Categories"
        className="mt-4 flex flex-wrap justify-center gap-2"
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${cat.id}`}
              id={`tab-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={[
                "rounded-full px-4 py-2 text-[12px] md:text-sm transition",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold",
                isActive
                  ? "bg-brand-forest text-white"
                  : "bg-brand-mint/25 text-brand-forest hover:bg-brand-mint/35",
              ].join(" ")}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Unified card (best on mobile). Splits into 2 columns on md+ */}
      <article
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="mt-6 overflow-hidden rounded-[--radius-card] bg-white shadow-sm ring-1 ring-black/5"
      >
        <div className="grid md:grid-cols-[1.1fr_1fr]">
          {/* Image */}
          <div className="relative">
            <img
              src={current.image}
              alt={current.title}
              className="h-56 w-full object-cover sm:h-64 md:h-full"
            />
            {/* optional gradient for polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
          </div>

          {/* Copy */}
          <div className="p-5 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-brand-forest">
              {current.title}
            </h3>

            <p className="mt-3 text-sm md:text-base text-brand-forest/85 leading-relaxed">
              {current.blurb}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>{current.duration}</Badge>
              <Badge>{current.notes}</Badge>
            </div>

            <a
              href={current.href}
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-forest px-5 py-2.5 text-sm font-medium text-white hover:brightness-110"
            >
              Explore {current.title}
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}
