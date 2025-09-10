import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

type FormData = {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  location: string;
  occupation: string;
  
  // Emotional Profile
  emotionalNeeds: string;
  healingJourney: string;
  therapyExperience: string;
  supportGroupExperience: string;
  
  // About You & Ideal Partner
  aboutYou: string;
  idealPartner: string;
  relationshipGoals: string;
  communicationStyle: string;
  
  // Reference
  referenceName: string;
  referenceContact: string;
  howFound: string;
  additionalComments: string;
  
  // Terms
  agreeToTerms: boolean;
  
  // Photos
  photos: File[];
  
  // Add any missing fields that might be referenced in the form
  attendedBefore?: string;
  fantasyDescription?: string;
  excitementDescription?: string;
  eroticTrait?: string;
  communityContribution?: string;
  otherAffiliations?: string;
  memberReferences?: string;
};

const ApplicationForm = () => {
  const cities = [
    'Los Ángeles',
    'Nueva York',
    'Miami',
    'Madrid',
    'Barcelona',
    'París',
    'Londres',
    'Berlín',
    'Roma',
    'Ibiza'
  ];

  // Initialize form state with proper type
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    location: '',
    occupation: '',
    emotionalNeeds: '',
    healingJourney: '',
    therapyExperience: '',
    supportGroupExperience: '',
    aboutYou: '',
    idealPartner: '',
    relationshipGoals: '',
    communicationStyle: '',
    referenceName: '',
    referenceContact: '',
    howFound: '',
    additionalComments: '',
    agreeToTerms: false,
    photos: [],
    // Initialize any additional fields
    attendedBefore: '',
    fantasyDescription: '',
    excitementDescription: '',
    eroticTrait: '',
    communityContribution: '',
    otherAffiliations: '',
    memberReferences: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...files]
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data for submission
      const submissionData = new FormData();
      
      // Add all form fields to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'photos') {
          // Handle file uploads separately
          (value as File[]).forEach((file, index) => {
            submissionData.append(`photo_${index}`, file);
          });
        } else if (value !== null && value !== undefined) {
          submissionData.append(key, value.toString());
        }
      });
      
      console.log('Form submission data:', Object.fromEntries(submissionData.entries()));
      
      // Here you would typically make an API call to submit the form
      // Example:
      // const response = await fetch('/api/submit-application', {
      //   method: 'POST',
      //   body: submissionData,
      //   // Don't set Content-Type header when sending FormData
      //   // The browser will set it automatically with the correct boundary
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to submit application');
      // }
      
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        gender: '',
        location: '',
        occupation: '',
        emotionalNeeds: '',
        healingJourney: '',
        therapyExperience: '',
        supportGroupExperience: '',
        aboutYou: '',
        idealPartner: '',
        relationshipGoals: '',
        communicationStyle: '',
        referenceName: '',
        referenceContact: '',
        howFound: '',
        additionalComments: '',
        agreeToTerms: false,
        photos: [],
        attendedBefore: '',
        fantasyDescription: '',
        excitementDescription: '',
        eroticTrait: '',
        communityContribution: '',
        otherAffiliations: '',
        memberReferences: ''
      });
      
      alert('¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox' && 'checked' in e.target) {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file' && 'files' in e.target) {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...files]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 mt-12 max-w-4xl mx-auto px-4" encType="multipart/form-data">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-snctm-black mb-4">Solicitud de Membresía</h1>
        <p className="text-snctm-gray-dark">
          Completa este formulario para unirte a nuestra comunidad de apoyo y conexión emocional.
        </p>
      </div>
      
      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">Información Personal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Nombre *
            </label>
            <Input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Apellido *
            </label>
            <Input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="Tu apellido"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Correo electrónico *
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Teléfono *
            </label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="+34 600 000 000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Fecha de nacimiento *
            </label>
            <Input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Género *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              required
              className="w-full border border-snctm-gray-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-snctm-black focus:border-snctm-black"
            >
              <option value="">Selecciona una opción</option>
              <option value="female">Mujer</option>
              <option value="male">Hombre</option>
              <option value="non-binary">No binario</option>
              <option value="other">Otro</option>
              <option value="prefer-not-to-say">Prefiero no decirlo</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Ciudad de residencia *
            </label>
            <Input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="Tu ciudad"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Ocupación *
            </label>
            <Input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="Tu profesión o área de trabajo"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Estado civil *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Soltero/a', 'En una relación', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Prefiero no decirlo'].map(status => (
                <label key={status} className="flex items-center">
                  <input
                    type="radio"
                    name="relationshipStatus"
                    value={status.toLowerCase().replace(/[^a-z]/g, '-')}
                    checked={formData.relationshipStatus === status.toLowerCase().replace(/[^a-z]/g, '-')}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-snctm-black focus:ring-snctm-black border-snctm-gray-light"
                    required
                  />
                  <span className="ml-2 text-sm text-snctm-gray-dark">{status}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emotional Profile */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">Perfil Emocional</h2>
        <p className="text-snctm-gray-dark mb-6">
          Esta información nos ayudará a conocerte mejor y a crear conexiones significativas.
        </p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              ¿Cuáles son tus principales necesidades emocionales en este momento? *
            </label>
            <Textarea
              name="emotionalNeeds"
              value={formData.emotionalNeeds}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[100px]"
              placeholder="Ej: Necesito sentirme comprendida, apoyo para superar la ausencia de mi padre, etc."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Cuéntanos sobre tu viaje de sanación hasta ahora *
            </label>
            <Textarea
              name="healingJourney"
              value={formData.healingJourney}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[100px]"
              placeholder="¿Qué has hecho para trabajar en tu sanación emocional?"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              ¿Qué buscas en una relación o conexión significativa? *
            </label>
            <Textarea
              name="relationshipGoals"
              value={formData.relationshipGoals}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[100px]"
              placeholder="Describe el tipo de conexión que estás buscando"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Estilo de comunicación preferido *
            </label>
            <select
              name="communicationStyle"
              value={formData.communicationStyle}
              onChange={handleInputChange}
              required
              className="w-full border border-snctm-gray-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-snctm-black focus:border-snctm-black"
            >
              <option value="">Selecciona tu estilo de comunicación</option>
              <option value="direct">Directo y claro</option>
              <option value="empathetic">Empático y comprensivo</option>
              <option value="analytical">Analítico y lógico</option>
              <option value="intuitive">Intuitivo y sensible</option>
              <option value="other">Otro</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* About You and Ideal Partner */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">Sobre ti y lo que buscas</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Cuéntanos sobre ti *
            </label>
            <Textarea
              name="aboutYou"
              value={formData.aboutYou}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[120px]"
              placeholder="Tus intereses, personalidad, valores, etc."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Describe a tu pareja ideal *
            </label>
            <Textarea
              name="idealPartner"
              value={formData.idealPartner}
              onChange={handleInputChange}
              required
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[120px]"
              placeholder="Qué cualidades valoras en una pareja o conexión"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
                Experiencia previa en terapia (opcional)
              </label>
              <Textarea
                name="therapyExperience"
                value={formData.therapyExperience || ''}
                onChange={handleInputChange}
                className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[80px]"
                placeholder="¿Has asistido a terapia antes? ¿Qué tipo?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
                Experiencia en grupos de apoyo (opcional)
              </label>
              <Textarea
                name="supportGroupExperience"
                value={formData.supportGroupExperience || ''}
                onChange={handleInputChange}
                className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[80px]"
                placeholder="¿Has participado en grupos de apoyo o comunidades similares?"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reference Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">Referencia (opcional)</h2>
        <p className="text-snctm-gray-dark mb-6">
          Si alguien te recomendó unirte a nuestra comunidad, por favor comparte su nombre y contacto.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Nombre de la persona que te refirió
            </label>
            <Input
              type="text"
              name="referenceName"
              value={formData.referenceName || ''}
              onChange={handleInputChange}
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="Nombre completo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Correo electrónico o teléfono de contacto
            </label>
            <Input
              type="text"
              name="referenceContact"
              value={formData.referenceContact || ''}
              onChange={handleInputChange}
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black"
              placeholder="correo@ejemplo.com o +34 600 000 000"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              ¿Cómo nos encontraste? *
            </label>
            <select
              name="howFound"
              value={formData.howFound}
              onChange={handleInputChange}
              required
              className="w-full border border-snctm-gray-light rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-snctm-black focus:border-snctm-black"
            >
              <option value="">Selecciona una opción</option>
              <option value="search">Búsqueda en internet</option>
              <option value="social">Redes sociales</option>
              <option value="friend">Recomendación de un amigo</option>
              <option value="event">Evento o taller</option>
              <option value="other">Otro</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-snctm-gray-dark mb-2">
              Comentarios adicionales (opcional)
            </label>
            <Textarea
              name="additionalComments"
              value={formData.additionalComments}
              onChange={handleInputChange}
              className="border-snctm-gray-light focus:border-snctm-black focus:ring-1 focus:ring-snctm-black min-h-[100px]"
              placeholder="¿Hay algo más que nos quieras contar?"
            />
          </div>
        </div>
      </div>

      {/* Photo Upload */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">
          Foto de perfil (opcional)
        </h2>
        <p className="text-snctm-gray-dark mb-6">
          Sube una foto que te represente. No es obligatorio, pero ayuda a la comunidad a conocerte mejor.
        </p>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="mt-1 text-sm text-gray-600">
              <button
                type="button"
                className="font-medium text-snctm-black hover:text-snctm-gray-dark focus:outline-none focus:underline transition duration-150 ease-in-out"
              >
                Sube una foto
              </button>{' '}
              o arrástrala aquí
            </p>
            <p className="mt-1 text-xs text-gray-500">
              PNG, JPG, GIF hasta 4MB
            </p>
          </div>
          <input
            id="photo-upload"
            name="photos"
            type="file"
            className="sr-only"
            accept="image/*"
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold text-snctm-black mb-6 pb-2 border-b border-gray-100">
          Términos y condiciones
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="flex items-center h-5 mt-0.5">
              <input
                id="terms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  setFormData({ ...formData, agreeToTerms: e.target.checked })
                }
                className="focus:ring-snctm-black h-4 w-4 text-snctm-black border-snctm-gray-light rounded"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-3 text-sm text-snctm-gray-dark">
              He leído y acepto los{' '}
              <a href="/terminos" className="text-snctm-black hover:underline font-medium">
                Términos y Condiciones
              </a>{' '}
              y la{' '}
              <a href="/privacidad" className="text-snctm-black hover:underline font-medium">
                Política de Privacidad
              </a>{' '}
              de Sanctum Emocional. *
            </label>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-snctm-gray-dark mb-3">
              La privacidad y seguridad de nuestros miembros es de suma importancia. Al unirte a nuestra comunidad, aceptas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-snctm-gray-dark">
              <li>Mantener la confidencialidad de la información compartida por otros miembros.</li>
              <li>Tratar a todos los miembros con respeto y empatía.</li>
              <li>No compartir contenido sensible o información personal de otros sin su consentimiento.</li>
              <li>Seguir nuestras pautas de comunidad en todas las interacciones.</li>
            </ul>
          </div>
          
          <p className="text-xs text-snctm-gray-dark">
            Al enviar este formulario, aceptas que nos pongamos en contacto contigo por correo electrónico o teléfono para informarte sobre tu solicitud y otros servicios que puedan ser de tu interés. Puedes darte de baja en cualquier momento.
          </p>
          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-snctm-black hover:bg-snctm-gray-dark text-white py-3 px-4 rounded-md font-medium text-sm uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-snctm-black transition duration-150 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </Button>
            
            <p className="mt-3 text-center text-xs text-snctm-gray-dark">
              Nos pondremos en contacto contigo en un plazo máximo de 48 horas.
            </p>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="border-t border-gray-200 pt-8 text-center">
        <Button
          type="submit"
          className="bg-snctm-black hover:bg-snctm-gray-dark !text-white px-12 py-3 snctm-nav text-sm tracking-wider"
        >
          ENVIAR SOLICITUD
        </Button>
      </div>
    </form>
  );
};

export default ApplicationForm;
