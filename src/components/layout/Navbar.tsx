import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Portfolio", path: "/projects" },
  { name: "Curator", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-zinc-100 py-4" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl font-extrabold tracking-tighter uppercase group relative overflow-hidden">
          <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">
            Monolith
          </span>
          <span className="absolute left-0 top-full inline-block transition-transform duration-500 group-hover:-translate-y-full">
            Index
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-[0.25em] font-bold transition-colors hover:text-zinc-500 relative py-1 group ${
                location.pathname === link.path ? "text-zinc-900" : "text-zinc-400"
              }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 w-full h-[1.5px] bg-zinc-900 transition-transform duration-500 origin-left ${
                location.pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
          closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
        }}
        className="fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center space-y-12"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-extrabold tracking-tighter uppercase hover:text-zinc-500 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
}
