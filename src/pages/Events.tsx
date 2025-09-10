import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  const events = [
    {
      date: '6 de Septiembre, 2025',
      location: 'Los Ángeles',
      title: 'Mascarada de Los Ángeles',
      description: 'Permítenos guiarte en un viaje sensual de descubrimiento erótico. En THESANCTUM, tu placer es nuestra prioridad.',
      price: '$500 – $9000',
    },
    {
      date: '20 de Septiembre, 2025',
      location: 'Nueva York',
      title: 'Mascarada de NYC',
      description: 'Permítenos guiarte en un viaje sensual de descubrimiento erótico. En THESANCTUM, tu placer es nuestra prioridad.',
      price: '$500 – $9000',
    },
    {
      date: '4 de Octubre, 2025',
      location: 'Miami',
      title: 'Mascarada de Miami',
      description: 'Permítenos guiarte en un viaje sensual de descubrimiento erótico. En THESANCTUM, tu placer es nuestra prioridad.',
      price: '$500 – $9000',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="snctm-title text-6xl mb-8 tracking-widest">
            EVENTOS
          </h1>
          <p className="snctm-subtitle text-lg mb-12 tracking-widest">
            Próximas Soirées
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {events.map((event, index) => (
            <Card key={index} className="border-snctm-gray-light">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="snctm-title text-2xl mb-2 tracking-wide">
                      {event.title}
                    </CardTitle>
                    <p className="snctm-nav text-sm text-snctm-gray-medium">
                      {event.date} • {event.location}
                    </p>
                  </div>
                  <p className="snctm-nav text-sm font-medium">
                    {event.price}
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="snctm-body text-base leading-relaxed mb-6">
                  {event.description}
                </p>
                <Button 
                  className="bg-snctm-black hover:bg-snctm-gray-dark text-white px-8 py-2 snctm-nav text-sm tracking-wider"
                >
                  CONFIRMAR ASISTENCIA
                </Button>
                <Button variant="outline" className="w-full mt-4">
                  Ver Detalles
                </Button>
              </CardContent>
            </Card>
          ))}

          {/* Calendar Subscription */}
          <div className="text-center mt-16">
            <p className="snctm-body text-lg mb-8">
              ¿Interesado en organizar un evento privado con THE SANCTUM? Contáctenos para planificación de eventos personalizados.
            </p>
            <Button variant="outline" className="px-8">
              Contactar al Equipo de Eventos
            </Button>
          </div>
          <div className="text-center mt-8 space-x-4">
            <Button 
              variant="outline"
              className="border-snctm-gray-light hover:bg-snctm-gray-light snctm-nav text-sm"
            >
              iCalendar
            </Button>
            <Button 
              variant="outline"
              className="border-snctm-gray-light hover:bg-snctm-gray-light snctm-nav text-sm"
            >
              Outlook 365
            </Button>
            <Button 
              variant="outline"
              className="border-snctm-gray-light hover:bg-snctm-gray-light snctm-nav text-sm"
            >
              Outlook Live
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;