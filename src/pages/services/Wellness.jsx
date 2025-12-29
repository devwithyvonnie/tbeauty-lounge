// src/pages/services/Wellness.jsx
import MiniFAQAccordion from '../../components/MiniFAQ';

// 💉 Medical weight loss programs
const WEIGHT_LOSS_PROGRAMS = [
  {
    id: 'semaglutide',
    name: 'Semaglutide Program',
    description:
      'Includes initial exam and 4 weekly injections per month, with ongoing monitoring and dose adjustments as needed.',
    price: 375,
    priceNote: '$375 / month',
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide Program',
    description:
      'Includes initial exam and 4 weekly injections per month, with tailored dosing and regular check-ins.',
    price: 550,
    priceNote: '$550 / month',
  },
];

// 💧 IV therapy & wellness shots (example structure – adjust to match your exact menu)
const WELLNESS_SERVICES = [
  {
    id: 'iv-hydration',
    name: 'Hydration IV Drip',
    description:
      'Supports hydration and replenishes electrolytes—great before or after travel, events, or busy weeks.',
    price: 180,
    duration: '45–60 min',
  },
  {
    id: 'iv-immunity',
    name: 'Immunity IV Drip',
    description:
      'Blend of vitamins and antioxidants aimed at supporting immune function and recovery.',
    price: 190,
    duration: '45–60 min',
  },
  {
    id: 'iv-beauty',
    name: 'Beauty / Glow IV Drip',
    description:
      'Formulated to support skin, hair, and nail health from the inside out.',
    price: 200,
    duration: '45–60 min',
  },
  {
    id: 'b12-shot',
    name: 'B-12 Injection',
    description:
      'Quick intramuscular shot aimed at supporting energy and metabolism.',
    price: 30,
  },
  {
    id: 'lipo-b-shot',
    name: 'Lipo-B / MIC Injection',
    description:
      'Targeted vitamin and amino acid blend used to support metabolism and fat processing.',
    price: 40,
  },
  {
    id: 'wellness-consult',
    name: 'Wellness Consultation',
    description:
      'Meet with our provider to review your goals, history, and decide which wellness options fit best.',
    priceNote: 'Consultation pricing reviewed at booking',
  },
];

const WELLNESS_FAQ = [
  {
    q: 'What is included in the weight loss programs?',
    a: 'Our programs include an initial exam, monthly follow-ups, and four weekly injections per month. Lab work may be required and is not included in the base program fee.',
  },
  {
    q: 'Do I need lab work before starting medication?',
    a: 'Yes. All new patients are required to complete blood work so that our provider can review your overall health before starting treatment. Periodic labs and check-ins are required to continue safely.',
  },
  {
    q: 'How fast will I see results?',
    a: 'Results vary by person and are influenced by nutrition, movement, and consistency. Most guests notice gradual changes over several weeks to months as part of a comprehensive lifestyle plan.',
  },
  {
    q: 'Are IV drips and injections right for everyone?',
    a: 'Not always. Certain health conditions, medications, or allergies may make some treatments inappropriate. That’s why we review your history and help you choose the safest, most appropriate options.',
  },
];

export default function WellnessPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          WELLNESS &amp; WEIGHT LOSS
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Wellness, IV Therapy &amp; Weight Loss
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Medically guided programs and wellness support designed to help you
          feel your best—from weight management to hydration, IV drips, and
          vitamin injections.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Provider-led care
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Lab monitoring as needed
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Personalized to your goals
          </span>
        </div>
      </header>

      {/* WEIGHT LOSS PROGRAMS */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              Medical Weight Loss Programs
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Monthly GLP-1–based programs that include your initial exam and
              four weekly injections per month, with required lab work and
              regular provider follow-ups.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {WEIGHT_LOSS_PROGRAMS.map((prog) => (
            <article
              key={prog.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-forest">
                      {prog.name}
                    </h3>
                    {prog.description && (
                      <p className="mt-1 text-sm text-brand-forest/80">
                        {prog.description}
                      </p>
                    )}
                    <ul className="mt-2 space-y-1 text-xs text-brand-forest/75">
                      <li>
                        • Initial exam and 4 weekly injections per month
                      </li>
                      <li>• Ongoing dose adjustments and monitoring</li>
                      <li>• Lab work required (billed separately)</li>
                    </ul>
                  </div>
                  <div className="ml-2 shrink-0 text-right text-sm">
                    <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                      Program fee
                    </p>
                    <p className="text-base font-semibold text-brand-forest">
                      {prog.priceNote}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-brand-forest/70">
          Lab work is required for all new patients and is not included in the
          monthly program fee. Follow-up exams and labs are required every 3
          months to safely continue treatment.
        </p>
      </section>

      {/* WELLNESS & IV SERVICES */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              IV Therapy &amp; Wellness Injections
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Drips and injections designed to support hydration, energy,
              immunity, and overall wellness. Final recommendations are always
              tailored to you.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {WELLNESS_SERVICES.map((svc) => (
            <article
              key={svc.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
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

      {/* MINI FAQ – WELLNESS */}
      <MiniFAQAccordion title="Wellness & Weight Loss FAQ" faqs={WELLNESS_FAQ} />

      {/* CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Curious which wellness option is right for you? Book a{' '}
          <span className="font-medium">wellness consultation</span> and our
          provider will help you choose a safe, personalized plan.
        </p>
        <a
          href="/booking?service=wellness"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Wellness Visit
        </a>
      </section>
    </div>
  );
}
