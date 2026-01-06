// src/components/MobileNav.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function RowLink({ to, children, onClick, badge }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] text-white/90 hover:bg-white/10"
    >
      <span>{children}</span>
      {badge ? (
        <span className="rounded-full bg-white/15 px-2 py-[2px] text-[11px] text-white/90 ring-1 ring-white/20">
          {badge}
        </span>
      ) : (
        <span className="text-white/45" aria-hidden="true">
          ›
        </span>
      )}
    </Link>
  );
}

export default function MobileNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top mobile bar (no Book button) */}
      <header className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
        <div className="mx-auto w-11/12 max-w-7xl flex items-center justify-between py-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="rounded-xl px-3 py-2 ring-1 ring-black/10"
            aria-label="Open menu"
          >
            ☰
          </button>

          <Link to="/" className="font-semibold text-brand-forest">
            T Beauty Lounge
          </Link>

          {/* spacer keeps title visually centered */}
          <span className="w-[40px]" aria-hidden="true" />
        </div>
      </header>

      {/* Backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-[78%] max-w-sm bg-brand-primary/95 backdrop-blur text-white shadow-xl transform transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="p-3 flex items-center justify-between border-b border-white/15">
          <div>
            <div className="text-lg font-semibold">T Beauty Lounge</div>
            <div className="text-[11px] text-white/75">Med Spa in Goodyear</div>
          </div>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl px-3 py-2 ring-1 ring-white/25 hover:bg-white/10"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* Main links inside a soft panel */}
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-2 space-y-1">
            <RowLink to="/" onClick={() => setOpen(false)}>
              Home
            </RowLink>

            <RowLink to="/about" onClick={() => setOpen(false)}>
              About
            </RowLink>

            <RowLink to="/services" onClick={() => setOpen(false)}>
              Services
            </RowLink>

            <RowLink to="/memberships" onClick={() => setOpen(false)}>
              Memberships
            </RowLink>

            <RowLink to="/promo" onClick={() => setOpen(false)} badge="New">
              Promos
            </RowLink>

            <RowLink to="/contactus" onClick={() => setOpen(false)}>
              Contact Us
            </RowLink>

            {/* More collapsible */}
            <button
              type="button"
              onClick={() => setOpenMore((v) => !v)}
              className="w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-[14px] text-white/90 hover:bg-white/10"
              aria-expanded={openMore}
              aria-controls="more-submenu"
            >
              <span>More</span>
              <span
                className={[
                  "text-white/60 transition-transform duration-200",
                  openMore ? "rotate-90" : "",
                ].join(" ")}
                aria-hidden="true"
              >
                ›
              </span>
            </button>

            <div
              id="more-submenu"
              className={[
                "grid overflow-hidden transition-all duration-300",
                openMore
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-70",
              ].join(" ")}
            >
              <div className="min-h-0">
                <div className="ml-3 border-l border-white/15 pl-2 pb-2 pt-2 space-y-1">
                  <RowLink to="/faq" onClick={() => setOpen(false)}>
                    FAQ
                  </RowLink>
                  <RowLink to="/policy" onClick={() => setOpen(false)}>
                    Policy
                  </RowLink>
                  <RowLink to="/tbeautyacademy" onClick={() => setOpen(false)}>
                    T Beauty Academy
                  </RowLink>
                  <RowLink to="/cherry" onClick={() => setOpen(false)}>
                    Payment Plan with Cherry 🍒
                  </RowLink>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-4 space-y-2">
            <a
              href="https://www.vagaro.com/tbeautylounge/book-now"
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-brand-forest px-4 py-2.5 text-center text-sm font-medium hover:brightness-110"
            >
              Book an Appointment
            </a>

            <a
              href="https://www.vagaro.com/tbeautylounge/gift-certificates"
              target="_blank"
              rel="noreferrer"
              className="block rounded-full bg-white/15 px-4 py-2.5 text-center text-sm font-medium hover:bg-white/20"
            >
              Buy Gift Cards
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
