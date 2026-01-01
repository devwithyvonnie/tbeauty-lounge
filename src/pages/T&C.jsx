export default function Terms() {
    return (
      <div className="py-8">
        {/* WIDE HERO */}
        <section className="mx-auto w-[96%] max-w-screen-2xl">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
            <img
              src="/images/contact-us.png"
              alt="Spa ambiance"
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
                  Terms &amp; Conditions
                </h1>
  
                <p className="mt-4 max-w-2xl text-brand-forest/85">
                  Please review these terms before using our website or booking
                  services.
                </p>
  
                <p className="mt-6 text-xs text-brand-forest/70">
                  Effective date: <span className="font-medium">January 1, 2026</span>
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* ================= BODY ================= */}
        <main className="mx-auto w-[92%] max-w-3xl py-8">
          <section className="rounded-[--radius-card] bg-white ring-1 ring-black/5 p-6 md:p-10 space-y-6">
            <div>
              <h2 className="section-title">Use of Website</h2>
              <p className="section-body">
                This website is provided for informational and booking purposes
                only. By accessing or using this site, you agree to use it in a
                lawful and respectful manner.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Appointments &amp; Services</h2>
              <p className="section-body">
                All services are subject to availability. Appointment details,
                pricing, and service descriptions may change at any time without
                notice. Results vary by individual and are not guaranteed.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Payments &amp; Memberships</h2>
              <p className="section-body">
                Payment is due at the time of service unless otherwise stated.
                Membership benefits, credits, and discounts are governed by the
                terms presented at purchase and may change with notice.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Cancellations &amp; No-Shows</h2>
              <p className="section-body">
                Cancellation and no-show policies are presented during booking and
                may vary by service. By booking an appointment, you agree to these
                policies and any applicable fees.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Medical Disclaimer</h2>
              <p className="section-body">
                Our services are cosmetic and wellness-focused and do not replace
                professional medical advice. Clients are responsible for
                disclosing relevant medical conditions prior to treatment.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Intellectual Property</h2>
              <p className="section-body">
                All content on this website, including text, images, branding, and
                design, is the property of T Beauty Lounge and may not be copied or
                reused without permission.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Limitation of Liability</h2>
              <p className="section-body">
                To the fullest extent permitted by law, T Beauty Lounge is not
                liable for indirect, incidental, or consequential damages related
                to use of this website or services.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Changes to These Terms</h2>
              <p className="section-body">
                We reserve the right to update these Terms &amp; Conditions at any
                time. Continued use of the website constitutes acceptance of any
                changes.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Governing Law</h2>
              <p className="section-body">
                These terms are governed by the laws of the State of Arizona.
              </p>
            </div>
  
            <div className="pt-4 flex flex-wrap gap-3">
              <a href="/privacypolicy" className="btn-secondary inline-block">
                View Privacy Policy
              </a>
              <a href="/contactus" className="btn-primary inline-block">
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
  