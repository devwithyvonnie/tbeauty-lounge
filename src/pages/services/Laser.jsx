// src/pages/services/Laser.jsx
import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

/** ---------------- DATA ---------------- */

// 🌈 Skin rejuvenation (non–hair-removal)
const SKIN_REJUVENATION = [
  {
    id: "ipl",
    name: "IPL",
    description:
      "Intense Pulsed Light to target pigment, redness, and overall tone.",
    price: 300,
    duration: "30–45 min",
  },
  {
    id: "pigmented-lesion",
    name: "Pigmented Lesion",
    description: "Spot treatment for isolated dark spots and sun damage.",
    price: 220,
    duration: "20–30 min",
  },
  {
    id: "rf-microneedling-peel",
    name: "RF Microneedling & Chemical Peel",
    description:
      "Combination of radiofrequency microneedling and a customized peel for deeper texture and tone improvement.",
    price: 775,
    duration: "75–90 min",
    packageLabel: "Package of 3",
    packagePrice: 2092.5,
  },
  {
    id: "skin-revitalization",
    name: "Skin Revitalization",
    description:
      "Helps improve texture, fine lines, and dullness with targeted light energy.",
    price: 320,
    duration: "45–60 min",
  },
];

// 🦵 Laser hair removal – area groupings (single + package of 5)
const LHR_AREAS = {
  small: {
    label: "Small Area",
    price: 70,
    packageSessions: 5,
    packagePrice: 315,
    duration: "15–30 min",
    areas: [
      "Upper Lip",
      "Nose",
      "Chin",
      "Hands / Feet / Areola",
      "Happy Trail",
      "Sideburns",
    ],
  },
  medium: {
    label: "Medium Area",
    price: 90,
    packageSessions: 5,
    packagePrice: 405,
    duration: "20–40 min",
    areas: [
      "Inner Thigh",
      "Bikini",
      "Underarms",
      "Neck (Front or Back)",
      "Jawline",
      "Upper OR Lower Arm",
    ],
  },
  large: {
    label: "Large Area",
    price: 135,
    packageSessions: 5,
    packagePrice: 607.5,
    duration: "30–60 min",
    areas: ["Brazilian", "Abs or Chest", "Shoulders", "Full Arms", "Full Face"],
  },
  extraLarge: {
    label: "Extra Large Area",
    price: 210,
    packageSessions: 5,
    packagePrice: 945,
    duration: "45–75 min",
    areas: [
      "Full Back",
      "Full Chest",
      "Full Legs",
      "Buttocks",
      "Upper OR Lower Legs",
      "Upper OR Lower Back",
    ],
  },
};

// 🎯 Laser tattoo removal – single + packages
const TATTOO_REMOVAL = {
  name: "Laser Tattoo Removal",
  tagline:
    "Laser-based removal to gradually fade unwanted tattoos over a series of sessions.",
  sizes: [
    { label: 'Small (2" x 2")', single: 90, pkg6: 513, pkg9: 729, pkg12: 918 },
    { label: 'Medium (3" x 3")', single: 120, pkg6: 684, pkg9: 972, pkg12: 1224 },
    { label: 'Large (4" x 4")', single: 150, pkg6: 855, pkg9: 1215, pkg12: 1530 },
    { label: 'Extra Large (5" x 5" or bigger)', single: 200, pkg6: 1140, pkg9: 1620, pkg12: 2040 },
  ],
};

const money = (n) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

/** --------- TABS --------- */
const TABS = [
  { id: "hair-removal", label: "Laser Hair Removal" },
  { id: "tattoo", label: "Tattoo Removal" },
  { id: "skin", label: "Skin Rejuvenation" },
];

/** ---------------- UI HELPERS ---------------- */

function AccentBar({ accent = "mint" }) {
  const cls =
    accent === "gold"
      ? "bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold"
      : "bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint";
  return <div className={`h-1 ${cls}`} />;
}

