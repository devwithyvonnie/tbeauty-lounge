export default function Services() {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden rounded-[--radius-card]">
        <img
          src="/images/services/hero.jpg"
          alt="Spa flatlay"
          className="h-[48vh] w-full object-cover md:h-[56vh]"
        />
        <div className="absolute inset-0 bg-brand-cream/65" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-11/12 max-w-4xl">
            <h1 className="text-4xl font-semibold leading-tight text-brand-forest md:text-5xl">
              Services designed around you
            </h1>
            <p className="mt-3 max-w-2xl text-brand-forest/85">
              Explore every category at a glance. Use the quick links to jump to
              what you&apos;re looking for, then view full menus and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CATEGORY PILL NAV (anchors) ===== */}
      <section className="mt-6">
        <div className="flex flex-wrap gap-2">
          {[
            { id: "lashes", label: "Eyelash Extensions" },
            { id: "skin", label: "Facials & Skin" },
            { id: "injectables", label: "Cosmetic Injections" },
            { id: "laser", label: "Laser Hair Removal" },
            { id: "pmu", label: "Permanent Makeup" },
            { id: "wellness", label: "IV Therapy & Weight Loss" },
          ].map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full bg-brand-mint px-4 py-2 text-sm text-brand-forest hover:bg-brand-mint/80"
            >
              {c.label}
            </a>
          ))}
        </div>
      </section>

      {/* ===== LASHES (image L / text R) ===== */}
      <Split id="lashes" imageLeft>
        <img
          src="/images/services/lashes.jpg"
          alt="Eyelash extensions"
          className="h-full w-full object-cover"
        />
        <ServiceCopy
          eyebrow="EYELASH EXTENSIONS"
          title="Soft, customized, comfortable"
          blurb="Classic, hybrid, volume, and mega sets tailored to your eye shape. Lash lifts & tints for a low-maintenance glow."
          bullets={[
            "Classic / Hybrid / Volume / Mega",
            "Lash Lift & Tint options",
            "Sensitive-safe adhesive options",
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
            "Custom facials for every skin type",
            "Dermaplaning & specialty add-ons",
            "LED Light Therapy & targeted masks",
          ]}
          bookHref="/booking?service=facials"
          menuHref="/services/Facials"
        />
        <img
          src="/images/services/skin.jpg"
          alt="Facial treatment"
          className="h-full w-full object-cover"
        />
      </Split>

      {/* ===== INJECTABLES (image L / text R) ===== */}
      <Split id="injectables" imageLeft>
        <img
          src="/images/services/injectables.jpg"
          alt="Cosmetic injections"
          className="h-full w-full object-cover"
        />
        <ServiceCopy
          eyebrow="COSMETIC INJECTIONS"
          title="Natural, balanced refinement"
          blurb="Neurotoxin and filler with an emphasis on natural, harmonious results. Always consultation-first and medically guided."
          bullets={[
            "Neurotoxin for fine lines & wrinkles",
            "Filler for lips, cheeks, chin & more",
            "PRP & biostimulatory options",
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
            "Small / medium / large areas",
            "Series pricing available",
            "Shave 24 hours prior; no waxing",
          ]}
          bookHref="/booking?service=laser"
          menuHref="/services/laser"
        />
        <img
          src="/images/services/laser.jpg"
          alt="Laser hair removal"
          className="h-full w-full object-cover"
        />
      </Split>

      {/* ===== PMU (image L / text R) ===== */}
      <Split id="pmu" imageLeft>
        <img
          src="/images/services/pmu.jpg"
          alt="Permanent makeup"
          className="h-full w-full object-cover"
        />
        <ServiceCopy
          eyebrow="PERMANENT MAKEUP"
          title="Wake up subtly polished"
          blurb="Brows, liner, and lip blush designed to save time and keep features softly defined. Includes a perfecting visit when indicated."
          bullets={[
            "Powder / Ombré Brows",
            "Lash-line enhancement",
            "Lip Blush with follow-up",
          ]}
          bookHref="/booking?service=pmu"
          menuHref="/services/pmu"
        />
      </Split>

      {/* ===== WELLNESS (image R / text L) ===== */}
      <Split id="wellness" imageLeft={false}>
        <ServiceCopy
          eyebrow="IV THERAPY & WEIGHT LOSS"
          title="Feel balanced & supported"
          blurb="Provider-guided weight loss plans, metabolism support, and IV drips for hydration and recovery—personalized to you."
          bullets={[
            "Medical weight loss programs",
            "Energy & immunity IV drips",
            "Vitamin & metabolism injections",
          ]}
          bookHref="/booking?service=wellness"
          menuHref="/services/wellness"
        />
        <img
          src="/images/services/wellness.jpg"
          alt="IV therapy"
          className="h-full w-full object-cover"
        />
      </Split>
    </div>
  );
}

/* ---------- Small presentational helpers ---------- */

function Eyebrow({ children }) {
  return (
    <p className="text-sm tracking-widest text-brand-forest/70">
      {children}
    </p>
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
 * Props:
 *  - id: anchor for hash links (#lashes, #skin, etc.)
 *  - imageLeft: boolean (true = image on left, false = image on right)
 *  - children: [imageEl, textEl] OR [textEl, imageEl] depending on imageLeft
 */
function Split({ id, imageLeft = true, children }) {
  const [A, B] = children;
  return (
    <section
      id={id}
      className="mt-8 grid overflow-hidden rounded-[--radius-card] bg-white ring-1 ring-black/5 md:grid-cols-2 scroll-mt-24"
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
