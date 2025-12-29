// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Lashes from "./pages/services/Lashes";
import Facials from "./pages/services/Facials";
import WaxTint from "./pages/services/WaxTint";
import Injectables from "./pages/services/Injectables";
import Laser from "./pages/services/Laser";
import PMU from "./pages/services/PMU";
import Fibroblast from "./pages/services/Fibroblast";
import Wellness from "./pages/services/Wellness";
import Memberships from "./pages/Memberships";
import Academy from "./pages/TBeautyAcademy";
import Cherry from "./pages/Cherry"; 
import Policy from "./pages/Policy";
import FAQ from "./pages/FAQ";
import Promo from "./pages/Promo";
import Contact from "./pages/Contact";


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/lashes" element={<Lashes />} />
      <Route path="/services/Facials" element={<Facials />} />
      <Route path="/services/injectables" element={<Injectables />} />
      <Route path="/services/laser" element={<Laser />} />
      <Route path="/services/waxtint" element={<WaxTint />} />
      <Route path="/services/fibroblast" element={<Fibroblast />} />
      <Route path="/services/pmu" element={<PMU />} />
      <Route path="/services/wellness" element={<Wellness />} />
      <Route path="/tbeautyacademy" element={<Academy />} />
      <Route path="/cherry" element={<Cherry />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/contactus" element={<Contact />} />
    </Routes>
  );
}

export default function App() {
  return (
    <div className="bg-bg text-text">
      {/* This container adds the left/right AND top/bottom spacing */}
      <div className="md:px-6 md:py-6">
        {/* Grid: sidebar column + content column */}
        <div className="md:grid md:grid-cols-[260px_1fr] md:gap-6">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* Content column */}
          <div>
            {/* Mobile top bar (optional) */}
            <div className="md:hidden sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5 px-4 py-3 flex justify-between">
              <span className="font-semibold">T Beauty Lounge</span>
              <a href="/services" className="rounded-full bg-brand-primary text-white px-4 py-2">
                Book
              </a>
            </div>

            <main className="min-h-screen">
              <MainRoutes />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}