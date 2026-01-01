import { useEffect, useMemo, useState } from "react";

const CATEGORIES = [
  {
    id: "lashes",
    title: "Eyelash Extensions",
    blurb:
      "From classic to mega volume, plus lash lifts & tints. Designed to enhance your eye shape with comfortable, long-wear results.",
    image:
      "/images/home/eyelash.png",
    duration: "90–120 mins",
    notes: "best in a series • low maintenance options",
    href: "/services/lashes",
  },
  {
    id: "skin",
    title: "Facials",
    blurb:
      "Our custom facials blend gentle exfoliation, targeted treatment masks, and soothing massage to calm inflammation and restore your natural glow. Whether you’re managing breakouts, dryness, or sensitivity, we tailor each step to your skin type and goals. Expect clean, non-irritating ingredients, quiet ambiance, and results you can see and feel—without downtime.",
    image:
      "/images/home/facial.png",
    duration: "60–120 mins",
    notes: "little to no downtime",
    href: "/services/facials",
  },
  {
    id: "injectables",
    title: "Cosmetic Injections",
    blurb:
      "Natural-looking neurotoxin and filler treatments performed by our FNP-C to soften lines, restore volume, and refine contours.",
    image:
      "/images/home/injectables.png",
    duration: "30–60 mins",
    notes: "results build over time • consultation included",
    href: "/services/injectables",
  },
  {
    id: "laser",
    title: "Laser Hair Removal",
    blurb:
      "Smooth, long-term reduction for face and body with packages for the areas you treat most.",
    image:
      "/images/home/laser.png",
    duration: "15–60 mins",
    notes: "series recommended • shave 24h prior",
    href: "/services/laser",
  },
  {
    id: "pmu",
    title: "Permanent Makeup",
    blurb:
      "Brow, liner, and lip enhancements that save time daily and keep your features softly defined.",
    image:
      "/images/home/permanentmakeup.png",
    duration: "2–3 hrs",
    notes: "includes follow-up • custom color mapping",
    href: "/services/pmu",
  },
  {
    id: "wellness",
    title: "IV Therapy & Weight Loss",
    blurb:
      "Provider-guided programs, metabolism support, and IV drips to help you feel balanced and energized.",
    image:
      "/images/home/ivtherapy.png",
    duration: "30–60 mins",
    notes: "lab-informed plans • monitored by provider",
    href: "/services/wellness",
  },
];

export default function FeaturedServiceTabs() {
  // Hash → preselect category (e.g., #injectables)
  const initial = useMemo(() => {
    const h = (typeof window !== "undefined" ? window.location.hash : "")
      .replace("#", "")
      .toLowerCase();
    return CATEGORIES.find((c) => c.id === h)?.id || "skin"; // default to Facials
  }, []);
  const [active, setActive] = useState(initial);

  useEffect(() => {
    // Update when hash changes (optional)
    const onHash = () => {
      const h = window.location.hash.replace("#", "");
      if (CATEGORIES.some((c) => c.id === h)) setActive(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section className="mx-auto w-11/12 max-w-6xl py-10">
      {/* Heading */}
      <div className="text-center">
        <p className="text-sm tracking-widest text-brand-forest/70">OUR SERVICES</p>
        <h2 className="mt-1 text-2xl font-semibold text-brand-forest">
          Where beauty meets science, tailored to your unique needs
        </h2>
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Service Categories"
        className="mt-5 flex flex-wrap justify-center gap-2"
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
              className={`rounded-full px-4 py-2 text-sm transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold
                ${
                  isActive
                    ? "bg-brand-forest text-white"
                    : "bg-brand-mint text-brand-forest hover:bg-brand-mint/80"
                }`}
            >
              {cat.title.split(" ")[0].includes("IV") ? cat.title : cat.title}
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="mt-6 grid items-stretch gap-6 md:grid-cols-[1fr_1.1fr]"
      >
        {/* Image card */}
        <div className="relative overflow-hidden rounded-[--radius-card]">
          <img
            src={current.image}
            alt={current.title}
            className="h-64 w-full object-cover md:h-full"
          />
        </div>

        {/* Copy card */}
        <div className="relative overflow-hidden rounded-[--radius-card] bg-white p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-brand-forest">
            {current.title}
          </h3>
          <p className="mt-3 max-w-prose text-brand-forest/85">{current.blurb}</p>

          {/* Badges row */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-[13px]">
            <span className="rounded-full bg-brand-mint px-3 py-1 text-brand-forest">
              {current.duration}
            </span>
            <span className="rounded-full bg-brand-mint px-3 py-1 text-brand-forest">
              {current.notes}
            </span>
          </div>

          <a
            href={current.href}
            className="mt-6 inline-block rounded-full bg-brand-forest px-5 py-2 text-sm text-white hover:brightness-110"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
