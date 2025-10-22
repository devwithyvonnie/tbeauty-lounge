// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Memberships from "./pages/Memberships";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/memberships" element={<Memberships />} />
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