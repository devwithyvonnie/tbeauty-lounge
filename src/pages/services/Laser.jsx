// src/pages/services/Laser.jsx
import MiniFAQAccordion from '../../components/MiniFAQ';

// 🌈 Skin rejuvenation (non–hair-removal)
const SKIN_REJUVENATION = [
  {
    id: 'ipl',
    name: 'IPL',
    description:
      'Intense Pulsed Light to target pigment, redness, and overall tone.',
    price: 300,
    duration: '30–45 min',
  },
  {
    id: 'pigmented-lesion',
    name: 'Pigmented Lesion',
    description: 'Spot treatment for isolated dark spots and sun damage.',
    price: 220,
    duration: '20–30 min',
  },
  {
    id: 'rf-microneedling-peel',
    name: 'RF Microneedling & Chemical Peel',
    description:
      'Combination of radiofrequency microneedling and a customized peel for deeper texture and tone improvement.',
    price: 775,
    duration: '75–90 min',
    packageLabel: 'Package of 3',
    packagePrice: 2092.5, // $2,092.50
  },
  {
    id: 'skin-revitalization',
    name: 'Skin Revitalization',
    description:
      'Helps improve texture, fine lines, and dullness with targeted light energy.',
    price: 320,
    duration: '45–60 min',
  },
];

// 🦵 Laser hair removal – area groupings (single + package of 5)
const LHR_AREAS = {
  small: {
    label: 'Small Area',
    price: 70,
    packageSessions: 5,
    packagePrice: 315,
    duration: '15–30 min',
    areas: [
      'Upper Lip',
      'Nose',
      'Chin',
      'Hands / Feet / Areola',
      'Happy Trail',
      'Sideburns',
    ],
  },
  medium: {
    label: 'Medium Area',
    price: 90,
    packageSessions: 5,
    packagePrice: 405,
    duration: '20–40 min',
    areas: [
      'Inner Thigh',
      'Bikini',
      'Underarms',
      'Neck (Front or Back)',
      'Jawline',
      'Upper OR Lower Arm',
    ],
  },
  large: {
    label: 'Large Area',
    price: 135,
    packageSessions: 5,
    packagePrice: 607.5,
    duration: '30–60 min',
    areas: ['Brazilian', 'Abs or Chest', 'Shoulders', 'Full Arms', 'Full Face'],
  },
  extraLarge: {
    label: 'Extra Large Area',
    price: 210,
    packageSessions: 5,
    packagePrice: 945,
    duration: '45–75 min',
    areas: [
      'Full Back',
      'Full Chest',
      'Full Legs',
      'Buttocks',
      'Upper OR Lower Legs',
      'Upper OR Lower Back',
    ],
  },
};

// 🎯 Laser tattoo removal – single + packages
const TATTOO_REMOVAL = {
  name: 'Laser Tattoo Removal',
  tagline:
    'Laser-based removal to gradually fade unwanted tattoos over a series of sessions.',
  sizes: [
    {
      label: 'Small (2" x 2")',
      single: 90,
      pkg6: 513,
      pkg9: 729,
      pkg12: 918,
    },
    {
      label: 'Medium (3" x 3")',
      single: 120,
      pkg6: 684,
      pkg9: 972,
      pkg12: 1224,
    },
    {
      label: 'Large (4" x 4")',
      single: 150,
      pkg6: 855,
      pkg9: 1215,
      pkg12: 1530,
    },
    {
      label: 'Extra Large (5" x 5" or bigger)',
      single: 200,
      pkg6: 1140,
      pkg9: 1620,
      pkg12: 2040,
    },
  ],
};

