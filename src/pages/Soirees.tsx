import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Button } from '@/components/ui/button';

const Soirees = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="snctm-title text-6xl mb-4 tracking-widest">
            VELADAS
          </h1>
          <div className="flex justify-center mb-8">
            <img 
              src="/cast.jpg" 
              alt="THE SANCTUM Cast" 
              className="w-64 h-auto rounded-lg"
            />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Masquerade Section */}
          <div className="text-center">
            <h2 className="snctm-title text-3xl mb-8 tracking-wide">
              Mascarada
            </h2>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              En la Mascarada, te adentraras en un mundo de intriga y sensualidad. Los caballeros visten de esmoquin, 
              mientras que las damas visten elegantemente de noche o en lencería. Todos ingresan por seguridad 
              con una máscara. Miembros e invitados vienen a disfrutar de nuestro teatro erótico y a socializar.
            </p>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              Nuestras veladas tienen lugar en California, Nueva York y en la Gira Mundial en ubicaciones 
              clandestinas seguras y privadas. Mientras exploras estos ambientes, descubrirás invitados 
              disfrutando de la compañía mutua. Contamos con salones abiertos para invitados y salones 
              privados exclusivos para miembros Dominus, con champán Crystal servido por nuestro mayordomo.
            </p>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              Damos la bienvenida tanto a voyeristas como a participantes; no hay presión para participar. 
              Cada persona decide cómo desea explorar. Hay reglas importantes que rigen el funcionamiento de 
              nuestra sociedad. Nuestro equipo de seguridad hace cumplir estrictamente la prohibición de 
              fotografía, y THE SANCTUM opera bajo el consentimiento mutuo. Siempre pedimos permiso antes de tocar.
            </p>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              Esta velada de THE SANCTUM está limitada a solo 99 personas y se lleva a cabo de 10 PM a 3 AM.
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center my-12">
            <div className="w-24 h-px bg-snctm-gray-light"></div>
          </div>

          {/* Dîner Section */}
          <div className="text-center">
            <h2 className="snctm-title text-3xl mb-8 tracking-wide">
              Cena
            </h2>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              La Cena ofrece una velada elegante de gastronomía sofisticada y conversación íntima. Esta reunión 
              exclusiva combina una cocina de clase mundial con el ambiente refinado que define a THE SANCTUM.
            </p>
            <p className="snctm-body text-lg leading-relaxed mb-8">
              Nuestro menú cuidadosamente seleccionado presenta platos excepcionales preparados por chefs de 
              renombre, acompañados de los mejores vinos y champanes. La velada brinda a nuestros miembros 
              la oportunidad de conectarse en un ambiente más íntimo antes de que comiencen los festejos nocturnos.
            </p>
            <p className="snctm-body text-lg leading-relaxed mb-24">
              El código de vestimenta es de etiqueta elegante. La cena generalmente comienza a las 8 PM y sirve 
              como el preludio perfecto para nuestras veladas nocturnas.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Soirees;