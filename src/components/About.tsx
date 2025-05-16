import React from 'react';
import { Target, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden -mb-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Über uns
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/95 rounded-[20px] p-8 backdrop-blur-sm">
            <p className="text-gray-600 mb-6 md:text-lg">
              Die FE Rail & Repair mit Firmensitz in Magdeburg wurde im Jahr 2025 gegründet und ist somit ganz frisch als Dienstleister auf dem Markt. Wir sind spezialisiert auf die Instandhaltungs- und Instandsetzungsarbeiten an Güterwagen – und das bundesweit. Trotz der jungen Unternehmensgeschichte verfügt das Unternehmen über eine große Expertise im Güterwagenbereich, durch umfassende Erfahrung und Fachwissen aus vielen Jahren in der Branche. Unser Ziel ist es, mit höchster Qualität, Flexibilität und Zuverlässigkeit den Ansprüchen unserer Kunden gerecht zu werden und so zur sicheren und effizienten Nutzung von Güterwagen im gesamten Schienennetz beizutragen.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Unsere Mission:</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="w-12 h-12 text-blue-900 mt-1 mr-4" />
                <div>
                  <p className="text-gray-600">Effiziente, kundenorientierte und standortunabhängige Instandhaltung von Güterwagen unter hohen Qualitätsstandards.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-12 h-12 text-blue-900 mt-1 mr-4" />
                <div>
                  <p className="text-gray-600">Maximale Verfügbarkeit und kürzeste Reaktionszeiten.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-[20px] shadow-xl overflow-hidden">
            <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1082134895?h=38f8c69620&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', borderRadius:'20px'}}
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                title="FE Rail &amp; Repair">
              </iframe>
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src="/images/VPI-EMG.svg"
                alt="VPI-EMG Logo"
                className="h-40 w-auto"
              />
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export default About