import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Notre Flotte', href: '/flotte' },
  { name: 'Services', href: '/services' },
  { name: 'À Propos', href: '/a-propos' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-title text-2xl tracking-wider transform hover:scale-105 transition-transform duration-300"
          >
            TURISMO
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link ${
                  location.pathname === item.href ? 'text-gold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/reservation" className="btn btn-primary ml-4">
              Réserver
            </Link>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-white top-2 transition-opacity duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-white transform transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-lg py-2 ${
                      location.pathname === item.href
                        ? 'text-gold'
                        : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/reservation"
                  className="btn btn-primary mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Réserver
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}; 