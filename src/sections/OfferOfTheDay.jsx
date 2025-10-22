import { useEffect, useMemo, useState } from "react";

/** ---------------------------
 * Configure your weekly offers
 * ---------------------------
 * One entry per weekday (0=Sun ... 6=Sat).
 * You can change titles, copy, discount, links & images here anytime.
 */
const WEEKLY_OFFERS = {
  0: { // Sunday
    title: "Offer of the Day",
    headline: "Sunday Serenity",
    sub: "35% off Facials",
    discount: "35% OFF",
    ctaLabel: "Book Facial",
    href: "/booking?service=facial",
    image: "/images/offers/facial.jpg", // put file in /public/images/offers
  },
  1: { // Monday
    title: "Offer of the Day",
    headline: "Monday Glow",
    sub: "10% off Injectables",
    discount: "10% OFF",
    ctaLabel: "Book Injectables",
    href: "/booking?service=injectables",
    image: "/images/offers/injectables.jpg",
  },
  2: { // Tuesday
    title: "Offer of the Day",
    headline: "Two-for-Tint Tuesday",
    sub: "Complimentary brow wax with tint",
    discount: "FREE ADD-ON",
    ctaLabel: "Book Wax + Tint",
    href: "/booking?service=lash_brow",
    image: "/images/offers/brow.jpg",
  },
  3: { // Wednesday
    title: "Offer of the Day",
    headline: "Wellness Wednesday",
    sub: "B-12 Shot on us with any facial",
    discount: "FREE B-12",
    ctaLabel: "Book Wellness",
    href: "/booking?service=wellness",
    image: "/images/offers/wellness.jpg",
  },
  4: { // Thursday
    title: "Offer of the Day",
    headline: "Laser Thursday",
    sub: "Small area intro special",
    discount: "$20 OFF",
    ctaLabel: "Book Laser",
    href: "/booking?service=laser_small",
    image: "/images/offers/laser.jpg",
  },
  5: { // Friday
    title: "Offer of the Day",
    headline: "Fresh Friday",
    sub: "Lash lift + tint bundle",
    discount: "BUNDLE SAVE",
    ctaLabel: "Book Lashes",
    href: "/booking?service=lash_lift",
    image: "/images/offers/lift.jpg",
  },
  6: { // Saturday
    title: "Offer of the Day",
    headline: "Self-Care Saturday",
    sub: "10% off any package",
    discount: "10% OFF",
    ctaLabel: "Explore Packages",
    href: "/services#packages",
    image: "/images/offers/packages.jpg",
  },
};

/** -----------------------------------------
 * Optional: single-day overrides (YYYY-MM-DD)
 * -----------------------------------------
 * Useful for holidays, anniversaries, flash promos.
 * If a date exists here, it replaces the weekday offer.
 */
const DATE_OVERRIDES = {
  // "2025-12-24": {
  //   title: "Holiday Glow",
  //   headline: "Christmas Eve Treat",
  //   sub: "Gift card bonus today only",
  //   discount: "+15% BONUS",
  //   ctaLabel: "Buy Gift Card",
  //   href: "/gift-cards",
  //   image: "/images/offers/holiday.jpg",
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
  next.setHours(24, 0, 0, 0); // tonight at 24:00 local
  return next.getTime() - now.getTime();
}

function useCountdownToMidnight() {
  const [msLeft, setMsLeft] = useState(msUntilNextMidnight());

  useEffect(() => {
    const tick = () => setMsLeft(msUntilNextMidnight());
    const id = setInterval(tick, 1000);
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

    // 1) Date override?
    if (DATE_OVERRIDES[todayKey]) return DATE_OVERRIDES[todayKey];

    // 2) Weekly rotation
    const day = frozenDay ?? today.getDay(); // 0-6
    return WEEKLY_OFFERS[day];
  }, [frozenDay]);

  if (!offer) return null;

  return (
    <section className="mx-auto w-11/12 max-w-6xl py-10">
      <div className="grid items-stretch gap-6 md:grid-cols-[1.05fr_1fr]">
        {/* Image side */}
        <div className="relative overflow-hidden rounded-[--radius-card]">
          <img
            src={offer.image}
            alt={offer.headline}
            className="h-64 w-full object-cover md:h-full"
          />
          {/* torn-edge style hint via gradient (optional) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-cream/90 to-transparent" />
        </div>

        {/* Text + countdown */}
        <div className="rounded-[--radius-card] bg-white p-6 md:p-8">
          <p className="text-sm tracking-widest text-brand-forest/70">{offer.title}</p>
          <h3 className="mt-1 text-3xl font-semibold text-brand-forest">{offer.headline}</h3>
          <p className="mt-1 text-brand-forest/80">{offer.sub}</p>

          {/* Countdown */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              {[
                { v: days, label: "DAYS" },
                { v: hrs, label: "HRS" },
                { v: mins, label: "MINS" },
                { v: secs, label: "SECS" },
              ].map((b, i) => (
                <div key={i} className="text-center">
                  <div className="rounded-md bg-brand-forest px-3 py-2 font-mono text-lg text-white">
                    {String(b.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] tracking-wide text-brand-forest/70">{b.label}</div>
                </div>
              ))}
            </div>

            {offer.discount && (
              <span className="ml-2 rounded-full bg-brand-mint px-3 py-1 text-xs text-brand-forest">
                {offer.discount}
              </span>
            )}
          </div>

          <a
            href={offer.href}
            className="mt-6 inline-block rounded-full bg-brand-forest px-6 py-3 text-white hover:brightness-110"
          >
            {offer.ctaLabel ?? "Book Now"}
          </a>
        </div>
      </div>
    </section>
  );
}
