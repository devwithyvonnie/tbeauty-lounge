// src/pages/services/Injectables.jsx
import MiniFAQAccordion from '../../components/MiniFAQ';

// 🧊 Neurotoxin pricing (per unit)
const NEUROTOXIN_SECTION = {
  name: 'Neurotoxins',
  tagline:
    'Softening lines and preventing new ones with precise, conservative dosing customized to your features.',
  variants: [
    {
      label: 'Botox',
      priceLabel: '$14 / unit',
      duration: '30–45 min',
      note: 'Forehead, frown lines, crow’s feet, and more. Average treatment ranges 20–60 units depending on area.',
    },
    {
      label: 'Dysport',
      priceLabel: '$5.25 / unit',
      duration: '30–45 min',
      note: 'Alternative neurotoxin with a different unit conversion. Great for larger areas like the forehead.',
    },
    {
      label: 'Daxxify',
      priceLabel: '$9 / unit',
      duration: '30–45 min',
      note: 'A long-lasting neurotoxin option that may provide extended smoothing results compared to traditional formulas.',
    },
  ],
};

// 💉 Fillers & skin boosters
const FILLER_SECTION = {
  name: 'Fillers & Skin Boosters',
  tagline:
    'Subtle volume, contour, and hydration for lips, cheeks, and more—focused on balanced, natural-looking results.',
  variants: [
    {
      label: 'Lip Filler',
      price: 650,
      duration: '45–60 min',
      note: 'Customized lip shaping and hydration. Includes consultation and numbing.',
    },
    {
      label: 'RHA Filler',
      price: 800,
      duration: '60 min',
      note: 'Resilient hyaluronic acid filler designed to move naturally with expression.',
    },
    {
      label: 'Skinvive',
      price: 725,
      duration: '45–60 min',
      note: 'Microdroplet skin booster to improve cheek smoothness and subtle glow.',
    },
  ],
};

// 🌱 Regenerative & lipodissolve
const REGENERATIVE_SECTION = {
  name: 'Regenerative & Lipodissolve',
  tagline:
    'Support collagen, improve texture, and refine small areas with regenerative therapies and targeted contouring.',
  variants: [
    {
      label: 'PCDC Lipodissolve',
      price: 450,
      duration: '45–60 min',
      note: 'Chemical lipolysis for small, stubborn pockets of fat. Number of sessions varies by area.',
    },
    {
      label: 'PRF Under-Eye',
      price: 450,
      duration: '45–60 min',
      note: 'Platelet-rich fibrin for under-eye creping and hollowness. Best in a series.',
    },
    {
      label: 'PRF Hair Restoration',
      price: 550,
      duration: '60 min',
      note: 'PRF injections to support hair density and scalp health. Typically performed in a series.',
    },
    {
      label: 'Sculptra & Hyperdilute Radiesse',
      price: 900,
      duration: '60 min',
      note: 'Biostimulatory treatments to gradually support collagen and improve skin tone and firmness.',
    },
  ],
};

// ✂️ PDO Threads
const THREADS_SECTION = {
  name: 'PDO Threads',
  tagline:
    'Collagen-stimulating threads to subtly lift, refine, and contour areas such as the jawline, cheeks, and brows.',
  variants: [
    {
      label: 'Smooth Threads (Collagen-Boosting)',
      duration: '45–60 min',
      price: 'Starting at $300',
      note: 'Used to improve skin texture, fine lines, and overall firmness. Best performed in a series.',
    },
    {
      label: 'Lift Threads (Lifting / Repositioning)',
      duration: '60–75 min',
      price: 'Starting at $850',
      note: 'Designed to gently lift areas like the jawline or cheeks. Exact pricing depends on the number of threads needed.',
    },
    {
      label: 'Full Face Thread Lift',
      duration: '75–90 min',
      price: 'Starting at $1,600',
      note: 'Comprehensive thread treatment for multiple lift points and enhanced contouring.',
    },
  ],
  footnote:
    'A consultation is required to determine thread type, quantity, and the best treatment plan for your goals.',
};

