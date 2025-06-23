import { useEffect, useState, useRef } from 'react';
import ContentCard from './ContentCard.tsx';
import { Link } from 'react-router-dom';
import SocialShareBar from '../SocialShareBar/SocialShareBar.tsx';

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
    'Destinos Turísticos Chilenos 2025: Astroturismo, Esquí y Enoturismo',
    'Turismo en Perú crece y PromPerú impulsa plan 2025',
    'El restaurante peruano Maido acaba de ser elegido el mejor del Mundo 2025',
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
      className="w-full flex flex-col items-center justify-center mt-1 sm:mt-2 md:mt-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="relative overflow-hidden shadow-lg w-full sm:w-[95%] sm:max-w-3xl md:max-w-5xl lg:max-w-6xl mx-auto rounded-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          height:
            window.innerWidth <= 640
              ? '150px' 
              : window.innerWidth <= 768
              ? '180px' 
              : '400px', 
        }}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
        >
          {importantContents.map(content => (
            <div
              key={content.id}
              className="min-w-full flex flex-col relative rounded-2xl"
              style={{
                height:
                  window.innerWidth <= 640
                    ? '150px' 
                    : window.innerWidth <= 768
                    ? '180px' 
                    : '400px', 
              }}
            >
              <Link
                to={`/contenido/${content.slug}`}
                className="block w-full h-full overflow-hidden"
              >
                <img
                  src={content.main_image_url}
                  alt={content.title}
                  className="w-full h-full rounded-2xl object-cover object-center scale-[1.01] sm:scale-[1.02] lg:scale-[1.03] transition-all duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="w-full absolute bottom-0 bg-[rgba(255,255,255,0.3)] backdrop-blur-sm p-4 max-h-[50%]  rounded-b-2xl">
                <h2
                  className="text-[#111C85] font-bold truncate"
                  style={{ fontSize: 'clamp(0.75rem, 2vw, 1.5rem)', lineHeight: '1.2' }}
                >
                  {content.title}
                </h2>
                <p
                  className="mt-2 text-[#333333] overflow-hidden whitespace-nowrap text-ellipsis"
                  style={{ fontSize: 'clamp(0.625rem, 1.5vw, 1.125rem)', lineHeight: '1.2' }}
                >
                  {content.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="absolute top-1/2 left-1 sm:left-2 transform -translate-y-1/2 bg-[#111C85] bg-opacity-100 hover:bg-opacity-80 rounded-full p-1.5 sm:p-2 text-white text-xl sm:text-2xl font-bold select-none transition-colors duration-300"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="absolute top-1/2 right-1 sm:right-2 transform -translate-y-1/2 bg-[#111C85] bg-opacity-100 hover:bg-opacity-80 rounded-full p-1.5 sm:p-2 text-white text-xl sm:text-2xl font-bold select-none transition-colors duration-300"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-3">
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

      <section className="my-1 w-full px-0 sm:px-4 md:px-6 lg:px-8 mx-auto">
        <h1 className="text-[#111C85] font-medium text-2xl sm:text-3xl max-w-sm text-center mx-auto mb-6 sm:mb-9 mt-6">
          Nuestras Noticias
        </h1>
        <div className="relative max-w-7xl mx-auto">
          <div className="flex gap-4 lg:gap-8 items-start">
            <div className="hidden xl:block sticky top-24 z-10 flex-shrink-0">
              <SocialShareBar size="medium" />
            </div>
            <div className="flex-1 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
                {contents.map(content => (
                  <ContentCard
                    key={content.id}
                    title={content.title}
                    main_image_url={content.main_image_url}
                    category={content.category.name}
                    author={content.author}
                    publication_date={content.publication_date}
                    route={`/contenido/${content.slug}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="xl:hidden fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50">
            <SocialShareBar mobile={true} />
          </div>
        </div>
      </section>
      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/34664349972"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp"
        title="Escribenos"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-15 h-15 rounded-full bg-blue-900 shadow-lg hover:scale-110 transition-transform animate-fade-in"
      >
        <img
          src="/socials/whatsapp.svg" // cambia esta ruta a la tuya
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>
    </section>
  );
}
