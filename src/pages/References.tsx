import React from 'react';
import { StarBorder } from '@/components/ui/star-border';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Squares } from '@/components/ui/squares';
import { FileText, Image, Download } from 'lucide-react';

const References = () => {
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
          <h1 className="text-4xl font-bold mb-8">Referenzen</h1>
          
          <p className="text-gray-300 mb-8 text-lg">
            Die FE Rail & Repair GmbH arbeitet nach höchsten Sicherheitsstandards und legt großen Wert darauf, die Bedürfnisse und Anforderungen der Kunden zu erfüllen.
          </p>
          
          <div className="space-y-8 bg-[#111] rounded-2xl p-8">
            <div className="grid gap-6">
              {/* ISO Certificate */}
              <div className="bg-black/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900/20 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">ISO 9001:2025 Zertifikat</h3>
                    <p className="text-gray-400 mb-4">Qualitätsmanagement-Zertifizierung</p>
                  </div>
                </div>
              </div>

              {/* VPI-EMG Image */}
              <div className="bg-black/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-900/20 rounded-lg">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-8 flex-1">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">VPI-EMG Bezieher</h3>
                      <p className="text-gray-400 mb-4">Zertifizierung als VPI-EMG Bezieher</p>
                    </div>
                    <img
                      src="/images/VPI-EMG.svg"
                      alt="VPI-EMG Logo"
                      className="h-32 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="relative z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default References;