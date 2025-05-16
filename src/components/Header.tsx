import React, { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname === '/references') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { title: 'Home', href: '#home' },
    { title: 'Dienstleistungen', href: '#services' },
    { title: 'Referenzen', href: '/references' },
    { title: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="h-12">
            <img
              src="/images/fe-rr-logo.svg"
              alt="FE R&R Logo"
              className="h-full w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                style={{ cursor: 'pointer' }}
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {menuItems.map((item) => (
              <a
                key={item.title}
                onClick={() => handleNavigation(item.href)}
                className="block py-2 text-gray-600 hover:text-blue-900"
                style={{ cursor: 'pointer' }}
              >
                {item.title}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;