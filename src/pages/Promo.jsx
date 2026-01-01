const MAINTENANCE = true;

/* Keep your promo data here so you don't lose anything */
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
    heroImage: '/images/promos/january-hydration.jpg',
    thumbImage: '/images/categories/facials.jpg',
    alt: 'Hydrating facial treatment',
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
    description: 'Get event-ready skin with our glow-boosting facial technology.',
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

function MaintenanceLayout({
  eyebrow = 'PAGE UPDATE',
  title,
  subtitle,
  image = '/images/promos/promo-hero.jpg',
  primaryCta = { label: 'Back to Home', href: '/' },
  secondaryCta = { label: 'View Services', href: '/services' },
  note,
}) {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      <section className="relative overflow-hidden rounded-3xl ring-1 ring-black/5">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-brand-cream/90 via-brand-cream/80 to-white/70"
          aria-hidden="true"
        />

        <div className="relative p-6 md:p-10">
          <p className="text-sm tracking-[0.25em] text-brand-forest/70">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-brand-forest leading-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-brand-forest/85">{subtitle}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={primaryCta.href}
              className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className="rounded-full border border-brand-forest/30 bg-white/70 px-5 py-2 text-sm text-brand-forest hover:bg-white"
            >
              {secondaryCta.label}
            </a>
          </div>

          {note ? (
            <p className="mt-4 text-xs text-brand-forest/65">{note}</p>
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default function Promos() {
  if (MAINTENANCE) {
    return (
      <MaintenanceLayout
        eyebrow="PROMOS"
        title="Promotions are getting a refresh"
        subtitle="We’re updating this page with new seasonal offers and cleaner details. Check back after the holidays for the next round of curated specials."
        image="/images/promos/january-hydration.jpg"
        primaryCta={{ label: 'Back to Home', href: '/' }}
        secondaryCta={{ label: 'Browse Services', href: '/services' }}
        note="Tip: promotions are time-sensitive and may change—thank you for your patience while we update this page."
      />
    );
  }

  // // ---- Your original page (kept, just below) ----
  // const currentMonthIndex = new Date().getMonth();
  // const promo = MONTHLY_PROMOS[currentMonthIndex % MONTHLY_PROMOS.length];

  // return (
  //   <div className="mx-auto w-11/12 max-w-5xl py-8">
  //     {/* HEADER */}
  //     <header>
  //       <p className="text-sm tracking-[0.3em] text-brand-forest/70">
  //         MONTHLY PROMOTION
  //       </p>
  //       <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
  //         {promo.month} Feature
  //       </h1>
  //       <p className="mt-3 max-w-2xl text-brand-forest/85">
  //         Thoughtfully curated offers designed to elevate your self-care.
  //       </p>
  //     </header>

  //     {/* FEATURED PROMO */}
  //     <section className="mt-8 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
  //       {/* IMAGE */}
  //       <div className="relative h-56 w-full md:h-72">
  //         <img
  //           src={promo.heroImage}
  //           alt={promo.alt || `${promo.title} promotion`}
  //           className="h-full w-full object-cover"
  //           loading="lazy"
  //         />
  //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

  //         <div className="absolute left-5 top-5">
  //           <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-brand-forest ring-1 ring-black/5 backdrop-blur">
  //             {promo.month} • {promo.category}
  //           </span>
  //         </div>
  //       </div>

  //       {/* CONTENT */}
  //       <div className="p-6">
  //         <div className="flex flex-col gap-4">
  //           <span className="text-xs uppercase tracking-wide text-brand-gold">
  //             {promo.category}
  //           </span>

  //           <h2 className="text-2xl font-semibold text-brand-forest">
  //             {promo.title}
  //           </h2>
  //           <p className="text-brand-forest/85">{promo.description}</p>

  //           <ul className="mt-2 space-y-2">
  //             {promo.perks.map((perk) => (
  //               <li key={perk} className="flex gap-2 text-sm text-brand-forest/85">
  //                 <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-brand-forest" />
  //                 {perk}
  //               </li>
  //             ))}
  //           </ul>

  //           <div className="mt-4 flex flex-wrap gap-3">
  //             <a
  //               href={promo.serviceLink}
  //               className="rounded-full border border-brand-forest px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream"
  //             >
  //               View Service
  //             </a>
  //             <a
  //               href={promo.bookLink}
  //               className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
  //             >
  //               Book Now
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </section>

  //     <p className="mt-6 text-xs text-brand-forest/70">
  //       Promotions expire at the end of each month and cannot be combined with
  //       other offers.
  //     </p>

  //     {/* ONGOING PROMOS */}
  //     <section className="mt-10">
  //       <h3 className="text-xl font-semibold text-brand-forest">Ongoing Offers</h3>

  //       <div className="mt-4 grid gap-4 md:grid-cols-2">
  //         <PromoCard
  //           title="New Client Facial"
  //           description="Enjoy 10% off any facial service on your first visit."
  //           serviceLink="/services/facials"
  //           bookLink="/booking?service=facials"
  //           image="/images/ongoing/new-client-facial.jpg"
  //           alt="Client enjoying a facial treatment"
  //         />

  //         <PromoCard
  //           title="Lip Filler Special"
  //           description="$575 per syringe. While supplies last."
  //           serviceLink="/services/injectables"
  //           bookLink="/booking?service=injectables"
  //           image="/images/ongoing/new-client-facial.jpg"
  //           alt="Client enjoying a facial treatment"
  //         />
  //       </div>
  //     </section>
  //   </div>
  // );
}

function PromoCard({ title, description, serviceLink, bookLink, image, alt }) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {image ? (
        <div className="h-36 w-full">
          <img
            src={image}
            alt={alt || title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="p-5">
        <h4 className="text-lg font-semibold text-brand-forest">{title}</h4>
        <p className="mt-1 text-sm text-brand-forest/80">{description}</p>

        <div className="mt-4 flex gap-3">
          <a
            href={serviceLink}
            className="text-sm text-brand-forest underline underline-offset-4"
          >
            View Service
          </a>
          <a href={bookLink} className="text-sm font-medium text-brand-forest">
            Book Now →
          </a>
        </div>
      </div>
    </div>
  );
}
