// src/pages/services/Fibroblast.jsx
import MiniFAQAccordion from '../../components/MiniFAQ';

const fmt = (n) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

const SECTIONS = [
  {
    id: 'eyes',
    title: 'Eyes',
    subtitle:
      'Lift, smooth, and tighten around the eyes for a refreshed, brighter look.',
    items: [
      { name: 'Upper Eyelid Lift', price: 500 },
      { name: "Upper Eyelid Lift & Crow's Feet", price: 600 },
      { name: 'Upper & Lower Eyelid Tightening and Lift', price: 700 },
      { name: 'Under Eye Lift & Smooth', price: 500 },
      { name: "Under Eye Lift & Smooth with Crow's Feet", price: 600 },
      { name: "Middle Trio (Eyelids, Undereyes, Crow's Feet)", price: 1100 },
    ],
  },
  {
    id: 'upper-face',
    title: 'Upper Face',
    subtitle: 'Forehead, brow, and eye-area tightening for lifted contours.',
    items: [
      { name: "Forehead Lines (Including the 11's)", price: 500 },
      { name: "Just the 11's", price: 300 },
      { name: 'Brow Lift', price: 450 },
      { name: "Crow's Feet", price: 500 },
      { name: "Forehead, Brow Lift, Crow's Feet", price: 1100 },
      { name: 'Top Total Lift', price: 1200 },
    ],
  },
  {
    id: 'lower-face',
    title: 'Lower Face',
    subtitle: 'Target lines and lift around the mouth, cheeks, and jawline.',
    items: [
      { name: 'Smile Line', price: 400 },
      { name: 'Upper Lip Plump', price: 400 },
      { name: 'Full Lip Plump', price: 600 },
      { name: 'Smokers Line', price: 600 },
      { name: 'Cheek Lines', price: 400 },
      { name: 'Cheek Lift', price: 700 },
      { name: 'Total Facelift', price: 2500 },
    ],
  },
  {
    id: 'neck',
    title: 'Neck',
    subtitle:
      'Smooth and tighten the neck and jawline area for a cleaner profile.',
    items: [
      { name: 'Jowls & Jawline', price: 800 },
      { name: 'Turkey Neck', price: 600 },
      { name: 'Jowls/Jawline & Turkey Neck', price: 1200 },
      { name: 'Neck Lift', price: 1000 },
      {
        name: 'Total Neck Lift (Jowls/Jawline, Turkey Neck, and Full Neck)',
        price: 1500,
      },
    ],
  },
  {
    id: 'body',
    title: 'Body',
    subtitle:
      'Targeted tightening for key areas—ideal for texture concerns and skin laxity.',
    items: [
      { name: 'Decollete', price: 1250 },
      { name: 'Belly Button Lift', price: 500 },
      { name: 'Tummy Makeover', price: 1200 },
      { name: 'Breast Lift', price: 1200 },
      { name: 'Nipple Lift', price: 500 },
      { name: 'Top of Hand', price: 750 },
      { name: 'Stretch Marks', price: 400 },
      { name: 'Age Spots, Skin Tags and Other Treatments', price: 300 },
    ],
  },
];

export default function FibroblastPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          FIBROBLAST
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Fibroblast Skin Tightening
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          A precision-based treatment designed to help tighten and smooth the
          appearance of skin in targeted areas. Pricing below is by area—your
          provider will confirm candidacy and a customized plan during your
          consultation.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Best for targeted areas
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Consultation recommended
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Pricing by treatment area
          </span>
        </div>
      </header>

      {/* QUICK JUMP */}
      <section className="mt-6 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full bg-brand-cream px-4 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
          >
            {s.title}
          </a>
        ))}
      </section>

      {/* SECTIONS */}
      {SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="mt-10 scroll-mt-24">
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                {section.title}
              </h2>
              {section.subtitle && (
                <p className="mt-1 text-sm text-brand-forest/80">
                  {section.subtitle}
                </p>
              )}
            </div>
          </div>

          <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
            <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
            <div className="p-4 md:p-5">
              <div className="grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <div
                    key={`${section.id}-${item.name}`}
                    className="rounded-xl bg-brand-cream/70 px-4 py-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-brand-forest">
                          {item.name}
                        </p>
                      </div>

                      <div className="shrink-0 text-right">
                        <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                          Starting at
                        </p>
                        <p className="text-base font-semibold text-brand-forest">
                          {fmt(item.price)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-brand-forest/70">
                Prices shown are per area. Final pricing and recommended
                treatment plan are confirmed during consultation.
              </p>
            </div>
          </article>
        </section>
      ))}

      {/* MINI FAQ */}
      <MiniFAQAccordion
        title="Fibroblast FAQ"
        faqs={[
          {
            q: 'What is Fibroblast?',
            a: 'Fibroblast is a targeted skin-tightening treatment designed to help improve the look of laxity and texture in specific areas. Your provider will explain how it works and whether it’s the best option for your goals.',
          },
          {
            q: 'How many sessions do I need?',
            a: 'Many guests see improvement after one session, but the ideal plan depends on the area, your skin, and your goals. Some areas may benefit from additional sessions spaced out over time.',
          },
          {
            q: 'Is there downtime?',
            a: 'Downtime varies by area and individual. You may experience redness and temporary visible healing in the treated area. We’ll review aftercare and what to expect during your consultation.',
          },
          {
            q: 'Who is not a good candidate?',
            a: 'Certain skin types, medical conditions, or recent treatments may not be compatible. We’ll screen for safety during your consultation and recommend alternatives if needed.',
          },
        ]}
      />

      {/* CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Not sure which area to start with? Book a{' '}
          <span className="font-medium">Fibroblast consultation</span> and
          we&apos;ll map out a plan that fits your goals.
        </p>
        <a
          href="/booking?service=fibroblast"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Fibroblast Consultation
        </a>
      </section>
    </div>
  );
}
