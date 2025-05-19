import React from 'react';
import { StarBorder } from '@/components/ui/star-border';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Squares } from '@/components/ui/squares';

const Datenschutz = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />
      <main className="relative z-10 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 bg-[#111] rounded-2xl p-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-semibold mb-2">Allgemeine Hinweise</h3>
              <p className="mb-4">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
              <p className="mb-4">Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-xl font-semibold mb-2">Kontaktformular</h3>
              <p className="mb-4">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Ihre Rechte</h2>
              <p className="mb-2">Sie haben jederzeit das Recht:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Auskunft über Ihre bei uns gespeicherten Daten zu erhalten</li>
                <li>Ihre bei uns gespeicherten Daten berichtigen zu lassen</li>
                <li>Ihre bei uns gespeicherten Daten löschen zu lassen</li>
                <li>Die Verarbeitung Ihrer bei uns gespeicherten Daten einschränken zu lassen</li>
                <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns einzulegen</li>
              </ul>
            </section>

            <StarBorder
              as="button"
              onClick={() => navigate('/')}
              className="mt-8"
            >
              Zurück zur Startseite
            </StarBorder>
          </div>
        </div>
      </main>
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Datenschutz;