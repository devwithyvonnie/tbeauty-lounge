import { useEffect, useMemo, useState, useRef } from "react";
import MiniFAQAccordion from '../components/MiniFAQ.jsx';

/** -----------------------
 *  SERVICE MENU
 *  -----------------------
 */
const SERVICE_MENU = [
  // Lashes (fills)
  {
    id: 'classic-fill',
    category: 'Lashes',
    name: 'Classic Fill',
    price: 65,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'volume-fill',
    category: 'Lashes',
    name: 'Volume Fill',
    price: 70,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'classic-hybrid-fill',
    category: 'Lashes',
    name: 'Classic Hybrid Fill',
    price: 70,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'volume-hybrid-fill',
    category: 'Lashes',
    name: 'Volume Hybrid Fill',
    price: 80,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'extra-volume-fill',
    category: 'Lashes',
    name: 'Extra Volume Fill',
    price: 77,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'mega-volume-fill',
    category: 'Lashes',
    name: 'Mega Volume Fill',
    price: 90,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },
  {
    id: 'wispy-volume-fill',
    category: 'Lashes',
    name: 'Wispy Volume Fill',
    price: 90,
    defaultVisits: 2,
    supportsFacialAddOn: true,
  },

  // Facials
  {
    id: 'deluxe-refreshing-facial',
    category: 'Facials',
    name: 'Deluxe Refreshing Facial',
    price: 65,
    defaultVisits: 1,
  },
  {
    id: 'acne-facial',
    category: 'Facials',
    name: 'Acne Facial',
    price: 95,
    defaultVisits: 1,
  },
  {
    id: 'antiaging-facial',
    category: 'Facials',
    name: 'Anti-Aging Facial',
    price: 95,
    defaultVisits: 1,
  },
  {
    id: 'dermaplaning-facial',
    category: 'Facials',
    name: 'Dermaplaning Facial',
    price: 60,
    defaultVisits: 1,
  },
  {
    id: 'goddess-facial',
    category: 'Facials',
    name: 'Goddess Facial',
    price: 125,
    defaultVisits: 1,
  },
];

const money0 = (n) =>
  (Number(n) || 0).toLocaleString('en-US', { maximumFractionDigits: 0 });

const money1 = (n) =>
  (Number(n) || 0).toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });

function parseDiscountPct(tier) {
  // used internally only (not shown)
  const match = tier?.discount?.match(/(\d+)\s*%/);
  return match ? Number(match[1]) : 0;
}

function StatTile({ label, value, sub, highlight = false }) {
  return (
    <div
      className={[
        'min-w-[210px] sm:min-w-0', // makes tiles scrollable on mobile
        'rounded-2xl p-4 ring-1 ring-black/5',
        highlight
          ? 'bg-brand-forest/10 ring-2 ring-brand-forest'
          : 'bg-brand-cream/45',
      ].join(' ')}
    >
      <p className="text-[11px] font-medium text-brand-forest/60">{label}</p>
      <p
        className={`mt-1 font-semibold text-brand-forest ${highlight ? 'text-xl' : 'text-lg'}`}
      >
        {value}
      </p>
      {sub ? (
        <p className="mt-1 text-[11px] text-brand-forest/60">{sub}</p>
      ) : null}
    </div>
  );
}

function CompareTile({ normal, member }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
      <p className="text-[11px] font-medium text-brand-forest/60">
        Normal vs Member price (per visit)
      </p>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-brand-cream/35 p-3 ring-1 ring-black/5">
          <p className="text-[11px] text-brand-forest/60">Normal</p>
          <p className="mt-1 text-lg font-semibold text-brand-forest">
            ${money0(normal)}
          </p>
        </div>

        <div className="rounded-xl bg-brand-mint/12 p-3 ring-1 ring-black/5">
          <p className="text-[11px] text-brand-forest/60">Member</p>
          <p className="mt-1 text-lg font-semibold text-brand-forest">
            ${money1(member)}
          </p>
        </div>
      </div>

      <p className="mt-2 text-[11px] text-brand-forest/60">
        Member price reflects your tier discount.
      </p>
    </div>
  );
}

