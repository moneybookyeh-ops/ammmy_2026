import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-24 px-6 md:px-12 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-8">
              Let's create something<br />timeless.
            </h2>
            <a 
              href="mailto:contact@monolith.studio" 
              className="text-xl md:text-2xl font-light hover:text-zinc-400 transition-colors border-b border-zinc-700 pb-2"
            >
              contact@monolith.studio
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">Navigation</h3>
            <Link to="/projects" className="text-sm hover:text-zinc-400 transition-colors">Portfolio</Link>
            <Link to="/about" className="text-sm hover:text-zinc-400 transition-colors">About Curator</Link>
            <Link to="/contact" className="text-sm hover:text-zinc-400 transition-colors">Contact</Link>
            <Link to="/" className="text-sm hover:text-zinc-400 transition-colors">Archive</Link>
          </div>

          <div className="flex flex-col space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">Social</h3>
            <a href="#" className="text-sm hover:text-zinc-400 transition-colors">Instagram</a>
            <a href="#" className="text-sm hover:text-zinc-400 transition-colors">Behance</a>
            <a href="#" className="text-sm hover:text-zinc-400 transition-colors">LinkedIn</a>
            <a href="#" className="text-sm hover:text-zinc-400 transition-colors">Twitter / X</a>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
          <p>© 2024 Monolith Studio. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
