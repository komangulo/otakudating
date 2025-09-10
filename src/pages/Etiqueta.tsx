import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';

const Etiqueta = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-6xl mx-auto px-8">
        <h1 className="snctm-title text-6xl text-center mb-12 tracking-widest">
          ETIQUETA
        </h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image on the left */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <img 
              src="/etiquette.jpg" 
              alt="Código de etiqueta" 
              className="w-full h-auto rounded-lg"
            />
          </div>
          
          {/* Text content */}
          <div className="flex-1 max-w-2xl mx-auto">
            <div className="text-justify">
              <p className="snctm-body text-lg leading-relaxed mb-6">
                <span className="float-left text-6xl snctm-title leading-none mr-3 mt-1">L</span>
                a regla de oro en Snctm es la consensualidad, siempre preguntamos antes de tocar. Cualquiera que viole esto será expulsado por seguridad y expulsado del club de por vida. ¡No hay segundas oportunidades! Para preservar un entorno seguro para la exploración personal, se solicita a todos los miembros e invitados que se comporten con decoro y traten a todos con dignidad y respeto.
              </p>
              
              <p className="snctm-body text-lg leading-relaxed mb-6">
                En Masquerade & Dîner todos los caballeros deben llevar un esmoquin adecuado con pajarita. Las damas deberán vestirse elegantemente con ropa de noche o lencería. Tenemos una revisión de abrigo y vestido. Las mascarillas son obligatorias al entrar, pero una vez dentro puedes quitarlas si lo deseas.
              </p>
              
              <p className="snctm-body text-lg leading-relaxed mb-6">
                En Pool Party, los caballeros deben usar pantalones cortos, mientras que las damas usan bikinis o ropa opcional.
              </p>
              
              <p className="snctm-body text-lg leading-relaxed mb-6">
                Para fomentar la libertad de expresión y proteger la privacidad de todos, la fotografía de cualquier tipo está estrictamente prohibida y es motivo de eliminación inmediata. No hay reembolsos.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Etiqueta;
