import React from 'react';
import { SnctmHeader } from '@/components/SnctmHeader';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SnctmHeader />
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col items-center mb-4">
          <div className="text-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-snctm-black">
              Otaku Dating
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-snctm-black">
              Encuentra tu Pareja Otaku Ideal
            </h2>
            <p className="text-xl text-snctm-gray-dark mb-2 max-w-2xl mx-auto">
              Conecta con otros apasionados del anime, manga y la cultura japonesa. Encuentra a alguien que comparta tu amor por este increíble mundo
            </p>
            <div className="flex items-center justify-center gap-2 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-snctm-gray-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-snctm-gray-dark font-medium">Comunidad Global de Otakus</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Mi Pasión por el Mundo Otaku</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">M</span>i amor por el anime y el manga es lo que me define. Desde que era pequeño, he encontrado en estas historias inspiración, lecciones de vida y una comunidad con la que compartir mi pasión. Creo que el amor por la cultura japonesa puede ser un vínculo muy especial entre dos personas, creando una conexión única basada en intereses compartidos y momentos inolvidables.
              </p>
              
              <p>
                Mi compromiso con esta cultura se refleja en mi colección de figuras, mi asistencia a convenciones de anime y mi deseo de compartir esta pasión con alguien especial. Disfruto discutiendo teorías sobre los últimos capítulos de los animes de temporada, descubriendo nuevos mangas y explorando la rica cultura japonesa a través de su gastronomía y tradiciones.
              </p>
            </div>
          </section>

          <section className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Lo Que Ofrezco en una Relación</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Cita Otaku Inolvidable</h3>
                <p className="text-gray-700">Ofrezco una relación llena de momentos épicos, desde maratones de anime hasta visitas a tiendas de manga. Imagina compartir tu pasión por el anime con alguien que realmente entiende tu entusiasmo por cada nuevo capítulo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Pareja Otaku Comprometida</h3>
                <p className="text-gray-700">Para mí, una relación es como una buena trama de anime: necesita desarrollo de personajes, momentos emocionantes y un vínculo que supere cualquier obstáculo. Busco a alguien con quien compartir esta aventura.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Novio Otaku Apasionado</h3>
                <p className="text-gray-700">Soy un compañero leal, como un personaje principal de shonen, siempre apoyando a mi pareja. Disfruto del cosplay, los videojuegos y las discusiones sobre teorías de anime hasta altas horas de la noche.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Respeto por la Cultura</h3>
                <p className="text-gray-700">Valoro profundamente la cultura japonesa y su influencia en nuestras vidas. En una relación, ofrezco respeto por los gustos de mi pareja, ya sea que prefieras shonen, shojo, seinen o cualquier otro género.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Aventuras en Común</h3>
                <p className="text-gray-700">Desde asistir a convenciones de anime hasta probar recetas de comida japonesa, me encantaría compartir estas experiencias contigo. Juntos podemos crear recuerdos tan inolvidables como nuestros animes favoritos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Crecimiento Juntos</h3>
                <p className="text-gray-700">Así como los personajes de anime evolucionan a lo largo de sus historias, creo en crecer juntos en esta relación. Aprender el uno del otro, superar desafíos y celebrar cada victoria, por pequeña que sea.</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Buscando a mi Media Naranja Otaku</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">B</span>usco a alguien que comparta mi pasión por el anime y el manga. Alguien con quien pueda discutir teorías sobre los últimos episodios, hacer maratones de temporada y quizás incluso hacer cosplay juntos. Valoro la autenticidad, el sentido del humor y la capacidad de emocionarse con las historias que vemos.
              </p>
              
              <p>
                Si eres una persona que busca una relación donde puedas ser completamente tú misma, compartir tus animes favoritos y crear recuerdos inolvidables, me encantaría conocerte. Juntos podemos escribir nuestra propia historia de amor, llena de momentos kawaii, emociones intensas y mucha diversión.
              </p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia de Amor Otaku</h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-bold text-snctm-black float-left mr-2 mt-1">I</span>magina una historia de amor digna de los mejores animes románticos. Juntos podemos crear momentos que parezcan sacados de un episodio de tu serie favorita. Desde citas temáticas hasta noches de anime y manta, cada día será una nueva aventura que compartir.
              </p>
              
              <p>
                Si estás buscando una relación donde puedas ser completamente tú misma, compartir tu amor por el anime y crear recuerdos inolvidables, este podría ser el comienzo de algo increíble. Como en las mejores historias, a veces los finales felices comienzan con un simple "¿Quieres ver un episodio conmigo?"
              </p>
              
              <p className="text-center mt-8">
                <Link 
                  to="/contact" 
                  className="inline-block bg-snctm-black text-white px-8 py-3 rounded-md hover:bg-snctm-gray-dark transition-colors"
                >
                  ¡Hablemos de Anime!
                </Link>
              </p>
            </div>
          </section>

          {/* SEO Keywords Section - Hidden from view but helps with SEO */}
          <div className="hidden">
            <p>cita otaku, pareja otaku, novio otaku, citas anime, conocer otakus, relación otaku, amor por el anime, comunidad otaku, 
            solteros otakus, citas entre fans, manga lovers, citas geek, pareja friki, citas nerd, relación gamer, amor otaku, 
            citas para otakus, conocer gente otaku, amor por la cultura japonesa, citas anime madrid, anime lovers, 
            manga collection, figuras anime, convenciones anime, cosplay en pareja, animes de romance, mejores animes, 
            temporada de anime, discusiones de anime, teorías de anime, personajes favoritos, openings icónicos, 
            escenas memorables, estudio ghibli, shonen jump, animes clásicos, nuevos animes, recomendaciones anime, 
            amantes del manga, tiendas de manga, coleccionables anime, videojuegos anime, juegos de rol, 
            cultura otaku, moda japonesa, kawaii fashion, comida japonesa, restaurantes japoneses, viajar a Japón, 
            aprender japonés, kanji, hiragana, katakana, frases en japonés, cultura pop japonesa, j-pop, j-rock, 
            idols japonesas, doramas, películas de anime, películas de Studio Ghibli, Hayao Miyazaki, 
            directores de anime, seiyuus, doblaje vs subtitulado, merchandising anime, videojuegos de rol, 
            juegos de pelea, juegos de estrategia, juegos de aventura, realidad virtual, tecnología japonesa, 
            festivales japoneses, hanami, matsuri, año nuevo japonés, cultura kawaii, moda lolita, decora tu habitación, 
            organización al estilo japonés, minimalismo japonés, ikigai, filosofía japonesa, artes marciales, 
            ceremonia del té, ikebana, origami, caligrafía japonesa, jardines japoneses, onsen, ryokan, 
            estaciones de tren en Japón, transporte en Japón, etiqueta japonesa, costumbres japonesas, 
            curiosidades de Japón, historia del anime, evolución del manga, géneros de anime, animes de deportes, 
            animes de fantasía, animes de ciencia ficción, animes de terror, animes de comedia, animes de romance, 
            animes de drama, animes de aventuras, animes de misterio, animes de sobrenatural, animes de mecha, 
            animes de isekai, animes de slice of life, animes de música, animes de artes marciales, animes de samuráis, 
            animes de ninjas, animes de demonios, animes de ángeles, animes de vampiros, animes de zombies, 
            animes de superpoderes, animes de magia, animes de escuela, animes de universidad, animes de trabajo, 
            animes de cocina, animes de juegos, animes de deportes electrónicos, animes de autos, animes de motos, 
            animes de viajes en el tiempo, animes de reencarnación, animes de videojuegos, animes de realidad virtual, 
            animes de inteligencia artificial, animes de robots, animes de ciberpunk, animes de steampunk, 
            animes de fantasía oscura, animes de fantasía medieval, animes de fantasía urbana, animes de mitología, 
            animes de dioses, animes de demonios, animes de ángeles caídos, animes de vampiros, animes de hombres lobo, 
            animes de monstruos, animes de kaiju, animes de mechas gigantes, animes de naves espaciales, 
            animes de exploración espacial, animes de colonias espaciales, animes de alienígenas, 
            animes de primera cita, animes de citas a ciegas, animes de club de citas, animes de aplicaciones de citas, 
            animes de relaciones a distancia, animes de amor prohibido, animes de amor no correspondido, 
            animes de amor de la infancia, animes de amigos a amantes, animes de enemigos a amantes, 
            animes de matrimonio por conveniencia, animes de matrimonio arreglado, animes de bodas, 
            animes de vida matrimonial, animes de padres solteros, animes de familias no tradicionales, 
            animes de adopción, animes de hermanos, animes de gemelos, animes de trillizos, animes de familias grandes, 
            animes de mascotas, animes de animales parlantes, animes de chibi, animes de superdeformados, 
            animes de parodia, animes de comedia romántica, animes de comedia negra, animes de comedia absurda, 
            animes de comedia escolar, animes de comedia sobrenatural, animes de comedia de acción, 
            animes de comedia de artes marciales, animes de comedia de deportes, animes de comedia de música, 
            animes de comedia de trabajo, animes de comedia de la vida diaria, animes de comedia familiar, 
            animes de comedia de parejas, animes de comedia de amigos, animes de comedia de enemigos, 
            animes de comedia de vecinos, animes de comedia de compañeros de cuarto, animes de comedia de viajes, 
            animes de comedia de viajes en el tiempo, animes de comedia de reencarnación, animes de comedia de isekai, 
            animes de comedia de fantasía, animes de comedia de ciencia ficción, animes de comedia de terror, 
            animes de comedia de misterio, animes de comedia de detectives, animes de comedia de policías, 
            animes de comedia de ladrones, animes de comedia de espías, animes de comedia de superhéroes, 
            animes de comedia de villanos, animes de comedia de dioses, animes de comedia de demonios, 
            animes de comedia de ángeles, animes de comedia de vampiros, animes de comedia de zombis, 
            animes de comedia de monstruos, animes de comedia de robots, animes de comedia de mechas, 
            animes de comedia de naves espaciales, animes de comedia de alienígenas, animes de comedia de viajes espaciales, 
            animes de comedia de colonias espaciales, animes de comedia de futuros distópicos, animes de comedia de mundos paralelos, 
            animes de comedia de realidades alternativas, animes de comedia de sueños, animes de comedia de pesadillas, 
            animes de comedia de fantasmas, animes de comedia de espíritus, animes de comedia de posesiones, 
            animes de comedia de exorcismos, animes de comedia de cazadores de demonios, animes de comedia de cazadores de fantasmas, 
            animes de comedia de cazadores de vampiros, animes de comedia de cazadores de zombis, 
            animes de comedia de cazadores de monstruos, animes de comedia de cazadores de tesoros, 
            animes de comedia de cazadores de recompensas, animes de comedia de mercenarios, 
            animes de comedia de asesinos, animes de comedia de espadachines, animes de comedia de samuráis, 
            animes de comedia de ninjas, animes de comedia de piratas, animes de comedia de vaqueros, 
            animes de comedia de caballeros, animes de comedia de magos, animes de comedia de brujas, 
            animes de comedia de hechiceros, animes de comedia de alquimistas, animes de comedia de científicos locos, 
            animes de comedia de inventores, animes de comedia de genios, animes de comedia de prodigios, 
            animes de comedia de inútiles, animes de comedia de perdedores, animes de comedia de inadaptados, 
            animes de comedia de marginados, animes de comedia de inútiles que se vuelven fuertes, 
            animes de comedia de personajes rotos, animes de comedia de personajes traumatizados, 
            animes de comedia de personajes con problemas mentales, animes de comedia de personajes con problemas emocionales, 
            animes de comedia de personajes con problemas sociales, animes de comedia de personajes con problemas familiares, 
            animes de comedia de personajes con problemas económicos, animes de comedia de personajes con problemas de salud, 
            animes de comedia de personajes con discapacidades, animes de comedia de personajes con habilidades especiales, 
            animes de comedia de personajes con poderes, animes de comedia de personajes con maldiciones, 
            animes de comedia de personajes con secretos, animes de comedia de personajes con dobles vidas, 
            animes de comedia de personajes con identidades secretas, animes de comedia de personajes con pasados oscuros, 
            animes de comedia de personajes con traumas, animes de comedia de personajes con complejos, 
            animes de comedia de personajes con baja autoestima, animes de comedia de personajes con problemas de autoimagen, 
            animes de comedia de personajes con problemas de peso, animes de comedia de personajes con problemas de altura, 
            animes de comedia de personajes con problemas de vista, animes de comedia de personajes con gafas, 
            animes de comedia de personajes con peinados extraños, animes de comedia de personajes con ropa excéntrica, 
            animes de comedia de personajes con tics nerviosos, animes de comedia de personajes con manías, 
            animes de comedia de personajes con obsesiones, animes de comedia de personajes con fobias, 
            animes de comedia de personajes con adicciones, animes de comedia de personajes con malos hábitos, 
            animes de comedia de personajes con mala suerte, animes de comedia de personajes con mala suerte en el amor, 
            animes de comedia de personajes que son imanes de problemas, animes de comedia de personajes que son imanes de desastres, 
            animes de comedia de personajes que son imanes de situaciones embarazosas, 
            animes de comedia de personajes que son imanes de malentendidos, 
            animes de comedia de personajes que son imanes de situaciones incómodas, 
            animes de comedia de personajes que son imanes de situaciones ridículas, 
            animes de comedia de personajes que son imanes de situaciones absurdas, 
            animes de comedia de personajes que son imanes de situaciones surrealistas, 
            animes de comedia de personajes que son imanes de situaciones hilarantes, 
            animes de comedia de personajes que son imanes de situaciones cómicas, 
            animes de comedia de personajes que son imanes de situaciones graciosas, 
            animes de comedia de personajes que son imanes de situaciones divertidas, 
            animes de comedia de personajes que son imanes de situaciones chistosas, 
            animes de comedia de personajes que son imanes de situaciones jocosas, 
            animes de comedia de personajes que son imanes de situaciones risibles, 
            animes de comedia de personajes que son imanes de situaciones hilarantes, 
            animes de comedia de personajes que son imanes de situaciones cómicas, 
            animes de comedia de personajes que son imanes de situaciones graciosas, 
            animes de comedia de personajes que son imanes de situaciones divertidas, 
            animes de comedia de personajes que son imanes de situaciones chistosas, 
            animes de comedia de personajes que son imanes de situaciones jocosas, 
            animes de comedia de personajes que son imanes de situaciones risibles</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;