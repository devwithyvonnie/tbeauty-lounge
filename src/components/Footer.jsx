export default function Footer() {
  return (
    <footer className="mt-14">
      {/* FOLLOW US card */}
      <section className="mx-auto w-11/12 max-w-6xl">
        <div className="rounded-[--radius-card] bg-white shadow-sm ring-1 ring-black/5 p-6 md:p-7">
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-brand-forest/70">FOLLOW US</p>
            <a
              href="https://www.instagram.com/tbeautyloungeaz"
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-lg font-semibold text-brand-forest hover:underline"
            >
              @TBEAUTYLOUNGEAZ
            </a>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-4">
            {["01.jpg","02.jpg","03.jpg","04.jpg"].map((f, i) => (
              <a
                key={i}
                href="https://www.instagram.com/tbeautyloungeaz"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl"
                aria-label="Open Instagram"
              >
                <img
                  src={`/images/ig/${f}`}
                  alt=""
                  className="h-28 w-full object-cover sm:h-36 transition duration-300 ease-out group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-2xl" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <section className="mx-auto mt-8 w-11/12 max-w-6xl">
        <div className="relative overflow-hidden rounded-[--radius-card]">
          {/* soft gradient + faint lotus watermark */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(255,255,255,.08),transparent)]" />
          <div className="absolute -right-10 -top-10 h-44 w-44 opacity-[0.06]">
            <Lotus className="h-full w-full text-white" />
          </div>

          <div className="relative grid gap-8 bg-brand-forest px-6 py-8 text-brand-cream md:grid-cols-3 md:px-8">
            {/* About */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Lotus className="h-6 w-6 text-brand-mint" />
                <h3 className="text-base font-semibold">T Beauty Lounge</h3>
              </div>
              <p className="text-sm/6 text-brand-cream/85">
                Your glow, our expertise. Bringing out your natural beauty with precision and care.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">Contact Us</h3>
              <address className="not-italic text-sm/6">
                <a
                  href="https://maps.google.com/?q=13755+North+Litchfield+Road,+Suite+103,+Goodyear,+AZ+85395"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  13755 North Litchfield Road, Suite 103, Goodyear, AZ 85395
                </a>
                <br />
                <a href="mailto:tbeautyloungeaz@gmail.com" className="hover:underline">
                  tbeautyloungeaz@gmail.com
                </a>
                <br />
                <a href="tel:+16232138996" className="hover:underline">
                  (623) 213-8996
                </a>
              </address>

              <div className="flex gap-3 pt-1">
                <SocialIcon href="https://www.instagram.com/tbeautyloungeaz" label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href="https://www.facebook.com/tbeautyloungeaz" label="Facebook">
                  <Facebook className="h-4 w-4" />
                </SocialIcon>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-2">
              <h3 className="text-base font-semibold">Quick Links</h3>
              <ul className="grid grid-cols-2 gap-y-2 text-sm/6 md:block md:space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/memberships", label: "Memberships" },
                  { href: "/policy", label: "Policy" },
                  { href: "/contact", label: "Contact Us" },
                ].map((l) => (
                  <li key={l.href}>
                    <a className="hover:underline" href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* legal strip */}
          <div className="relative border-t border-white/10 bg-brand-forest/95 px-6 py-3 text-[12px] text-brand-cream/75 md:px-8">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
              <p>© {new Date().getFullYear()} T Beauty Lounge. Created by Yvonne Tran.</p>
              <p className="space-x-3">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
                <span>•</span>
                <a href="/terms" className="hover:underline">Terms &amp; Conditions</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* helpers */
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full bg-brand-cream/10 p-2 text-brand-cream transition hover:bg-brand-cream/15"
    >
      {children}
    </a>
  );
}

/* inline icons */
function Instagram(props){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6ZM17.5 6a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Z"/></svg>)}
function Facebook(props){return(<svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M13 22v-8h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2H6v4h3v8h4Z"/></svg>)}
function Lotus(props){return(<svg viewBox="0 0 64 64" fill="currentColor" {...props}><path d="M32 40c6-2 12-8 15-15-6 0-12 4-15 9-3-5-9-9-15-9 3 7 9 13 15 15Zm0 4C20 44 10 36 6 24c8-1 15 2 20 7-1-7-1-16 6-23 7 7 7 16 6 23 5-5 12-8 20-7-4 12-14 20-26 20Z"/></svg>)}