export default function InjectablesPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          COSMETIC INJECTIONS
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Cosmetic Injections
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Neurotoxins, fillers, biostimulatory treatments, and regenerative
          options—planned and performed by our injector with a focus on natural,
          balanced results that fit your features and goals.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Consultation-first treatment planning
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Subtle, natural-focused outcomes
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Medical provider–performed injections
          </span>
        </div>
      </header>

      {/* NEUROTOXINS */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {NEUROTOXIN_SECTION.name}
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              {NEUROTOXIN_SECTION.tagline}
            </p>
          </div>
        </div>

        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
          <div className="p-4 md:p-5">
            <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
              <dl className="space-y-3 text-sm text-brand-forest/90">
                {NEUROTOXIN_SECTION.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex flex-col gap-1 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <dt className="font-semibold text-brand-forest">
                          {v.label}
                        </dt>
                        <div className="mt-0.5 flex flex-wrap gap-1 text-[11px] text-brand-forest/75">
                          <span className="rounded-full bg-brand-cream px-2 py-0.5">
                            {v.duration}
                          </span>
                        </div>
                      </div>
                      <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                        {v.priceLabel}
                      </dd>
                    </div>
                    {v.note && (
                      <p className="text-xs text-brand-forest/80">{v.note}</p>
                    )}
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-3 text-xs text-brand-forest/65">
              Final dosing and pricing are determined in consultation based on
              your anatomy, muscle movement, and treatment goals.
            </p>
          </div>
        </article>
      </section>

      {/* FILLERS & BOOSTERS */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {FILLER_SECTION.name}
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              {FILLER_SECTION.tagline}
            </p>
          </div>
        </div>

        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
          <div className="p-4 md:p-5">
            <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
              <dl className="space-y-3 text-sm text-brand-forest/90">
                {FILLER_SECTION.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex flex-col gap-1 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <dt className="font-semibold text-brand-forest">
                          {v.label}
                        </dt>
                        <div className="mt-0.5 flex flex-wrap gap-1 text-[11px] text-brand-forest/75">
                          <span className="rounded-full bg-brand-cream px-2 py-0.5">
                            {v.duration}
                          </span>
                          <span className="rounded-full bg-brand-mint/30 px-2 py-0.5">
                            Priced per syringe / treatment
                          </span>
                        </div>
                      </div>
                      <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                        ${v.price}
                      </dd>
                    </div>
                    {v.note && (
                      <p className="text-xs text-brand-forest/80">{v.note}</p>
                    )}
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-3 text-xs text-brand-forest/65">
              The number of syringes recommended varies based on your goals and
              starting anatomy. Your provider will review options and pricing
              before treatment.
            </p>
          </div>
        </article>
      </section>

      {/* REGENERATIVE & LIPODISSOLVE */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {REGENERATIVE_SECTION.name}
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              {REGENERATIVE_SECTION.tagline}
            </p>
          </div>
        </div>

        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
          <div className="p-4 md:p-5">
            <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
              <dl className="space-y-3 text-sm text-brand-forest/90">
                {REGENERATIVE_SECTION.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex flex-col gap-1 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <dt className="font-semibold text-brand-forest">
                          {v.label}
                        </dt>
                        <div className="mt-0.5 text-[11px] text-brand-forest/75">
                          {v.duration}
                        </div>
                      </div>
                      <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                        ${v.price}
                      </dd>
                    </div>
                    {v.note && (
                      <p className="text-xs text-brand-forest/80">{v.note}</p>
                    )}
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-3 text-xs text-brand-forest/65">
              Most regenerative treatments are performed in a series for best
              results. Your provider will discuss an appropriate plan during
              your visit.
            </p>
          </div>
        </article>
      </section>

      {/* PDO THREADS */}
      {/* PDO THREADS */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {THREADS_SECTION.name}
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              {THREADS_SECTION.tagline}
            </p>
          </div>
        </div>

        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
          <div className="p-4 md:p-5">
            <div className="rounded-xl bg-brand-cream/70 px-3 py-3">
              <dl className="space-y-3 text-sm text-brand-forest/90">
                {THREADS_SECTION.variants.map((v) => (
                  <div
                    key={v.label}
                    className="flex flex-col gap-1 border-b border-brand-cream/80 pb-3 last:border-none last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <dt className="font-semibold text-brand-forest">
                          {v.label}
                        </dt>
                        <div className="mt-0.5 text-[11px] text-brand-forest/75">
                          {v.duration}
                        </div>
                      </div>
                      <dd className="shrink-0 text-sm font-semibold text-brand-forest">
                        {v.price}
                      </dd>
                    </div>
                    {v.note && (
                      <p className="text-xs text-brand-forest/80">{v.note}</p>
                    )}
                  </div>
                ))}
              </dl>
            </div>

            <p className="mt-3 text-xs text-brand-forest/65">
              {THREADS_SECTION.footnote}
            </p>
          </div>
        </article>
      </section>

      {/* MINI FAQ ACCORDION */}
      <MiniFAQAccordion
        title="Cosmetic Injections FAQ"
        faqs={[
          {
            q: 'Do I need a consultation before injectables?',
            a: 'Yes. Your first visit will always include a consultation to review your health history, goals, and whether treatment is appropriate for you that day.',
          },
          {
            q: 'How long do neurotoxin results last?',
            a: 'Most guests enjoy smoother lines for about 3–4 months, though this can vary by dose, area, and individual metabolism.',
          },
          {
            q: 'Will I bruise or swell after injections?',
            a: 'Mild redness, swelling, or bruising is possible with any injectable. We recommend avoiding blood-thinning medications or supplements when medically appropriate and following all aftercare instructions.',
          },
          {
            q: 'When should I schedule before an event?',
            a: 'For neurotoxins, schedule at least 2 weeks before an event to allow results to settle. For filler or regenerative treatments, we recommend 2–4 weeks in case of temporary swelling or touch-ups.',
          },
        ]}
      />

      {/* FOOTNOTE / CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Not sure where to start? Book a{' '}
          <span className="font-medium">cosmetic injection consultation</span>{' '}
          and your provider will walk you through options, pricing, and a
          personalized plan.
        </p>
        <a
          href="/booking?service=injectables"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Injectable Appointment
        </a>
      </section>
    </div>
  );
}
