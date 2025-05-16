import React from 'react';
import { StarBorder } from '../components/ui/star-border';

interface HeroProps {
  onLoad: () => void;
}

const Hero = ({ onLoad }: HeroProps) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80";
    img.onload = () => {
      setImageLoaded(true);
      onLoad();
    };
  }, [onLoad]);

  return (
    <section id="home" className="relative">
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-500`}
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80")',
        }}>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative min-h-[100vh] flex items-center py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              „Verfügbarkeit statt Stillstand"
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-white/90 mb-6">
              Mobile Instandhaltung von Güterwagen
            </h2>
            <p className="text-2xl text-white/90 mb-6">
              Service beginnt bei der Erreichbarkeit und endet erst, wenn Ihr Wagen wieder einsatzbereit ist.
            </p>
            <ul className="text-xl text-white/90 mb-8 space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 shrink-0 mt-[0.4em]" />
                365 Tage im Jahr
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 shrink-0 mt-[0.4em]" />
                bundesweit
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 shrink-0 mt-[0.4em]" />
                24/7-Erreichbarkeit unseres Einsatzkoordinators für Notfälle und akute Störungen
              </li>
            </ul>
            <StarBorder
              as="a"
              href="#contact"
              color="white"
              className="hover:bg-black/80 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </StarBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;