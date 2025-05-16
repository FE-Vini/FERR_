import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FE Rail & Repair</h3>
            <p className="text-gray-400">
              Ihr zuverlässiger Partner für professionelle Schienenfahrzeug-Instandhaltung
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="flex gap-4">
              <li>
                <a href="/impressum" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FE Rail & Repair. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;