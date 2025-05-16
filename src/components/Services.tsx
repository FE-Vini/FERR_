import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from './ui/carousel';

const Services = () => {
  const services = [
    {
      id: 'instandhaltung',
      title: 'Mobile Instandhaltungs- / Instandsetzungsarbeiten',
      description: 'Professionelle Wartung und Reparatur direkt vor Ort, um Ihre Güterwagen schnell wieder einsatzbereit zu machen.',
      backgroundImage: '/images/instandhaltung-bremsen.jpg'
    },
    {
      id: 'wartung',
      title: 'Präventive Wartungsarbeiten und Sicherheitsprüfungen',
      description: 'Regelmäßige Wartung und Kontrollen zur Vermeidung von Ausfällen und zur Gewährleistung der Betriebssicherheit.',
      backgroundImage: '/images/richt-und-facharbeiten.jpg'
    },
    {
      id: 'kontrolle',
      title: 'Mietrück,- sowie Übergaben / Kontrolle / Schadeinschätzung',
      description: 'Professionelle Abwicklung von Übergaben und Rücknahmen, inklusive detaillierter Zustandserfassung und Schadensbewertung.',
      backgroundImage: '/images/vermessung-und-pruefung.jpg'
    },
    {
      id: 'bremsdienst',
      title: 'Bremsdienst und Komponentenwechsel',
      description: 'Fachgerechte Wartung und Austausch von Bremssystemen sowie anderen wichtigen Komponenten.',
      backgroundImage: '/images/Komponententausch.jpg'
    },
    {
      id: 'abnahme',
      title: 'Wagenabnahmen und Qualitätsprüfungen',
      description: 'Durchführung von Abnahmen und Qualitätskontrollen nach aktuellen Standards und Vorschriften.',
      backgroundImage: '/images/vermessung-und-pruefung.jpg'
    },
    {
      id: 'radsatz',
      title: 'Radsatztausch',
      description: 'Professioneller Austausch von Radsätzen mit minimaler Ausfallzeit.',
      backgroundImage: '/images/radsatz-tausch.jpg'
    },
    {
      id: 'uvv',
      title: 'UVV-Prüfungen und technischer Support',
      description: 'Durchführung von Unfallverhütungsvorschriften-Prüfungen und technische Unterstützung bei allen Fragen.',
      backgroundImage: '/images/frist-und-revisionsarbeiten.jpg'
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden -mb-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Unsere Dienstleistungen
        </h2>
        
        <Carousel className="relative">
          <CarouselContent className="-ml-4">
            {services.map((service) => (
              <CarouselItem key={service.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3 pb-8">
                <div 
                  className={`relative rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 aspect-square overflow-hidden ${
                    service.backgroundImage ? 'text-white' : 'bg-white'
                  }`}
                >
                  {service.backgroundImage && (
                    <>
                      <div 
                        className="absolute inset-0 bg-cover bg-center z-0 object-cover"
                        style={{ backgroundImage: `url("${service.backgroundImage}")` }}
                      />
                      <div className="absolute inset-0 bg-black/50 z-0" />
                    </>
                  )}
                  <div className="relative z-10 h-full flex flex-col">
                    <h3 className={`text-2xl font-bold mb-4 ${
                      service.backgroundImage ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h3>
                    <p className={`${service.backgroundImage ? 'text-white/90' : 'text-gray-600'} flex-1`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation 
            alwaysShow
            classNameButton="bg-blue-900 hover:bg-blue-800 *:stroke-white"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Services;