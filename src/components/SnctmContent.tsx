import React from 'react';
import { Link } from 'react-router-dom';

export const SnctmContent: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-12 pb-24">
      {/* Hero Section with SEO Optimized Headers */}
      <section className="text-center mb-16">
        <h2 className="text-4xl font-bold text-snctm-black mb-4">Encuentra el Amor en el Mundo Otaku</h2>
        <h3 className="text-2xl text-snctm-gray-dark mb-6">La Mejor Experiencia de Citas para Amantes del Anime en Madrid</h3>
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-snctm-black">Otaku Dating en Madrid</h1>
        <h2 className="text-5xl md:text-7xl font-bold mb-6 text-snctm-black leading-tight">
          ¿Buscas a tu Pareja Otaku?
        </h2>
        <h3 className="text-3xl font-semibold text-snctm-gray-dark mb-4">
          Conecta con un Amante del Anime en Madrid
        </h3>
        <h4 className="text-2xl text-snctm-gray-dark mb-6">
          La Mejor Forma de Encontrar una Pareja que Comparta tu Pasión por la Cultura Japonesa
        </h4>
        
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-snctm-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-snctm-gray-dark font-medium">Madrid</span>
        </div>
        
        <h3 className="text-xl md:text-2xl text-snctm-gray-dark mb-8 max-w-3xl mx-auto leading-relaxed">
          ¿Eres una chica otaku en Madrid buscando a alguien que comparta tu pasión por el anime, manga y la cultura japonesa? Podríamos ser el uno para el otro.
        </h3>
        
        <div className="flex justify-center gap-4 mt-12">
          <Link 
            to="/contact" 
            className="bg-snctm-black text-white px-8 py-3 rounded-md hover:bg-snctm-gray-dark transition-colors"
          >
            ¡Encuentra tu Pareja Otaku!
          </Link>
          <Link 
            to="/about" 
            className="border border-snctm-black text-snctm-black px-8 py-3 rounded-md hover:bg-gray-50 transition-colors"
          >
            Conoce Más
          </Link>
        </div>
      </section>

      {/* Main Content with SEO Optimized Sections */}
      <div className="space-y-16 max-w-3xl mx-auto">
        {/* Benefits Section */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-4xl font-bold mb-8 text-center">¿Por Qué Elegir Otaku Dating?</h2>
          <h3 className="text-2xl font-semibold mb-4 text-center text-snctm-black">La Mejor Forma de Conocer a Otro Otaku en Madrid</h3>
          <h4 className="text-xl text-center text-snctm-gray-dark mb-8">Encuentra a Alguien que Realmente Te Entienda</h4>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-snctm-black">Mi Historia con el Mundo Otaku</h3>
              <h4 className="text-xl font-medium mb-2 text-snctm-gray-dark">Una Pasión que Quiero Compartir Contigo</h4>
              <h5 className="text-lg font-medium mb-4 text-snctm-gray-600">Descubre el Verdadero Significado de las Citas Otaku</h5>
              <p className="text-lg leading-relaxed">
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">E</span>n un mundo donde las conexiones reales parecen cada vez más difíciles de encontrar, el amor por el anime y el manga puede ser el puente perfecto para conectar almas afines. Como un apasionado del mundo otaku, busco a alguien con quien compartir esta pasión y crear una relación única llena de momentos inolvidables.
              </p>
            </div>
            
            <blockquote className="italic text-gray-700 border-l-4 border-snctm-black pl-4 py-2 my-4">
              "En el anime como en la vida, las mejores historias son aquellas que se viven con pasión. Busco a mi compañera de aventuras para escribir nuestro propio romance shoujo o nuestro épico shonen juntos."
            </blockquote>
            
            <div>
              <h4 className="text-xl font-semibold mb-2">Lo que Ofrezco en una Relación Otaku</h4>
              <h5 className="text-lg font-medium mb-2 text-snctm-gray-dark">La Mejor Experiencia de Citas para Amantes del Anime</h5>
              <p className="text-lg leading-relaxed">
                Mi amor por la cultura otaku es lo que me define, y deseo compartirlo con alguien que entienda la emoción de esperar el próximo capítulo de tu anime favorito, la alegría de encontrar figuras coleccionables raras, y la magia de asistir a convenciones de anime. Juntos podemos crear nuestra propia historia de amor digna de los mejores animes románticos.
              </p>
            </div>
          </div>
        </section>

        {/* How I Can Help You */}
        <section className="bg-white p-8 rounded-lg shadow-sm mt-16">
          <h2 className="text-4xl font-bold mb-6 text-center">Beneficios de Otaku Dating</h2>
          <h3 className="text-2xl font-semibold mb-4 text-center text-snctm-black">Por Qué Elegir una Cita con un Verdadero Otaku</h3>
          <p className="text-lg text-center text-snctm-gray-dark mb-8">Conecta con otro apasionado del anime, manga y la cultura japonesa. Encuentra a alguien que comparta tu amor por este increíble mundo</p>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">S</span>i estás buscando una relación con alguien que comparta tu pasión por el anime, el manga y la cultura japonesa, has llegado al lugar correcto. Como un verdadero otaku, ofrezco una relación llena de diversión, aventuras y momentos inolvidables compartiendo nuestras series y películas favoritas.
            </p>
            
            <p>
              No importa si eres nuevo en el mundo del anime o un veterano con años de experiencia, lo importante es que compartamos esta pasión. Juntos podemos asistir a convenciones, hacer cosplay, coleccionar figuras y vivir mil aventuras como en nuestras historias favoritas.
            </p>
            
            <div className="bg-snctm-black/5 p-6 rounded-lg mt-8">
              <h3 className="text-2xl font-bold mb-4 text-snctm-black">¿Lista para una Aventura Otaku Juntos?</h3>
              <h4 className="text-xl font-medium mb-3 text-snctm-gray-dark">Descubre el Mundo de las Citas Otaku en Madrid</h4>
              <h5 className="text-lg font-medium mb-4 text-snctm-gray-600">La Mejor Forma de Conocer a Otros Amantes del Anime</h5>
              <p className="mb-6">
                Si buscas a alguien que entienda tu pasión por el anime y la cultura japonesa, estoy aquí. Cuéntame sobre ti y tus series favoritas, y veamos si podemos crear nuestra propia historia juntos.
              </p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-snctm-black text-white px-8 py-3 rounded-md hover:bg-snctm-gray-dark transition-colors text-lg font-semibold"
                >
                  Escríbeme Ahora
                </Link>
            </div>
            
            <div className="text-center mt-8">
              <blockquote className="text-sm text-gray-500 italic">
                "En el mundo del anime, como en la vida real, las mejores historias son aquellas que se viven con pasión y autenticidad. Encuentra a alguien con quien compartir tus sueños y haz que cada día sea una nueva aventura."
              </blockquote>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-4xl font-bold mb-6 text-center">Preguntas Frecuentes sobre Citas Otaku</h2>
          <h3 className="text-2xl font-semibold text-center text-snctm-black mb-4">Todo lo que Necesitas Saber sobre las Citas entre Otakus</h3>
          <h4 className="text-xl text-center text-snctm-gray-dark mb-8">Encuentra Respuestas a tus Preguntas sobre el Amor en el Mundo Otaku</h4>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Qué hace diferente a Otaku Dating de otras formas de conocer gente?</h3>
              <p className="text-gray-700">Porque creo que las mejores relaciones nacen de intereses compartidos. Como un verdadero amante del anime y la cultura japonesa, busco a alguien con quien compartir esta pasión y crear algo especial juntos.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Por qué elegir una cita con un verdadero otaku?</h3>
              <p className="text-gray-700">Estoy buscando una relación seria con una mujer que comparta mi pasión por el anime y la cultura japonesa. Alguien con quien pueda ver series, ir a convenciones y compartir esta parte tan importante de mi vida.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">¿Cuáles son mis animes favoritos?</h4>
              <p className="text-gray-700">Disfruto de una amplia variedad de géneros, desde los clásicos como "Death Note" y "Fullmetal Alchemist: Brotherhood" hasta los más recientes. Me encantaría compartir recomendaciones y descubrir nuevas series juntos.</p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <div className="text-center py-16 bg-gradient-to-r from-snctm-black to-snctm-gray-dark text-white rounded-lg p-8 shadow-xl">
          <h2 className="text-4xl font-bold mb-4">¿Lista para el Mejor Otaku Dating de Madrid?</h2>
          <h3 className="text-2xl font-semibold text-white mb-4">La Mejor Experiencia de Citas para Amantes del Anime</h3>
          <h4 className="text-xl text-gray-200 mb-2">Conecta con Alguien que Realmente Te Entienda</h4>
          <h5 className="text-lg text-gray-300 mb-8">Únete a la Mejor Comunidad de Citas Otaku de la Ciudad</h5>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Si buscas una experiencia de citas diferente, donde puedas conectar con alguien que comparta tu pasión por el anime y la cultura japonesa, has llegado al lugar correcto. En Otaku Dating, encontrarás la mejor forma de conocer a otros amantes del anime en Madrid y quizás, el comienzo de una gran historia de amor.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link 
              to="/contact" 
              className="bg-white text-snctm-black px-10 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              ¡Comienza tu Aventura Otaku!
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-10 py-4 rounded-md hover:bg-white hover:bg-opacity-10 transition-colors text-lg"
            >
              Cuéntame Más
            </Link>
          </div>
          
          <p className="text-sm text-gray-300 mt-6 max-w-md mx-auto">
            Da el primer paso hacia una relación bendecida. Conéctate con un hombre que comparte tu fe y valores, y juntos construyan un futuro en Cristo.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-24 h-px bg-snctm-gray-light"></div>
        </div>

        {/* SEO Keywords Section - Hidden from view but helps with SEO */}
        <div className="hidden">
          <p>otaku dating madrid, citas otaku madrid, conocer otakus madrid, pareja otaku, chica otaku madrid, 
          aficionado anime madrid, manga madrid, cultura japonesa madrid, citas anime, relación otaku, 
          amor por el anime, fan anime madrid, convenciones anime madrid, tiendas manga madrid, 
          quedadas otaku madrid, eventos anime madrid, citas con otakus, conocer chicas otaku, 
          chico otaku madrid, aficionados anime madrid, club anime madrid, foro otaku madrid, 
          comunidad otaku madrid, salir con otakus, citas entre otakus, pareja de otakus, 
          relación anime, amor por el manga, citas entre aficionados anime, conocer gente otaku, 
          quedadas anime madrid, eventos manga madrid, tiendas anime madrid, restaurantes japoneses madrid, 
          cultura otaku madrid, amantes del anime, fanáticos del manga, citas para otakus, 
          conocer chicos otaku, chica busca chico otaku, chico busca chica otaku, citas para aficionados anime, 
          pareja que comparta aficiones, relación basada en intereses comunes, amor por la cultura japonesa, 
          citas para amantes del anime, conocer gente con mis gustos, pareja que le guste el anime, 
          chica que le guste el anime, chico que le guste el anime, citas para fans del manga, 
          relación con aficiones en común, pareja con gustos similares, citas para amantes de japón, 
          conocer aficionados anime madrid, quedadas para otakus madrid, eventos para fans del anime, 
          citas para amantes del manga, relación con pasiones compartidas, pareja que comparta gustos, 
          citas para fans de la cultura japonesa, conocer gente con mis mismos intereses, 
          pareja que le guste el manga, chica que le guste el manga, chico que le guste el manga, 
          citas para fans de anime y manga, relación con intereses en común, pareja con aficiones similares, 
          citas para amantes de la animación japonesa, conocer aficionados manga madrid, 
          quedadas para fans del anime madrid, eventos para otakus madrid, citas para amantes del cosplay, 
          relación con gustos afines, pareja que comparta aficiones otaku, citas para fans de la cultura otaku, 
          conocer gente con mis mismas aficiones, pareja que le guste el cosplay, chica que le guste el cosplay, 
          chico que le guste el cosplay, citas para fans de series anime, relación con intereses compartidos, 
          pareja con gustos por la cultura japonesa, citas para amantes de la animación, 
          conocer aficionados al cosplay madrid, quedadas para fans del manga madrid, 
          eventos para amantes de japón madrid, citas para amantes de la cultura pop japonesa, 
          relación con aficiones por el anime, pareja que comparta gustos por el manga, 
          citas para fans de la música japonesa, conocer gente con mis mismos gustos, 
          pareja que le guste la cultura japonesa, chica que le guste la cultura japonesa, 
          chico que le guste la cultura japonesa, citas para fans de la gastronomía japonesa, 
          relación con intereses por la cultura asiática, pareja con gustos por la animación, 
          citas para amantes de la moda japonesa, conocer aficionados a la cultura japonesa madrid, 
          quedadas para amantes del anime y manga madrid, eventos para fans de la cultura pop japonesa madrid, 
          citas para amantes de la historia japonesa, relación con aficiones por la cultura nipona, 
          pareja que comparta gustos por el anime, citas para fans de la literatura japonesa, 
          conocer gente con mis mismas pasiones, pareja que le guste la moda japonesa, 
          chica que le guste la moda japonesa, chico que le guste la moda japonesa, 
          citas para fans de la tecnología japonesa, relación con intereses por la moda asiática, 
          pareja con gustos por la cocina japonesa, citas para amantes de los videojuegos japoneses, 
          conocer aficionados a la cocina japonesa madrid, quedadas para amantes de la moda japonesa madrid, 
          eventos para fans de los videojuegos japoneses madrid, citas para amantes del arte japonés, 
          relación con aficiones por la música japonesa, pareja que comparta gustos por los videojuegos, 
          citas para fans de la animación coreana, conocer gente con mis mismas aficiones culturales, 
          pareja que le guste el arte japonés, chica que le guste el arte japonés, 
          chico que le guste el arte japonés, citas para fans de la música coreana, 
          relación con intereses por la cultura coreana, pareja con gustos por el k-pop, 
          citas para amantes del cine coreano, conocer aficionados al k-pop madrid, 
          quedadas para fans del cine coreano madrid, eventos para amantes de la cultura coreana madrid, 
          citas para amantes de la moda coreana, relación con aficiones por el k-drama, 
          pareja que comparta gustos por la cultura coreana, citas para fans de la gastronomía coreana, 
          conocer gente con mis mismos gustos culturales, pareja que le guste el k-pop, 
          chica que le guste el k-pop, chico que le guste el k-pop, citas para fans del k-drama, 
          relación con intereses por la moda coreana, pareja con gustos por la cocina coreana, 
          citas para amantes de la música asiática, conocer aficionados a la cultura coreana madrid, 
          quedadas para fans del k-pop madrid, eventos para amantes de la música asiática madrid, 
          citas para amantes de la cultura pop asiática, relación con aficiones por la cultura pop asiática, 
          pareja que comparta gustos por la música asiática, citas para fans de la moda asiática, 
          conocer gente con mis mismos intereses culturales, pareja que le guste la cultura pop asiática, 
          chica que le guste la cultura pop asiática, chico que le guste la cultura pop asiática, 
          citas para fans de la música pop asiática, relación con intereses por la moda asiática, 
          pareja con gustos por la cultura pop coreana, citas para amantes de la moda callejera asiática, 
          conocer aficionados a la moda asiática madrid, quedadas para fans de la cultura pop coreana madrid, 
          eventos para amantes de la moda callejera asiática madrid, citas para amantes de la belleza coreana, 
          relación con aficiones por el skincare coreano, pareja que comparta gustos por el maquillaje coreano, 
          citas para fans de los productos de belleza coreanos, conocer gente con mis mismos intereses de belleza, 
          pareja que le guste el skincare coreano, chica que le guste el skincare coreano, 
          chico que le guste el skincare coreano, citas para fans del maquillaje coreano, 
          relación con intereses por los productos de belleza coreanos, pareja con gustos por el cuidado de la piel, 
          citas para amantes de la rutina de belleza coreana, conocer aficionados al skincare coreano madrid, 
          quedadas para fans del maquillaje coreano madrid, eventos para amantes de los productos de belleza coreanos madrid, 
          citas para amantes de la moda y belleza coreana, relación con aficiones por la moda coreana, 
          pareja que comparta gustos por la moda y belleza coreana, citas para fans de la moda y belleza coreana, 
          conocer gente con mis mismos intereses de moda y belleza, pareja que le guste la moda coreana, 
          chica que le guste la moda coreana, chico que le guste la moda coreana, 
          citas para fans de la moda y belleza coreana, relación con intereses por la moda coreana, 
          pareja con gustos por la moda y belleza coreana, citas para amantes de la moda y belleza coreana.</p>
        </div>

        {/* Divider */}
        <div className="flex justify-center my-12">
          <div className="w-24 h-px bg-snctm-gray-light"></div>
        </div>

      </div>
    </main>
  );
};