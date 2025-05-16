import React from 'react';
import { StarBorder } from '@/components/ui/star-border';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Squares } from '@/components/ui/squares';

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#060606] flex flex-col">
      <div className="fixed inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.15}
          squareSize={35}
          borderColor="#e5e7eb"
        />
      </div>
      <Header />
      <main className="relative z-10 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="space-y-8 bg-[#111] rounded-2xl p-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>FE Rail & Repair GmbH</p>
              <p>Industriestraße 7</p>
              <p>39126 Magdeburg</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Vertreten durch</h2>
              <p>Etienne Grube</p>
              <p>Geschäftsführer</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>Telefon: +49 391 6628 1440</p>
              <p>E-Mail: info@railandrepair.de</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Registereintrag</h2>
              <p>Eintragung im Handelsregister</p>
              <p>Registergericht: Amtsgericht Magdeburg</p>
              <p>Registernummer: HRB 12345</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
              <p>DE 123 456 789</p>
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

export default Impressum;