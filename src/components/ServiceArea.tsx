import React from 'react';

const ServiceArea = () => {
  return (
    <section className="relative py-16 overflow-hidden -mb-16">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          <div className="bg-white/95 rounded-[20px] p-8 backdrop-blur-sm md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Servicebereich
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 md:text-lg">
                Mit Hauptsitz in Magdeburg bietet FE Rail & Repairs deutschlandweite mobile Instandhaltung und Reparatur von Güterwagen an. Unsere Einsatzteams bringen professionellen Service direkt zu Ihnen – getreu unserem Motto "Wir sind die Lösung".
              </p>
              <p className="text-gray-600 md:text-lg">
                Benötigen Sie Unterstützung bei der mobilen Instandsetzung? Kontaktieren Sie uns für eine schnelle und kompetente Bearbeitung Ihres Anliegens.
              </p>
            </div>
          </div>
          <div className="mt-4 md:mt-0 w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/images/Deutschlandkarte.svg"
              alt="Deutschlandkarte mit Servicegebiet"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;