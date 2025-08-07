import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Flotte', path: '/flotte' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-baseline space-x-3"
          >
            <span className="text-xl font-title text-white">Drivly</span>
            <span className="text-[10px] font-light tracking-widest text-white/60">ORION</span>
          </Link>

          {/* Navigation principale */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-8 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-8">
            <a
              href="tel:+33100000000"
              className="hidden lg:block text-right"
            >
              <div className="text-xs text-white/50 mb-0.5">Service client</div>
              <div className="text-sm font-light tracking-wider">01 23 45 67 89</div>
            </a>

            <Link
              to="/reservation"
              className="hidden lg:inline-flex items-center h-10 px-6 border border-white/20 hover:bg-white/5 transition-colors"
            >
              <span className="text-sm tracking-wide">Réserver</span>
            </Link>

            {/* Menu mobile */}
            <button className="lg:hidden w-8 h-8 flex flex-col items-end justify-center space-y-1">
              <span className="block w-5 h-px bg-white/70"></span>
              <span className="block w-4 h-px bg-white/70"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
 
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Flotte', path: '/flotte' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-sm border-b border-white/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-baseline space-x-3"
          >
            <span className="text-xl font-title text-white">Drivly</span>
            <span className="text-[10px] font-light tracking-widest text-white/60">ORION</span>
          </Link>

          {/* Navigation principale */}
          <div className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="px-8 py-2 text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-8">
            <a
              href="tel:+33100000000"
              className="hidden lg:block text-right"
            >
              <div className="text-xs text-white/50 mb-0.5">Service client</div>
              <div className="text-sm font-light tracking-wider">01 23 45 67 89</div>
            </a>

            <Link
              to="/reservation"
              className="hidden lg:inline-flex items-center h-10 px-6 border border-white/20 hover:bg-white/5 transition-colors"
            >
              <span className="text-sm tracking-wide">Réserver</span>
            </Link>

            {/* Menu mobile */}
            <button className="lg:hidden w-8 h-8 flex flex-col items-end justify-center space-y-1">
              <span className="block w-5 h-px bg-white/70"></span>
              <span className="block w-4 h-px bg-white/70"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
 
 
 