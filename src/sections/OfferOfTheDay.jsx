import { useEffect, useMemo, useState } from "react";

/** ---------------------------
 * Offer configuration
 * ---------------------------
 * One entry per weekday (0=Sun ... 6=Sat).
 *
 * Sat–Tue are Gift Card focused.
 * Wed/Thu/Fri are service promos.
 */
const WEEKLY_OFFERS = {
  0: {
    // Sunday (Gift Card)
    type: "giftcard",
    title: "Offer of the Day",
    headline: "Sunday Gift Card Bonus",
    sub: "Treat someone (or yourself) with a little extra value today.",
    perk: "Buy $100, get a $25 bonus",
    discount: "+$25 BONUS",
    ctaLabel: "Shop Gift Cards",
    href: "/gift-cards",
    image: "/images/offers/giftcard.png",
    finePrint: "$25 bonus must be used by the last day of the purchase month.",
  },
  1: {
    // Monday (Gift Card)
    type: "giftcard",
    title: "Offer of the Day",
    headline: "Monday Gift Card Perk",
    sub: "Perfect for gifting or planning your next visit.",
    perk: "Buy $100, get a $15 bonus",
    discount: "+$15 BONUS",
    ctaLabel: "Shop Gift Cards",
    href: "/gift-cards",
    image: "/images/offers/giftcard.png",
    finePrint: "$15 bonus must be used by the last day of the purchase month.",
  },
  2: {
    // Tuesday (Gift Card)
    type: "giftcard",
    title: "Offer of the Day",
    headline: "Tuesday Gift Card Treat",
    sub: "Stock up for birthdays, holidays, or your future self-care.",
    perk: "Buy $100, get a $15 bonus",
    discount: "+$15 BONUS",
    ctaLabel: "Shop Gift Cards",
    href: "/gift-cards",
    image: "/images/offers/giftcard.png",
    finePrint: "$15 bonus must be used by the last day of the purchase month.",
  },
  3: {
    // Wednesday
    type: "service",
    title: "Offer of the Day",
    headline: "Wellness Wednesday",
    sub: "15% off Hydrodiamond Facials",
    discount: "15% OFF",
    ctaLabel: "Book Hydrodiamond",
    href: "/booking?service=hydradiamond",
    image: "/images/offers/hydrodiamond.png",
    details: "Limited availability • While appointments last",
  },
  4: {
    // Thursday
    type: "service",
    title: "Offer of the Day",
    headline: "Laser Thursday",
    sub: "$20 off Small Area Laser Hair Removal",
    discount: "$20 OFF",
    ctaLabel: "Call to Book Today’s Offer",
    href: "/booking?service=laser_small",
    image: "/images/offers/laser.png",
    details: "New clients welcome • Ask us which areas qualify",
  },
  5: {
    // Friday
    type: "service",
    title: "Offer of the Day",
    headline: "Fresh Friday",
    sub: "Lash Lift & Tint for $100",
    discount: "$100",
    ctaLabel: "Call to Book Today’s Offer",
    href: "/booking?service=lash_lift_tint",
    image: "/images/offers/lift.png",
    details: "One session • Limited slots",
  },
  6: {
    // Saturday (Gift Card)
    type: "giftcard",
    title: "Offer of the Day",
    headline: "Saturday Gift Card Bonus",
    sub: "Give the gift of self-care — and get a little extra today.",
    perk: "Buy $100, get a $25 bonus",
    discount: "+$25 BONUS",
    ctaLabel: "Shop Gift Cards",
    href: "/gift-cards",
    image: "/images/offers/giftcard.png",
    finePrint: "$25 bonus must be used by the last day of the purchase month.",
  },
};

/** -----------------------------------------
 * Optional: single-day overrides (YYYY-MM-DD)
 * ----------------------------------------- */
const DATE_OVERRIDES = {
  // "2026-01-01": {
  //   type: "giftcard",
  //   title: "New Year Bonus",
  //   headline: "Start Fresh",
  //   sub: "Gift card bonus today only",
  //   discount: "GIFT CARD BONUS",
  //   ctaLabel: "Shop Gift Cards",
  //   href: "/gift-cards",
  //   image: "/images/offers/giftcard.png",
  //   finePrint: "Bonus applies to gift card purchases made today only.",
  // },
};

