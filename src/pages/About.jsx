import Footer from '../components/Footer';

// src/pages/About.jsx
export default function About() {
  return (
    <div className="mx-auto w-11/12 max-w-6xl py-8">
      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden rounded-[--radius-card] grid md:grid-cols-2 gap-0 bg-white">
        <div className="hidden md:block">
          <img
            src="/images/about/hero.jpg"
            alt="Soft spa scene with candles and florals"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative p-8 md:p-12 flex items-center bg-brand-cream">
          <div>
            <h1 className="text-[34px] md:text-[40px] leading-tight font-semibold text-brand-forest">
              Empowering beauty, one treatment at a time
            </h1>
            <p className="mt-4 text-brand-forest/85 max-w-prose">
             Meet the team, discover our mission, and see what makes us different.
            </p>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/10" />
        </div>
      </section>

      {/* ========== OUR STORY (image L / text R) ========== */}
      <Split imageLeft>
        <img
          src="/images/about/our-story.jpg"
          alt="Calm treatment room"
          className="h-full w-full object-cover"
        />
        <div>
          <Eyebrow>OUR STORY</Eyebrow>
          <h2 className="section-title">Rooted in care, guided by results</h2>
          <p className="section-body">
           T Beauty Lounge was founded on the belief that self-care is more than a luxury—it’s a necessity. 
           Our goal is to create a welcoming space where clients feel relaxed, confident, and cared for, 
           whether they’re visiting for a quick touch-up or a full rejuvenation experience.
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
            Teresa is our highly skilled Nurse Practitioner, specializing in cosmetic injectables, 
            skin rejuvenation, and personalized beauty treatments. With a passion for helping clients 
            look and feel their best, she combines medical expertise with an artistic touch to deliver 
            natural, stunning results.
          </p>
          <a
            href="/services#injectables"
            className="btn-primary mt-5 inline-block"
          >
            Learn more about the services Teresa offers
          </a>
        </div>

        <img
          src="/images/about/teresa.jpg"
          alt="Teresa Le, FNP-C, during treatment"
          className="h-full w-full object-cover"
        />
      </Split>

      {/* ========== WHAT WE OFFER (image L / text R) ========== */}
      <Split imageLeft>
        <img
          src="/images/about/what-we-offer.jpg"
          alt="Facial in progress"
          className="h-full w-full object-cover"
        />
        <div>
          <Eyebrow>WHAT WE OFFER</Eyebrow>
          <h2 className="section-title">
            Modern aesthetics, thoughtfully delivered
          </h2>
          <p className="section-body">
            From luxurious facials and lash extensions to advanced cosmetic injections and weight loss solutions, 
            'we provide a full range of treatments to suit your needs. Every service is tailored to your 
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
            We are dedicated to providing exceptional care, using only high-quality products and the latest techniques. Your safety, comfort, and satisfaction are our top priorities.
          </h2>
          <ul className="mt-3 space-y-2 text-brand-forest/85">
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
          src="/images/about/our-promise.jpg"
          alt="Client relaxing post-treatment"
          className="h-full w-full object-cover"
        />
      </Split>

      {/* ========== ROOTED IN COMMUNITY (image L / text R) ========== */}
      <Split imageLeft>
        <img
          src="/images/about/community.jpg"
          alt="Local community and studio exterior"
          className="h-full w-full object-cover"
        />
        <div>
          <Eyebrow>ROOTED IN COMMUNITY</Eyebrow>
          <h2 className="section-title">Built in Goodyear, for the West Valley</h2>
          <p className="section-body">
           T Beauty Lounge is proud to serve the Goodyear community and beyond. 
           We believe in building lasting relationships with our clients, 
           celebrating your milestones, and supporting your journey toward beauty 
           and confidence.
          </p>
          <a href="/contact" className="btn-secondary mt-5 inline-block">
            Say hello
          </a>
        </div>
      </Split>

      <Footer />
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
          <div className="min-h-[260px] md:min-h-[360px]">{A}</div>
          <div className="p-6 md:p-10 flex items-center">{B}</div>
        </>
      ) : (
        <>
          <div className="p-6 md:p-10 flex items-center order-2 md:order-1">
            {A}
          </div>
          <div className="min-h-[260px] md:min-h-[360px] order-1 md:order-2">
            {B}
          </div>
        </>
      )}
    </section>
  );
}

/* Utility classes used:
   .section-title  -> text-2xl md:text-[28px] font-semibold text-brand-forest
   .section-body   -> text-brand-forest/85 max-w-prose
   .btn-primary    -> rounded-full bg-brand-forest text-white px-5 py-2.5 text-sm font-medium hover:brightness-110
   .btn-secondary  -> rounded-full bg-brand-mint text-brand-forest px-5 py-2.5 text-sm font-medium hover:bg-brand-mint/80
*/
