import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

/** Reusable accordion item */
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

const ChildLink = ({ href, children }) => (
  <a
    href={href} // use anchors so /services#section scrolls correctly
    className="block rounded px-2 py-1 text-sm opacity-90 hover:bg-white/10 hover:opacity-100"
  >
    {children}
  </a>
);

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
    academy: false,
  });

  // Auto-open Services if URL has a matching hash or path
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
        '#wellness',
      ].includes(hash);

    if (isServices) setOpen((s) => ({ ...s, services: true }));
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

          {/* SERVICES (collapsible) */}
          <Accordion
            title="Services"
            isOpen={open.services}
            onToggle={() => setOpen((s) => ({ ...s, services: !s.services }))}
          >
            <ChildLink href="/services#lashes">Eyelash Extensions</ChildLink>
            <ChildLink href="/services#skin">Facials</ChildLink>
            <ChildLink href="/services#injectables">
              Cosmetic Injections
            </ChildLink>
            <ChildLink href="/services#laser">Laser Hair Removal</ChildLink>
            <ChildLink href="/services#pmu">Permanent Makeup</ChildLink>
            <ChildLink href="/services#wellness">Weight Loss Program</ChildLink>
            <ChildLink href="/services#wellness">
              IV Therapy & Wellness Shots
            </ChildLink>
            <ChildLink href="/services#wellness">Wax & Tint</ChildLink>
          </Accordion>

          {/* T Beauty Academy (optional collapsible) */}
          <Accordion
            title="T Beauty Academy"
            isOpen={open.academy}
            onToggle={() => setOpen((s) => ({ ...s, academy: !s.academy }))}
          >
            <ChildLink href="/academy#classes">Classes</ChildLink>
            <ChildLink href="/academy#schedule">Schedule</ChildLink>
            <ChildLink href="/academy#policies">Policies</ChildLink>
          </Accordion>

          <NavLink to="/policy">Policy</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </nav>
      </div>

      {/* Footer actions */}
      <div className="space-y-4">
        <div className="flex gap-3 text-white/90">
          <a
            href="https://instagram.com/tbeautyloungeaz"
            aria-label="Instagram"
            className="hover:opacity-100 opacity-90"
          >
            IG
          </a>
          <a
            href="https://facebook.com/tbeautyloungeaz"
            aria-label="Facebook"
            className="hover:opacity-100 opacity-90"
          >
            FB
          </a>
          <a
            href="#"
            aria-label="Heart"
            className="hover:opacity-100 opacity-90"
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
