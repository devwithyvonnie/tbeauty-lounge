import { useEffect, useMemo, useState } from "react";
import MiniFAQAccordion from "../../components/MiniFAQ";

/* =========================
   UPDATED PRICES (per menu)
   ========================= */

// ✨ Waxing
const WAXING_SERVICES = [
  { id: "bikini", name: "Bikini", price: 39 },
  { id: "brazilian", name: "Brazilian", price: 56 },
  { id: "buttocks", name: "Buttocks", price: 45 },
  { id: "chest", name: "Chest", price: 45 },
  { id: "chin-sideburns", name: "Chin/Sideburns", price: 12 },
  { id: "eyebrow", name: "Eyebrow", price: 15 },
  { id: "full-arms", name: "Full Arms", price: 40 },
  { id: "full-back", name: "Full Back", price: 63 },

  { id: "lower-legs", name: "Lower Legs", price: 75 },
  { id: "upper-legs", name: "Upper Legs", price: 42 },
  { id: "hands-feet", name: "Hands/Feet", price: 10 },
  { id: "lip", name: "Lip", price: 7 },
  { id: "neck", name: "Neck", price: 15 },
  { id: "underarms", name: "Underarms", price: 22 },
  { id: "whole-face", name: "Whole Face", price: 59 },
];

// 🎨 Perm / Tint
const ENHANCEMENTS_SERVICES = [
  { id: "brow-lamination", name: "Brow Lamination", price: 70 },
  { id: "eyebrow-tint", name: "Eyebrow Tint", price: 35 },
  { id: "henna-tint", name: "Henna Tint", price: 45 },
  { id: "eyelash-perm", name: "Eyelash Perm", price: 80 },
  { id: "eyelash-tint", name: "Eyelash Tint", price: 35 },
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
  { id: "enhancements", label: "Perm / Tint" },
];

export default function WaxTintPage() {
  const defaultTab = TABS[0].id;
  const [active, setActive] = useState(defaultTab);
  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);

  // deep link support: /services/wax-tint#waxing or #enhancements
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
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                WAXING &amp; PERM / TINT
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Waxing + Brow &amp; Lash Enhancements
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Clean, polished, and confidence-boosting services—perfect alone
                or paired with lashes, facials, and PMU.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Quick appointments
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Brow shaping + definition
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  “No-makeup” finishing touches
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

        {/* TAB: WAXING */}
        {active === "waxing" ? (
          <section className="mt-6">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-brand-forest">
                  Waxing
                </h2>
                <p className="mt-1 text-sm text-brand-forest/80">
                  Choose a service below — pricing matches our current menu.
                </p>
              </div>
            </div>

            {/* 2-column price grid on mobile, 3-4 on larger screens */}
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {WAXING_SERVICES.map((svc) => (
                <PriceCard key={svc.id} name={svc.name} price={svc.price} accent="mint" />
              ))}
            </div>
          </section>
        ) : null}

        {/* TAB: ENHANCEMENTS */}
        {active === "enhancements" ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Perm / Tint
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Brow + lash enhancements for that finished look (even without makeup).
              </p>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ENHANCEMENTS_SERVICES.map((svc) => (
                <PriceCard key={svc.id} name={svc.name} price={svc.price} accent="gold" />
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
              <p className="text-sm font-semibold text-brand-forest">
                Want the “done” look with minimal makeup?
              </p>
              <p className="mt-1 text-sm text-brand-forest/80 max-w-3xl">
                Try a Brow Lamination + Tint for fluffy, defined brows, or a Lash
                Perm + Tint for a natural “no mascara” boost.
              </p>
            </div>
          </section>
        ) : null}

        {/* FAQ (bottom only, like you wanted) */}
        <MiniFAQAccordion title="Waxing & Tinting FAQ" faqs={WAX_TINT_FAQ} />

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Want brows and lashes that look finished even on makeup-free days?
            Book a <span className="font-medium">wax, tint, or lamination</span>{" "}
            and we’ll help you choose the right combo.
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

/* ---------- small presentational helper ---------- */

function PriceCard({ name, price, accent = "mint" }) {
  const bar =
    accent === "gold"
      ? "from-brand-gold via-brand-mint to-brand-gold"
      : "from-brand-mint via-brand-gold to-brand-mint";

  return (
    <article className="flex items-center justify-between gap-3 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className={`h-full w-1 bg-gradient-to-b ${bar}`} />
      <div className="flex w-full items-center justify-between p-4">
        <h3 className="text-sm md:text-base font-semibold text-brand-forest">
          {name}
        </h3>
        <div className="text-right">
          <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
            Price
          </p>
          <p className="text-base font-semibold text-brand-forest">${price}</p>
        </div>
      </div>
    </article>
  );
}
