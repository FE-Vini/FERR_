import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNavigation } from './ui/carousel';

const References = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80',
      title: 'ICE Wartung',
      description: 'Umfassende Wartung und Instandhaltung von ICE-Zügen',
    },
    {
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80',
      title: 'Regionalzüge',
      description: 'Regelmäßige Wartung von Regionalzügen',
    },
    {
      image: 'https://images.unsplash.com/photo-1532511193325-4e0c0a23c682?auto=format&fit=crop&q=80',
      title: 'S-Bahn Flotte',
      description: 'Betreuung einer kompletten S-Bahn Flotte',
    },
  ];

  return (
    <section id="references" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Referenzen
        </h2>
        
        <Carousel className="relative">
          <CarouselContent className="-ml-4">
            {projects.map((project) => (
              <CarouselItem key={project.title} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
        </Carousel>
      </div>
    </section>
  );
};

export default References;