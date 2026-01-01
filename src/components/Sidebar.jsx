import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

/** Reusable accordion item (kept for Academy) */
function Accordion({ title, children, isOpen, onToggle }) {
  return (
    <div className="select-none">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm hover:bg-white/10"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{title}</span>
        <span
          className={`inline-block h-5 w-5 rounded-full border border-white/70 text-center leading-5 transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      {/* Animated content: 0 -> auto using grid rows trick */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
        }`}
      >
        <div className="min-h-0">
          <div className="ml-3 space-y-1 border-l border-white/15 pl-3 pb-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

const ChildLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`block rounded px-2 py-1 text-sm ${
        active
          ? 'bg-white/10 font-medium'
          : 'opacity-90 hover:bg-white/10 hover:opacity-100'
      }`}
    >
      {children}
    </Link>
  );
};

const NavLink = ({ to, children }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`block rounded-md px-2 py-1 text-sm ${
        active ? 'bg-white/10 font-medium' : 'opacity-90 hover:opacity-100'
      }`}
    >
      {children}
    </Link>
  );
};

export default function Sidebar() {
  const location = useLocation();

  // Which accordions are open
  const [open, setOpen] = useState({
    services: false,
  });

  // Auto-open Services if URL points to services or old hash links
  useEffect(() => {
    const hash = location.hash.toLowerCase();
    const path = location.pathname.toLowerCase();
    const isServices =
      path.startsWith('/services') ||
      [
        '#lashes',
        '#skin',
        '#injectables',
        '#laser',
        '#pmu',
        '#waxtint',
        '#wellness',
      ].includes(hash);

    if (isServices) {
      setOpen((s) => ({ ...s, services: true }));
    }
  }, [location]);

  return (
    <aside
      className="
        sticky top-6
        h-[calc(100vh-3rem)]
        w-full overflow-y-auto
        rounded-2xl bg-brand-primary px-5 py-6 text-white shadow-lg
        flex flex-col justify-between
      "
    >
      {/* Brand */}
      <div>
        <div className="mb-6">
          <div className="text-xl font-semibold">T Beauty Lounge</div>
          <div className="mt-1 text-xs text-white/80">Med Spa in Goodyear</div>
        </div>

        {/* Top-level links */}
        <nav className="space-y-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          <div className="mt-2 flex items-center justify-between rounded-md px-2 py-2 hover:bg-white/10">
            <Link to="/services" className="text-sm font-medium">
              Services
            </Link>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen((s) => ({ ...s, services: !s.services }));
              }}
              className={`ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/70 transition ${open.services ? 'rotate-45' : ''}`}
              aria-expanded={open.services}
              aria-controls="services-submenu"
              aria-label={
                open.services ? 'Collapse services' : 'Expand services'
              }
            >
              <span className="-mt-[1px] text-sm leading-none">+</span>
            </button>
          </div>

          {/* Services submenu */}
          <div
            id="services-submenu"
            className={`grid overflow-hidden transition-all duration-300 ${open.services ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'}`}
          >
            <div className="min-h-0">
              <div className="ml-3 space-y-1 border-l border-white/15 pl-3 pb-2">
                <ChildLink href="/services#lashes">
                  Eyelash Extensions
                </ChildLink>
                <ChildLink href="/services#skin">Facials &amp; Skin</ChildLink>
                <ChildLink href="/services#injectables">
                  Cosmetic Injections
                </ChildLink>
                <ChildLink href="/services#laser">Laser Hair Removal</ChildLink>
                <ChildLink href="/services#pmu">Permanent Makeup</ChildLink>
                <ChildLink href="/services#wellness">
                  IV Therapy &amp; Weight Loss
                </ChildLink>
              </div>
            </div>
          </div>

          <NavLink to="/memberships">Memberships</NavLink>
          <NavLink to="/academy">T Beauty Academy</NavLink>
          <NavLink to="/faq">FAQ</NavLink>

          {/* Promos with subtle badge */}
          <Link
            to="/promos"
            className="block rounded-md px-2 py-1 text-sm opacity-90 hover:opacity-100 hover:bg-white/10"
          >
            <span className="inline-flex items-center gap-2">
              Promos
              <span className="rounded-full bg-brand-mint/70 px-2 py-[2px] text-[10px] text-brand-forest">
                New
              </span>
            </span>
          </Link>

          {/* External: Cherry payment plan */}
          <a
            href="https://withcherry.com/your-spa-slug" /* <-- put your real Cherry link */
            target="_blank"
            rel="noreferrer"
            className="block rounded-md px-2 py-1 text-sm opacity-90 hover:opacity-100 hover:bg-white/10"
            aria-label="Payment Plan with Cherry (opens in new tab)"
          >
            <span className="inline-flex items-center gap-2">
              Payment Plan with Cherry
              <svg
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-white/80"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
              </svg>
            </span>
          </a>

          <NavLink to="/policy">Policy</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </nav>
      </div>

      {/* Footer actions */}
      <div className="space-y-4">
        <div className="flex gap-3 text-white/90">
          <a
            href="https://instagram.com/tbeautyloungeaz"
            aria-label="Instagram"
            className="opacity-90 hover:opacity-100"
          >
            IG
          </a>
          <a
            href="https://facebook.com/tbeautyloungeaz"
            aria-label="Facebook"
            className="opacity-90 hover:opacity-100"
          >
            FB
          </a>
          <a
            href="#"
            aria-label="Heart"
            className="opacity-90 hover:opacity-100"
          >
            ♥
          </a>
        </div>
        <a
          href="/booking"
          className="block rounded-full bg-brand-forest px-4 py-3 text-center font-medium hover:brightness-110"
        >
          Book an Appointment
        </a>
      </div>
    </aside>
  );
}
  