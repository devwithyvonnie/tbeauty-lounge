import { useMemo } from "react";

const PROMOS_LIVE = true;

const PHONE_DISPLAY = "(623) 213-8996";
const PHONE_TEL = "tel:+16232138996";
const SMS_TEL = "sms:+16232138996";

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];

const MONTHLY_PROMOS = [
  /* =======================
     JANUARY — New Year Reset
  ======================= */
  {
    month: "January",
    eyebrow: "NEW YEAR RESET",
    kicker: "Metabolic momentum",
    title: "GLP Weight Loss Kickstart",
    highlight: "20% OFF 3-Month Program",
    description:
      "A guided wellness reset designed to support real progress with structure and ongoing care.",
    mood: "Feel lighter, more energized, and supported from day one.",
    note: "Offer may vary by eligibility and medical consultation.",
  },
  {
    month: "January",
    eyebrow: "NEW YEAR, NEW GLOW",
    kicker: "Holiday skin reset",
    title: "Microneedling or HydroDiamond",
    highlight: "BOGO 50% OFF",
    description: "Brighter, smoother skin that looks refreshed and healthy.",
    mood: "Soft, polished skin you’ll notice immediately.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "January",
    eyebrow: "NEW YEAR, NEW SMILE",
    kicker: "Same-day confidence",
    title: "Teeth Whitening",
    highlight: "40% OFF",
    description: "A noticeably brighter smile with same-day results.",
    mood: "The quickest glow-up you can book.",
  },

  /* =======================
     FEBRUARY — Love Your Skin
  ======================= */
  {
    month: "February",
    eyebrow: "LOVE YOUR SKIN",
    kicker: "Soft, refreshed, natural",
    title: "Neurotoxin Refresh",
    highlight: "$11 Botox • $6 Daxxify • $4 Dysport",
    description: "A subtle refresh that smooths without changing how you look.",
    mood: "Rested, softened, and photo-ready.",
  },
  {
    month: "February",
    eyebrow: "GALENTINE’S / VALENTINE’S",
    kicker: "Bring a friend",
    title: "Facials or Japanese Head Spa",
    highlight: "BOGO 50% OFF",
    description:
      "A shared self-care experience designed to be enjoyed together.",
    mood: "Bring your favorite person and glow together.",
    note:
      "Same-day booking required (same time or back-to-back). Full payment due at the first appointment. Cannot be combined.",
  },

  /* =======================
     MARCH — Spring Skin Revival
  ======================= */
  {
    month: "March",
    eyebrow: "SPRING SKIN REVIVAL",
    kicker: "Before summer sun",
    title: "IPL Photofacial",
    highlight: "BOGO 50% OFF",
    description: "Clearer, more even-looking skin before stronger sun season.",
    mood: "Brighten and even tone in the perfect window.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "March",
    eyebrow: "SPRING CLEANING / RENEWAL",
    kicker: "Deep pore reset",
    title: "HydroDiamond Facial",
    highlight: "20% OFF",
    description: "Deeply cleansed skin that feels smooth, balanced, and refreshed.",
    mood: "The clean-slate facial everyone loves.",
  },

  /* =======================
     APRIL — Smooth Season
  ======================= */
  {
    month: "April",
    eyebrow: "SMOOTH SEASON",
    kicker: "Pre-summer prep",
    title: "Laser Hair Removal",
    highlight: "30% OFF Package of 6",
    description: "Long-lasting smoothness timed perfectly for warmer months.",
    mood: "Start now so you’re effortless later.",
  },
  {
    month: "April",
    eyebrow: "SPRING CLEANING / RENEWAL",
    kicker: "Deep pore reset",
    title: "HydroDiamond Facial",
    highlight: "20% OFF",
    description: "Clear, balanced skin as seasonal changes set in.",
    mood: "Fresh, clean, and visibly smoother.",
  },

  /* =======================
     MAY — Collagen Season
  ======================= */
  {
    month: "May",
    eyebrow: "COLLAGEN SEASON",
    kicker: "Firm • Smooth • Regenerate",
    title: "RF Microneedling",
    highlight: "PRF Add-On OR $200 Off",
    description: "Firmer, smoother skin with visible texture improvement.",
    mood: "A results-driven treatment that feels like a transformation.",
  },
  {
    month: "May",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Warm-weather glow-up",
    title: "Back Facials",
    highlight: "20% OFF",
    description: "Clear, confident skin for open backs and summer wear.",
    mood: "A confidence boost you’ll actually show off.",
  },
  {
    month: "May",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Quick glow upgrades",
    title: "Lash Lift & Tint",
    highlight: "$100",
    description: "Effortless lashes that stay lifted and defined for weeks.",
    mood: "Wake up looking done.",
  },
  {
    month: "May",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Quick glow upgrades",
    title: "Brow Lamination & Tint",
    highlight: "$100",
    description: "Full, polished brows that frame the face beautifully.",
    mood: "Fluffy, lifted, and instantly styled.",
  },
  {
    month: "May",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Brighten up for photos",
    title: "Teeth Whitening",
    highlight: "40% OFF",
    description: "A bright smile that elevates every summer look.",
    mood: "One visit, instant impact.",
  },

  /* =======================
     JUNE — Subtle Enhancement
  ======================= */
  {
    month: "June",
    eyebrow: "SUBTLE ENHANCEMENT",
    kicker: "Balanced, not overdone",
    title: "Dermal Filler",
    highlight: "$100 Off / Syringe",
    description: "Balanced enhancement that restores harmony and softness.",
    mood: "Refined, natural, and beautifully you.",
  },
  {
    month: "June",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Warm-weather glow-up",
    title: "Back Facials",
    highlight: "20% OFF",
    description: "Smooth, clear skin that holds up through heat and travel.",
    mood: "Summer skin — handled.",
  },
  {
    month: "June",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Quick glow upgrades",
    title: "Lash Lift & Tint",
    highlight: "$100",
    description: "Low-maintenance definition perfect for pool days and vacations.",
    mood: "Effortless, lifted, and clean.",
  },
  {
    month: "June",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Quick glow upgrades",
    title: "Brow Lamination & Tint",
    highlight: "$100",
    description: "Structured brows that stay in place — even in summer heat.",
    mood: "Always polished. No effort.",
  },
  {
    month: "June",
    eyebrow: "GET GLOWING FOR SUMMER",
    kicker: "Brighten up for photos",
    title: "Teeth Whitening",
    highlight: "40% OFF",
    description: "Noticeably brighter smiles for summer events and photos.",
    mood: "Instant confidence, instantly.",
  },

  /* =======================
     JULY — Confidence Boost
  ======================= */
  {
    month: "July",
    eyebrow: "CONFIDENCE BOOST",
    kicker: "Collagen that builds",
    title: "Sculptra",
    highlight: "$150 Off / Vial",
    description: "Gradual collagen support for natural-looking volume and firmness.",
    mood: "The glow that keeps getting better.",
  },
  {
    month: "July",
    eyebrow: "SUMMER SKIN SAVER",
    kicker: "Gift with purchase",
    title: "Facial + Free Travel SPF",
    highlight: "Free Travel-Size SPF",
    description: "Restored glow paired with added protection for sunny days.",
    mood: "Glow now, protect it after.",
    note: "While supplies last. Cannot be combined.",
  },

  /* =======================
     AUGUST — Skin Hydration Month
  ======================= */
  {
    month: "August",
    eyebrow: "SKIN HYDRATION MONTH",
    kicker: "Glass skin",
    title: "Skinvive",
    highlight: "$100 Off / Syringe",
    description: "Deep hydration for a smooth, dewy finish.",
    mood: "Hydrated, radiant, and unbelievably fresh.",
  },
  {
    month: "August",
    eyebrow: "SUMMER SKIN SAVER",
    kicker: "Gift with purchase",
    title: "Facial + Free Travel SPF",
    highlight: "Free Travel-Size SPF",
    description: "Hydrated, protected skin that keeps its glow through peak sun.",
    mood: "A little extra love with every facial.",
    note: "While supplies last. Cannot be combined.",
  },

  /* =======================
     SEPTEMBER — Under-Eye Renewal + Post-Summer Repair
  ======================= */
  {
    month: "September",
    eyebrow: "UNDER-EYE RENEWAL",
    kicker: "Natural regeneration",
    title: "PRF Under-Eyes",
    highlight: "$150 Off",
    description: "Brighter, refreshed under-eyes with a natural finish.",
    mood: "Rested-looking eyes without looking done.",
  },
  {
    month: "September",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Skin reset season",
    title: "Microneedling",
    highlight: "BOGO 50% OFF",
    description: "Renewed texture and tone after summer exposure.",
    mood: "Smooth, refined skin that feels brand new.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "September",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Lift + smooth",
    title: "Beyond Botox Facial",
    highlight: "BOGO 50% OFF",
    description: "Lifted, smoothed skin with no injections or downtime.",
    mood: "A visible refresh that still feels like self-care.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "September",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Commit to results",
    title: "Laser Treatment Packages",
    highlight: "10% OFF",
    description: "Consistent treatments designed for noticeable, lasting results.",
    mood: "The plan that gets you real results.",
  },

  /* =======================
     OCTOBER — Preventative Aging + Repair
  ======================= */
  {
    month: "October",
    eyebrow: "PREVENTATIVE AGING",
    kicker: "BOO-tiful event",
    title: "Neurotoxin Loyalty Event",
    highlight: "Limited Event Dates",
    description: "A refreshed, smooth look timed perfectly for the holiday season.",
    mood: "Soft, smooth, and naturally you.",
  },
  {
    month: "October",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Holiday glow starts now",
    title: "Microneedling",
    highlight: "BOGO 50% OFF",
    description: "Radiant skin that continues improving heading into the holidays.",
    mood: "Start now, glow later.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "October",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Lift + smooth",
    title: "Beyond Botox Facial",
    highlight: "BOGO 50% OFF",
    description: "A visible refresh that still feels like self-care.",
    mood: "Lifted, smooth, and effortless.",
    note:
      "Two appointments required. Second visit scheduled 4–6 weeks out. Full payment for both services is due at the first visit. Cannot be combined.",
  },
  {
    month: "October",
    eyebrow: "POST-SUMMER REPAIR",
    kicker: "Commit to results",
    title: "Laser Treatment Packages",
    highlight: "10% OFF",
    description: "Strategic timing to ensure results peak for holiday events.",
    mood: "Results that land right on time.",
  },

  /* =======================
     NOVEMBER — Hair + Holiday Prep
  ======================= */
  {
    month: "November",
    eyebrow: "HAIR CONFIDENCE PROGRAM",
    kicker: "Proactive care",
    title: "Hair Restoration Treatments",
    highlight: "20% OFF",
    description: "Stronger, healthier-looking hair with early, proactive care.",
    mood: "Confidence starts at the root.",
  },
  {
    month: "November",
    eyebrow: "HOLIDAY PARTY PREP",
    kicker: "Limited-time drops",
    title: "12 Days of Christmas Deals",
    highlight: "Limited Daily Deals",
    description: "Limited-time drops that make glow-ups easy and exciting.",
    mood: "Fun offers worth checking back for.",
  },
  {
    month: "November",
    eyebrow: "HOLIDAY PARTY PREP",
    kicker: "Best value",
    title: "Gift Card Bonus",
    highlight: "$100 for $85",
    description: "More value now for treatments you already love.",
    mood: "The smartest way to stock up.",
  },

  /* =======================
     DECEMBER — Holiday Favorites
  ======================= */
  {
    month: "December",
    eyebrow: "HOLIDAY FAVORITES",
    kicker: "Best-of bundles",
    title: "Neurotoxin + Skinvive",
    highlight: "Bundle Special",
    description: "Smooth, hydrated skin that photographs beautifully.",
    mood: "Your glow, wrapped.",
  },
  {
    month: "December",
    eyebrow: "HOLIDAY FAVORITES",
    kicker: "Best-of bundles",
    title: "Filler + PRF",
    highlight: "Bundle Special",
    description: "Subtle structure paired with bright, refreshed under-eyes.",
    mood: "Balanced, refined, and photo-ready.",
  },
  {
    month: "December",
    eyebrow: "HOLIDAY FAVORITES",
    kicker: "Wellness kickstart",
    title: "GLP Consult + Free Injection",
    highlight: "Bonus Included",
    description: "An easy, supported start for wellness goals ahead.",
    mood: "Start strong—without doing it alone.",
    note: "Offer may vary by eligibility and medical consultation.",
  },
];

