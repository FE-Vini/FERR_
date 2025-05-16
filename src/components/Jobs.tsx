import React from 'react';
import { StarBorder } from './ui/star-border';
import { BriefcaseIcon, GraduationCapIcon, ClockIcon, MapPinIcon, ChevronDown } from 'lucide-react';
import ProgressIndicator from './ui/progress-indicator';

const Jobs = () => {
  const [openJobId, setOpenJobId] = React.useState<string | null>(null);

  const jobs = [
    {
      id: 'wagenmeister',
      title: 'Wagenmeister (m/w/d)',
      type: 'Vollzeit',
      location: 'Magdeburg',
      requirements: [
        'Abgeschlossene Berufsausbildung als Wagenmeister oder vergleichbare Qualifikation',
        'Mehrjährige Berufserfahrung in der Schienenfahrzeug-Instandhaltung',
        'Führerschein Klasse B',
        'Bereitschaft für Außendiensteinsätze'
      ]
    },
    {
      id: 'schlosser',
      title: 'Schienenfahrzeugschlosser (m/w/d)',
      type: 'Vollzeit',
      location: 'Magdeburg',
      requirements: [
        'Abgeschlossene Berufsausbildung als Metallbauer oder vergleichbare Qualifikation',
        'Erfahrung in der Wartung und Reparatur von Schienenfahrzeugen',
        'Führerschein Klasse B',
        'Flexibilität und Reisebereitschaft'
      ]
    },
    {
      id: 'initiative',
      title: 'Initiativbewerbung',
      type: '',
      location: '',
      requirements: [
        'Interesse an der Schienenfahrzeug-Instandhaltung',
        'Teamfähigkeit und Eigeninitiative',
        'Bereitschaft zur Weiterbildung',
        'Führerschein Klasse B von Vorteil'
      ]
    }
  ];

  const toggleJob = (jobId: string) => {
    setOpenJobId(openJobId === jobId ? null : jobId);
  };

  return (
    <section id="jobs" className="relative py-20 overflow-hidden -mb-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Karriere bei FE Rail & Repair
        </h2>
        
        <div className="space-y-4 max-w-3xl mx-auto">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white/95 rounded-[20px] backdrop-blur-sm overflow-hidden">
              <button
                onClick={() => toggleJob(job.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-blue-900" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-1">
                      {job.type && (
                        <div className="flex items-center gap-2">
                          <ClockIcon className="w-4 h-4 text-blue-900" />
                          <span className="text-gray-600">{job.type}</span>
                        </div>
                      )}
                      {job.location && (
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-4 h-4 text-blue-900" />
                          <span className="text-gray-600">{job.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-blue-900 transition-transform duration-200 ${
                    openJobId === job.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-200 overflow-hidden ${
                  openJobId === job.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-4 space-y-6 border-t border-gray-100">
                {job.id === 'initiative' ? (
                  <ProgressIndicator />
                ) : (
                  <div className="flex items-start gap-4">
                    <GraduationCapIcon className="w-6 h-6 text-blue-900 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Anforderungen:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="text-gray-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                </div>
                {job.id !== 'initiative' && (
                  <div className="mt-2 mb-6 flex justify-center">
                    <StarBorder
                      as="a"
                      href="mailto:Michael.knorr@railandrepair.de?subject=Bewerbung als ${job.title}"
                      color="#3b82f6"
                     className="!py-1 !px-0"
                    >
                      Jetzt bewerben
                    </StarBorder>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;