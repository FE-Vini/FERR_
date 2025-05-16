import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle as CircleCheck, AlertCircle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const TOTAL_STEPS = 8

interface FormData {
  name: string;
  email: string;
  hasWorkedWithFreightCars: string;
  yearsOfExperience: string;
  previousWork: string;
  experience: string[];
  workPreferences: string[];
  preferredShift: string;
}

const ProgressIndicator = () => {
    const [step, setStep] = useState(1)
    const [isExpanded, setIsExpanded] = useState(true)
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      hasWorkedWithFreightCars: '',
      yearsOfExperience: '',
      previousWork: '',
      experience: [],
      workPreferences: [],
      preferredShift: ''
    })
    const [errors, setErrors] = useState<string[]>([])

    const validateStep = () => {
      const newErrors: string[] = []
      
      // Validate current step
      if (step === 1 && !formData.name) {
        newErrors.push('Bitte geben Sie Ihren Namen ein')
      } else if (step === 2 && !formData.email) {
        newErrors.push('Bitte geben Sie eine gültige E-Mail-Adresse ein')
      } else if (step === 3 && !formData.hasWorkedWithFreightCars) {
        newErrors.push('Bitte wählen Sie eine Option')
      } else if (step === 4 && !formData.yearsOfExperience) {
        newErrors.push('Bitte wählen Sie eine Option')
      } else if (step === 5 && formData.experience.length === 0) {
        newErrors.push('Bitte wählen Sie mindestens eine Option')
      } else if (step === 6 && formData.experience.length === 0) {
        newErrors.push('Bitte wählen Sie mindestens eine Option')
      } else if (step === 8 && !formData.preferredShift) {
        newErrors.push('Bitte wählen Sie eine Option')
      }

      setErrors(newErrors)
      return newErrors.length === 0
    }

    const handleContinue = () => {
        if (!validateStep()) return

        if (step === 8) {
          handleSubmit();
          return;
        }

        if (step < TOTAL_STEPS) {
            setStep(step + 1)
            setIsExpanded(false)
        }
    }

    const handleSubmit = async () => {
      setIsLoading(true);
      setErrors([]);
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            formType: 'initiative'
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to send message');
        }

        setSuccess(true);
      } catch (err) {
        setErrors(['Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.']);
      } finally {
        setIsLoading(false);
      }
    };

    const handleBack = () => {
        setErrors([])
        if (step == 2) {
            setIsExpanded(true)
        }
        if (step > 1) {
            setStep(step - 1)
        }
    }

    const handleInputChange = (
      field: keyof FormData,
      value: string | string[],
      isArray = false
    ) => {
      setFormData(prev => {
        if (isArray && Array.isArray(prev[field])) {
          const array = prev[field] as string[]
          if (field === 'workPreferences') {
            if (array.includes(value as string)) {
              return { ...prev, [field]: array.filter(item => item !== value) }
            } else {
              return { ...prev, [field]: [...array, value] }
            }
          } else {
            // Handle other arrays
            if (array.includes(value as string)) {
              return { ...prev, [field]: array.filter(item => item !== value) }
            }
            return { ...prev, [field]: [...array, value] }
          }
        }
        return { ...prev, [field]: value }
      })
      setErrors([])
    }

    const renderStepContent = () => {
      switch(step) {
        case 1:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Wie ist dein Name? <span className="text-red-500">*</span></h3>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="Vor- und Nachname"
              />
            </div>
          )

        case 2:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Wie lautet deine E-Mail-Adresse? <span className="text-red-500">*</span></h3>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                placeholder="beispiel@email.de"
              />
            </div>
          )

        case 3:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Hast du schon mal mit Güterwagen gearbeitet? <span className="text-red-500">*</span></h3>
              <div className="space-y-2">
                {['Ja', 'Nein'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('hasWorkedWithFreightCars', option)}
                    className={cn(
                      "w-full p-3 text-left rounded-lg border transition-colors",
                      formData.hasWorkedWithFreightCars === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        
        case 4:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Wie viel Berufserfahrung bringst du mit? <span className="text-red-500">*</span></h3>
              <div className="space-y-2">
                {['< 5 Jahre', '5-10 Jahre', '10-20 Jahre', '> 20 Jahre'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('yearsOfExperience', option)}
                    className={cn(
                      "w-full p-3 text-left rounded-lg border transition-colors",
                      formData.yearsOfExperience === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        
        case 5:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">In welchen Bereichen hast du Erfahrung? <span className="text-red-500">*</span></h3>
              <div className="space-y-2">
                {[
                  'Schweißarbeiten',
                  'Bremsprüfungen am Güterwagen',
                  'Reparatur und Instandhaltung',
                  'KFZ-Mechatroniker',
                  'Sonstiges'
                ].map(option => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('experience', option, true)}
                    className={cn(
                      "w-full p-3 text-left rounded-lg border transition-colors",
                      formData.experience.includes(option)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        
        case 6:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">In welcher Branche und als was warst du bereits tätig?</h3>
              <textarea
                value={formData.previousWork}
                onChange={(e) => handleInputChange('previousWork', e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-200 min-h-[100px]"
                placeholder="Beschreibe deine bisherige Tätigkeit..."
              />
            </div>
          )

        case 7:
          return (
            <div className="w-full">
              <h3 className="text-lg font-semibold mb-4">Was ist dir bei der Arbeit wichtig?</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Abwechslungsreiche Tätigkeit',
                  'Kurze Kommunikationswege',
                  'Hilfsbereitschaft',
                  'Zeitgemäße Arbeitsmittel',
                  'Identifizierung mit der Unternehmensphilosophie',
                  'Attraktive Vergütung',
                  'Dienstreisen',
                  'Weiterbildungen'
                ].map(option => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('workPreferences', option, true)}
                    className={cn(
                      "w-full p-3 text-left rounded-lg border transition-colors",
                      formData.workPreferences.includes(option)
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        case 8:
          return (
            <div className="space-y-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Wann arbeitest du am liebsten? <span className="text-red-500">*</span></h3>
              <div className="space-y-2">
                {[
                  'Frühschicht', 
                  'Spätschicht', 
                  'Flexibel'
                ].map(option => (
                  <button
                    key={option}
                    onClick={() => handleInputChange('preferredShift', option)}
                    className={cn(
                      "w-full p-3 text-left rounded-lg border transition-colors",
                      formData.preferredShift === option
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-200"
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
      }
    }

    return (
        <div className="flex flex-col items-center justify-center gap-8 py-4">
            <div className="flex items-center gap-7 relative">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((dot) => (
                    <div
                        key={dot}
                        className={cn(
                            "w-3 h-3 rounded-full relative z-10",
                            dot <= step ? "bg-white" : "bg-gray-300"
                        )}
                    />
                ))}

                {/* Green progress overlay */}
                <motion.div
                    initial={{ width: '0%', height: "32px" }}
                    animate={{
                        width: `${(step / TOTAL_STEPS) * 110}%`,
                        x: -10
                    }}
                    className="absolute left-0 -top-[10px] bg-green-500 rounded-full"
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        mass: 0.8,
                        bounce: 0.25,
                        duration: 0.6
                    }}
                />
            </div>

            {/* Form content */}
            <div className="w-full max-w-2xl overflow-visible">
              {renderStepContent()}
              
              {success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                  Ihre Bewerbung wurde erfolgreich gesendet. Wir werden uns in Kürze bei Ihnen melden.
                </div>
              )}
              
              {errors.length > 0 && (
                <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-5 h-5" />
                    Fehler
                  </div>
                  <ul className="mt-2 ml-7 list-disc text-red-600">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Buttons container */}
            <div className="w-full max-w-sm">
                <motion.div
                    className="flex items-center gap-1"
                    animate={{
                        justifyContent: isExpanded ? 'stretch' : 'space-between'
                    }}
                >
                    {!isExpanded && (
                        <motion.button
                            initial={{ opacity: 0, width: 0, scale: 0.8 }}
                            animate={{ opacity: 1, width: "64px", scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                                mass: 0.8,
                                bounce: 0.25,
                                duration: 0.6,
                                opacity: { duration: 0.2 }
                            }}
                            onClick={handleBack}
                            className="px-4 py-3 text-black flex items-center justify-center bg-gray-100 font-semibold rounded-full hover:bg-gray-50 hover:border transition-colors flex-1 w-16 text-sm"
                        >
                            zurück
                        </motion.button>
                    )}
                    <motion.button
                        onClick={handleContinue}
                        animate={{
                            flex: isExpanded ? 1 : 'inherit',
                        }}
                        className={cn(
                            "px-4 py-3 rounded-full text-white bg-[#006cff] transition-colors flex-1 w-56",
                            !isExpanded && 'w-44'
                        )}
                    >
                        <div className="flex items-center font-[600] justify-center gap-2 text-sm">
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Wird gesendet...
                                </div>
                            ) : step === TOTAL_STEPS && (
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 500,
                                        damping: 15,
                                        mass: 0.5,
                                        bounce: 0.4
                                    }}
                                >
                                    <CircleCheck size={16} />
                                </motion.div>
                            )}
                            {!isLoading && (step === 8 ? 'Abschicken' : 'weiter')}
                        </div>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    )
}

export default ProgressIndicator