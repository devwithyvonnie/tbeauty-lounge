import { useMemo, useState } from "react";

export default function MembershipPreview() {
  const tiers = useMemo(
    () => [
      {
        id: "refresh",
        name: "Refresh",
        price: 149,
        discount: "10% off all services & products",
        perks: [
          "½ off Lash Touch-Ups",
          "30% off Japanese Head Spa or Facial treatment + products during your birthday month",
        ],
      },
      {
        id: "revitalize",
        name: "Revitalize",
        price: 199,
        discount: "12% off all services & products",
        popular: true,
        perks: [
          "½ off Lash Touch-Ups",
          "40% off Japanese Head Spa or Facial treatment + products during your birthday month",
        ],
      },
      {
        id: "radiance",
        name: "Radiance Elite",
        price: 249,
        discount: "15% off all services & products",
        perks: [
          "½ off Lash Touch-Ups",
          "50% off Japanese Head Spa or Facial treatment + products during your birthday month",
        ],
      },
    ],
    []
  );

  const [activeId, setActiveId] = useState("revitalize");
  const active = tiers.find((t) => t.id === activeId) ?? tiers[0];

function TierCard({ t }) {
  return (
    <article
      className={`relative rounded-[--radius-card] border border-[--color-muted] bg-white p-6 md:p-7 shadow-sm ${
        t.popular ? "ring-2 ring-brand-gold/60" : "ring-1 ring-black/5"
      }`}
    >
      {t.popular && (
        <span className="absolute left-0 top-0 rounded-br-xl bg-brand-gold px-3 py-1 text-xs font-semibold text-white">
          Popular
        </span>
      )}

      <h3 className="text-lg font-semibold text-brand-forest">{t.name}</h3>

      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-3xl font-semibold text-brand-forest">
          ${t.price}
        </span>
        <span className="text-sm text-brand-forest/70">/mo</span>
      </div>

      <p className="mt-1 text-sm text-brand-forest">{t.discount}</p>

      {/* Value pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-brand-mint/25 px-3 py-1 text-[11px] font-medium text-brand-forest ring-1 ring-brand-mint/30">
          Monthly credit: ${t.price}
        </span>
        <span className="rounded-full bg-brand-mint/25 px-3 py-1 text-[11px] font-medium text-brand-forest ring-1 ring-brand-mint/30">
          Bank up to 6 months
        </span>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-brand-forest/90">
        {t.perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/60" />
            <span className="leading-snug">{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-8 md:py-10" id="memberships">
      <div className="text-center">
        <p className="text-[11px] tracking-[0.22em] text-brand-forest/60">
          MEMBERSHIPS
        </p>
        <h2 className="mt-2 text-xl md:text-2xl font-semibold text-brand-forest">
          Intentional beauty, funded monthly
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-brand-forest/80">
          Each membership includes a monthly beauty credit you can use immediately
          or bank for up to 6 months, then your balance renews for a fresh
          transformation cycle.
        </p>
      </div>

      {/* ---------- Mobile tabs (smaller screens) ---------- */}
      <div className="mt-5 md:hidden">
        <div
          role="tablist"
          aria-label="Membership tiers"
          className="flex flex-wrap justify-center gap-2"
        >
          {tiers.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(t.id)}
                className={[
                  "rounded-full px-4 py-2 text-[12px] transition",
                  isActive
                    ? "bg-brand-forest text-white"
                    : "bg-brand-mint/25 text-brand-forest hover:bg-brand-mint/35",
                ].join(" ")}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        <div className="mt-4">
          <TierCard t={active} />
        </div>
      </div>

      {/* ---------- Desktop grid (md+) ---------- */}
      <div className="mt-6 hidden md:grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <TierCard key={t.id} t={t} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="/memberships"
          className="inline-flex items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-medium text-white hover:brightness-110"
        >
          View Full Membership Details
        </a>
      </div>
    </section>
  );
}
