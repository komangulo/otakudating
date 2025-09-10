import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="snctm-title text-6xl mb-4 tracking-widest">
            CONTACTA CON OTACU DATING
          </h1>
          <h2 className="snctm-subtitle text-2xl mb-2 tracking-widest">
            Conecta con Otakus en Madrid
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-snctm-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-snctm-gray-dark font-medium">Madrid</span>
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes sobre Otaku Dating</h2>
            <p className="snctm-body text-lg leading-relaxed text-center mb-8">
              Ey, hola pequeña. Si estás buscando a alguien con quien compartir tu pasión por el anime, el manga, los viajes, animales y la cultura japonesa, has llegado al lugar indicado. Como un otaku de corazón, entiendo lo especial que es encontrar a alguien que comparta estos intereses y además te entienda, comprenda y te dé la protección sentimental y emocional que necesitas.
              <br/><br/>
              ¿Te gustaría charlar sobre tus animes favoritos? ¿O quizás intercambiar recomendaciones de manga? Tal vez buscas a alguien con quien asistir a viajes o simplemente compartir momentos viendo anime juntos.
              <br/><br/>
              No importa si eres nueva en el mundo otaku o una veterana, lo importante es la pasión que compartimos. ¡Déjame un mensaje y empecemos esta aventura juntos! Prometo responder con la misma pasión con la que sigo mis animes favoritos.
            </p>
          </div>

          <form 
            action="https://formspree.io/f/myzprjyp"
            method="POST"
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="snctm-nav block mb-3 text-sm">
                  Nombre *
                </label>
                <Input 
                  name="name" 
                  required 
                  className="border-snctm-gray-light focus:border-snctm-black"
                  placeholder="¿Cómo te gusta que te llame?"
                />
              </div>
              <div>
                <label className="snctm-nav block mb-3 text-sm">
                  Apellido *
                </label>
                <Input 
                  name="surname" 
                  required 
                  className="border-snctm-gray-light focus:border-snctm-black"
                  placeholder="Tu apellido"
                />
              </div>
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Correo electrónico *
              </label>
                <Input 
                type="tel"
                name="phone" 
                required 
                className="border-snctm-gray-light focus:border-snctm-black" 
                placeholder="+34 123 456 789"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Redes Sociales y teléfono
              </label>
              <Input 
                type="text" 
                name="social_media"
                className="border-snctm-gray-light focus:border-snctm-black" 
                placeholder="@usuario"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Asunto *
              </label>
              <Input 
                name="subject" 
                required 
                className="border-snctm-gray-light focus:border-snctm-black"
                placeholder="¿En qué puedo ayudarte?"
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
                Mensaje *
              </label>
              <Textarea 
                name="message" 
                required 
                rows={5}
                className="border-snctm-gray-light focus:border-snctm-black"
                placeholder="Cuéntame más sobre lo que necesitas..."
              />
            </div>

            <div>
              <label className="snctm-nav block mb-3 text-sm">
Mensaje *
              </label>
              <Textarea 
                name="message"
                required
                className="border-snctm-gray-light focus:border-snctm-black min-h-[150px]"
                placeholder="Por favor comparta su consulta o mensaje..."
              />
            </div>

            <div className="text-center pt-8">
              <button 
                type="submit"
                className="w-full max-w-xs mx-auto bg-black text-white px-12 py-3 rounded-md text-sm font-bold tracking-wider hover:bg-gray-900 transition-colors shadow-[0_0_8px_rgba(255,255,255,0.3)]"
              >
                ENVIAR MENSAJE
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-snctm-black">Únete a Nuestra Comunidad Otaku en Madrid</h3>
            <p className="snctm-body text-sm text-snctm-gray-medium leading-relaxed">
              Para asuntos urgentes o consultas sobre membresías, también puede contactarnos a través de 
              nuestro portal privado para miembros. Todas las comunicaciones son tratadas con la máxima 
              confidencialidad y discreción.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;