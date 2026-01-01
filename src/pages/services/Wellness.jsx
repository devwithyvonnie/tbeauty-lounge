import { useEffect, useMemo, useState } from 'react';
import MiniFAQAccordion from '../../components/MiniFAQ';

// 💉 Medical weight loss programs
const WEIGHT_LOSS_PROGRAMS = [
  {
    id: 'semaglutide',
    name: 'Semaglutide Program',
    description:
      'Includes initial exam and 4 weekly injections per month, with ongoing monitoring and dose adjustments as needed.',
    priceNote: '$375 / month',
    bloodworkFee: 85,
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide Program',
    description:
      'Includes initial exam and 4 weekly injections per month, with tailored dosing and regular check-ins.',
    priceNote: '$550 / month',
    bloodworkFee: 85,
  },
];

// 💧 IV Therapy
const IV_SERVICES = [
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
];

// 💉 Injections (shots)
const INJECTION_SERVICES = [
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

const TABS = [
  { id: 'weight-loss', label: 'Weight Loss' },
  { id: 'iv', label: 'IV Therapy' },
  { id: 'injections', label: 'Injections' },
];

export default function WellnessPage() {
  const tabSet = useMemo(() => new Set(TABS.map((t) => t.id)), []);
  const [active, setActive] = useState('weight-loss');

  // deep link support: /services/wellness#iv
  useEffect(() => {
    const hash = (window.location.hash || '').replace('#', '');
    if (hash && tabSet.has(hash)) setActive(hash);
  }, [tabSet]);

  const onSelect = (id) => {
    setActive(id);
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="py-8">
      {/* WIDE HERO (match lashes/facials/pmu) */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/wellness/hero.png"
            alt="Wellness and IV therapy"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                WELLNESS &amp; WEIGHT LOSS
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Wellness, IV Therapy &amp; Weight Loss
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Medically guided programs and wellness support designed to help
                you feel your best—from weight management to hydration, IV
                drips, and vitamin injections.
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
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

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/booking?service=wellness"
                  className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
                >
                  Book Wellness Visit
                </a>
                <a
                  href="/policy"
                  className="rounded-full bg-white/80 px-6 py-2.5 text-sm font-medium text-brand-forest ring-1 ring-black/10 hover:bg-white"
                >
                  View Policies
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WIDER CONTENT */}
      <div className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* Sticky Tabs (no-scroll switching) */}
        <section className="mt-8">
          <div className="sticky top-3 z-20">
            <div className="rounded-2xl bg-white/85 backdrop-blur ring-1 ring-black/5 shadow-sm p-3">
              <div className="-mx-1 overflow-x-auto">
                <div className="px-1 flex gap-2 min-w-max">
                  {TABS.map((t) => {
                    const isActive = t.id === active;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => onSelect(t.id)}
                        className={[
                          'rounded-full px-4 py-2 text-sm transition whitespace-nowrap',
                          isActive
                            ? 'bg-brand-forest text-white'
                            : 'bg-brand-cream text-brand-forest hover:bg-brand-cream/70',
                        ].join(' ')}
                        aria-pressed={isActive}
                      >
                        {t.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WEIGHT LOSS TAB */}
        {active === 'weight-loss' ? (
          <section className="mt-6">
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

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {WEIGHT_LOSS_PROGRAMS.map((prog, idx) => (
                <article
                  key={prog.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                >
                  <div
                    className={[
                      'h-1 bg-gradient-to-r',
                      idx % 2 === 0
                        ? 'from-brand-mint via-brand-gold to-brand-mint'
                        : 'from-brand-gold via-brand-mint to-brand-gold',
                    ].join(' ')}
                  />
                  <div className="flex flex-1 flex-col p-4 md:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-brand-forest">
                          {prog.name}
                        </h3>
                        {prog.description ? (
                          <p className="mt-1 text-sm text-brand-forest/80">
                            {prog.description}
                          </p>
                        ) : null}

                        <ul className="mt-2 space-y-1 text-xs text-brand-forest/75">
                          <li>• Provider-prescribed GLP-1 medication</li>
                          <li>• Monthly check-ins & dose optimization</li>
                          <li>• Ongoing monitoring for safe progression</li>
                        </ul>
                      </div>

                      <div className="ml-2 shrink-0 text-right text-sm">
                        <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                          Program fee
                        </p>
                        <p className="text-base font-semibold text-brand-forest">
                          {prog.priceNote}
                        </p>

                        <p className="mt-1 text-xs text-brand-forest/70">
                          + ${prog.bloodworkFee} bloodwork
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <section className="mt-6 flex items-start gap-3 rounded-2xl bg-white/80 ring-1 ring-black/5 p-5">
              <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-mint/30 text-sm">
                i
              </span>
              <p className="text-sm text-brand-forest/80 max-w-3xl">
                Lab work is required for all new patients and is not included in
                the monthly program fee. Follow-up exams and labs are required
                every <strong>3 months</strong> to safely continue treatment.
              </p>
            </section>
          </section>
        ) : null}

        {/* IV THERAPY TAB */}
        {active === 'iv' ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                IV Therapy
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Drips designed to support hydration, energy, immunity, and
                overall wellness. Final recommendations are always tailored to
                you.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {IV_SERVICES.map((svc, idx) => (
                <ServiceCard
                  key={svc.id}
                  svc={svc}
                  accent={idx % 2 ? 'mint' : 'gold'}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* INJECTIONS TAB */}
        {active === 'injections' ? (
          <section className="mt-6">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Injections
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80">
                Quick wellness shots and provider-guided options. We’ll review
                your goals and health history to recommend the safest fit.
              </p>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {INJECTION_SERVICES.map((svc, idx) => (
                <ServiceCard
                  key={svc.id}
                  svc={svc}
                  accent={idx % 2 ? 'gold' : 'mint'}
                />
              ))}
            </div>
          </section>
        ) : null}

        {/* FAQ TAB */}
        {active === 'faq' ? (
          <section className="mt-6">
            <MiniFAQAccordion
              title="Wellness & Weight Loss FAQ"
              faqs={WELLNESS_FAQ}
            />
          </section>
        ) : null}

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
    </div>
  );
}

function ServiceCard({ svc, accent = 'mint' }) {
  const bar =
    accent === 'gold'
      ? 'from-brand-gold via-brand-mint to-brand-gold'
      : 'from-brand-mint via-brand-gold to-brand-mint';

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className={`h-1 bg-gradient-to-r ${bar}`} />
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-brand-forest">
              {svc.name}
            </h3>
            {svc.description ? (
              <p className="mt-1 text-sm text-brand-forest/80">
                {svc.description}
              </p>
            ) : null}

            <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
              {svc.duration ? (
                <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                  {svc.duration}
                </span>
              ) : null}
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

            {svc.priceNote ? (
              <p className="text-xs text-brand-forest/70">{svc.priceNote}</p>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
