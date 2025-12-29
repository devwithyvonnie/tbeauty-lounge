import MiniFAQAccordion from '../components/MiniFAQ';

const CLASS_DATES = [
  { label: 'Jan 12–15, 2026', range: '1/12–1/15' },
  { label: 'Feb 9–12, 2026', range: '2/9–2/12' },
  { label: 'Mar 9–12, 2026', range: '3/9–3/12' },
  { label: 'Apr 6–9, 2026', range: '4/6–4/9' },
  { label: 'May 4–7, 2026', range: '5/4–5/7' },
  { label: 'Jun 1–4, 2026', range: '6/1–6/4' },
];

const SCHEDULE = [
  {
    day: 'Day 1',
    focus: 'Foundations',
    blocks: [
      {
        time: '8:30 AM',
        title: 'Introduction to Eyelash Extensions',
        note: '',
      },
      {
        time: '9:00 AM – 12:00 PM',
        title: 'Theory Instruction',
        note: 'Eye structure & anatomy • Eyelash growth cycles • Contraindications & allergic reactions • Health & safety protocols',
      },
      { time: '12:00 PM – 12:30 PM', title: 'Lunch Break', note: '' },
      {
        time: '12:30 PM – 1:30 PM',
        title: 'Theory Review & Barbicide Quiz',
        note: '',
      },
      { time: '1:30 PM – 2:00 PM', title: 'Kit Overview', note: '' },
      {
        time: '2:00 PM – 3:30 PM',
        title: 'Glue Dipping & Sponge Practice',
        note: '',
      },
      { time: '3:30 PM – 3:45 PM', title: 'Break', note: '' },
      {
        time: '3:45 PM – 4:30 PM',
        title: 'Taping Techniques & Patch Test Demo',
        note: '',
      },
    ],
  },
  {
    day: 'Day 2',
    focus: 'Classic Lash Techniques',
    blocks: [
      { time: '8:30 AM – 9:30 AM', title: 'Theory Review', note: '' },
      {
        time: '9:30 AM – 12:00 PM',
        title: 'Mapping & Classic Application on Mannequin',
        note: 'Doll Eye & Cat Eye mapping • Classic lash placement practice',
      },
      { time: '12:00 PM – 12:30 PM', title: 'Lunch Break', note: '' },
      {
        time: '12:30 PM – 2:00 PM',
        title: 'Taping & Mapping Practice on Each Other',
        note: '',
      },
      {
        time: '2:00 PM – 3:30 PM',
        title: 'Volume Fanning Demo & Practice',
        note: '',
      },
      { time: '3:30 PM – 3:45 PM', title: 'Break', note: '' },
      {
        time: '3:45 PM – 4:30 PM',
        title: 'Continued Volume Fanning Practice & Review',
        note: '',
      },
    ],
  },
  {
    day: 'Day 3',
    focus: 'Classic Application on Live Model',
    blocks: [
      {
        time: '8:30 AM – 12:00 PM',
        title: 'Review: Mapping, Consultations & Classic Practice',
        note: '',
      },
      { time: '12:00 PM – 12:30 PM', title: 'Lunch Break', note: '' },
      {
        time: '12:30 PM – 4:00 PM',
        title: 'Classic Lash Application on Live Model',
        note: '',
      },
      { time: '4:00 PM – 4:30 PM', title: 'Clean-Up', note: '' },
    ],
  },
  {
    day: 'Day 4',
    focus: 'Volume Application & Graduation',
    blocks: [
      {
        time: '8:30 AM – 12:00 PM',
        title: 'Review: Mapping, Volume Fanning & Client Consultations',
        note: '',
      },
      { time: '12:00 PM – 12:30 PM', title: 'Lunch Break', note: '' },
      {
        time: '12:30 PM – 4:00 PM',
        title: 'Volume Lash Application on Live Model',
        note: '',
      },
      {
        time: '4:00 PM – 4:30 PM',
        title: 'Clean-Up, Certificate Ceremony & Graduation Photos',
        note: '',
      },
    ],
  },
];

const LEARNING_OUTCOMES = [
  {
    title: 'Core Lash Technique',
    badge: 'Technique',
    items: [
      'Classic lash application',
      'Volume lash application',
      'Isolation & placement control',
    ],
  },
  {
    title: 'Eye Styling & Mapping',
    badge: 'Technique',
    items: [
      'Eye shape analysis',
      'Doll eye & cat eye mapping',
      'Styling for symmetry and balance',
    ],
  },
  {
    title: 'Retention & Aftercare',
    badge: 'Client Skills',
    items: [
      'Retention troubleshooting',
      'Cleansing routines & maintenance',
      'Aftercare scripting for clients',
    ],
  },
  {
    title: 'Sanitation & Safety',
    badge: 'Safety',
    items: [
      'Infection control standards',
      'Contraindications & allergies',
      'Professional safety protocols',
    ],
  },
  {
    title: 'Barbicide Certification',
    badge: 'Certification',
    items: [
      'Disinfection best practices',
      'Theory review & quiz prep',
      'Industry compliance standards',
    ],
  },
  {
    title: 'Live Model Workflow',
    badge: 'Hands-On',
    items: [
      'Client consultations',
      'Service flow: setup → lash → cleanup',
      'Instructor-guided model application',
    ],
  },
];

