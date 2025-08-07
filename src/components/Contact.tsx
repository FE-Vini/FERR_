import React from 'react';
import { Mail, Phone, MapPin, User, Loader2 } from 'lucide-react';
import { StarBorder } from './ui/star-border';

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError('Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden pt-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Kontakt
        </h2>
        
        {/* Contact Information */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/95 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/10 rounded-full">
                  <Phone className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <a 
                    href="tel:+4939172737396" 
                    className="text-blue-900 hover:text-blue-700 transition-colors duration-200"
                  >
                    0391 72 73 73 96
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/10 rounded-full">
                  <Mail className="w-6 h-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">E-Mail</h3>
                  <a 
                    href="mailto:michael.knorr@railandrepair.de" 
                    className="text-blue-900 hover:text-blue-700 transition-colors duration-200"
                  >
                    michael.knorr@railandrepair.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white/95 rounded-2xl p-8 backdrop-blur-sm relative">
          {success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
            </div>
          )}
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              ></textarea>
            </div>
            <StarBorder
              as="button"
              type="submit"
              disabled={isLoading}
              color="white"
              className="w-full"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Wird gesendet...
                </div>
              ) : (
                <span>Nachricht senden</span>
              )}
            </StarBorder>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;