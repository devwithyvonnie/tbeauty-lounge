const MONTHLY_PROMOS = [
  {
    month: 'January',
    title: 'Hydration Reset',
    category: 'Facials',
    description:
      'Replenish dry, winter-stressed skin with a hydration-focused facial designed to restore glow and balance.',
    perks: ['Hydration Boost Facial', 'Complimentary LED Light Therapy'],
    serviceLink: '/services/facials',
    bookLink: '/booking?service=facials',
  },
  {
    month: 'February',
    title: 'Lip Love',
    category: 'Injectables',
    description:
      'Enhance your natural shape with expertly placed lip filler for soft, balanced results.',
    perks: ['$575 per syringe', 'While supplies last'],
    serviceLink: '/services/injectables',
    bookLink: '/booking?service=injectables',
  },
  {
    month: 'March',
    title: 'Smooth Start',
    category: 'Laser',
    description:
      'Kickstart smoother skin with laser hair removal—perfect timing before warmer months.',
    perks: ['Small Area Laser Special', 'Package incentives available'],
    serviceLink: '/services/laser',
    bookLink: '/booking?service=laser',
  },
  {
    month: 'April',
    title: 'Skin Renewal',
    category: 'Facials',
    description:
      'Target texture, tone, and fine lines with advanced skin renewal treatments.',
    perks: ['RF Microneedling bonus value', 'Limited availability'],
    serviceLink: '/services/facials',
    bookLink: '/booking?service=facials',
  },
  {
    month: 'May',
    title: 'Glow Season',
    category: 'Facials',
    description:
      'Get event-ready skin with our glow-boosting facial technology.',
    perks: ['HydraDiamond enhancement', 'Radiance-focused protocol'],
    serviceLink: '/services/facials',
    bookLink: '/booking?service=facials',
  },
  {
    month: 'June',
    title: 'Wellness Reset',
    category: 'Wellness',
    description:
      'Support your energy, immunity, and overall balance with personalized wellness services.',
    perks: ['IV Therapy credit', 'Wellness consultation'],
    serviceLink: '/services/wellness',
    bookLink: '/booking?service=wellness',
  },
];

export default function Promos() {
  const currentMonthIndex = new Date().getMonth();
  const promo = MONTHLY_PROMOS[currentMonthIndex % MONTHLY_PROMOS.length];

  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.3em] text-brand-forest/70">
          MONTHLY PROMOTION
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          {promo.month} Feature
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Thoughtfully curated offers designed to elevate your self-care.
        </p>
      </header>

      {/* FEATURED PROMO */}
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
        <div className="flex flex-col gap-4">
          <span className="text-xs uppercase tracking-wide text-brand-gold">
            {promo.category}
          </span>

          <h2 className="text-2xl font-semibold text-brand-forest">
            {promo.title}
          </h2>

          <p className="text-brand-forest/85">{promo.description}</p>

          <ul className="mt-2 space-y-2">
            {promo.perks.map((perk) => (
              <li key={perk} className="flex gap-2 text-sm text-brand-forest/85">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-forest" />
                {perk}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={promo.serviceLink}
              className="rounded-full border border-brand-forest px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream"
            >
              View Service
            </a>
            <a
              href={promo.bookLink}
              className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* ONGOING PROMOS */}
      <section className="mt-10">
        <h3 className="text-xl font-semibold text-brand-forest">
          Ongoing Offers
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {/* New Client Facial */}
          <PromoCard
            title="New Client Facial"
            description="Enjoy 10% off any facial service on your first visit."
            serviceLink="/services/facials"
            bookLink="/booking?service=facials"
          />

          {/* Lip Filler */}
          <PromoCard
            title="Lip Filler Special"
            description="$575 per syringe. While supplies last."
            serviceLink="/services/injectables"
            bookLink="/booking?service=injectables"
          />
        </div>
      </section>

      <p className="mt-6 text-xs text-brand-forest/70">
        Promotions expire at the end of each month and cannot be combined with
        other offers.
      </p>
    </div>
  );
}

function PromoCard({ title, description, serviceLink, bookLink }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h4 className="text-lg font-semibold text-brand-forest">{title}</h4>
      <p className="mt-1 text-sm text-brand-forest/80">{description}</p>

      <div className="mt-4 flex gap-3">
        <a
          href={serviceLink}
          className="text-sm text-brand-forest underline underline-offset-4"
        >
          View Service
        </a>
        <a
          href={bookLink}
          className="text-sm font-medium text-brand-forest"
        >
          Book Now →
        </a>
      </div>
    </div>
  );
}