export default function TBeautyAcademy() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* ===== HEADER ===== */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          PROFESSIONAL TRAINING
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Lash Masterclass
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          A 4-day immersive beginner lash training designed to build confidence,
          technique, and professional standards—taught inside a working med spa.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Beginner Level
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            4 Days • 8 Hours / Day
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            4–5 Students Only
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            T Beauty Lounge • Goodyear, AZ
          </span>
        </div>
      </header>

      {/* ===== HERO IMAGE ===== */}
      <section className="mt-6">
        <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 shadow-sm bg-white">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full">
            <img
              src="/images/academy/lash-masterclass-hero.jpg"
              alt="Lash Masterclass training at T Beauty Lounge"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="p-4 md:p-5">
            <p className="text-sm text-brand-forest/80">
              Train in a real working med spa environment—hands-on, guided, and
              retention-focused.
            </p>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW CARD ===== */}
      <section className="mt-8">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
          <div className="p-5 md:p-6 flex flex-col md:flex-row gap-6 justify-between">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Course Overview
              </h2>
              <p className="mt-2 max-w-prose text-brand-forest/85">
                This Lash Masterclass covers classic and volume lash
                application, eye mapping, retention, aftercare, sanitation &
                safety standards, and Barbicide Certification preparation.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-brand-cream px-3 py-1 text-brand-forest/90">
                  Starter kit included
                </span>
                <span className="rounded-full bg-brand-cream px-3 py-1 text-brand-forest/90">
                  Certificate included
                </span>
                <span className="rounded-full bg-brand-cream px-3 py-1 text-brand-forest/90">
                  Bring your own model (we can assist if needed)
                </span>
                <span className="rounded-full bg-brand-cream px-3 py-1 text-brand-forest/90">
                  Ongoing support after completion
                </span>
              </div>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-xs uppercase tracking-wide text-brand-forest/60">
                Tuition
              </p>
              <p className="text-2xl font-semibold text-brand-forest">$2,100</p>
              <p className="mt-1 text-xs text-brand-forest/70">
                $500 non-refundable deposit
              </p>
              <p className="mt-1 text-xs text-brand-forest/70">
                Balance due by 5:00 PM the Saturday before class
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="/contact?reason=academy"
                  className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110 text-center"
                >
                  Reserve Your Spot
                </a>
                <a
                  href="/contact?reason=waitlist"
                  className="rounded-full border border-brand-gold px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70 text-center"
                >
                  Join the Waitlist
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ===== KIT PREVIEW ===== */}
      <section className="mt-10">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
          <div className="p-5 md:p-6 grid gap-6 md:grid-cols-2 items-center">
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
              <div className="aspect-[4/3]">
                <img
                  src="/images/academy/lash-kit.jpg"
                  alt="Lash Masterclass starter kit"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Starter Kit Included
              </h2>
              <p className="mt-2 text-sm text-brand-forest/80">
                You’ll leave class with professional essentials so you can
                continue practicing and start taking clients.
              </p>

              <ul className="mt-3 space-y-2 text-sm text-brand-forest/85">
                <li>• Tweezers + isolation tools</li>
                <li>• Lashes + adhesive essentials</li>
                <li>• Tapes, disposables & setup supplies</li>
                <li>• Aftercare + cleansing guidance</li>
              </ul>

              <p className="mt-3 text-xs text-brand-forest/65">
                Kit contents may vary slightly based on availability.
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* ===== CHERRY FINANCING CTA ===== */}
      <section className="mt-10">
        <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
          <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Financing Available with Cherry
              </h2>
              <p className="mt-1 text-sm text-brand-forest/80 max-w-prose">
                Prefer monthly payments? Eligible students can apply for
                financing through Cherry (approval required). It’s a simple way
                to break tuition into manageable payments.
              </p>
              <p className="mt-2 text-xs text-brand-forest/65">
                Financing availability may vary. Options may also be available
                through Vagaro (pending approval).
              </p>
            </div>

            <div className="shrink-0">
              <a
                href="/cherry"
                className="inline-flex items-center justify-center rounded-full bg-brand-primary px-5 py-2 text-sm font-medium text-white hover:brightness-110"
              >
                View Cherry Payment Plans
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* ===== MINI GALLERY STRIP ===== */}
      <section className="mt-10">
        <div className="grid gap-3 md:grid-cols-3">
          {[
            {
              src: '/images/academy/gallery-1.jpg',
              alt: 'Classic lash application close-up',
            },
            {
              src: '/images/academy/gallery-2.jpg',
              alt: 'Student practicing lash mapping',
            },
            { src: '/images/academy/gallery-3.jpg', alt: 'Lash kit flat lay' },
          ].map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-2 text-xs text-brand-forest/70">
          Photos shown are examples of training, kits, and student work at T
          Beauty Lounge.
        </p>
      </section>

      {/* ===== WHAT YOU'LL LEARN (PIZAZZ) ===== */}
      <section className="mt-10 relative overflow-hidden rounded-3xl ring-1 ring-black/5">
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/images/academy/texture.png')] bg-cover bg-center" />
        <div className="relative p-4 md:p-6">
          <section className="mt-10">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <h2 className="text-xl font-semibold text-brand-forest">
                  What You’ll Learn
                </h2>
                <p className="mt-1 text-sm text-brand-forest/80">
                  Technique + safety + real-world workflow—so you can
                  confidently take paying clients after training.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {LEARNING_OUTCOMES.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                >
                  <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
                  <div className="p-4 md:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-base font-semibold text-brand-forest">
                        {card.title}
                      </h3>
                      <span className="rounded-full bg-brand-mint/20 px-3 py-0.5 text-[11px] text-brand-forest">
                        {card.badge}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-brand-cream px-3 py-1 text-xs text-brand-forest ring-1 ring-black/5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>

      {/* ===== 4-DAY SCHEDULE BREAKDOWN ===== */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              4-Day Schedule Breakdown
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Class runs approximately 8:30 AM – 4:30 PM each day. Timing may
              adjust slightly based on class flow.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {SCHEDULE.map((d) => (
            <article
              key={d.day}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
              <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-forest">
                      {d.day}
                    </h3>
                    <p className="mt-1 text-sm text-brand-forest/80">
                      {d.focus}
                    </p>
                  </div>
                  <span className="rounded-full bg-brand-cream px-3 py-1 text-xs text-brand-forest/90">
                    8 hours
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  {d.blocks.map((b) => {
                    const isBreak =
                      b.title.toLowerCase().includes('break') ||
                      b.title.toLowerCase().includes('lunch') ||
                      b.title.toLowerCase().includes('clean-up');

                    return (
                      <div
                        key={b.time + b.title}
                        className={`rounded-xl px-3 py-3 ${
                          isBreak ? 'bg-brand-cream/40' : 'bg-brand-cream/70'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <p className="text-xs font-semibold text-brand-forest/90 whitespace-nowrap">
                            {b.time}
                          </p>
                          <div className="text-right">
                            <p className="text-sm font-medium text-brand-forest">
                              {b.title}
                            </p>
                            {b.note ? (
                              <p className="mt-1 text-xs text-brand-forest/70">
                                {b.note}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== CLASS DATES ===== */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-brand-forest">
          Upcoming Class Dates
        </h2>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {CLASS_DATES.map((d) => (
            <span
              key={d.label}
              className="rounded-full bg-brand-mint/30 px-4 py-1 text-brand-forest/90"
            >
              {d.label}
            </span>
          ))}
        </div>

        <p className="mt-2 text-xs text-brand-forest/70">
          Seats are limited to 4–5 students per class for personalized guidance.
        </p>
      </section>

      {/* ===== REQUIREMENTS & POLICIES ===== */}
      <MiniFAQAccordion
        title="Requirements & Policies"
        faqs={[
          {
            q: 'Who can enroll?',
            a: 'Per the Board of Cosmetology, students must provide proof of high school education and proof of residency.',
          },
          {
            q: 'Deposit & payment terms',
            a: 'Tuition is $2,100 and includes a professional lash kit. A $500 non-refundable deposit is required to reserve a seat. The remaining $1,600 is due by 5:00 PM the Saturday before the class start date. Failure to pay on time results in forfeiture of the seat and deposit.',
          },
          {
            q: 'Accepted payment methods',
            a: 'We accept cash or card. Financing may be available through Cherry or Vagaro (pending approval).',
          },
          {
            q: 'Cancellation, refunds & rescheduling',
            a: 'Deposits are non-refundable and non-transferable. If cancelled 7+ days prior, the deposit is forfeited and the remaining balance (if paid) is refunded OR may be applied one-time to a future course within 90 days. If cancelled 3–6 days prior, 50% of total tuition is refunded. Within 48 hours or no-show: no refund and no reschedule. Once class begins, tuition is non-refundable.',
          },
          {
            q: 'Chargebacks',
            a: 'Chargebacks are prohibited. Unauthorized chargebacks may result in legal action and revocation of certification.',
          },
        ]}
      />

      {/* ===== CREDENTIALS ===== */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold text-brand-forest">
          Learn From Industry Professionals
        </h2>
        <p className="mt-2 max-w-prose text-brand-forest/85">
          Our educators bring a combined 20 years of lash experience and over 15
          years in esthetics—rooted in real client care, retention-focused
          technique, and professional standards.
        </p>
      </section>

      {/* ===== STICKY CTA (Mobile) ===== */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t border-black/10 px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-md items-center justify-between gap-3">
          <div>
            <p className="text-xs text-brand-forest/70">Lash Masterclass</p>
            <p className="text-sm font-semibold text-brand-forest">
              Reserve your seat
            </p>
          </div>

          <div className="flex gap-2">
            <a
              href="/cherry"
              className="rounded-full border border-brand-forest px-4 py-2 text-xs font-medium text-brand-forest hover:bg-brand-cream"
            >
              Pay w/ Cherry
            </a>
            <a
              href="/contact"
              className="rounded-full bg-brand-forest px-4 py-2 text-xs font-medium text-white hover:brightness-110"
            >
              Enroll
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