function BulletList({ items }) {
  return (
    <ul className="mt-3 grid gap-x-4 gap-y-1 text-sm text-brand-forest/85 sm:grid-cols-2">
      {items.map((a) => (
        <li key={a} className="flex gap-2">
          <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}

/** ---------------- SECTIONS ---------------- */

function HairRemovalSection() {
  const groups = Object.values(LHR_AREAS);

  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          Laser Hair Removal Areas
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          Pricing is based on area size. Single-session and package pricing are listed.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {groups.map((group, idx) => (
          <article
            key={group.label}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <AccentBar accent={idx % 2 === 0 ? "gold" : "mint"} />

            <div className="flex flex-1 flex-col p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-brand-forest">
                    {group.label}
                  </h3>

                  <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                    <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                      {group.duration}
                    </span>
                    <span className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90">
                      Single + package options
                    </span>
                  </div>
                </div>

                <div className="ml-2 shrink-0 text-right">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                      Single
                    </p>
                    <p className="text-base font-semibold text-brand-forest">
                      {money(group.price)}
                    </p>
                  </div>

                  <div className="mt-2">
                    <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                      Package of {group.packageSessions}
                    </p>
                    <p className="text-sm font-semibold text-brand-forest">
                      {money(group.packagePrice)}
                    </p>
                  </div>
                </div>
              </div>

              <BulletList items={group.areas} />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-brand-forest/70">
        Packages are great for guests committed to a full series. Your provider will recommend a plan
        based on hair density, skin type, and the treatment area.
      </p>
    </section>
  );
}

function TattooRemovalSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          {TATTOO_REMOVAL.name}
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">{TATTOO_REMOVAL.tagline}</p>
      </div>

      <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <AccentBar accent="mint" />
        <div className="p-4 md:p-5">
          <div className="rounded-xl bg-brand-cream/70 px-3 py-3 overflow-x-auto">
            <table className="w-full text-sm text-brand-forest/90">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-wide text-brand-forest/70">
                  <th className="py-1 pr-2">Size</th>
                  <th className="py-1 px-2 whitespace-nowrap">Single</th>
                  <th className="py-1 px-2 whitespace-nowrap">Pkg of 6</th>
                  <th className="py-1 px-2 whitespace-nowrap">Pkg of 9</th>
                  <th className="py-1 px-2 whitespace-nowrap">Pkg of 12</th>
                </tr>
              </thead>
              <tbody>
                {TATTOO_REMOVAL.sizes.map((s) => (
                  <tr key={s.label} className="border-t border-brand-cream/80">
                    <td className="py-2 pr-2">{s.label}</td>
                    <td className="py-2 px-2 font-semibold">{money(s.single)}</td>
                    <td className="py-2 px-2 font-semibold">{money(s.pkg6)}</td>
                    <td className="py-2 px-2 font-semibold">{money(s.pkg9)}</td>
                    <td className="py-2 px-2 font-semibold">{money(s.pkg12)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-3 text-xs text-brand-forest/65">
            Sessions needed vary by ink color, depth, tattoo age, and skin. We’ll estimate your plan after evaluating the area.
          </p>
        </div>
      </article>
    </section>
  );
}

function SkinRejuvenationSection() {
  return (
    <section className="mt-6">
      <div>
        <h2 className="text-xl font-semibold text-brand-forest">
          Skin Rejuvenation
        </h2>
        <p className="mt-1 text-sm text-brand-forest/80">
          IPL and advanced light-based treatments to target pigment, redness, texture, and overall tone.
        </p>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {SKIN_REJUVENATION.map((item, idx) => (
          <article
            key={item.id}
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
          >
            <AccentBar accent={idx % 2 === 0 ? "mint" : "gold"} />

            <div className="flex flex-1 flex-col p-4 md:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-brand-forest">
                    {item.name}
                  </h3>
                  {item.description ? (
                    <p className="mt-1 text-sm text-brand-forest/80">
                      {item.description}
                    </p>
                  ) : null}

                  {item.duration ? (
                    <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                      <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                        {item.duration}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className="ml-2 shrink-0 text-right">
                  <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                    Single
                  </p>
                  <p className="text-base font-semibold text-brand-forest">
                    {money(item.price)}
                  </p>

                  {item.packagePrice ? (
                    <div className="mt-2">
                      <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                        {item.packageLabel}
                      </p>
                      <p className="text-sm font-semibold text-brand-forest">
                        {money(item.packagePrice)}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/** ---------------- PAGE ---------------- */

export default function LaserPage() {
  const defaultTab = TABS[0].id;
  const [active, setActive] = useState(defaultTab);

  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);

  // Allow deep links like /services/laser#tattoo
  useEffect(() => {
    const hash = (window.location.hash || "").replace("#", "");
    if (hash && tabSet.has(hash)) setActive(hash);
  }, [tabSet]);

  const onSelect = (id) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/laser/hero.png"
            alt="Laser treatments"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                LASER &amp; LIGHT TREATMENTS
              </p>
              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Laser Hair Removal &amp; Skin Rejuvenation
              </h1>
              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Long-term hair reduction, light-based skin treatments, and laser
                tattoo removal designed to smooth, brighten, and refine—always
                with a focus on safety and your comfort.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Medical-grade laser &amp; light devices
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Series-based treatment plans
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Customized to skin type &amp; area
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=laser"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Laser
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
        {/* Sticky tabs (same upgrade as lashes/facials) */}
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
        {active === "hair-removal" ? <HairRemovalSection /> : null}
        {active === "tattoo" ? <TattooRemovalSection /> : null}
        {active === "skin" ? <SkinRejuvenationSection /> : null}

        {/* FAQ (at bottom like lashes: not a tab) */}
        <MiniFAQAccordion
          title="Laser & Light Treatment FAQ"
          faqs={[
            {
              q: "How many laser hair removal sessions will I need?",
              a: "Most guests need a series of 6–8 sessions spaced several weeks apart, depending on the area, hair density, and hair growth cycle. Some may benefit from occasional maintenance treatments over time.",
            },
            {
              q: "Do I need to shave before my appointment?",
              a: "Yes—closely shave the treatment area about 24 hours before your visit. Avoid waxing, plucking, or threading for several weeks before starting a series.",
            },
            {
              q: "Can I get laser if I have a tan or deeper skin tone?",
              a: "Safety first. Certain devices and settings work best for certain skin tones. We’ll assess your skin and advise the safest plan, which may include avoiding recent sun or self-tanner.",
            },
            {
              q: "What does laser feel like?",
              a: "Most guests describe it as a quick rubber-band snap with brief heat. Some areas are more sensitive than others, but treatments are generally fast and well-tolerated.",
            },
          ]}
        />
      </div>
    </div>
  );
}
