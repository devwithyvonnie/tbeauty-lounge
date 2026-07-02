// src/pages/services/functional-medicine-and-aesthetics.jsx
import MiniFAQAccordion from "../../components/MiniFAQ";

/** ---------------- DATA ---------------- */

const TERESA_BOOKING_URL = "https://tailongevityaesthetics.janeapp.com/";
const TAI_SITE_URL = "https://tailongevity.com/aesthetics.html";

// High-level categories only — no pricing here since Teresa's practice
// (TAI Longevity & Aesthetics) sets and controls her own pricing.
const CATEGORIES = [
  {
    id: "neurotoxins",
    name: "Neurotoxins",
    accent: "mint",
    blurb:
      "Botox, Dysport, and Daxxify — softening lines and preventing new ones with precise, conservative dosing.",
  },
  {
    id: "fillers",
    name: "Fillers & Skin Boosters",
    accent: "gold",
    blurb:
      "Lip filler, RHA filler, and Skinvive for subtle volume, contour, and hydration.",
  },
  {
    id: "regenerative",
    name: "Regenerative & Biostimulatory",
    accent: "mint",
    blurb:
      "PRF, PDO threads, Sculptra, and hyperdilute Radiesse to support collagen and skin quality over time.",
  },
  {
    id: "functional-medicine",
    name: "Functional Medicine & Wellness",
    accent: "gold",
    blurb:
      "Hormone optimization, peptide therapy, IV/nutrient support, and personalized root-cause wellness plans.",
  },
];

/** ---------------- UI HELPERS ---------------- */

function AccentBar({ accent = "mint" }) {
  const cls =
    accent === "gold"
      ? "bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold"
      : "bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint";
  return <div className={`h-1 ${cls}`} />;
}

function CategoryCard({ c }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <AccentBar accent={c.accent} />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-brand-forest">{c.name}</h3>
        <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
          {c.blurb}
        </p>
      </div>
    </article>
  );
}

/** ---------------- PAGE ---------------- */

export default function FunctionalMedicineAndAesthetics() {
  return (
    <div className="py-8">
      {/* HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/injectables/hero.png"
            alt="Injectables and functional medicine"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-brand-cream/75" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-4xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                INJECTABLES & FUNCTIONAL MEDICINE
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                With Teresa Le, MSN, FNP-C
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Injectables and functional medicine are available at our
                Goodyear location through Teresa, founder of{" "}
                <a
                  href={TAI_SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-brand-gold underline-offset-2 hover:text-brand-forest"
                >
                  TAI Longevity &amp; Aesthetics
                </a>
                . Teresa is an independent nurse practitioner — her
                scheduling, pricing, and payments are handled directly
                through her own practice, separate from T Beauty Lounge.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Available on-site in Goodyear
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Independent nurse practitioner–led care
                </span>
                <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
                  Membership discount still applies
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={TERESA_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book with Teresa
                </a>

                <a
                  href={TAI_SITE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-brand-forest ring-1 ring-black/10 hover:bg-white"
                >
                  View Services & Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Category overview (no pricing — set by TAI Longevity & Aesthetics) */}
        <section>
          <h2 className="text-xl font-semibold text-brand-forest">
            What Teresa Offers
          </h2>
          <p className="mt-1 text-sm text-brand-forest/80">
            For current pricing and full treatment details, visit TAI
            Longevity &amp; Aesthetics — Teresa's practice sets and manages
            her own pricing.
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.id} c={c} />
            ))}
          </div>
        </section>

        {/* Membership note */}
        <section className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
          <h2 className="text-lg font-semibold text-brand-forest">
            T Beauty Lounge Members
          </h2>
          <p className="mt-2 text-sm text-brand-forest/80 leading-relaxed">
            Your membership discount applies to Teresa's services — but since
            Teresa operates independently and bills separately, membership{" "}
            <em>credits</em> cannot be applied toward her services. See our{" "}
            <a
              href="/memberships"
              className="underline decoration-brand-gold underline-offset-2 hover:text-brand-forest"
            >
              Membership page
            </a>{" "}
            for full details.
          </p>
        </section>

        {/* FAQ */}
        <MiniFAQAccordion
          title="Injectables & Functional Medicine FAQ"
          faqs={[
            {
              q: "Is Teresa still part of T Beauty Lounge?",
              a: "Teresa now runs her own independent practice, TAI Longevity & Aesthetics, and continues to see clients on-site at our Goodyear location. Her scheduling, treatment plans, and payments are handled entirely through her own practice.",
            },
            {
              q: "How do I book with Teresa?",
              a: "Book directly through TAI Longevity & Aesthetics at tailongevityaesthetics.janeapp.com. This is separate from T Beauty Lounge's booking system.",
            },
            {
              q: "Can I use my T Beauty Lounge membership with Teresa?",
              a: "Yes — your membership discount applies to her services. Membership credits, however, cannot be used, since Teresa bills independently from T Beauty Lounge.",
            },
            {
              q: "Where can I see pricing for injectables or functional medicine?",
              a: "Current pricing is listed on TAI Longevity & Aesthetics' website and confirmed during your consultation with Teresa.",
            },
          ]}
        />

        {/* CTA */}
        <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
          <p className="text-xs md:text-sm text-brand-forest/80">
            Ready to get started? Book a consultation directly with Teresa.
          </p>
          <a
            href={TERESA_BOOKING_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
          >
            Book with Teresa
          </a>
        </section>
      </div>
    </div>
  );
}
