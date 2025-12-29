import { useState } from "react";

function MembershipExamples() {
  const [tier, setTier] = useState("refresh");
  const [mode, setMode] = useState("use");

  const data = {
    refresh: {
      label: "Refresh · $149/mo",
      use: (
        <>
          <p>
            A client books <strong>Volume Lash Fills every 2 weeks</strong>.
            With the Refresh membership, she receives{" "}
            <strong>10% off services</strong>, bringing each fill to{" "}
            <strong>$63 per visit</strong>.
          </p>
          <p className="mt-2">
            Two fills total <strong>$126</strong>, which are deducted from her
            monthly credit. This leaves her with{" "}
            <strong>$23 remaining</strong> to use on products, a facial, or to
            bank.
          </p>
        </>
      ),
      save: (
        <>
          <p>
            Instead of applying her credit to lash fills, she chooses to{" "}
            <strong>pay for lashes separately</strong> and only use the
            membership for the discount.
          </p>
          <p className="mt-2">
            By banking her unused credit each month (up to 6 months), she builds
            approximately <strong>$138</strong>, which can be used toward a{" "}
            <strong>Deluxe Refreshing Facial with Dermaplaning</strong>, with a
            little to spare.
          </p>
        </>
      ),
    },

    revitalize: {
      label: "Revitalize · $199/mo",
      use: (
        <>
          <p>
            A regular lash client uses her <strong>$199 monthly credit</strong>{" "}
            toward discounted fills and occasional touch-ups, keeping her
            routine predictable.
          </p>
          <p className="mt-2">
            With <strong>12% off services</strong> and ½ off lash touch-ups, the
            membership helps lower ongoing maintenance costs while spreading
            payments monthly.
          </p>
        </>
      ),
      save: (
        <>
          <p>
            By saving her monthly credit instead, she can bank up to{" "}
            <strong>$199 per month</strong> toward higher-value services.
          </p>
          <p className="mt-2">
            Over 6 months, this can be used toward advanced facials, skin
            treatments, or multiple services at once—while still enjoying member
            pricing in the meantime.
          </p>
        </>
      ),
    },

    elite: {
      label: "Radiance Elite · $249/mo",
      use: (
        <>
          <p>
            A client applies her monthly credit toward services while enjoying{" "}
            <strong>15% off all treatments</strong>.
          </p>
          <p className="mt-2">
            During her birthday month, she also receives{" "}
            <strong>25 units of Daxxify</strong>, adding extra value without
            additional cost.
          </p>
        </>
      ),
      save: (
        <>
          <p>
            By banking her credit for several months, she can build a balance
            toward injectables or advanced treatments.
          </p>
          <p className="mt-2">
            Combined with the birthday Daxxify bonus, Radiance Elite is ideal for
            clients planning higher-investment services over time.
          </p>
        </>
      ),
    },
  };

  return (
    <section className="mt-16">
      <h2 className="text-xl font-semibold text-brand-forest text-center">
        How memberships work — real examples
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-forest/75">
        See how each membership can be used monthly or saved for later—it’s
        always your choice.
      </p>

      {/* Tier Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            onClick={() => {
              setTier(key);
              setMode("use");
            }}
            className={`rounded-full px-4 py-2 text-sm transition ${
              tier === key
                ? "bg-brand-forest text-white"
                : "bg-white text-brand-forest ring-1 ring-black/5"
            }`}
          >
            {data[key].label}
          </button>
        ))}
      </div>

      {/* Toggle */}
      <div className="mt-6 flex justify-center gap-2">
        {[
          { id: "use", label: "Use credit monthly" },
          { id: "save", label: "Save for later" },
        ].map((o) => (
          <button
            key={o.id}
            onClick={() => setMode(o.id)}
            className={`rounded-full px-4 py-1.5 text-xs transition ${
              mode === o.id
                ? "bg-brand-mint/40 text-brand-forest"
                : "bg-white/70 text-brand-forest/70 ring-1 ring-black/5"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mx-auto mt-6 max-w-3xl rounded-[--radius-card] bg-white p-6 shadow-sm ring-1 ring-black/5 text-sm text-brand-forest/80">
        {data[tier][mode]}
        <p className="mt-4 text-xs text-brand-forest/60">
          *Examples shown for educational purposes. Pricing and usage may vary by
          service.
        </p>
      </div>
    </section>
  );
}

export default function Memberships() {
  const tiers = [
    {
      id: 'refresh',
      name: 'Refresh',
      price: 149,
      discount: '10% off all services',
      perks: [
        '10% off products',
        '1/2 off Lash Touch Ups',
        '1/2 off Facials during your birthday month',
      ],
      note: 'Simple, consistent maintenance—your monthly reset.',
      bestFor: 'Monthly upkeep',
    },
    {
      id: 'revitalize',
      name: 'Revitalize',
      price: 199,
      discount: '12% off all services',
      popular: true,
      perks: [
        '10% off products',
        '1/2 off Lash Touch Ups',
        '1/2 off Facials during your birthday month',
      ],
      note: 'Our most chosen tier for steady self-care + savings.',
      bestFor: 'Most clients',
    },
    {
      id: 'radiance-elite',
      name: 'Radiance Elite',
      price: 249,
      discount: '15% off all services',
      perks: [
        '10% off products',
        '1/2 off Lash Touch Ups',
        '1/2 off Facials during your birthday month',
        '25 units of Daxxify during your birthday month',
      ],
      note: 'Maximum value + birthday upgrade.',
      bestFor: 'Max value',
    },
  ];

  const spaPills = [
    'Bank up to 6 months',
    'Member pricing on services',
    '10% off products',
    'Birthday month perks',
  ];

  const benefits = [
    {
      title: 'Consistency, without pressure',
      copy: 'A softer approach to self-care—built to keep you on schedule and feeling your best.',
    },
    {
      title: 'Savings that feel effortless',
      copy: 'Member pricing on services plus product savings—quiet benefits that add up every visit.',
    },
    {
      title: 'Birthday month, elevated',
      copy: 'Celebrate with exclusive birthday perks on every tier—plus Daxxify on Radiance Elite.',
    },
  ];

  const steps = [
    {
      title: 'Choose a tier',
      copy: 'Pick the membership that fits your lifestyle and goals.',
    },
    {
      title: 'Credit deposits monthly',
      copy: 'Use it right away or bank up to 6 months toward bigger plans.',
    },
    {
      title: 'Enjoy perks year-round',
      copy: 'Member pricing, product savings, and birthday month benefits.',
    },
  ];

  const faqs = [
    {
      q: 'Do credits expire?',
      a: 'Credits may be banked for up to 6 months. After that, balances reset for your new cycle.',
    },
    {
      q: 'Is there a commitment?',
      a: 'Memberships are designed as a 6-month commitment to support real consistency. After 6 months, you can renew, upgrade, or switch tiers.',
    },
    {
      q: 'Can I use credits on any service?',
      a: 'Yes—credits apply toward services, and your membership discount is applied at checkout for eligible items.',
    },
    {
      q: 'How do birthday perks work?',
      a: 'Birthday perks are valid during your birthday month. The Daxxify birthday bonus is included with Radiance Elite.',
    },
  ];

  return (
    <div className="mx-auto w-11/12 max-w-6xl py-12 md:py-16">
      {/* HERO — image background */}
      <header
        className="relative overflow-hidden rounded-[--radius-card] px-6 py-16 text-center md:px-10 md:py-24"
        style={{
          background:
            'linear-gradient(135deg, rgba(140,170,150,0.4), rgba(90,120,100,0.6))',
        }}
      >
        {/* overlay for readability */}
        <div className="absolute inset-0 bg-brand-forest/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-forest/40 via-brand-forest/30 to-brand-forest/60" />

        <div className="relative mx-auto max-w-3xl text-white">
          <p className="text-xs tracking-[0.30em] text-white/80">MEMBERSHIPS</p>

          <h1 className="mt-4 text-4xl font-semibold leading-[1.08] md:text-5xl">
            A med-spa membership
            <span className="block text-white/90">
              that feels like self-care
            </span>
          </h1>

          <p className="mx-auto mt-4 text-sm leading-relaxed text-white/85 md:text-base">
            Monthly beauty credit plus member pricing on services—designed to
            keep your routine consistent, soft, and easy. Bank unused credit for
            up to 6 months and enjoy birthday month perks.
          </p>

          {/* pills */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {spaPills.map((t) => (
              <span
                key={t}
                className="
  rounded-full
  bg-white/40
  px-3 py-1
  text-[11px]
  text-brand-forest/70
  backdrop-blur-sm
"
              >
                {t}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#tiers"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-brand-forest shadow-sm hover:bg-white/90"
            >
              Explore Memberships
            </a>
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-sm font-medium text-white hover:bg-white/10"
            >
              Book a Consultation
            </a>
          </div>

          <p className="mt-3 text-xs text-white/70">
            Radiance Elite includes a Daxxify birthday bonus.
          </p>
        </div>
      </header>

      {/* NEW: soft divider (visual pause) */}
      <div className="mx-auto my-14 h-px w-24 bg-brand-forest/15" />

      {/* BENEFITS — less boxy (no borders) */}
      <section className="mt-2">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div key={b.title} className="p-2">
              <h3 className="text-base font-semibold text-brand-forest">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-forest/75">
                {b.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW: soft divider */}
      <div className="mx-auto my-14 h-px w-24 bg-brand-forest/15" />

      {/* TIERS — premium panels */}
      <section id="tiers" className="mt-2">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-brand-forest">
            Choose your tier
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-brand-forest/75">
            Three options—same soft philosophy. Pick your level of savings and
            perks based on your routine.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3 md:items-stretch">
          {tiers.map((t) => (
            <article
              key={t.id}
              id={t.id}
              className={`relative flex h-full flex-col overflow-hidden rounded-[--radius-card] bg-white p-7 shadow-sm ring-1 ring-black/5 ${
                t.popular ? 'ring-2 ring-brand-gold/60' : ''
              }`}
            >
              {/* subtle top accent */}
              <div
                className={`absolute left-0 top-0 h-1 w-full ${
                  t.popular ? 'bg-brand-gold' : 'bg-brand-mint/40'
                }`}
              />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-brand-forest">
                    {t.name}
                  </h3>
                  <p className="mt-1 text-xs text-brand-forest/60">
                    {t.bestFor}
                  </p>
                </div>

                {t.popular ? (
                  <span className="rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
                    Most Popular
                  </span>
                ) : null}
              </div>

              {/* NEW: Tier mood block (image placeholder) */}
              <div
                className={`mt-5 overflow-hidden rounded-[--radius-card] ring-1 ring-black/5 ${
                  t.popular ? 'bg-brand-gold/10' : 'bg-brand-mint/12'
                }`}
              >
                <div className="relative h-20 w-full">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/50 blur-2xl" />
                  <div className="absolute -right-12 -bottom-12 h-36 w-36 rounded-full bg-brand-mint/35 blur-2xl" />
                </div>
              </div>

              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-semibold text-brand-forest">
                  ${t.price}
                </span>
                <span className="text-sm text-brand-forest/60">/mo</span>
              </div>

              <p className="mt-1 text-sm text-brand-forest/80">{t.discount}</p>

              <div className="mt-5 rounded-[--radius-card] bg-brand-mint/12 p-4">
                <ul className="space-y-2 text-sm text-brand-forest/85">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest/45" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-brand-forest/60">{t.note}</p>

              <div className="mt-6 flex-1" />

              <a
                href={`/booking?plan=${t.id}`}
                className="inline-block w-full rounded-full bg-brand-forest px-6 py-2.5 text-center text-sm font-medium text-white shadow-sm hover:brightness-110"
              >
                Join {t.name}
              </a>

              <p className="mt-3 text-center text-xs text-brand-forest/60">
                Apply your first credit immediately.
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* NEW: soft divider */}
      <div className="mx-auto my-14 h-px w-24 bg-brand-forest/15" />

      {/* DECISION HELPER — softer, less “cards” */}
      <section className="mt-2">
        <div className="mx-auto max-w-4xl rounded-[--radius-card] bg-brand-mint/12 p-6 md:p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-brand-forest">
              Need help deciding?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-brand-forest/75">
              Think of it as how often you want to treat yourself—and how
              elevated you want your birthday month to be.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              {
                title: 'Refresh',
                copy: 'For simple monthly maintenance and easy savings.',
                href: '#refresh',
              },
              {
                title: 'Revitalize',
                copy: 'Most popular—great balance for regular clients.',
                href: '#revitalize',
                tag: 'Most Popular',
              },
              {
                title: 'Radiance Elite',
                copy: 'Max savings + Daxxify birthday bonus included.',
                href: '#radiance-elite',
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="rounded-[--radius-card] bg-white px-5 py-5 shadow-sm ring-1 ring-black/5 hover:bg-white/90"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-brand-forest">{c.title}</p>
                  {c.tag ? (
                    <span className="rounded-full bg-brand-gold px-2 py-1 text-[11px] font-semibold text-white">
                      {c.tag}
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm text-brand-forest/75">{c.copy}</p>
                <p className="mt-4 text-xs font-medium text-brand-forest/70">
                  View tier →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — real pricing example (lash client) */}
      <MembershipExamples />

      {/* FAQ — keep clean */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-brand-forest">
          Membership FAQ
        </h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-[--radius-card] bg-white p-5 shadow-sm ring-1 ring-black/5"
            >
              <summary className="cursor-pointer text-base font-medium text-brand-forest">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-brand-forest/75">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA — soft panel */}
      <section className="mt-14 rounded-[--radius-card] bg-brand-mint/15 p-8 text-center md:p-10">
        <h2 className="text-2xl font-semibold text-brand-forest">
          Ready to make self-care your default?
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-brand-forest/75">
          Join today, apply your first credit immediately, and let’s keep your
          routine consistent all year.
        </p>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="#tiers"
            className="rounded-full bg-brand-forest px-8 py-3 text-sm font-medium text-white shadow-sm hover:brightness-110"
          >
            Choose My Tier
          </a>
          <a
            href="/booking"
            className="rounded-full bg-white/85 px-8 py-3 text-sm font-medium text-brand-forest shadow-sm ring-1 ring-black/5 hover:bg-white"
          >
            Talk to Us First
          </a>
        </div>
      </section>

      {/* Terms */}
      <p className="mt-8 text-center text-xs text-brand-forest/60">
        Discounts apply to regularly priced services. Credits are
        non-transferable. Unused credits may be banked up to 6 months. Birthday
        perks valid during birthday month. Daxxify birthday perk applies to
        Radiance Elite only. See full policy at booking.
      </p>
    </div>
  );
}
