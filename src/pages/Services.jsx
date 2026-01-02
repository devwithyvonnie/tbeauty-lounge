export default function Services() {
  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/services/hero.png"
            alt="Eyelash extensions"
            className="h-[52vh] w-full object-cover md:h-[60vh]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-cream/70" />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-11/12 max-w-3xl">
              <p className="text-sm tracking-[0.25em] text-brand-forest/70">
                T BEAUTY LOUNGE • GOODYEAR, AZ
              </p>

              <h1 className="mt-2 text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
                Services designed around you
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Explore categories at a glance. Use the quick links to jump to
                what you&apos;re looking for, then view the full menu and
                pricing.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.vagaro.com/tbeautylounge/book-now"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-3 text-white font-semibold shadow-sm hover:brightness-95"
                >
                  Book an Appointment
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-brand-gold bg-white/55 px-7 py-3 text-brand-forest font-semibold hover:bg-brand-cream/70"
                >
                  Browse Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* ===== LASHES (image L / text R) ===== */}
        <Split id="lashes" imageLeft>
          <img
            src="/images/services/eyelash.png"
            alt="Eyelash extensions"
            className="h-full w-full object-cover"
          />
          <ServiceCopy
            eyebrow="EYELASH EXTENSIONS"
            title="Soft, customized, comfortable"
            blurb="Classic, hybrid, volume, and mega sets tailored to your eye shape. Lash lifts & tints for a low-maintenance glow."
            bullets={[
              'Classic / Hybrid / Volume / Mega',
              'Lash Lift & Tint options',
              'Sensitive-safe adhesive options',
            ]}
            bookHref="/booking?service=lashes"
            menuHref="/services/lashes"
          />
        </Split>

        {/* ===== FACIALS (image R / text L) ===== */}
        <Split id="skin" imageLeft={false}>
          <ServiceCopy
            eyebrow="FACIALS & SKIN"
            title="Result-driven, calming care"
            blurb="Custom facials, dermaplane, enzyme or light peels, LED therapy and more—built for your skin’s current needs."
            bullets={[
              'Custom facials for every skin type',
              'Dermaplaning & specialty add-ons',
              'LED Light Therapy & targeted masks',
            ]}
            bookHref="/booking?service=facials"
            menuHref="/services/Facials"
          />
          <img
            src="/images/services/facial.png"
            alt="Facial treatment"
            className="h-full w-full object-cover"
          />
        </Split>

        {/* ✅ NEW: WAX / TINT (image L / text R) */}
        <Split id="wax" imageLeft>
          <img
            src="/images/services/wax-tint.png"
            alt="Wax and tint services"
            className="h-full w-full object-cover"
          />
          <ServiceCopy
            eyebrow="WAX & TINT"
            title="Clean, precise, confidence-boosting"
            blurb="Smooth skin and polished brows with gentle waxing and custom tinting. Quick appointments with results you’ll love."
            bullets={[
              'Brow shaping & facial waxing',
              'Brow tint / lash tint options',
              'Great add-on to lashes & facials',
            ]}
            bookHref="/booking?service=wax"
            menuHref="/services/wax-tint"
          />
        </Split>

        {/* ===== FIBROBLAST (image L / text R) ===== */}
        <Split id="fibroblast" imageLeft={false}>
          <ServiceCopy
            eyebrow="FIBROBLAST"
            title="Lift + tighten without surgery"
            blurb="Fibroblast (plasma) therapy targets areas like eyelids, under-eyes, smile lines, and neck to help firm and smooth the look of skin over time."
            bullets={[
              'Great for eyelids, under-eyes & lines',
              'Consultation recommended for candidacy',
              'Aftercare is key for best results',
            ]}
            bookHref="/booking?service=fibroblast"
            menuHref="/services/fibroblast"
          />
          <img
            src="/images/services/fibroblast.png"
            alt="Fibroblast skin tightening"
            className="h-full w-full object-cover"
          />
        </Split>

        {/* ===== INJECTABLES (image L / text R) ===== */}
        <Split id="injectables" imageLeft>
          <img
            src="/images/services/injectables.png"
            alt="Cosmetic injections"
            className="h-full w-full object-cover"
          />
          <ServiceCopy
            eyebrow="COSMETIC INJECTIONS"
            title="Natural, balanced refinement"
            blurb="Neurotoxin and filler with an emphasis on natural, harmonious results. Always consultation-first and medically guided."
            bullets={[
              'Neurotoxin for fine lines & wrinkles',
              'Filler for lips, cheeks, chin & more',
              'PRP & biostimulatory options',
            ]}
            bookHref="/booking?service=injectables"
            menuHref="/services/injectables"
          />
        </Split>

        {/* ===== LASER HAIR REMOVAL (image R / text L) ===== */}
        <Split id="laser" imageLeft={false}>
          <ServiceCopy
            eyebrow="LASER HAIR REMOVAL"
            title="Smooth with less effort"
            blurb="Face and body packages for the areas you treat most. Consults help choose the best plan for your skin & hair."
            bullets={[
              'Small / medium / large areas',
              'Series pricing available',
              'Shave 24 hours prior; no waxing',
            ]}
            bookHref="/booking?service=laser"
            menuHref="/services/laser"
          />
          <img
            src="/images/services/laser.png"
            alt="Laser hair removal"
            className="h-full w-full object-cover"
          />
        </Split>

        {/* ===== PMU (image L / text R) ===== */}
        <Split id="pmu" imageLeft>
          <img
            src="/images/services/permanentmakeup.png"
            alt="Permanent makeup"
            className="h-full w-full object-cover"
          />
          <ServiceCopy
            eyebrow="PERMANENT MAKEUP"
            title="Wake up subtly polished"
            blurb="Brows, liner, and lip blush designed to save time and keep features softly defined. Includes a perfecting visit when indicated."
            bullets={[
              'Powder / Ombré Brows',
              'Lash-line enhancement',
              'Lip Blush with follow-up',
            ]}
            bookHref="/booking?service=pmu"
            menuHref="/services/pmu"
          />
        </Split>

        {/* ===== BOTTOM CTA ===== */}
        <section className="mt-10 rounded-[--radius-card] bg-brand-cream/60 p-6 ring-1 ring-black/5 md:p-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-xl font-semibold text-brand-forest">
                Not sure where to start?
              </h2>
              <p className="mt-1 max-w-2xl text-brand-forest/80">
                Tell us your goals and we’ll guide you to the best service
                combo.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full bg-brand-forest px-6 py-2.5 text-sm font-medium text-white hover:brightness-110"
            >
              Ask a Question
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- Small presentational helpers ---------- */

