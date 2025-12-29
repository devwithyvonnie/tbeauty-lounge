// src/pages/services/PMU.jsx
import MiniFAQAccordion from '../../components/MiniFAQ';

// 🖌 Brows, liner, lips, and removal
const PMU_GROUPS = [
  {
    id: 'brows',
    title: 'Brows',
    intro:
      'Soft, natural-looking brows tailored to your features. All brow services include detailed mapping and aftercare.',
    services: [
      {
        id: 'powder-ombre',
        name: 'Powder / Ombré Brows',
        description:
          'Softly shaded brows with a gentle gradient for a natural, “filled-in” look. Ideal for most skin types.',
        price: 450,
        duration: '2.5–3 hrs',
      },
      {
        id: 'microblading',
        name: 'Microblading',
        description:
          'Fine, hairstroke-style brows designed to mimic natural hairs for a subtle enhancement.',
        price: 450,
        duration: '2–3 hrs',
      },
      {
        id: 'combo',
        name: 'Combo Brows',
        description:
          'A mix of hairstrokes and shading to add both definition and density.',
        price: 500,
        duration: '2.5–3 hrs',
      },
      {
        id: 'nano',
        name: 'Nano Brows',
        description:
          'Machine-stroked brows with ultra-fine detail and beautiful longevity.',
        price: 550,
        duration: '3 hrs',
      },
    ],
  },
  {
    id: 'eyes',
    title: 'Lash Line & Eyeliner',
    intro:
      'Define the eyes with subtle lash enhancement or bolder eyeliner looks designed for your eye shape.',
    services: [
      {
        id: 'lash-line',
        name: 'Lash Line Enhancement',
        description:
          'Pigment placed at the base of the lashes to create the look of fuller, darker lash roots.',
        price: 300,
        duration: '1.5–2 hrs',
      },
      {
        id: 'classic-eyeliner',
        name: 'Classic Eyeliner',
        description:
          'Clean, defined liner tailored to your preferred thickness and style.',
        price: 350,
        duration: '2 hrs',
      },
      {
        id: 'designer-eyeliner',
        name: 'Winged / Designer Eyeliner',
        description:
          'A more dramatic liner with a wing or specialty design for extra lift and definition.',
        price: 425,
        duration: '2–2.5 hrs',
      },
    ],
  },
  {
    id: 'lips',
    title: 'Lips',
    intro:
      'Restore soft color and shape to the lips with natural-looking tint that heals beautifully.',
    services: [
      {
        id: 'lip-blush',
        name: 'Lip Blush',
        description:
          'Soft wash of color to enhance natural lip tone and definition. Heals to a sheer, tinted finish.',
        price: 450,
        duration: '2–3 hrs',
      },
    ],
  },
  {
    id: 'touchups',
    title: 'Touch-Ups & Maintenance',
    intro:
      'Most permanent makeup is a two-step process. Touch-ups help refine color, shape, and longevity.',
    services: [
      {
        id: 'perfecting',
        name: '6–8 Week Perfecting Session',
        description:
          'Refinement visit following your initial appointment. Included when booked on time.',
        price: 0,
        duration: '60–90 min',
      },
      {
        id: '3-6mo',
        name: '3–6 Month Touch-Up',
        description:
          'Ideal for those who want extra depth, color, or small adjustments after initial healing.',
        price: 150,
      },
      {
        id: 'annual-boost',
        name: 'Annual Color Boost',
        description:
          'Keeps brows, liner, or lips looking fresh every 12–18 months, depending on your skin and lifestyle.',
        price: 200,
      },
      {
        id: '18mo-plus',
        name: '18+ Month Refresh',
        description:
          'For work that has significantly faded or needs major refresh. Pricing reviewed at consultation.',
        priceNote: 'Consultation required',
      },
    ],
  },
  {
    id: 'removal',
    title: 'Removal & Correction',
    intro:
      'If you have old or undesired PMU, we can often lighten or lift pigment to make room for new work.',
    services: [
      {
        id: 'saline-removal',
        name: 'Saline PMU Removal (per session)',
        description:
          'Gentle saline lightening to lift and break down unwanted pigment in brows, lips, or liner.',
        price: 150,
      },
      {
        id: 'brow-lightening',
        name: 'Brow Lightening / Color Correction',
        description:
          'Helps soften brows that are too dark, cool-toned, or saturated before new PMU is applied.',
        price: 120,
      },
    ],
  },
];

const PMU_FAQ = [
  {
    q: 'Does permanent makeup hurt?',
    a: 'Most guests describe PMU as mildly scratchy or pressure-like rather than painful. We use medical-grade topical numbing to keep you as comfortable as possible throughout the appointment.',
  },
  {
    q: 'How long does PMU last?',
    a: 'Brows typically last 1–3 years, lips around 2–3 years, and eyeliner 3+ years, depending on your skin type, lifestyle, and sun exposure. Color fades softly over time.',
  },
  {
    q: 'Is a touch-up required?',
    a: 'Yes. PMU is a two-step process. The perfecting visit allows us to fine-tune color, symmetry, and retention once the first session has healed.',
  },
  {
    q: 'Can you work over previous permanent makeup?',
    a: 'We recommend a consultation first. If old work is very dark, saturated, or outside your desired shape, saline removal or lightening may be recommended before new PMU.',
  },
];

export default function PMUPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          PERMANENT MAKEUP
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Permanent Makeup (PMU)
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Wake up with brows, liner, and lips that already look softly polished.
          Every PMU service includes a detailed consultation, mapping, and
          aftercare guidance.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Custom-mapped for your features
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Medical-grade numbing used
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Soft, natural healed results
          </span>
        </div>
      </header>

      {/* GROUPED PMU SECTIONS */}
      {PMU_GROUPS.map((group) => (
        <section key={group.id} className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                {group.title}
              </h2>
              {group.intro && (
                <p className="mt-1 text-sm text-brand-forest/80">
                  {group.intro}
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {group.services.map((svc) => (
              <article
                key={svc.id}
                className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
              >
                <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-brand-forest">
                        {svc.name}
                      </h3>
                      {svc.description && (
                        <p className="mt-1 text-sm text-brand-forest/80">
                          {svc.description}
                        </p>
                      )}
                      <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                        {svc.duration && (
                          <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                            {svc.duration}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="ml-2 shrink-0 text-right text-sm">
                      {typeof svc.price === 'number' ? (
                        <>
                          <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                            Starting at
                          </p>
                          <p className="text-base font-semibold text-brand-forest">
                            ${svc.price}
                          </p>
                        </>
                      ) : null}
                      {svc.priceNote && (
                        <p className="text-xs text-brand-forest/70">
                          {svc.priceNote}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* MINI FAQ – PMU */}
      <MiniFAQAccordion title="PMU FAQ" faqs={PMU_FAQ} />

      {/* CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Not sure which PMU option is right for you? Book a{' '}
          <span className="font-medium">permanent makeup consultation</span>{' '}
          and we&apos;ll map out a plan together.
        </p>
        <a
          href="/booking?service=pmu"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book PMU Consultation
        </a>
      </section>
    </div>
  );
}
