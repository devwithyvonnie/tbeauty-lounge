export default function About() {
  return (
    <div className="py-8">
      {/* WIDE HERO */}
      <section className="mx-auto w-[96%] max-w-screen-2xl">
        <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
          <img
            src="/images/about/hero.png"
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
                Empowering beauty, one treatment at a time.
              </h1>

              <p className="mt-4 max-w-2xl text-brand-forest/85">
                Meet the team, discover our mission, and see what makes us
                different.
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

      {/* ================= BODY (CONSTRAINED) ================= */}
      <main className="mx-auto w-[92%] max-w-7xl space-y-8 py-6 md:py-8">
        {/* ========== OUR STORY (image L / text R) ========== */}
        <Split imageLeft>
          <img
            src="/images/about/treatmentroom.png"
            alt="Calm treatment room"
            className="h-full w-full object-cover"
          />
          <div>
            <Eyebrow>OUR STORY</Eyebrow>
            <h2 className="section-title">Rooted in care, guided by results</h2>
            <p className="section-body">
              T Beauty Lounge was founded on the belief that self-care is more
              than a luxury—it’s a necessity. Our goal is to create a welcoming
              space where clients feel relaxed, confident, and cared for,
              whether they’re visiting for a quick touch-up or a full
              rejuvenation experience.
            </p>
            <p className="section-body mt-3">
              Our team is trained to deliver precision with gentle hands. Every
              service is performed with safety, integrity, and intention.
            </p>
          </div>
        </Split>

        {/* ========== MEET TERESA (image R / text L) ========== */}
        <Split imageLeft={false}>
          <div>
            <Eyebrow>MEET TERESA, FNP-C</Eyebrow>
            <h2 className="section-title">
              A provider who treats you like family
            </h2>
            <p className="section-body">
              Teresa is our highly skilled Nurse Practitioner, specializing in
              cosmetic injectables, skin rejuvenation, and personalized beauty
              treatments. With a passion for helping clients look and feel their
              best, she combines medical expertise with an artistic touch to
              deliver natural, stunning results.
            </p>
            <a
              href="/services/injectables"
              className="btn-primary mt-5 inline-block"
            >
              Learn more about Teresa’s services
            </a>
          </div>

          <img
            src="/images/team/teresa.png"
            alt="Teresa Le, FNP-C, during treatment"
            className="h-full w-full object-cover"
          />
        </Split>

        {/* ========== WHAT WE OFFER (image L / text R) ========== */}
        <Split imageLeft>
          <img
            src="/images/about/what-we-do.png"
            alt="Facial in progress"
            className="h-full w-full object-cover"
          />
          <div>
            <Eyebrow>WHAT WE OFFER</Eyebrow>
            <h2 className="section-title">
              Modern aesthetics, thoughtfully delivered
            </h2>
            <p className="section-body">
              From luxurious facials and lash extensions to advanced cosmetic
              injections and weight loss solutions, we provide a full range of
              treatments to suit your needs. Every service is tailored to your
              unique goals, ensuring a personalized experience every time.
            </p>
            <a href="/services" className="btn-primary mt-5 inline-block">
              Explore our services
            </a>
          </div>
        </Split>

        {/* ========== OUR PROMISE (image R / text L) ========== */}
        <Split imageLeft={false}>
          <div>
            <Eyebrow>OUR PROMISE TO YOU</Eyebrow>
            <h2 className="section-title">
              Care you can feel, results you can trust
            </h2>
            <p className="section-body">
              We’re dedicated to exceptional care, using high-quality products
              and the latest techniques. Your safety, comfort, and satisfaction
              are always our top priorities.
            </p>

            <ul className="mt-4 space-y-2 text-brand-forest/85">
              {[
                'Personalized plans that respect your goals and budget',
                'Comfort-first techniques and clean, safe protocols',
                'Natural-looking outcomes that age gracefully',
              ].map((li) => (
                <li key={li} className="flex gap-2">
                  <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-brand-forest/70" />
                  <span>{li}</span>
                </li>
              ))}
            </ul>
          </div>

          <img
            src="/images/about/our-promise.png"
            alt="Client relaxing post-treatment"
            className="h-full w-full object-cover"
          />
        </Split>

        {/* ========== ROOTED IN COMMUNITY (image L / text R) ========== */}
        <Split imageLeft>
          <img
            src="/images/about/community.png"
            alt="Local community"
            className="h-full w-full object-cover"
          />
          <div>
            <Eyebrow>ROOTED IN COMMUNITY</Eyebrow>
            <h2 className="section-title">
              Built in Goodyear, for the West Valley
            </h2>
            <p className="section-body">
              T Beauty Lounge is proud to serve the Goodyear community and
              beyond. We believe in building lasting relationships with our
              clients, celebrating your milestones, and supporting your journey
              toward beauty and confidence.
            </p>
            <a href="/contact" className="btn-secondary mt-5 inline-block">
              Say hello
            </a>
          </div>
        </Split>

        {/* Bottom CTA card (nice “enhanced” finish before footer) */}
        <section className="mt-10 rounded-[--radius-card] bg-brand-cream ring-1 ring-black/5 overflow-hidden">
          <div className="p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-sm tracking-widest text-brand-forest/70">
                READY WHEN YOU ARE
              </p>
              <h3 className="mt-2 text-xl md:text-2xl font-semibold text-brand-forest">
                Let’s create a plan that fits your goals
              </h3>
              <p className="mt-2 text-brand-forest/85 max-w-prose">
                Book a consultation or explore our services to find your perfect
                match.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="/contact" className="btn-primary inline-block">
                Contact us
              </a>
              <a href="/services" className="btn-secondary inline-block">
                View services
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------------------
   Small presentational helpers
   --------------------- */

function Eyebrow({ children }) {
  return (
    <p className="text-sm tracking-widest text-brand-forest/70">{children}</p>
  );
}

function Stat({ title, body }) {
  return (
    <div className="rounded-2xl bg-white/70 ring-1 ring-black/5 p-5">
      <h3 className="text-base font-semibold text-brand-forest">{title}</h3>
      <p className="mt-2 text-sm text-brand-forest/85">{body}</p>
    </div>
  );
}

/**
 * Split: two-column section with rounded container.
 * Props:
 *  - imageLeft: boolean (true -> image on left, false -> image on right)
 *  - children: [imageEl, textEl] OR [textEl, imageEl] depending on imageLeft
 */
function Split({ imageLeft = true, children }) {
  const [A, B] = children; // enforce 2 children
  return (
    <section
      className="mt-8 grid overflow-hidden rounded-[--radius-card] bg-white ring-1 ring-black/5 md:grid-cols-2"
      role="region"
    >
      {imageLeft ? (
        <>
          <div className="min-h-[260px] md:min-h-[380px]">{A}</div>
          <div className="p-6 md:p-10 flex items-center">{B}</div>
        </>
      ) : (
        <>
          <div className="p-6 md:p-10 flex items-center order-2 md:order-1">
            {A}
          </div>
          <div className="min-h-[260px] md:min-h-[380px] order-1 md:order-2">
            {B}
          </div>
        </>
      )}
    </section>
  );
}

/* Utility classes used (same as your note):
   .section-title  -> text-2xl md:text-[28px] font-semibold text-brand-forest
   .section-body   -> text-brand-forest/85 max-w-prose
   .btn-primary    -> rounded-full bg-brand-forest text-white px-5 py-2.5 text-sm font-medium hover:brightness-110
   .btn-secondary  -> rounded-full bg-brand-mint text-brand-forest px-5 py-2.5 text-sm font-medium hover:bg-brand-mint/80
*/
