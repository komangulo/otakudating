import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Boutique = () => {
  const categories = [
    {
      title: 'Clases',
      description: 'Aprende el arte de la seducción y técnicas fetichistas de nuestros instructores expertos.',
      path: '/boutique/classes'
    },
    {
      title: 'Joyería',
      description: 'Piezas exquisitas diseñadas exclusivamente para miembros e invitados de THESANCTUM.',
      path: '/boutique/jewelry'
    },
    {
      title: 'Accesorios',
      description: 'Accesorios de lujo para complementar tu experiencia THESANCTUM.',
      path: '/boutique/accessories'
    },
    {
      title: 'Membresía',
      description: 'Niveles exclusivos de membresía que ofrecen acceso y privilegios sin igual.',
      path: '/boutique/membership'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="snctm-title text-6xl mb-8 tracking-widest">
            BOUTIQUE
          </h1>
          <p className="snctm-subtitle text-lg mb-12 tracking-widest">
            Lujo Seleccionado y Ofertas Exclusivas
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="snctm-body text-lg leading-relaxed text-center mb-8">
              La Boutique de THE SANCTUM ofrece una selección cuidadosamente curada de artículos de lujo, 
              experiencias exclusivas y oportunidades educativas. Desde joyería personalizada 
              hasta clases íntimas, cada oferta está diseñada para mejorar tu viaje dentro de 
              nuestra sofisticada comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="border-snctm-gray-light hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="snctm-title text-2xl tracking-wide text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="snctm-body text-base leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <Button variant="outline" className="w-full mt-4">
                    Explorar {category.title}
                  </Button>
                  <Button 
                    className="bg-snctm-black hover:bg-snctm-gray-dark text-white px-8 py-2 snctm-nav text-sm tracking-wider"
                  >
                    EXPLORAR
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Divider */}
          <div className="flex justify-center my-12">
            <div className="w-24 h-px bg-snctm-gray-light"></div>
          </div>

          <div className="text-center">
            <p className="snctm-body text-lg leading-relaxed mb-8">
              While visitors may purchase THESANCTUM Jewelry and other select accoutrements 
              in our Boutique, Membership and soirée options are available only to 
              approved applicants.
            </p>
            
            <p className="snctm-body text-sm text-snctm-gray-medium italic">
              All purchases and services are subject to availability and approval. 
              Certain items and experiences are exclusively reserved for THESANCTUM members.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Boutique;