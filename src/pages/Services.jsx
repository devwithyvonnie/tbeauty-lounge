const SERVICE_CATS = [
  {
    id: 'lashes',
    eyebrow: 'EYELASH EXTENSIONS',
    title: 'Soft, customized, comfortable',
    blurb:
      'Classic, hybrid, volume, and mega sets tailored to your eye shape. Lash lifts & tints for a low-maintenance glow.',
    bullets: [
      'Classic / Hybrid / Volume / Mega',
      'Lash Lift & Tint options',
      'Sensitive-safe adhesive options',
    ],
    image: '/images/services/eyelash.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/lashes',
  },
  {
    id: 'skin',
    eyebrow: 'FACIALS & SKIN',
    title: 'Result-driven, calming care',
    blurb:
      'Custom facials, dermaplane, enzyme or light peels, LED therapy and more—built for your skin’s current needs.',
    bullets: [
      'Custom facials for every skin type',
      'Dermaplaning & specialty add-ons',
      'LED Light Therapy & targeted masks',
    ],
    image: '/images/services/facial.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/facials',
  },
  {
    id: 'wax',
    eyebrow: 'WAX & TINT',
    title: 'Clean, precise, confidence-boosting',
    blurb:
      'Smooth skin and polished brows with gentle waxing and custom tinting. Quick appointments with results you’ll love.',
    bullets: [
      'Brow shaping & facial waxing',
      'Brow tint / lash tint options',
      'Great add-on to lashes & facials',
    ],
    image: '/images/services/wax-tint.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/waxtint',
  },
  {
    id: 'fibroblast',
    eyebrow: 'FIBROBLAST',
    title: 'Lift + tighten without surgery',
    blurb:
      'Fibroblast (plasma) therapy targets areas like eyelids, under-eyes, smile lines, and neck to help firm and smooth the look of skin over time.',
    bullets: [
      'Great for eyelids, under-eyes & lines',
      'Consultation recommended for candidacy',
      'Aftercare is key for best results',
    ],
    image: '/images/services/fibroblast.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/fibroblast',
  },
  {
    id: 'injectables',
    eyebrow: 'INJECTABLES & FUNCTIONAL MEDICINE',
    title: 'Available on-site with an independent provider',
    blurb:
      'Neurotoxins, fillers, biostimulators, and functional medicine — provided at our Goodyear location by Teresa Le, MSN, FNP-C, of TAI Longevity & Aesthetics. Teresa handles her own scheduling, pricing, and payments; your T Beauty Lounge membership discount still applies.',
    bullets: [
      'Neurotoxins for fine lines & facial balancing',
      'PDO threads, filler & collagen-supporting treatments',
      'Functional medicine consultations & wellness support',
    ],
    image: '/images/services/injectables.png',
    bookHref: 'https://tailongevityaesthetics.janeapp.com/',
    bookExternal: true,
    menuHref: '/services/functional-medicine-and-aesthetics',
  },
  {
    id: 'laser',
    eyebrow: 'LASER HAIR REMOVAL',
    title: 'Smooth with less effort',
    blurb:
      'Face and body packages for the areas you treat most. Consults help choose the best plan for your skin & hair.',
    bullets: [
      'Small / medium / large areas',
      'Series pricing available',
      'Shave 24 hours prior; no waxing',
    ],
    image: '/images/services/laser.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/laser',
  },
  {
    id: 'pmu',
    eyebrow: 'PERMANENT MAKEUP',
    title: 'Wake up subtly polished',
    blurb:
      'Brows, liner, and lip blush designed to save time and keep features softly defined. Includes a perfecting visit when indicated.',
    bullets: [
      'Powder / Ombré Brows',
      'Lash-line enhancement',
      'Lip Blush with follow-up',
    ],
    image: '/images/services/permanentmakeup.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/pmu',
  },
  {
    id: 'headspa',
    eyebrow: 'JAPANESE HEAD SPA',
    title: 'Scalp health + deep relaxation',
    blurb:
      'A luxurious scalp-focused treatment designed to cleanse, rebalance, and soothe. Great for stress relief, buildup, dryness, or simply a reset.',
    bullets: [
      'Tailored products for your scalp type',
      'Deep cleanse + massage-based ritual',
      'Add-on friendly with facials',
    ],
    image: '/images/services/headspa.png',
    bookHref: 'https://www.vagaro.com/tbeautylounge/book-now',
    menuHref: '/services/headspa',
  },
];

function Eyebrow({ children }) {
  return (
    <p className="text-[11px] tracking-[0.22em] text-brand-forest/60">
      {children}
    </p>
  );
}

function ServiceCard({ s }) {
  return (
    <article
      id={s.id}
      className="scroll-mt-24 overflow-hidden rounded-[--radius-card] bg-white ring-1 ring-black/5 shadow-sm"
    >
      <div className="relative">
        <img
          src={s.image}
          alt={s.eyebrow}
          className="h-44 w-full object-cover sm:h-52"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
      </div>

      <div className="p-5">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="mt-2 text-lg md:text-xl font-semibold text-brand-forest">
          {s.title}
        </h2>
        <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
          {s.blurb}
        </p>

        {!!s.bullets?.length && (
          <ul className="mt-3 space-y-2 text-sm text-brand-forest/85">
            {s.bullets.map((li) => (
              <li key={li} className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/60" />
                <span className="leading-snug">{li}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={s.bookHref}
            {...(s.bookExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
            className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Now <span aria-hidden="true">→</span>
          </a>
          <a
            href={s.menuHref}
            className="inline-flex items-center gap-2 rounded-full border border-brand-gold px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
          >
            View Menu &amp; Pricing <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <div className="py-8">
      {/* HERO (consistent width + height) */}
      <section className="mx-auto w-[92%] max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/hero.png"
            alt="T Beauty Lounge services"
            className="h-[52vh] w-full object-cover md:h-[58vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/15" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-[92%] max-w-3xl">
              <p className="text-[11px] tracking-[0.25em] text-brand-forest/70">
                T BEAUTY LOUNGE • GOODYEAR, AZ
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Services designed around you
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Browse categories at a glance, then view the full menu and
                pricing.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.vagaro.com/tbeautylounge/book-now"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
                >
                  Book an Appointment
                </a>
                <a
                  href="/memberships"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/70 px-7 py-3 text-brand-forest font-semibold hover:bg-brand-cream/70"
                >
                  View Memberships
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARDS GRID */}
      <main className="mx-auto w-[92%] max-w-7xl py-6 md:py-8">
        <div className="grid gap-4 md:grid-cols-2">
          {SERVICE_CATS.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </main>
    </div>
  );
}