function MobileTierTabs({ tiers }) {
  const [activeId, setActiveId] = useState(
    tiers?.find((t) => t.popular)?.id || tiers?.[0]?.id,
  );

  const active = useMemo(
    () => tiers.find((t) => t.id === activeId) || tiers[0],
    [tiers, activeId],
  );

  return (
    <div className="md:hidden">
      {/* Tabs */}
      <div className="sticky top-0 z-10 -mx-2 mb-4 rounded-2xl bg-white/80 p-2 backdrop-blur ring-1 ring-black/5">
        <div className="grid grid-cols-3 gap-2">
          {tiers.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveId(t.id)}
                className={[
                  'rounded-full px-3 py-2 text-[12px] font-semibold ring-1 ring-black/10 transition',
                  isActive
                    ? 'bg-brand-forest text-white'
                    : 'bg-white text-brand-forest/70 hover:bg-brand-cream/60',
                ].join(' ')}
                aria-pressed={isActive}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Card */}
      <article
        className={`relative flex flex-col overflow-hidden rounded-[--radius-card] bg-white p-6 shadow-sm ring-1 ring-black/5 ${
          active.popular ? 'ring-2 ring-brand-gold/60' : ''
        }`}
      >
        <div
          className={`absolute left-0 top-0 h-1 w-full ${
            active.popular ? 'bg-brand-gold' : 'bg-brand-mint/40'
          }`}
        />

        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-brand-forest">
              {active.name}
            </h3>
            <p className="mt-1 text-xs text-brand-forest/60">
              {active.bestFor}
            </p>
          </div>

          {active.popular ? (
            <span className="rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold text-white shadow-sm">
              Most Popular
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-4xl font-semibold text-brand-forest">
            ${active.price}
          </span>
          <span className="text-sm text-brand-forest/60">/mo</span>
        </div>

        <p className="mt-1 text-sm text-brand-forest/80">{active.discount}</p>

        <div className="mt-5 rounded-[--radius-card] bg-brand-mint/12 p-4">
          <ul className="space-y-2 text-sm text-brand-forest/85">
            {active.perks.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-forest/45" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 text-xs text-brand-forest/60">{active.note}</p>

        <a
          href={active.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110 active:scale-[0.99]"
        >
          Join {active.name}
        </a>

        <p className="mt-3 text-center text-xs text-brand-forest/60">
          Apply your first credit immediately.
        </p>

        {/* Small swipe hint */}
        <p className="mt-4 text-center text-[11px] text-brand-forest/50">
          Switch tabs to compare tiers.
        </p>
      </article>
    </div>
  );
}

function MobileStep({ title, step, activeStep, setActiveStep, children }) {
  const open = activeStep === step;

  return (
    <section className="overflow-hidden rounded-2xl ring-1 ring-black/5">
      <button
        type="button"
        onClick={() => setActiveStep(step)}
        className="flex w-full items-center justify-between bg-white px-4 py-3 text-left md:hidden"
        aria-expanded={open}
      >
        <span className="text-[11px] font-semibold tracking-wide text-brand-forest/60 uppercase">
          {title}
        </span>
        <span className="text-lg leading-none text-brand-forest/70">
          {open ? '−' : '+'}
        </span>
      </button>

      {/* On mobile: only active step shows. On desktop: show all. */}
      <div className={`${open ? 'block' : 'hidden'} md:block`}>{children}</div>
    </section>
  );
}

function isLashFill(service) {
  return service?.category === 'Lashes';
}

/* ---------- Calculator (no export default) ---------- */
function MembershipSavingsCalculator({ tiers }) {
  // One step at a time (mobile)
  const [activeStep, setActiveStep] = useState(1); // 1, 2, 3
  const [showBreakdownDetails, setShowBreakdownDetails] = useState(false);

  const calculatorRef = useRef(null);

  // STEP 1: tier only
  const [tierId, setTierId] = useState(tiers?.[0]?.id || 'refresh');
  const tier = useMemo(
    () => tiers.find((t) => t.id === tierId),
    [tiers, tierId],
  );
  const discountPct = useMemo(() => parseDiscountPct(tier), [tier]);
  const membershipPrice = useMemo(() => Number(tier?.price || 0), [tier]);

  // STEP 2: routine
  const mainOptions = useMemo(
    () =>
      SERVICE_MENU.filter(
        (s) => s.category === 'Lashes' || s.category === 'Facials',
      ),
    [],
  );

  const facialOptions = useMemo(
    () => SERVICE_MENU.filter((s) => s.category === 'Facials'),
    [],
  );

  const [mainServiceId, setMainServiceId] = useState(mainOptions[0]?.id || '');
  const mainService = useMemo(
    () =>
      mainOptions.find((s) => s.id === mainServiceId) || mainOptions[0] || null,
    [mainOptions, mainServiceId],
  );

  // Guard: ensure we always have a main service selected
  useEffect(() => {
    if (!mainServiceId && mainOptions.length)
      setMainServiceId(mainOptions[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainOptions.length]);

  // Editable price (autofills from menu)
  const [basePrice, setBasePrice] = useState(mainService?.price || 0);

  // Frequency only applies to lashes (defaultVisits is 2 for fills)
  const [visitsPerMonth, setVisitsPerMonth] = useState(
    mainService?.defaultVisits ?? 1,
  );

  useEffect(() => {
    if (!mainService) return;
    setBasePrice(mainService.price);
    setVisitsPerMonth(mainService.defaultVisits ?? 1);
  }, [mainServiceId, mainService]);

  // Facial add-on: only when main service is lashes (conversion strategy)
  const canAddFacial =
    isLashFill(mainService) &&
    Boolean(mainService?.supportsFacialAddOn) &&
    facialOptions.length > 0;

  const [addFacial, setAddFacial] = useState(false);
  const [facialId, setFacialId] = useState(facialOptions[0]?.id || '');

  const resetCalculator = () => {
  const defaultTierId = tiers?.[0]?.id || "refresh";
  const defaultMain = mainOptions[0] || null;
  const defaultFacial = facialOptions[0] || null;

  setTierId(defaultTierId);

  setMainServiceId(defaultMain?.id || "");
  setBasePrice(defaultMain?.price || 0);
  setVisitsPerMonth(defaultMain?.defaultVisits ?? 1);

  setAddFacial(false);
  setFacialId(defaultFacial?.id || "");

  setShowBreakdownDetails(false);
  setActiveStep(1);

  // ⬇️ smooth scroll back to calculator top
  requestAnimationFrame(() => {
    calculatorRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
};

  // Guard: ensure we always have a facial selected if options exist
  useEffect(() => {
    if (!facialId && facialOptions.length) setFacialId(facialOptions[0].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facialOptions.length]);

  // If they switch away from lashes, disable add-on
  useEffect(() => {
    if (!canAddFacial) setAddFacial(false);
  }, [canAddFacial]);

  const selectedFacial = useMemo(() => {
    if (!addFacial) return null;
    return (
      facialOptions.find((f) => f.id === facialId) || facialOptions[0] || null
    );
  }, [addFacial, facialId, facialOptions]);

  // ---- Math ----
  const memberPricePerVisit = useMemo(() => {
    const pct = discountPct / 100;
    return (Number(basePrice) || 0) * (1 - pct);
  }, [basePrice, discountPct]);

  const effectiveVisits = useMemo(() => {
    if (!isLashFill(mainService)) return 1; // facials treated as 1
    return Number(visitsPerMonth) || 1;
  }, [mainService, visitsPerMonth]);

  const usedForMainThisMonth = useMemo(
    () => memberPricePerVisit * effectiveVisits,
    [memberPricePerVisit, effectiveVisits],
  );

  const memberFacialPrice = useMemo(() => {
    if (!selectedFacial) return 0;
    const pct = discountPct / 100;
    return (Number(selectedFacial.price) || 0) * (1 - pct);
  }, [selectedFacial, discountPct]);

  const usedFromCreditThisMonth = useMemo(
    () => usedForMainThisMonth + (addFacial ? memberFacialPrice : 0),
    [usedForMainThisMonth, addFacial, memberFacialPrice],
  );

  const leftoverEndOfMonth = useMemo(
    () => membershipPrice - usedFromCreditThisMonth,
    [membershipPrice, usedFromCreditThisMonth],
  );

  const hasLeftover = leftoverEndOfMonth > 0;
  const overBy = Math.max(0, -leftoverEndOfMonth);

  const potentialAfterSixMonths = useMemo(
    () => leftoverEndOfMonth * 6,
    [leftoverEndOfMonth],
  );

  const leftoverCanCoverFacial = useMemo(() => {
    if (!canAddFacial) return false;
    if (!selectedFacial) return false;
    const afterMain = membershipPrice - usedForMainThisMonth;
    return afterMain >= memberFacialPrice;
  }, [
    canAddFacial,
    selectedFacial,
    membershipPrice,
    usedForMainThisMonth,
    memberFacialPrice,
  ]);

  // Reset details when moving between steps (keeps mobile clean)
  useEffect(() => {
    if (activeStep !== 3) setShowBreakdownDetails(false);
  }, [activeStep]);

  return (
    <section
  id="calculator"
  ref={calculatorRef}
  className="mt-16 scroll-mt-24"
>
      <h2 className="text-xl font-semibold text-brand-forest text-center">
        Membership savings calculator
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-brand-forest/75">
        Pick your membership, build your routine, then view your breakdown.
      </p>

      <div className="mx-auto mt-6 w-full max-w-5xl rounded-3xl bg-white p-3 sm:p-6 md:p-8 shadow-sm ring-1 ring-black/5">
        {/* HEADER */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-wide text-brand-forest/60 uppercase">
              Calculator
            </p>
            <p className="mt-1 text-sm text-brand-forest/75">
              Built to match how we explain membership credit in-person.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-mint/20 px-3 py-1 text-[11px] text-brand-forest/70">
              Monthly credit:{' '}
              <span className="font-medium">${money0(membershipPrice)}</span>
            </span>
            <span className="rounded-full bg-brand-cream px-3 py-1 text-[11px] text-brand-forest/70">
              Roll-over up to <span className="font-medium">6 months</span>
            </span>
          </div>
        </div>

        <div className="my-4 sm:my-6 h-px w-full bg-brand-forest/10" />

        {/* ------------------ STEP 1 ------------------ */}
        <MobileStep
          title="Step 1 · Pick your membership"
          step={1}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          <div className="rounded-2xl bg-brand-mint/8 p-4 sm:p-5 ring-1 ring-black/5">
            <label className="text-xs font-medium text-brand-forest/70">
              Membership tier
            </label>

            <select
              value={tierId}
              onChange={(e) => setTierId(e.target.value)}
              className="mt-2 w-full min-h-[44px] rounded-xl bg-white px-3 py-3 text-[15px] md:text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
            >
              {tiers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name} (${t.price}/mo)
                </option>
              ))}
            </select>

            <div className="mt-4 md:hidden">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="w-full rounded-full bg-brand-forest px-5 py-3 text-xs font-semibold text-white"
              >
                Next: Pick your routine →
              </button>
            </div>
          </div>
        </MobileStep>

        <div className="mt-4" />

        {/* ------------------ STEP 2 ------------------ */}
        <MobileStep
          title="Step 2 · Pick your routine"
          step={2}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-black/5">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Main service */}
              <div>
                <label className="text-xs font-medium text-brand-forest/70">
                  Main service (fills or facial)
                </label>
                <select
                  value={mainServiceId}
                  onChange={(e) => setMainServiceId(e.target.value)}
                  className="mt-2 w-full min-h-[44px] rounded-xl bg-white px-3 py-3 text-[15px] md:text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
                >
                  {mainOptions.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.category === 'Lashes' ? 'Lashes: ' : 'Facial: '}
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Normal price */}
              <div>
                <label className="text-xs font-medium text-brand-forest/70">
                  Normal price (per visit)
                </label>
                <div className="mt-2 flex min-h-[44px] items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-black/10">
                  <span className="text-sm text-brand-forest/60">$</span>
                  <input
                    value={basePrice}
                    onChange={(e) => setBasePrice(e.target.value)}
                    inputMode="decimal"
                    className="w-full bg-transparent text-[15px] md:text-sm text-brand-forest focus:outline-none"
                  />
                </div>
                <p className="mt-2 text-xs text-brand-forest/60">
                  Auto-fills from your menu. Adjust if needed.
                </p>
              </div>
            </div>

            {/* Frequency only for lashes */}
            {isLashFill(mainService) ? (
              <div className="mt-4 rounded-2xl bg-brand-cream/35 p-4 ring-1 ring-black/5">
                <label className="text-[11px] font-medium text-brand-forest/70">
                  Frequency (for fills)
                </label>

                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {[1, 2].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setVisitsPerMonth(v)}
                      className={`rounded-full px-4 py-3 text-xs font-semibold ring-1 ring-black/10 transition ${
                        visitsPerMonth === v
                          ? 'bg-brand-forest text-white'
                          : 'bg-white text-brand-forest/70 hover:bg-white/90'
                      }`}
                    >
                      {v === 1 ? '1 visit / month' : 'Every 2 weeks (2 visits)'}
                    </button>
                  ))}
                </div>

                <p className="mt-2 text-xs text-brand-forest/60">
                  Choose 2 visits if you come every two weeks.
                </p>
              </div>
            ) : null}

            {/* Facial add-on only when lashes */}
            {canAddFacial ? (
              <div className="mt-5 rounded-2xl bg-brand-mint/10 p-4 ring-1 ring-black/5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold tracking-wide text-brand-forest/60 uppercase">
                      Optional add-on
                    </p>
                    <p className="mt-1 text-sm font-semibold text-brand-forest">
                      Add a facial to your month
                    </p>
                    <p className="mt-1 text-xs text-brand-forest/70">
                      Use leftover credit toward skincare (great for lash
                      clients).
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setAddFacial((v) => !v)}
                    className={`w-full sm:w-auto rounded-full px-5 py-3 text-xs font-semibold ring-1 ring-black/10 transition ${
                      addFacial
                        ? 'bg-brand-forest text-white'
                        : 'bg-white text-brand-forest/70 hover:bg-white/90'
                    }`}
                  >
                    {addFacial ? 'Remove facial' : 'Add a facial'}
                  </button>
                </div>

                {addFacial ? (
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-medium text-brand-forest/70">
                        Select a facial
                      </label>
                      <select
                        value={facialId}
                        onChange={(e) => setFacialId(e.target.value)}
                        className="mt-2 w-full min-h-[44px] rounded-xl bg-white px-3 py-3 text-[15px] md:text-sm text-brand-forest ring-1 ring-black/10 focus:outline-none"
                      >
                        {facialOptions.map((f) => (
                          <option key={f.id} value={f.id}>
                            {f.name}
                          </option>
                        ))}
                      </select>

                      <div
                        className={`mt-3 rounded-xl px-3 py-2 text-[12px] ring-1 ring-black/5 ${
                          leftoverCanCoverFacial
                            ? 'bg-white text-brand-forest'
                            : 'bg-white/70 text-brand-forest/70'
                        }`}
                      >
                        {leftoverCanCoverFacial ? (
                          <span>
                            ✅ Your leftover credit (after fills) can cover this
                            facial.
                          </span>
                        ) : (
                          <span>
                            Tip: This facial may require some out-of-pocket
                            depending on your tier.
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5">
                      <p className="text-[11px] font-medium text-brand-forest/60">
                        Member price (facial)
                      </p>
                      <p className="mt-1 text-lg font-semibold text-brand-forest">
                        ${money1(memberFacialPrice)}
                      </p>
                      <p className="mt-1 text-[11px] text-brand-forest/60">
                        Deducted once this month
                      </p>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}

            {/* Mobile nav */}
            <div className="mt-4 flex gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="w-full rounded-full border border-brand-gold bg-white/70 px-5 py-3 text-xs font-semibold text-brand-forest"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => {
                  setShowBreakdownDetails(false);
                  setActiveStep(3);
                }}
                className="w-full rounded-full bg-brand-forest px-5 py-3 text-xs font-semibold text-white"
              >
                Next: View breakdown →
              </button>
            </div>
          </div>
        </MobileStep>

        <div className="mt-4" />

        {/* ------------------ STEP 3 ------------------ */}
        <MobileStep
          title="Step 3 · View your breakdown"
          step={3}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        >
          <div className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-black/5">
            {/* MOBILE */}
            <div className="space-y-3">
              {/* 1) Normal vs Member */}
              <CompareTile normal={basePrice} member={memberPricePerVisit} />

              {/* 2) Credit used */}
              <StatTile
                label="Credit used this month"
                value={`$${money0(usedFromCreditThisMonth)}`}
                sub={addFacial ? 'Includes facial add-on' : 'Main routine only'}
              />

              {/* 3) Leftover / Over by */}
              {hasLeftover ? (
                <StatTile
                  label="Left over end of month"
                  value={`$${money0(leftoverEndOfMonth)}`}
                  sub="Stays as credit if unused"
                  highlight
                />
              ) : (
                <StatTile
                  label="Over by"
                  value={`$${money0(overBy)}`}
                  sub="Estimated out-of-pocket after credit"
                  highlight
                />
              )}

              {/* 4) Potential after 6 months (only if leftover) */}
              {hasLeftover ? (
                <StatTile
                  label="Potential after 6 months"
                  value={`$${money0(potentialAfterSixMonths)}`}
                  sub="If you roll it over"
                />
              ) : null}
            </div>

            <p className="mt-4 text-xs text-brand-forest/60 leading-relaxed">
              “Left over” assumes member-priced services are deducted from your
              monthly membership credit. Credits may be banked up to 6 months.
            </p>

            {/* Mobile nav (optional) */}
            <div className="mt-4 md:hidden">
              <button
  type="button"
  onClick={resetCalculator}
  className="mt-3 w-full rounded-full border border-brand-gold bg-white/70 px-5 py-3 text-xs font-semibold text-brand-forest hover:bg-brand-cream/70"
>
  Start over
</button>
            </div>
          </div>
        </MobileStep>
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
      a: 'Membership discounts are applied automatically at checkout based on your tier: Refresh receives 10% off, Revitalize receives 12% off, and Radiance Elite receives 15% off eligible services. Certain promotions or services may be excluded.',
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
      <section className="mx-auto w-[92%] max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/membership/hero.png"
            alt="T Beauty Lounge services"
            className="h-[52vh] w-full object-cover md:h-[58vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/15" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-[92%] max-w-3xl">
              <p className="text-[11px] tracking-[0.25em] text-brand-forest/70">
                MEMBERSHIP
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                A Med-Spa Membership that feels like self-care
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Monthly beauty credit plus member pricing on services - designed
                to keep your routine consistent, soft, and easy.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.vagaro.com/tbeautylounge/memberships"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
                >
                  Sign Up Now
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/70 px-7 py-3 text-brand-forest font-semibold hover:bg-brand-cream/70"
                >
                  Browse Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF PAGE (constrained) */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-5 sm:py-6 md:py-8">
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

          {/* Mobile tabs */}
          <MobileTierTabs tiers={tiers} />

          {/* Desktop grid */}
          <div className="mt-8 hidden gap-5 md:grid md:grid-cols-3">
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
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white shadow-sm hover:brightness-110 active:scale-[0.99]"
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
        <MiniFAQAccordion title="Membership FAQ" faqs={faqs} />

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
