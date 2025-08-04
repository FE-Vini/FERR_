import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

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
            <div className="mt-4 flex gap-4">
              <a 
                href="https://www.instagram.com/ferailrepair?igsh=OW15NHdpaG5scDR2&utm_source=ig_contact_invite"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/company/fe-rail-repair/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
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