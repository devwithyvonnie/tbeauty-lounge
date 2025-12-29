export default function MembershipPreview() {
  const tiers = [
  {
    name: "Refresh",
    price: 149,
    discount: "10% off all services",
    perks: [
      "10% off products",
      "1/2 off Lash Touch Ups",
      "1/2 off Facials on Birthday",
    ],
  },
  {
    name: "Revitalize",
    price: 199,
    discount: "12% off all services",
    popular: true,
    perks: [
      "10% off products",
      "1/2 off Lash Touch Ups",
      "1/2 off Facials on Birthday",
    ],
  },
  {
    name: "Radiance Elite",
    price: 249,
    discount: "15% off all services",
    perks: [
      "10% off products",
      "1/2 off Lash Touch Ups",
      "1/2 off Facials on Birthday",
      "25 units of Daxxify on Birthday"
    ],
  },
];

  return (
    <section className="mx-auto w-11/12 max-w-6xl py-10" id="memberships">
      <div className="text-center">
        <p className="text-sm tracking-widest text-brand-forest/70">MEMBERSHIPS</p>
        <h2 className="mt-1 text-2xl font-semibold text-brand-forest">
          Intentional beauty, funded monthly
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-brand-forest/80">
          Each membership includes a monthly beauty credit you can use immediately or bank for up to 6 months,
          then your balance renews for a fresh transformation cycle.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <article
            key={t.name}
            className={`relative rounded-[--radius-card] border border-[--color-muted] bg-white p-6 md:p-7 ${
              t.popular ? "ring-2 ring-brand-gold/60" : ""
            }`}
          >
            {t.popular && (
              <span className="absolute left-0 top-0 rounded-br-xl bg-brand-gold px-3 py-1 text-xs font-semibold text-white">
                Popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-brand-forest">{t.name}</h3>
            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-brand-forest">${t.price}</span>
              <span className="text-sm text-brand-forest/70">/mo</span>
            </div>
            <p className="mt-1 text-sm text-brand-forest">{t.discount}</p>
            <ul className="mt-3 space-y-2 text-sm text-brand-forest/90">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="/Memberships"
          className="inline-block rounded-full bg-brand-forest px-6 py-3 text-white hover:brightness-110"
        >
          View Full Membership Details
        </a>
      </div>
    </section>
  );
}