const ONGOING_PROMOS = [
  {
    month: "Ongoing",
    eyebrow: "ONGOING FAVORITE",
    kicker: "Most requested",
    title: "$575 Lip Filler Special",
    highlight: "$575 per syringe",
    description:
      "Our most-requested filler special available year-round.",
    note: "Cannot be combined with other offers. While supplies last.",
  },
  {
    month: "Ongoing",
    eyebrow: "NEW GUESTS",
    kicker: "Best first visit",
    title: "New Guest Facial — $99",
    highlight: "$99",
    description: "Luxury skincare without the guesswork.",
    showIncludes: true,
    perks: [
      "Choose: Antiaging Facial, Goddess Facial, or HydroDiamond Glow Express",
      "Includes 1 complimentary upgrade: Dermaplaning OR LED OR HydroJelly Mask",
    ],
    note: "New guests only. One upgrade per visit. Cannot be combined.",
  },
];


function PromosHero() {
  const currentMonthName = MONTHS[new Date().getMonth()];

  return (
    <section className="mx-auto w-[92%] max-w-7xl">
      <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
        <img
          src="/images/promos/hero.png"
          alt="T Beauty Lounge specials"
          className="h-[52vh] w-full object-cover md:h-[58vh]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-brand-cream/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/15" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-[92%] max-w-3xl">
            <p className="text-[11px] tracking-[0.25em] text-brand-forest/70">
              PROMOS
            </p>

            <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
              {currentMonthName} Specials
            </h1>

            <p className="mt-4 max-w-2xl text-brand-forest/85">
              Curated offers rotate monthly. Call or text for the fastest scheduling.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
              >
                Call {PHONE_DISPLAY}
              </a>
              <a
                href={SMS_TEL}
                className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/70 px-7 py-3 text-brand-forest font-semibold hover:bg-brand-cream/70"
              >
                Text Us
              </a>
            </div>

            <div className="mt-3">
              <a
                href="/booking"
                className="text-sm font-semibold text-brand-forest underline underline-offset-4"
              >
                Prefer online booking? Book here →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WowCard({ promo }) {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm">
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-cream/50 via-white to-white"
        aria-hidden="true"
      />
      <div className="relative p-6 md:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-brand-forest ring-1 ring-black/10">
            {promo.eyebrow}
          </span>
          {promo.kicker ? (
            <span className="rounded-full bg-brand-cream/80 px-3 py-1 text-xs font-semibold text-brand-forest ring-1 ring-black/5">
              {promo.kicker}
            </span>
          ) : null}
        </div>

        <h2 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight text-brand-forest">
          {promo.title}
        </h2>

        {promo.highlight ? (
          <div className="mt-5 rounded-2xl bg-brand-forest text-white p-4 md:p-5">
            <p className="text-[11px] tracking-[0.25em] text-white/80">
              THE OFFER
            </p>
            <p className="mt-2 text-xl md:text-2xl font-semibold leading-tight">
              {promo.highlight}
            </p>
          </div>
        ) : null}

        {promo.description ? (
          <p className="mt-4 text-sm md:text-base text-brand-forest/80">
            {promo.description}
          </p>
        ) : null}

        {promo.mood ? (
          <p className="mt-2 italic text-sm text-brand-forest/70">
            {promo.mood}
          </p>
        ) : null}

        {promo.showIncludes && promo.perks?.length ? (
          <div className="mt-5">
            <p className="text-xs font-semibold tracking-[0.18em] text-brand-forest/70">
              INCLUDED
            </p>
            <ul className="mt-3 space-y-2">
              {promo.perks.map((perk) => (
                <li key={perk} className="flex gap-2 text-sm text-brand-forest/80">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {promo.note ? (
  <p className="mt-3 text-[11px] text-brand-forest/50">
    {promo.note}
  </p>
) : null}
      </div>
    </article>
  );
}

export default function Promos() {
  if (!PROMOS_LIVE) {
    return (
      <div className="py-8">
        <PromosHero />
        <section className="mx-auto w-[92%] max-w-7xl mt-10">
          <div className="rounded-2xl bg-white ring-1 ring-black/5 p-6">
            <p className="text-brand-forest/80">
              We’re refreshing promotions right now — check back soon.
            </p>
          </div>
        </section>
      </div>
    );
  }

  const currentMonthName = MONTHS[new Date().getMonth()];

  const currentMonthPromos = useMemo(() => {
    return MONTHLY_PROMOS.filter((p) => p.month === currentMonthName);
  }, [currentMonthName]);

  return (
    <div className="py-8">
      <PromosHero />

      <section className="mx-auto w-[92%] max-w-7xl mt-10">
        <p className="text-[11px] tracking-[0.25em] text-brand-forest/60">
          {currentMonthName.toUpperCase()} • LIMITED-TIME
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-brand-forest">
          This Month’s Offers
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-brand-forest/80">
          Call/text for the fastest scheduling.
        </p>

        {/* IMPORTANT: items-start prevents equal-height stretching */}
        <div className="mt-6 grid gap-5 lg:grid-cols-2 items-start">
          {currentMonthPromos.map((p) => (
            <WowCard key={`${p.month}-${p.title}`} promo={p} />
          ))}
        </div>

        {/* Ongoing */}
        <div className="mt-14">
          <p className="text-[11px] tracking-[0.25em] text-brand-forest/60">
            ALWAYS AVAILABLE
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-brand-forest">
            Ongoing Favorites
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-brand-forest/80">
            These offers stay available year-round (availability may vary).
          </p>

          <div className="mt-6 grid gap-5 lg:grid-cols-2 items-start">
            {ONGOING_PROMOS.map((p) => (
              <WowCard key={p.title} promo={p} />
            ))}
          </div>
        </div>

        <p className="mt-10 text-xs text-brand-forest/60">
          Offers are time-sensitive and may change. Promotions cannot be combined.
          While supplies last where applicable.
        </p>
      </section>
    </div>
  );
}
