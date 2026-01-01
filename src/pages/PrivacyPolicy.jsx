export default function Privacy() {
    return (
      <div className="py-8">
        {/* WIDE HERO */}
        <section className="mx-auto w-[96%] max-w-screen-2xl">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-black/5">
            <img
              src="/images/contact-us.png"
              alt="Serene spa setting"
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
                  Privacy Policy
                </h1>
  
                <p className="mt-4 max-w-2xl text-brand-forest/85">
                  This policy explains what we collect, how we use it, and the
                  choices you have.
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
              <h2 className="section-title">What We Collect</h2>
              <p className="section-body">
                We collect information you choose to provide when you contact us,
                request information, or book a service. This may include your
                name, phone number, email address, and appointment-related
                details.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">How We Use Your Information</h2>
              <p className="section-body">
                We use your information to respond to inquiries, manage
                appointments, provide services, and improve your experience. If
                you opt in, we may send updates or promotions. You can unsubscribe
                at any time.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Booking &amp; Payments</h2>
              <p className="section-body">
                Appointments and payments may be handled through trusted third-party
                providers (such as Vagaro and payment processors). We do not store
                full payment card information on our website.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Cookies &amp; Analytics</h2>
              <p className="section-body">
                Our website may use cookies or similar technologies to help the
                site function properly and understand general website activity.
                You can manage cookies in your browser settings.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Sharing Information</h2>
              <p className="section-body">
                We do not sell your personal information. We may share information
                with service providers who help us operate our website, booking,
                and payments, or when required by law.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Data Security</h2>
              <p className="section-body">
                We take reasonable measures to protect your information. However,
                no internet transmission is 100% secure, and we cannot guarantee
                absolute security.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Your Choices</h2>
              <p className="section-body">
                You may request to access, update, or delete your personal
                information where legally allowed. You may also opt out of
                marketing communications at any time.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Updates to This Policy</h2>
              <p className="section-body">
                We may update this Privacy Policy from time to time. Updates will
                be posted on this page with a revised effective date.
              </p>
            </div>
  
            <div>
              <h2 className="section-title">Contact Us</h2>
              <p className="section-body">
                If you have questions about this Privacy Policy, please contact us
                through our contact page.
              </p>
  
              <div className="pt-4 flex flex-wrap gap-3">
                <a href="/contact" className="btn-primary inline-block">
                  Contact Us
                </a>
                <a href="/termsandcondition" className="btn-secondary inline-block">
                  View Terms &amp; Conditions
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  