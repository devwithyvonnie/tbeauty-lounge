// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/* ---------- Link components ---------- */

function NavLink({ to, children }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={[
        "flex w-full items-center rounded-lg px-3 py-2 text-[15px] leading-snug",
        active ? "bg-white/10 font-semibold" : "opacity-90 hover:bg-white/10 hover:opacity-100",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function ServiceLink({ to, children }) {
  const { pathname } = useLocation();
  const active = pathname === to;

  return (
    <Link
      to={to}
      className={[
        "block rounded px-2 py-[3px] text-[13px] leading-snug", // tighter + smaller
        active ? "bg-white/10 font-medium" : "opacity-80 hover:bg-white/10 hover:opacity-100",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

/* ---------- Sidebar ---------- */

export default function Sidebar() {
  const location = useLocation();

  const SERVICES = [
    { to: "/services/lashes", label: "Eyelash Extensions" },
    { to: "/services/facials", label: "Facials & Skin" },
    { to: "/services/injectables", label: "Cosmetic Injections" },
    { to: "/services/fibroblast", label: "Fibroblast" },
    { to: "/services/waxtint", label: "Wax & Tint" },
    { to: "/services/laser", label: "Laser Hair Removal" },
    { to: "/services/pmu", label: "Permanent Makeup" },
    { to: "/services/wellness", label: "IV Therapy & Weight Loss" },
    { to: "/services/headspa", label: "Japanese Head Spa" },
  ];

  const [openServices, setOpenServices] = useState(false);

  // Auto-open Services when you’re on /services/*
  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.startsWith("/services")) setOpenServices(true);
  }, [location.pathname]);

  return (
    <aside
      className="
        sticky top-6
        h-[calc(100vh-3rem)]
        w-full overflow-y-auto
        rounded-2xl bg-brand-primary
        px-4 py-5
        text-white shadow-lg
        flex flex-col justify-between
      "
    >
      {/* ---------- Top (brand + nav) ---------- */}
      <div>
        {/* Brand */}
        <div className="mb-6">
          <div className="text-xl font-semibold">T Beauty Lounge</div>
          <div className="mt-1 text-xs text-white/80">Med Spa in Goodyear</div>
        </div>

        {/* Nav */}
        <nav className="space-y-0.5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>

          {/* Services row + toggle */}
          <div className="flex w-full items-center rounded-lg px-3 py-2 text-[15px] leading-snug hover:bg-white/10">
            <Link to="/services" className="flex-1">
              Services
            </Link>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpenServices((v) => !v);
              }}
              className={[
                "ml-2 inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/70",
                "transition-transform",
                openServices ? "rotate-45" : "",
              ].join(" ")}
              aria-expanded={openServices}
              aria-controls="services-submenu"
              aria-label={openServices ? "Collapse services" : "Expand services"}
            >
              <span className="-mt-[1px] text-sm leading-none">+</span>
            </button>
          </div>

          {/* Services submenu (compact list, no pill, no divider) */}
          <div
            id="services-submenu"
            className={[
              "grid overflow-hidden transition-all duration-300",
              openServices ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70",
            ].join(" ")}
          >
            <div className="min-h-0">
              <div className="ml-4 border-l border-white/15 pl-3 pb-1 pt-1 space-y-[2px]">
                {SERVICES.map((s) => (
                  <ServiceLink key={s.to} to={s.to}>
                    {s.label}
                  </ServiceLink>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/memberships">Memberships</NavLink>
          <NavLink to="/tbeautyacademy">T Beauty Academy</NavLink>
          <NavLink to="/faq">FAQ</NavLink>

          {/* Promos with badge */}
          <Link
            to="/promo"
            className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[15px] leading-snug opacity-90 hover:bg-white/10 hover:opacity-100"
          >
            <span>Promos</span>
            <span className="rounded-full bg-brand-mint/70 px-2 py-[2px] text-[11px] text-brand-forest">
              New
            </span>
          </Link>

          <NavLink to="/cherry">Payment Plan with Cherry 🍒</NavLink>
          <NavLink to="/policy">Policy</NavLink>
          <NavLink to="/contactus">Contact Us</NavLink>
        </nav>
      </div>

      {/* ---------- Bottom (social + CTAs) ---------- */}
      <div className="space-y-4">
        <div className="flex justify-center gap-4 text-white/90">
          <a
            href="https://instagram.com/tbeautyloungeaz"
            aria-label="Instagram"
            className="opacity-90 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            IG
          </a>
          <a
            href="https://facebook.com/tbeautyloungeaz"
            aria-label="Facebook"
            className="opacity-90 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            FB
          </a>
          <a
            href="https://www.google.com/search?q=T+Beauty+Lounge+Goodyear"
            aria-label="Google"
            className="opacity-90 hover:opacity-100"
            target="_blank"
            rel="noreferrer"
          >
            ♥
          </a>
        </div>

        <a
          href="https://www.vagaro.com/tbeautylounge/book-now"
          target="_blank"
          rel="noreferrer"
          className="block rounded-full bg-brand-forest px-4 py-3 text-center font-medium hover:brightness-110"
        >
          Book an Appointment
        </a>

        <a
          href="https://www.vagaro.com/tbeautylounge/gift-certificates"
          target="_blank"
          rel="noreferrer"
          className="block rounded-full bg-white/15 px-4 py-3 text-center font-medium hover:bg-white/20"
        >
          Buy Gift Cards
        </a>
      </div>
    </aside>
  );
}