function getTodayKey(d = new Date()) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function msUntilNextMidnight() {
  const now = new Date();
  const next = new Date(now);
  next.setHours(24, 0, 0, 0);
  return next.getTime() - now.getTime();
}

function useCountdownToMidnight() {
  const [msLeft, setMsLeft] = useState(msUntilNextMidnight());

  useEffect(() => {
    const id = setInterval(() => setMsLeft(msUntilNextMidnight()), 1000);
    return () => clearInterval(id);
  }, []);

  const total = Math.max(0, msLeft);
  const secs = Math.floor(total / 1000) % 60;
  const mins = Math.floor(total / (1000 * 60)) % 60;
  const hrs = Math.floor(total / (1000 * 60 * 60)) % 24;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { days, hrs, mins, secs };
}

export default function OfferOfTheDay() {
  // Optional query to freeze for a specific day while designing, e.g. ?offerDay=4
  const frozenDay = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("offerDay");
    return v != null ? Math.max(0, Math.min(6, Number(v))) : null;
  }, []);

  const { days, hrs, mins, secs } = useCountdownToMidnight();

  const offer = useMemo(() => {
    const today = new Date();
    const todayKey = getTodayKey(today);

    if (DATE_OVERRIDES[todayKey]) return DATE_OVERRIDES[todayKey];

    const day = frozenDay ?? today.getDay();
    return WEEKLY_OFFERS[day];
  }, [frozenDay]);

  if (!offer) return null;

  const countdownBlocks = [
    { v: days, label: "DAYS" },
    { v: hrs, label: "HRS" },
    { v: mins, label: "MINS" },
    { v: secs, label: "SECS" },
  ];

  return (
    <section className="mx-auto w-11/12 max-w-6xl py-10">
      <div className="grid items-stretch gap-6 md:grid-cols-[1.05fr_1fr]">
        {/* Image side */}
        <div className="relative overflow-hidden rounded-[--radius-card]">
          <img
            src={offer.image}
            alt={offer.headline}
            className="h-72 w-full object-cover md:h-full"
            loading="lazy"
          />

          {/* Soft overlay for readability */}
          <div className="pointer-events-none absolute inset-0 bg-black/10" />

          {/* Top badges */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-brand-forest">
              Today only
            </span>
            {offer.discount ? (
              <span className="rounded-full bg-brand-mint px-3 py-1 text-xs font-semibold text-brand-forest">
                {offer.discount}
              </span>
            ) : null}
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-brand-cream/95 to-transparent" />
        </div>

        {/* Text + countdown */}
        <div className="rounded-[--radius-card] bg-white p-6 md:p-8 shadow-sm ring-1 ring-black/5">
          <p className="text-xs tracking-[0.28em] text-brand-forest/70">
            {offer.title}
          </p>

          <h3 className="mt-2 text-3xl font-semibold text-brand-forest">
            {offer.headline}
          </h3>

          <p className="mt-2 text-brand-forest/80">{offer.sub}</p>

          {/* Gift Card extra line (optional) */}
          {offer.type === "giftcard" && offer.perk ? (
            <div className="mt-4 rounded-2xl bg-brand-cream/70 p-4 ring-1 ring-black/5">
              <p className="text-sm font-semibold text-brand-forest">
                🎁 {offer.perk}
              </p>
              {offer.finePrint ? (
                <p className="mt-1 text-xs text-brand-forest/70">
                  {offer.finePrint}
                </p>
              ) : null}
            </div>
          ) : null}

          {/* Service detail line (optional) */}
          {offer.type === "service" && offer.details ? (
            <p className="mt-3 text-sm text-brand-forest/70">{offer.details}</p>
          ) : null}

          {/* Countdown */}
          <div className="mt-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-brand-forest/80">
                Ends at midnight
              </p>

              <div className="flex items-center gap-2">
                {countdownBlocks.map((b, i) => (
                  <div key={i} className="text-center">
                    <div className="rounded-md bg-brand-forest px-3 py-2 font-mono text-lg text-white">
                      {String(b.v).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-[10px] tracking-wide text-brand-forest/70">
                      {b.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={offer.href}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-white hover:brightness-110 md:w-auto"
          >
            {offer.ctaLabel ?? "Call to Book Today’s Offer"}
          </a>

          {/* Small helper text (optional) */}
          <p className="mt-3 text-xs text-brand-forest/60">
            Questions? Call or text us and we’ll help you book the offer.
          </p>
        </div>
      </div>
    </section>
  );
}
