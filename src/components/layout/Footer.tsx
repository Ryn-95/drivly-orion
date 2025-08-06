import { Link } from 'react-router-dom';

const footerNavigation = {
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Confidentialité', href: '/confidentialite' },
    { name: 'CGV', href: '/cgv' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-drivly-surface border-t border-drivly-line">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <Link to="/" className="font-serif text-2xl">
              Drivly | Orion
            </Link>
            <p className="mt-4 text-sm text-drivly-muted">
              Location de véhicules citadins et d'exception.<br />
              Service premium, disponibilité 24/7.
            </p>
            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-4">Horaires d'ouverture</h3>
              <p className="text-sm text-drivly-muted">
                Lundi - Vendredi : 8h - 20h<br />
                Samedi : 9h - 18h<br />
                Dimanche : Sur rendez-vous
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold">Société</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-drivly-muted hover:text-drivly-text"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold">Informations légales</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-drivly-muted hover:text-drivly-text"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="tel:+33123456789"
                  className="text-sm text-drivly-muted hover:text-drivly-text"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@drivly-orion.fr"
                  className="text-sm text-drivly-muted hover:text-drivly-text"
                >
                  contact@drivly-orion.fr
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-drivly-muted hover:text-drivly-text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-drivly-line pt-8">
          <p className="text-sm text-drivly-muted text-center">
            © {new Date().getFullYear()} Drivly | Orion. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}; 