function InfoPill({ title, desc }) {
  return (
    <div className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 shadow-sm">
      <p className="text-sm font-semibold text-brand-forest">{title}</p>
      <p className="mt-1 text-sm text-brand-forest/75">{desc}</p>
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="text-sm tracking-widest text-brand-forest/70">{children}</p>
  );
}

function ServiceCopy({
  eyebrow,
  title,
  blurb,
  bullets = [],
  bookHref,
  menuHref,
}) {
  return (
    <div>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-2xl font-semibold text-brand-forest md:text-[28px]">
        {title}
      </h2>
      <p className="mt-2 max-w-prose text-brand-forest/85">{blurb}</p>

      {!!bullets.length && (
        <ul className="mt-3 space-y-2 text-brand-forest/85">
          {bullets.map((li) => (
            <li key={li} className="flex gap-2">
              <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
              <span>{li}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href={bookHref}
          className="rounded-full bg-brand-forest px-5 py-2 text-sm font-medium text-white hover:brightness-110"
        >
          Book Now
        </a>
        <a
          href={menuHref}
          className="rounded-full border border-brand-gold px-5 py-2 text-sm text-brand-forest hover:bg-brand-cream/70"
        >
          View Menu &amp; Pricing
        </a>
      </div>
    </div>
  );
}

/**
 * Split: alternating two-column section with rounded container and light ring.
 */
function Split({ id, imageLeft = true, children }) {
  const [A, B] = children;
  return (
    <section
      id={id}
      className="mt-8 grid overflow-hidden rounded-[--radius-card] bg-white ring-1 ring-black/5 md:grid-cols-2 scroll-mt-24 shadow-sm"
      role="region"
    >
      {imageLeft ? (
        <>
          <div className="min-h-[260px] md:min-h-[360px]">{A}</div>
          <div className="order-2 flex items-center p-6 md:p-10">{B}</div>
        </>
      ) : (
        <>
          <div className="order-2 min-h-[260px] md:min-h-[360px]">{B}</div>
          <div className="order-1 flex items-center p-6 md:p-10">{A}</div>
        </>
      )}
    </section>
  );
}
