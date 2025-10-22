import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b">
      <Link to="/" className="text-lg font-semibold">T Beauty Lounge</Link>
      <div className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
      </div>
    </nav>
  );
}
