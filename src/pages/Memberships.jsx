export default function Memberships() {
  const tiers = [
  {
    id: "refresh",
    name: "Refresh",
    price: 149,
    discount: "10% off all services",
    perks: [
      "1 free B-12 shot / month",
      "10% off products",
      "LED Light Therapy with facial",
      "Free eyebrow wax",
    ],
    note: "Best for monthly skin maintenance",
  },
  {
    id: "revitalize",
    name: "Revitalize",
    price: 199,
    discount: "12% off all services",
    popular: true,
    perks: [
      "1 free B-12 shot / month",
      "10% off products",
      "LED Light Therapy with facial",
      "Free eyebrow & lip wax",
    ],
    note: "Balanced savings + perks",
  },
  {
    id: "radiance-elite",
    name: "Radiance Elite",
    price: 249,
    discount: "15% off all services",
    perks: [
      "2 free B-12 shots / month",
      "10% off products",
      "LED Light Therapy with facial",
      "1 free small-area laser hair removal",
    ],
    note: "Max benefits for ongoing transformation",
  },
];

  return (
    <div className="mx-auto w-11/12 max-w-6xl py-10">
      {/* Lead-in */}
      <header className="text-center">
        <p className="text-sm tracking-widest text-brand-forest/70">MEMBERSHIP PROGRAM</p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest">
          Intentional beauty, funded monthly
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-brand-forest/80">
          Each month, your chosen tier deposits a beauty credit into your account. Use it on any service
          with member pricing, or bank your balance for up to 6 months toward bigger treatments.
          Designed as a 6-month transformation commitment, then renews for your next cycle.
        </p>
        <div className="mt-5 inline-flex gap-2 rounded-full bg-brand-mint px-4 py-2 text-sm text-brand-forest">
          <span>✔ Bank up to 6 months</span>
          <span>·</span>
          <span>✔ Member pricing on all services</span>
          <span>·</span>
          <span>✔ VIP wellness boosts</span>
        </div>
      </header>

      {/* Tiers */}
      <section className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <article
            key={t.id}
            id={t.id}
            className={`relative rounded-[--radius-card] border border-[--color-muted] bg-white p-6 md:p-7 ${
              t.popular ? "ring-2 ring-brand-gold/60" : ""
            }`}
          >
            {t.popular && (
              <span className="absolute left-0 top-0 rounded-br-xl bg-brand-gold px-3 py-1 text-xs font-semibold text-white">
                Popular
              </span>
            )}
            <h2 className="text-lg font-semibold text-brand-forest">{t.name}</h2>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-brand-forest">${t.price}</span>
              <span className="text-sm text-brand-forest/70">/mo</span>
            </div>
            <p className="mt-1 text-sm text-brand-forest">{t.discount}</p>

            <ul className="mt-4 space-y-2 text-sm text-brand-forest/90">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {t.note && <p className="mt-3 text-xs text-brand-forest/70">{t.note}</p>}

            <a
              href={`/booking?plan=${t.id}`}
              className="mt-5 inline-block w-full rounded-full bg-brand-forest px-5 py-2 text-center text-sm font-medium text-white hover:brightness-110"
            >
              Start My Membership
            </a>
          </article>
        ))}
      </section>

      {/* How it works */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "1) Choose your tier",
            copy:
              "Pick Refresh, Revitalize, or Radiance Elite. Your beauty credit auto-deposits monthly.",
          },
          {
            title: "2) Book or bank",
            copy:
              "Use your credit on any service with member pricing, or bank it for up to six months.",
          },
          {
            title: "3) Transform intentionally",
            copy:
              "Build toward bigger treatments on your timeline. We’ll help plan your journey every cycle.",
          },
        ].map((s) => (
          <div key={s.title} className="rounded-[--radius-card] bg-brand-mint/50 p-6">
            <h3 className="text-base font-semibold text-brand-forest">{s.title}</h3>
            <p className="mt-2 text-sm text-brand-forest/85">{s.copy}</p>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-brand-forest">Membership FAQ</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {[
            {
              q: "Do credits expire?",
              a: "Credits roll for up to 6 months, then your balance renews for a new cycle. We send reminders before renewal.",
            },
            {
              q: "Is there a contract?",
              a: "Memberships are designed as a 6-month commitment to support real transformation. After 6 months, you can renew or switch tiers.",
            },
            {
              q: "Can I use credits on any service?",
              a: "Yes—credits apply toward any service, with your membership discount applied at checkout.",
            },
            {
              q: "What if I miss a month?",
              a: "No problem—your credits bank automatically within the 6-month window.",
            },
          ].map((f) => (
            <details key={f.q} className="rounded-[--radius-card] border border-[--color-muted] bg-white p-5">
              <summary className="cursor-pointer text-base font-medium text-brand-forest">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-brand-forest/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Terms / fine print */}
      <p className="mt-8 text-center text-xs text-brand-forest/70">
        Discounts apply to regularly priced services. Credits non-transferable. Unused credits reset every 6 months.
        Laser area limited to select small zones. See full policy at booking.
      </p>
    </div>
  );
}
