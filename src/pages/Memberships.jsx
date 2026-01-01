import { useMemo, useState } from 'react';

/* ---------- Savings calculator ---------- */
function MembershipSavingsCalculator({ tiers }) {
  const [tierId, setTierId] = useState('revitalize');
  const [applyCredit, setApplyCredit] = useState(true);

  const [items, setItems] = useState([
    { name: 'Lash Fill', price: 70, visits: 2 },
  ]);

  const tier = useMemo(
    () => tiers.find((t) => t.id === tierId),
    [tiers, tierId],
  );

  const discountPct = useMemo(() => {
    const match = tier?.discount?.match(/(\d+)\s*%/);
    return match ? Number(match[1]) : 0;
  }, [tier]);

  const membershipCredit = useMemo(() => Number(tier?.price || 0), [tier]);

  const monthlySpend = useMemo(() => {
    return items.reduce((sum, it) => {
      const p = Number(it.price) || 0;
      const v = Number(it.visits) || 0;
      return sum + p * v;
    }, 0);
  }, [items]);

  const discountedSpend = useMemo(() => {
    const pct = discountPct / 100;
    return monthlySpend * (1 - pct);
  }, [monthlySpend, discountPct]);

  const estimatedSavings = useMemo(() => {
    return Math.max(0, monthlySpend - discountedSpend);
  }, [monthlySpend, discountedSpend]);

  const afterCredit = useMemo(() => {
    if (!applyCredit) return discountedSpend; // they’re saving credit
    return Math.max(0, discountedSpend - membershipCredit);
  }, [discountedSpend, membershipCredit, applyCredit]);

  const creditLeft = useMemo(() => {
    if (!applyCredit) return membershipCredit; // saving it all
    return Math.max(0, membershipCredit - discountedSpend);
  }, [discountedSpend, membershipCredit, applyCredit]);

  const bankedSixMonths = useMemo(() => {
    // simple estimate: what they keep each month * 6
    return Math.max(0, creditLeft * 6);
  }, [creditLeft]);

  function updateItem(i, patch) {
    setItems((prev) =>
      prev.map((it, idx) => (idx === i ? { ...it, ...patch } : it)),
    );
  }

  function addItem() {
    setItems((prev) => [...prev, { name: 'Service', price: 120, visits: 1 }]);
  }

  function removeItem(i) {
    setItems((prev) => prev.filter((_, idx) => idx !== i));
  }

  return (
    <section id="calculator" className="mt-16">
      <h2 className="text-xl font-semibold text-brand-forest text-center">
        Membership savings calculator
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-forest/75">
        Plug in what you normally get (or plan to get) and see an estimate of
        monthly savings with member pricing—plus how your monthly credit could
        be used or saved.
      </p>

      <div className="mx-auto mt-8 max-w-8xl rounded-[--radius-card] bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
        {/* Tier + actions */}
        <div className="grid gap-4 md:grid-cols-3 md:items-end">
          <div className="md:col-span-2">
            <label className="text-xs font-medium text-brand-forest/70">
              Select membership tier
            </label>
            <select
              value={tierId}
              onChange={(e) => setTierId(e.target.value)}
              className="mt-2 w-full rounded-xl bg-white px-3 py-2 text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
            >
              {tiers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} (${t.price}/mo) — {t.discount}
                </option>
              ))}
            </select>

            {/* Apply vs Save */}
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { id: 'apply', label: 'Apply credit monthly', on: true },
                { id: 'save', label: 'Save credit (bank it)', on: false },
              ].map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setApplyCredit(o.on)}
                  className={`rounded-full px-4 py-2 text-xs transition ring-1 ring-black/5 ${
                    applyCredit === o.on
                      ? 'bg-brand-mint/40 text-brand-forest'
                      : 'bg-white text-brand-forest/70 hover:bg-white/90'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-brand-mint/20 px-3 py-1 text-[11px] text-brand-forest/70">
                Discount: <span className="font-medium">{discountPct}%</span>
              </span>
              <span className="rounded-full bg-brand-mint/20 px-3 py-1 text-[11px] text-brand-forest/70">
                Monthly credit:{' '}
                <span className="font-medium">${membershipCredit}</span>
              </span>
              <span className="rounded-full bg-brand-mint/20 px-3 py-1 text-[11px] text-brand-forest/70">
                Bank up to:{' '}
                <span className="font-medium">${membershipCredit * 6}</span> (6
                months)
              </span>
            </div>
          </div>

          <div className="md:col-span-1">
            <button
              type="button"
              onClick={addItem}
              className="w-full rounded-full bg-brand-forest px-6 py-2.5 text-center text-sm font-medium text-white shadow-sm hover:brightness-110"
            >
              Add a service
            </button>
            <p className="mt-2 text-center text-xs text-brand-forest/60">
              Add 1–4 services you get most often.
            </p>
          </div>
        </div>

        {/* Items */}
        <div className="mt-6 space-y-3">
          {items.map((it, i) => (
            <div
              key={i}
              className="grid gap-3 rounded-[--radius-card] bg-brand-mint/10 p-4 ring-1 ring-black/5 md:grid-cols-12 md:items-center"
            >
              <div className="md:col-span-5">
                <label className="text-[11px] font-medium text-brand-forest/70">
                  Service
                </label>
                <input
                  value={it.name}
                  onChange={(e) => updateItem(i, { name: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white px-3 py-2 text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
                  placeholder="e.g., Lash Fill"
                />
              </div>

              <div className="md:col-span-3">
                <label className="text-[11px] font-medium text-brand-forest/70">
                  Price per visit
                </label>
                <div className="mt-1 flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-black/10">
                  <span className="text-sm text-brand-forest/60">$</span>
                  <input
                    value={it.price}
                    onChange={(e) => updateItem(i, { price: e.target.value })}
                    inputMode="decimal"
                    className="w-full bg-transparent text-sm text-brand-forest focus:outline-none"
                  />
                </div>
              </div>

              <div className="md:col-span-3">
                <label className="text-[11px] font-medium text-brand-forest/70">
                  Visits / month
                </label>
                <input
                  value={it.visits}
                  onChange={(e) => updateItem(i, { visits: e.target.value })}
                  inputMode="numeric"
                  className="mt-1 w-full rounded-xl bg-white px-3 py-2 text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
                />
              </div>

              <div className="md:col-span-1 md:text-right">
                <button
                  type="button"
                  onClick={() => removeItem(i)}
                  disabled={items.length === 1}
                  className={`rounded-full px-3 py-2 text-xs font-medium ring-1 ring-black/10 ${
                    items.length === 1
                      ? 'bg-white/50 text-brand-forest/40'
                      : 'bg-white text-brand-forest/70 hover:bg-white/90'
                  }`}
                  title={
                    items.length === 1 ? 'Keep at least one item' : 'Remove'
                  }
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results */}
        <div className="mt-6 rounded-[--radius-card] bg-white p-6 ring-1 ring-black/5">
          <div className="grid gap-4 md:grid-cols-4">
            <div>
              <p className="text-xs font-medium text-brand-forest/60">
                Monthly spend
              </p>
              <p className="mt-1 text-lg font-semibold text-brand-forest">
                ${monthlySpend.toFixed(0)}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-brand-forest/60">
                With member pricing ({discountPct}%)
              </p>
              <p className="mt-1 text-lg font-semibold text-brand-forest">
                ${discountedSpend.toFixed(0)}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-brand-forest/60">
                Estimated savings
              </p>
              <p className="mt-1 text-lg font-semibold text-brand-forest">
                ${estimatedSavings.toFixed(0)}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-brand-forest/60">
                {applyCredit
                  ? 'After applying credit'
                  : 'Out-of-pocket (saving credit)'}
              </p>
              <p className="mt-1 text-lg font-semibold text-brand-forest">
                ${afterCredit.toFixed(0)}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-brand-mint/10 p-4">
            {applyCredit ? (
              creditLeft > 0 ? (
                <p className="text-sm text-brand-forest/80">
                  Your monthly credit could cover your listed services, with{' '}
                  <strong>${creditLeft.toFixed(0)}</strong> left to use on
                  another service, products, or to bank.
                </p>
              ) : (
                <p className="text-sm text-brand-forest/80">
                  Your services exceed the monthly credit. Estimated
                  out-of-pocket after credit:{' '}
                  <strong>${afterCredit.toFixed(0)}</strong>.
                </p>
              )
            ) : (
              <p className="text-sm text-brand-forest/80">
                You’re choosing to <strong>save your full credit</strong> this
                month while still receiving the member discount on services. If
                you do this consistently, you could bank approximately{' '}
                <strong>${bankedSixMonths.toFixed(0)}</strong> over 6 months.
              </p>
            )}

            <p className="mt-2 text-xs text-brand-forest/60">
              *Estimates shown are for planning. Discounts apply to eligible,
              regularly priced services. Birthday perks and touch-up offers vary
              by tier.
            </p>
          </div>
        </div>
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
      url: 'https://www.vagaro.com/cl/D~L2Gl73Mtu23IOrbBINYiMzLXG-EYXepeXNObGcDVM=',
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
      url: 'https://www.vagaro.com/cl/ijKIQUmJjRAqf6RMruTF1z3DKfXWWH5X6X547EqRRWo=',
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
      url: 'https://www.vagaro.com/cl/xGsF139giMVB8y~bcx0DNC6zX5qzVVX11j8jdYwDa7o=',
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

  const faqs = [
    {
      q: 'What is the Signature Glow Membership?',
      a: 'The Signature Glow Membership is our monthly beauty membership designed to reward consistency. Each month, you receive membership credit equal to your membership price, along with exclusive savings on eligible services.',
    },
    {
      q: 'How does the monthly credit work?',
      a: 'Each month, your membership fee adds credit to your account that can be used toward services or retail. Credits are tracked on your account and may be applied at your discretion.',
    },
    {
      q: 'Can I save my credits?',
      a: 'Yes. Unused membership credits may be banked for up to six (6) months, allowing you to save them for higher-value services if desired.',
    },
    {
      q: 'Do I HAVE to use my credit toward my lash fills?',
      a: 'No. Using your membership credit is always your choice. You may apply credits toward a service, save them for later, or choose to pay separately and bank your balance.',
    },
    {
      q: 'How do membership discounts work?',
      a: 'Membership discounts are applied automatically at checkout based on your tier: Refresh receives 10% off, Revitalize receives 15% off, and Radiance Elite receives 20% off eligible services. Certain promotions or services may be excluded.',
    },
    {
      q: 'Can you give me an example?',
      a: 'If you are on the Refresh tier, your monthly membership adds $149 in credit. A $70 service with a 10% membership discount becomes $63. You may choose to apply that amount toward your membership balance or pay separately and save your credit for later.',
    },
    {
      q: 'Can I use my membership on products?',
      a: 'Yes. Membership credits may be applied toward both services and retail products unless otherwise specified.',
    },
    {
      q: "What's the difference between the tiers?",
      a: 'All tiers offer flexible monthly credit, with increasing savings at each level. Refresh is ideal for maintenance, Revitalize offers enhanced savings and flexibility, and Radiance Elite provides the highest level of savings and exclusive benefits.',
    },
  ];

  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/membership/hero.png"
            alt="Eyelash extensions"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                MEMBERSHIPS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                A Med-Spa Membership that feels like self-care
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Monthly beauty credit plus member pricing on services - designed
                to keep your routine consistent, soft, and easy. Bank unused
                credit for up to 6 months and enjoy birthday month perks.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.vagaro.com/tbeautylounge/memberships"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
                >
                  Sign up for a Membership
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/55 px-7 py-3 text-brand-forest font-semibold hover:bg-brand-cream/70"
                >
                  Browse Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF PAGE (constrained) */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* BENEFITS */}
        <section className="mt-10">
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

        <div className="mx-auto my-12 h-px w-24 bg-brand-forest/15" />

        {/* TIERS */}
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
                
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-brand-forest">
                    ${t.price}
                  </span>
                  <span className="text-sm text-brand-forest/60">/mo</span>
                </div>

                <p className="mt-1 text-sm text-brand-forest/80">
                  {t.discount}
                </p>

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
                  href={t.url}
                  target="_blank"
                  rel="noreferrer"
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

        <div className="mx-auto my-12 h-px w-24 bg-brand-forest/15" />

        {/* CALCULATOR (replaces examples) */}
        <MembershipSavingsCalculator tiers={tiers} />

        {/* FAQ */}
        <section id="faq" className="mt-12">
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

        {/* FINAL CTA */}
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
          non-transferable. Unused credits may be banked up to 6 months.
          Birthday perks valid during birthday month. Daxxify birthday perk
          applies to Radiance Elite only. See full policy at booking.
        </p>
      </div>
    </div>
  );
}
