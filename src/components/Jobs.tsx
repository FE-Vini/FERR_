import React from 'react';
import { StarBorder } from './ui/star-border';
import { BriefcaseIcon, GraduationCapIcon, ClockIcon, MapPinIcon, ChevronDown } from 'lucide-react';
import ProgressIndicator from './ui/progress-indicator';

const Jobs = () => {
  const [openJobId, setOpenJobId] = React.useState<string | null>(null);

  const jobs = [
    {
      id: 'wagenmeister',
      title: 'Wagenmeister / Wagenprüfer (m/w/d)',
      type: 'Vollzeit',
      location: 'Magdeburg',
      description: 'Die FE Rail & Repair GmbH mit Firmensitz in Magdeburg wurde im Jahr 2025 gegründet und ist somit ganz frisch als Dienstleister auf dem Markt. Wir sind spezialisiert auf die Instandhaltungs- und Instandsetzungsarbeiten an Güterwagen – und das bundesweit. Trotz der jungen Unternehmensgeschichte verfügt das Unternehmen über eine große Expertise, da unser Geschäftsführer über eine umfassende Erfahrung und Fachwissen aus vielen Jahren in der Branche mitbringt. Unser Ziel ist es, mit höchster Qualität, Flexibilität und Zuverlässigkeit den Ansprüchen unserer Kunden gerecht zu werden und so zur sicheren und effizienten Nutzung von Güterwagen im gesamten Schienennetz beizutragen.\n\nWir suchen zur Verstärkung unseres mobilen Serviceteams, Schlosser / Servicetechniker (m/w/d) in Vollzeit.',
      profile: [
        'Abgeschlossene Ausbildung in einem metallverarbeitenden Beruf oder einschlägige Berufserfahrung in diesem Bereich',
        'Hohes Qualitätsbewusstsein',
        'Zuverlässig und belastbar',
        'Selbstständige, strukturierte sowie sorgfältige Arbeitsweise',
        'EU-Führerschein B / BE',
        'Bereitschaft zu Spät- und Nachtschichten sowie Wochenend- und Feiertagsarbeit',
        'Gute Deutschkenntnisse in Wort und Schrift'
      ],
      tasks: [
        'Durchführung von Sichtkontrollen und technischen Untersuchungen an Schienenfahrzeugen',
        'Meldung von Unregelmäßigkeiten',
        'Beurteilen von Schäden an Fahrzeugen und deren Dokumentation',
        'Lauffähigkeitsuntersuchungen',
        'Gefahrgut- und Qualitätskontrollen',
        'Erstellung der Dokumentation'
      ],
      benefits: [
        'Umfangreiche Einarbeitung und Schulungen',
        'Fort- und Weiterbildungsmöglichkeiten',
        'Prozesse von Beginn mitgestalten und gemeinsam zu wachsen',
        'Betriebsklima',
        'Attraktive Vergütung sowie Zuschläge',
        'Urlaubsanspruch von 30 Tagen',
        'Corparate Benefits',
        'Hansefit-Mitgliedschaft\n  • Freue dich auf die Nutzung zahlreicher Fitness- und Wellness-Angebote durch eine Hansefit Mitgliedschaft'
      ],
      footer: 'Wir freuen uns, wenn wir Ihr Interesse geweckt haben!\nWenn Sie Teil eines dynamischen, neu-wachsenden Unternehmens werden möchten, senden Sie uns gerne Ihre Bewerbungsunterlagen per E-Mail'
    },
    {
      id: 'schlosser',
      title: 'Servicetechniker / Schlosser (m/w/d)',
      type: 'Vollzeit',
      location: 'Magdeburg',
      description: 'Die FE Rail & Repair GmbH mit Firmensitz in Magdeburg wurde im Jahr 2025 gegründet und ist somit ganz frisch als Dienstleister auf dem Markt. Wir sind spezialisiert auf die Instandhaltungs- und Instandsetzungsarbeiten an Güterwagen – und das bundesweit. Trotz der jungen Unternehmensgeschichte verfügt das Unternehmen über eine große Expertise, da unser Geschäftsführer über eine umfassende Erfahrung und Fachwissen aus vielen Jahren in der Branche mitbringt. Unser Ziel ist es, mit höchster Qualität, Flexibilität und Zuverlässigkeit den Ansprüchen unserer Kunden gerecht zu werden und so zur sicheren und effizienten Nutzung von Güterwagen im gesamten Schienennetz beizutragen.\n\nWir suchen zur Verstärkung unseres mobilen Serviceteams, Schlosser / Servicetechniker (m/w/d) in Vollzeit.',
      profile: [
        'Abgeschlossene Ausbildung in einem metallverarbeitenden Beruf oder einschlägige Berufserfahrung in diesem Bereich',
        'Hohes Qualitätsbewusstsein',
        'Zuverlässig und belastbar',
        'Selbstständige, strukturierte sowie sorgfältige Arbeitsweise',
        'EU-Führerschein B / BE',
        'Bereitschaft zu Spät- und Nachtschichten sowie Wochenend- und Feiertagsarbeit',
        'Gute Deutschkenntnisse in Wort und Schrift'
      ],
      tasks: [
        'Mobile Serviceeinsätze innerhalb von Deutschland, ggfs. auch europaweit',
        'Selbständige Durchführung von Reparatur-/Instandsetzungsarbeiten',
        'Durchführung von Wartungs- und Instandhaltungsarbeiten',
        'Arbeiten nach vorliegenden Checklisten / Wartungsanweisungen durchführen',
        'Erstellung der Dokumentation'
      ],
      benefits: [
        'Umfangreiche Einarbeitung und Schulungen',
        'Fort- und Weiterbildungsmöglichkeiten',
        'Prozesse von Beginn mitgestalten und gemeinsam zu wachsen',
        'Betriebsklima',
        'Attraktive Vergütung sowie Zuschläge',
        'Urlaubsanspruch von 30 Tagen',
        'Corparate Benefits',
        'Hansefit-Mitgliedschaft\n  • Freue dich auf die Nutzung zahlreicher Fitness- und Wellness-Angebote durch eine Hansefit Mitgliedschaft'
      ],
      footer: 'Wir freuen uns, wenn wir Ihr Interesse geweckt haben!\nWenn Sie Teil eines dynamischen, neu-wachsenden Unternehmens werden möchten, senden Sie uns gerne Ihre Bewerbungsunterlagen per E-Mail'
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
                className="w-full p-6 flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200 text-left"
              >
                <div className="flex items-center gap-4">
                  <BriefcaseIcon className="w-6 h-6 text-blue-900" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    {(job.type || job.location) && (
                      <div className="flex gap-4 mt-1">
                        {job.type && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <ClockIcon className="w-4 h-4 text-blue-900" />
                            <span>{job.type}</span>
                          </div>
                        )}
                        {job.location && (
                          <div className="flex items-center gap-2 text-gray-600">
                            <MapPinIcon className="w-4 h-4 text-blue-900" />
                            <span>{job.location}</span>
                          </div>
                        )}
                      </div>
                    )}
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
                  openJobId === job.id ? 'max-h-[40vh] opacity-100' : 'max-h-0 opacity-0'
                } flex flex-col`}
              >
                <div className="p-8 pt-4 space-y-6 border-t border-gray-100 overflow-y-auto">
                  {job.id === 'initiative' ? (
                    <ProgressIndicator />
                  ) : (
                    <>
                      <div className="text-gray-600 whitespace-pre-line">{job.description}</div>
                      
                      <div className="space-y-6">
                        {job.profile && job.profile.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Ihr Profil:</h4>
                            <ul className="space-y-2">
                              {job.profile.map((item, index) => (
                                <li key={index} className="text-gray-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.tasks && job.tasks.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Ihre Aufgaben:</h4>
                            <ul className="space-y-2">
                              {job.tasks.map((task, index) => (
                                <li key={index} className="text-gray-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2" />
                                  <span>{task}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {job.benefits && job.benefits.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Wir bieten:</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, index) => (
                                <li key={index} className="text-gray-600 flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2" />
                                  <span className="whitespace-pre-line">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="text-gray-600 whitespace-pre-line mt-6">{job.footer}</div>
                    </>
                  )}
                  {job.id !== 'initiative' && (
                  <div className="mt-8 flex justify-center">
                    <StarBorder
                      as="a"
                      href={`mailto:Michael.knorr@railandrepair.de?subject=Bewerbung als ${job.title}`}
                      color="#3b82f6"
                      className="!py-1 !px-0"
                    >
                      Jetzt bewerben
                    </StarBorder>
                  </div>
                )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jobs;