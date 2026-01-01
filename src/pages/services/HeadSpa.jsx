import MiniFAQAccordion from "../../components/MiniFAQ";

const HEAD_SPA_SERVICES = [
  {
    id: "purifying",
    name: "Purifying Scalp Spa",
    tagline: "Cleansing + scalp refresh to reset and unwind.",
    description:
      "Includes a scalp analysis, deep cleanse, and conditioning using products customized to your scalp type, plus a relaxing scalp massage to support circulation and scalp health.",
    duration: "30 min",
    price: 60,
    badge: "",
  },
  {
    id: "botanical",
    name: "Botanical Oasis",
    tagline: "A botanical ritual for hydration + calm.",
    description:
      "Includes a scalp analysis, gentle exfoliation, and nourishing botanical products suited for all scalp types, finished with customized care and a soothing scalp massage.",
    duration: "60 min",
    price: 80,
    badge: "Most popular",
  },
  {
    id: "radiant",
    name: "Radiant Scalp Spa",
    tagline: "Deeper ritual for glow, circulation, and tension relief.",
    description:
      "Includes everything in the Purifying Scalp Spa using products tailored to your scalp type, plus extended massage, warm steam therapy, and aromatics to enhance relaxation and circulation.",
    duration: "90 min",
    price: 135,
    badge: "Deep relaxation",
  },
];

const HEAD_SPA_ADDONS = [
  {
    id: "mini-facial",
    name: "Mini Facial (Add-On)",
    tagline: "Add-on glow boost to pair with any head spa service.",
    description:
      "Includes cleansing, exfoliation, mask, and finishing products to refresh and brighten the skin while you relax.",
    duration: "30 min",
    price: 45,
    badge: "Add-on",
  },
];

function ServiceCard({ item }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-4">
          {/* LEFT */}
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-brand-forest">
              {item.name}
            </h3>

            {item.tagline && (
              <p className="mt-1 text-sm text-brand-forest/80">{item.tagline}</p>
            )}

            {item.description && (
              <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Best for (keeps it short, avoids “gap” issues) */}
            {item.bestFor?.length ? (
              <p className="mt-2 text-xs text-brand-forest/70">
                <span className="font-medium text-brand-forest/80">
                  Best for:
                </span>{" "}
                {item.bestFor.join(", ")}
              </p>
            ) : null}

            {/* Chips */}
            <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
              {item.duration && (
                <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                  {item.duration}
                </span>
              )}
            </div>
          </div>

          {/* RIGHT (prices on the right like other pages) */}
          <div className="shrink-0 text-right">
            {item.badge ? (
              <span className="mb-2 inline-block rounded-full bg-brand-gold/10 px-3 py-1 text-[11px] font-medium text-brand-forest whitespace-nowrap">
                {item.badge}
              </span>
            ) : null}

            <p className="text-xs uppercase tracking-wide text-brand-forest/60">
              Starting at
            </p>
            <p className="text-base font-semibold text-brand-forest">
              ${item.price}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HeadSpaPage() {
  return (
    <div className="py-8">
      {/* WIDE HERO (matches lashes/facials) */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/headspa/hero.png"
            alt="Japanese head spa treatment"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                WELLNESS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Japanese Head Spa
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Deep relaxation for the mind with scalp-focused care that supports
                circulation, tension relief, and overall comfort—customized to
                your scalp type and goals.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Scalp + circulation support
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Deep relaxation
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Customized by scalp type
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=headspa"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Head Spa
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
        {/* MAIN MENU */}
        <section className="mt-10">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              Head Spa Menu
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Choose your ritual — your provider will tailor product selection
              and pressure to your comfort level.
            </p>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {HEAD_SPA_SERVICES.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* ADD-ONS */}
        {HEAD_SPA_ADDONS?.length ? (
          <section className="mt-10">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">Add-Ons</h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Enhance your head spa with a quick boost.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {HEAD_SPA_ADDONS.map((item) => (
                <ServiceCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ) : null}

        {/* FAQ */}
        <MiniFAQAccordion
          title="Head Spa FAQ"
          faqs={[
            {
              q: "Is a head spa good for everyone?",
              a: "Most guests can enjoy head spa services, and we’ll tailor the pressure and products to your scalp type and comfort level. If you have a scalp condition or recent treatments, let us know so we can recommend the best option.",
            },
            {
              q: "Should I come with clean hair?",
              a: "No need—your service is designed to support scalp care and relaxation. If you have extensions or a sensitive scalp, mention it at booking so we can adjust the treatment.",
            },
            {
              q: "Can I add a mini facial to any service?",
              a: "Yes—our mini facial add-on pairs beautifully with any head spa ritual for an extra glow boost.",
            },
            {
              q: "How often should I book a head spa?",
              a: "Many guests love it monthly for stress relief and scalp support, but your ideal schedule depends on your goals and scalp needs.",
            },
          ]}
        />

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Not sure which ritual to book? Choose any option and we’ll customize
            it for your scalp and relaxation goals.
          </p>
          <a
            href="/booking?service=headspa"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book Head Spa
          </a>
        </section>
      </div>
    </div>
  );
}
