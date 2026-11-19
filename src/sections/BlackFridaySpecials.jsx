// src/sections/BlackFridaySpecials.jsx
// Black Friday block for the Promo page. Hides itself after BF_END.
import { useEffect } from "react";
import {
  getBlackFridayStatus,
  BF_START_LABEL,
  BF_END_LABEL,
  TBL_DOORBUSTER,
  TBL_PACKAGES,
  TBL_PACKAGE_TERMS,
  TBL_PHONE_DISPLAY,
  TBL_PHONE_TEL,
  TBL_SMS,
  TBL_GIFT_CARD_URL,
  TERESA_SPECIALS,
} from "../data/blackFriday";
import {
  TERESA_BOOKING_URL,
  TERESA_PHONE_DISPLAY,
  TERESA_PHONE_TEL,
} from "../data/teresa";

function Sparkle({ className = "" }) {
  return (
    <span className={`pointer-events-none absolute text-brand-gold ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}

function PackageCard({ p }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-forest/60">
          {p.eyebrow}
        </p>
        <h3 className="mt-2 text-lg font-semibold leading-snug text-brand-forest">
          {p.title}
        </h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-brand-forest">
            {p.highlight}
          </span>
          {p.regular ? (
            <span className="text-sm text-brand-forest/50 line-through">
              {p.regular}
            </span>
          ) : null}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-brand-forest/80">
          {p.description}
        </p>
      </div>
    </article>
  );
}

export default function BlackFridaySpecials() {
  const status = getBlackFridayStatus();

  // Scroll here when arriving from the homepage banner (/promo#black-friday)
  useEffect(() => {
    if (status === "ended" || window.location.hash !== "#black-friday") return;
    requestAnimationFrame(() => {
      document
        .getElementById("black-friday")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [status]);

  if (status === "ended") return null;

  const dateLine =
    status === "upcoming"
      ? `Starts ${BF_START_LABEL} · through ${BF_END_LABEL}`
      : `Available now through ${BF_END_LABEL}`;

  return (
    <section
      id="black-friday"
      className="mx-auto mt-10 w-[92%] max-w-7xl scroll-mt-24"
    >
      {/* HEADER BAND */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-forest via-brand-forest to-[#2f3b27] px-6 py-10 text-center text-white shadow-lg md:px-10">
        <Sparkle className="sparkle-float left-6 top-5 text-lg opacity-70" />
        <Sparkle className="sparkle-float-delay right-8 top-8 text-sm opacity-50" />
        <Sparkle className="sparkle-float bottom-5 left-12 text-xs opacity-40" />
        <Sparkle className="sparkle-float-delay bottom-7 right-10 text-base opacity-60" />

        <p className="text-[11px] font-semibold tracking-[0.3em] text-brand-gold">
          LIMITED TIME
        </p>
        <h2 className="mt-2 text-3xl font-semibold md:text-5xl">
          Black Friday Specials
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
          {dateLine}
        </p>
      </div>

      {/* DOORBUSTER */}
      <article className="relative mt-6 overflow-hidden rounded-2xl bg-white shadow-sm ring-2 ring-brand-gold/60">
        <div className="grid gap-6 p-6 md:grid-cols-[1.3fr_1fr] md:items-center md:p-8">
          <div>
            <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-white">
              {TBL_DOORBUSTER.eyebrow}
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-brand-forest md:text-3xl">
              {TBL_DOORBUSTER.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-forest/80 md:text-base">
              {TBL_DOORBUSTER.description}
            </p>
            <p className="mt-3 text-xs text-brand-forest/60">
              {TBL_DOORBUSTER.note}
            </p>
          </div>

          <div className="rounded-2xl bg-brand-forest p-5 text-white">
            <p className="text-[11px] tracking-[0.25em] text-white/70">
              THE OFFER
            </p>
            <p className="mt-2 text-xl font-semibold leading-tight">
              {TBL_DOORBUSTER.highlight}
            </p>
            <a
              href={TBL_GIFT_CARD_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-brand-gold px-5 py-2.5 text-sm font-semibold text-white hover:brightness-95"
            >
              Shop Gift Cards
            </a>
          </div>
        </div>
      </article>

      {/* T BEAUTY LOUNGE PACKAGES */}
      <div className="mt-10">
        <p className="text-[11px] tracking-[0.25em] text-brand-forest/60">
          T BEAUTY LOUNGE
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-brand-forest">
          Black Friday Packages
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {TBL_PACKAGES.map((p) => (
            <PackageCard key={p.id} p={p} />
          ))}
        </div>

        <div className="mt-4 rounded-2xl bg-brand-cream/70 p-4 ring-1 ring-black/5">
          <ul className="space-y-1 text-xs text-brand-forest/75 md:text-sm">
            {TBL_PACKAGE_TERMS.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={TBL_PHONE_TEL}
            className="inline-flex items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            Call {TBL_PHONE_DISPLAY}
          </a>
          <a
            href={TBL_SMS}
            className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/70 px-6 py-3 text-sm font-semibold text-brand-forest hover:bg-brand-cream/70"
          >
            Text Us
          </a>
        </div>
      </div>

      {/* TERESA / TAI */}
      <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
        <div className="p-6 md:p-8">
          <p className="text-[11px] tracking-[0.25em] text-brand-forest/60">
            TAI LONGEVITY &amp; AESTHETICS
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-brand-forest">
            Black Friday with Teresa Le, MSN, FNP-C
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-brand-forest/80">
            Teresa is an independent nurse practitioner who sees clients at our
            Goodyear location. These specials are offered, booked, and paid
            directly through her practice, not through T Beauty Lounge.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {TERESA_SPECIALS.map((t) => (
              <div
                key={t.title}
                className="rounded-xl bg-brand-cream/70 p-4 ring-1 ring-black/5"
              >
                <p className="text-sm font-semibold text-brand-forest">
                  {t.title}
                </p>
                <p className="mt-1 text-lg font-semibold text-brand-forest">
                  {t.highlight}
                </p>
                {t.savings ? (
                  <p className="text-xs text-brand-forest/65">{t.savings}</p>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={TERESA_BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
            >
              Book with Teresa
            </a>
            {TERESA_PHONE_TEL ? (
              <a
                href={TERESA_PHONE_TEL}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/70 px-6 py-3 text-sm font-semibold text-brand-forest hover:bg-brand-cream/70"
              >
                Call Teresa {TERESA_PHONE_DISPLAY}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
