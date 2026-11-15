// src/sections/BlackFridayBanner.jsx
// Homepage banner that links to the Black Friday section on /promo.
// Hides itself after BF_END (see data/blackFriday.js).
import {
    getBlackFridayStatus,
    BF_START_SHORT,
    BF_END_SHORT,
  } from "../data/blackFriday";
  
  export default function BlackFridayBanner() {
    const status = getBlackFridayStatus();
    if (status === "ended") return null;
  
    const dateLine =
      status === "upcoming"
        ? `Starts ${BF_START_SHORT}`
        : `On now through ${BF_END_SHORT}`;
  
    return (
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-forest via-brand-forest to-[#2f3b27] px-5 py-6 text-white shadow-lg md:px-8">
        <span className="sparkle-float pointer-events-none absolute right-6 top-4 text-brand-gold/70" aria-hidden="true">✦</span>
        <span className="sparkle-float-delay pointer-events-none absolute bottom-4 right-16 text-xs text-brand-gold/50" aria-hidden="true">✦</span>
  
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="pr-8 text-[11px] font-semibold tracking-[0.2em] text-brand-gold md:pr-0 md:tracking-[0.3em]">
              BLACK FRIDAY · {dateLine.toUpperCase()}
            </p>
            <h2 className="mt-1 text-xl font-semibold md:text-2xl">
              Our biggest specials of the year
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Gift card doorbuster, microneedling, laser, and HydroDiamond
              packages, plus specials with Teresa.
            </p>
          </div>
  
          <a
            href="/promo#black-friday"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-white hover:brightness-95"
          >
            See the specials <span aria-hidden="true" className="ml-1">→</span>
          </a>
        </div>
      </section>
    );
  }