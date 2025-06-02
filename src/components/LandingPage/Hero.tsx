import { useEffect, useState, useRef } from 'react';
import ContentCard from './ContentCard.tsx';
import { Link } from 'react-router-dom';


interface Content {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  publication_date: string;
  main_image_url: string;
  slug: string;
  category: {
    id: number;
    name: string;
  };
  type: {
    id: number;
    name: string;
  };
}

export default function Hero() {
  const [contents, setContents] = useState<Content[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    fetch('https://backend-destinos.impplac.com/api/contents')
      .then(response => {
        if (!response.ok) throw new Error('Error al obtener las noticias');
        return response.json();
      })
      .then(data => setContents(data.data))
      .catch(error => console.error(error));
  }, []);

  const importantTitles = [
    'Turismo Industrial Construmat abre sus puertas en Barcelona España',
    'Cómo visitar Roma y el Vaticano durante el funeral del papa Francisco',
    'Turismo: Naturaleza que sorprende',
  ];

  const importantContents = contents.filter(content => importantTitles.includes(content.title));

  const totalSlides = importantContents.length;

  useEffect(() => {
    if (totalSlides === 0) return;

    if (!isPaused) {
      autoplayInterval.current = setInterval(() => {
        setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [isPaused, totalSlides]);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      Math.abs(touchStartX.current - touchEndX.current) > minSwipeDistance
    ) {
      if (touchStartX.current > touchEndX.current) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (contents.length === 0) return <p>Cargando noticias...</p>;

  return (
    <section
      className="w-full flex flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carrusel */}
      <div
        className="relative w-full overflow-hidden shadow-lg mb-8"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {importantContents.map(content => (
            <div key={content.id} className="min-w-full relative">
              <Link to={`/contenido/${content.slug}`} className="block w-full h-80 md:h-[500px] overflow-hidden">
                <img
                  src={content.main_image_url}
                  alt={content.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </Link>
                {/* Fondo sólido y contenedor de descripción responsivo */}
          <div
            className="w-full bg-[#EAD1A9] bg-opacity-90 backdrop-blur-sm p-4 max-h-[25%] overflow-y-auto"
                  style={{maxHeight: '25%', overflowY: 'auto'}}
                >
            <h2
            className="text-[#111C85] font-bold truncate"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', lineHeight: '1.2' }}
                >
              {content.title}
            </h2>
          <p
            className="mt-2 text-[#333333] overflow-hidden whitespace-nowrap text-ellipsis"
            style={{ fontSize: 'clamp(0.75rem, 1.5vw, 1.125rem)', lineHeight: '1.2' }}
              > 
              {content.subtitle}
          </p>
          </div>
            </div>
          ))}
        </div>
        {/* Botones */}
      <button
        onClick={prevSlide}
        aria-label="Anterior"
        className="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-xl sm:text-2xl font-bold select-none transition-colors duration-300"
      >
      ‹
      </button>
        <button
        onClick={nextSlide}
        aria-label="Siguiente"
        className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-50 rounded-full p-1.5 sm:p-2 text-xl sm:text-2xl font-bold select-none transition-colors duration-300"
      >
      ›
      </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-1 gap-3">
        {importantContents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[#111C85]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Noticias */}
      <section className="my-1 w-full max-w-6xl px-8 sm:px-8 mx-auto">
        <h1 className="text-[#111C85] font-medium text-3xl max-w-sm text-center mx-auto mb-9 mt-6">
          Nuestras Noticias
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-6 px-8 max-w-6xl mx-auto">
          {contents.map(content => (
            <ContentCard
              key={content.id}
              title={content.title}
              main_image_url={content.main_image_url}
              category={content.category.name}
              author={content.author}
              publication_date={content.publication_date}
              route={`/contenido/${content.slug}`} //Enlace al detalle del contenido
            />
          ))}
        </div>
      </section>
    </section>
  );
}