export default function LaserPage() {
  return (
    <div className="mx-auto w-11/12 max-w-5xl py-8">
      {/* HEADER */}
      <header>
        <p className="text-sm tracking-[0.25em] text-brand-forest/70">
          LASER HAIR REMOVAL &amp; SKIN REJUVENATION
        </p>
        <h1 className="mt-1 text-3xl font-semibold text-brand-forest md:text-4xl">
          Laser Hair Removal &amp; Skin Rejuvenation
        </h1>
        <p className="mt-3 max-w-2xl text-brand-forest/85">
          Long-term hair reduction, light-based skin treatments, and laser
          tattoo removal designed to smooth, brighten, and refine—always with a
          focus on safety and your comfort.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Medical-grade laser & light devices
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Series-based treatment plans
          </span>
          <span className="rounded-full bg-brand-mint/30 px-3 py-1 text-brand-forest/90">
            Customized to skin type & area
          </span>
        </div>
      </header>

      {/* LASER HAIR REMOVAL – AREA GROUPS */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              Laser Hair Removal Areas
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              Pricing is based on area size. Most guests see best results with a
              series of sessions spaced several weeks apart. Single-session and
              package-of-5 pricing are listed below.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {Object.values(LHR_AREAS).map((group) => (
            <article
              key={group.label}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-mint to-brand-gold" />
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-forest">
                      {group.label}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                      <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                        {group.duration}
                      </span>
                      <span className="rounded-full bg-brand-mint/20 px-2 py-0.5 text-brand-forest/90">
                        Single + package options
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1 text-sm text-brand-forest/85">
                      {group.areas.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="ml-2 shrink-0 text-right text-sm">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                        Single session
                      </p>
                      <p className="text-base font-semibold text-brand-forest">
                        ${group.price}
                      </p>
                    </div>
                    <div className="mt-2">
                      <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                        Package of {group.packageSessions}
                      </p>
                      <p className="text-sm font-semibold text-brand-forest">
                        $
                        {group.packagePrice.toLocaleString('en-US', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-4 text-xs text-brand-forest/70">
          Package pricing is great for guests committed to a full series. Your
          provider will review recommended number of sessions and which package
          fits your goals and budget.
        </p>
      </section>

      {/* LASER TATTOO REMOVAL */}
      <section className="mt-10">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              {TATTOO_REMOVAL.name}
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              {TATTOO_REMOVAL.tagline}
            </p>
          </div>
        </div>

        <article className="mt-4 overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
          <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
          <div className="p-4 md:p-5">
            <div className="rounded-xl bg-brand-cream/70 px-3 py-3 overflow-x-auto">
              <table className="w-full text-sm text-brand-forest/90">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-wide text-brand-forest/70">
                    <th className="py-1 pr-2">Size</th>
                    <th className="py-1 px-2 whitespace-nowrap">Single</th>
                    <th className="py-1 px-2 whitespace-nowrap">Pkg of 6</th>
                    <th className="py-1 px-2 whitespace-nowrap">Pkg of 9</th>
                    <th className="py-1 px-2 whitespace-nowrap">Pkg of 12</th>
                  </tr>
                </thead>
                <tbody>
                  {TATTOO_REMOVAL.sizes.map((s) => (
                    <tr
                      key={s.label}
                      className="border-t border-brand-cream/80"
                    >
                      <td className="py-2 pr-2 text-sm">{s.label}</td>
                      <td className="py-2 px-2 font-semibold">${s.single}</td>
                      <td className="py-2 px-2 font-semibold">${s.pkg6}</td>
                      <td className="py-2 px-2 font-semibold">${s.pkg9}</td>
                      <td className="py-2 px-2 font-semibold">${s.pkg12}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-brand-forest/65">
              The number of sessions needed depends on ink color, depth, tattoo
              age, and your skin. Your provider will estimate a treatment plan
              after evaluating the area in person.
            </p>
          </div>
        </article>
      </section>

      {/* SKIN REJUVENATION */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-brand-forest">
              Skin Rejuvenation
            </h2>
            <p className="mt-1 text-sm text-brand-forest/80">
              IPL and advanced light-based treatments to target pigment,
              redness, texture, and overall tone.
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {SKIN_REJUVENATION.map((item) => (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="h-1 bg-gradient-to-r from-brand-mint via-brand-gold to-brand-mint" />
              <div className="flex flex-1 flex-col p-4 md:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-forest">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="mt-1 text-sm text-brand-forest/80">
                        {item.description}
                      </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-1 text-[11px]">
                      <span className="rounded-full bg-brand-cream px-2 py-0.5 text-brand-forest/90">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  <div className="ml-2 shrink-0 text-right text-sm">
                    {/* Single session – same structure as LHR */}
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                        Single session
                      </p>
                      <p className="text-base font-semibold text-brand-forest">
                        ${item.price}
                      </p>
                    </div>

                    {/* Package block – only shows when packagePrice exists */}
                    {item.packagePrice && (
                      <div className="mt-2">
                        <p className="text-[11px] uppercase tracking-wide text-brand-forest/60">
                          {item.packageLabel}
                        </p>
                        <p className="text-sm font-semibold text-brand-forest">
                          $
                          {item.packagePrice.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MINI FAQ – LASER */}
      <MiniFAQAccordion
        title="Laser Hair Removal & Light Treatment FAQ"
        faqs={[
          {
            q: 'How many laser hair removal sessions will I need?',
            a: 'Most guests need a series of 6–8 sessions spaced several weeks apart, depending on the area, hair density, and hair growth cycle. Some may benefit from occasional maintenance treatments over time.',
          },
          {
            q: 'Do I need to shave before my appointment?',
            a: 'Yes, we typically ask that you closely shave the treatment area 24 hours before your visit. Avoid waxing, plucking, or threading for several weeks before starting a series, since we need the follicle present.',
          },
          {
            q: 'Can I get laser if I have a tan or deeper skin tone?',
            a: 'Safety is our priority. Certain devices and settings are better suited for specific skin tones. During your consultation, we’ll assess your skin and advise when and how treatment can be done safely, which may include avoiding recent sun or self-tanner.',
          },
          {
            q: 'What does laser feel like?',
            a: 'Most guests describe it as a quick rubber-band snap with brief heat. Some areas are more sensitive than others, but treatments are generally well-tolerated and quite fast.',
          },
        ]}
      />

      {/* CTA */}
      <section className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-brand-cream pt-4">
        <p className="text-xs md:text-sm text-brand-forest/80">
          Not sure which areas or treatments are right for you? Book a{' '}
          <span className="font-medium">laser consultation</span> and we&apos;ll
          map out a personalized plan.
        </p>
        <a
          href="/booking?service=laser"
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Laser Appointment
        </a>
      </section>
    </div>
  );
}
