import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Link data allows us to map through them (cleaner code)
  const links = [
    { name: "Home", href: "#home" },
    { name: "Tech Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="backdrop-blur-lg bg-surface/50 border border-white/10 px-6 py-3 rounded-full shadow-lg shadow-black/20 flex justify-between items-center">
          
          {/* Logo (Left) */}
          <a href="#" className="text-white font-semibold tracking-tight hover:text-neutral-300 transition">
            Ansh.dev
          </a>

          {/* Desktop Menu (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium text-secondary">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Visible on Mobile) */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown (Smooth Animation) */}
        {isOpen && (
          <div className="absolute top-16 left-6 right-6 p-4 bg-surface border border-white/10 rounded-2xl md:hidden flex flex-col gap-4 shadow-2xl animate-fade-in">
            {links.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-white text-lg font-medium p-2"
                onClick={() => setIsOpen(false)} // Close menu when clicked
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;