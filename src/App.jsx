// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import './index.css';

import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Lashes from './pages/services/Lashes';
import Facials from './pages/services/Facials';
import WaxTint from './pages/services/WaxTint';
import Injectables from './pages/services/functional-medicine-and-aesthetics';
import JapaneseHeadSpa from './pages/services/HeadSpa';
import Laser from './pages/services/Laser';
import PMU from './pages/services/PMU';
import Fibroblast from './pages/services/Fibroblast';
import Memberships from './pages/Memberships';
import Academy from './pages/TBeautyAcademy';
import Cherry from './pages/Cherry';
import Policy from './pages/Policy';
import FAQ from './pages/FAQ';
import Promo from './pages/Promo';
import Contact from './pages/Contact';
import Privacy from './pages/PrivacyPolicy';
import Terms from './pages/T&C';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/memberships" element={<Memberships />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/lashes" element={<Lashes />} />
      <Route path="/services/facials" element={<Facials />} />
      <Route path="/services/functional-medicine-and-aesthetics" element={<Injectables />} />
      <Route path="/services/laser" element={<Laser />} />
      <Route path="/services/waxtint" element={<WaxTint />} />
      <Route path="/services/fibroblast" element={<Fibroblast />} />
      <Route path="/services/pmu" element={<PMU />} />
      <Route path="/services/headspa" element={<JapaneseHeadSpa />} />
      <Route path="/tbeautyacademy" element={<Academy />} />
      <Route path="/cherry" element={<Cherry />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/privacypolicy" element={<Privacy />} />
      <Route path="/termsandcondition" element={<Terms />} />
    </Routes>
  );
}

export default function App() {
  return (
      <div className="w-full bg-bg text-text">
        <MobileNav />
      <div className="w-full md:px-6 md:py-6">
        <div className="md:grid md:grid-cols-[260px_minmax(0,1fr)] md:gap-6">
          {/* DESKTOP SIDEBAR */}
          <div className="hidden md:block">
            <Sidebar />
          </div>

          {/* PAGE CONTENT */}
          <div className="min-w-0">
            <main className="min-h-screen min-w-0 overflow-x-hidden">
              <MainRoutes />
            </main>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
