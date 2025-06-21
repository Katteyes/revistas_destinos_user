import { useEffect, useState, useRef } from 'react';
import ContentCard from './ContentCard.tsx';
import { Link } from 'react-router-dom';
import SocialShareBar from '../SocialShareBar/SocialShareBar.tsx';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

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

  const [showControls1, setShowControls1] = useState(false);
  const [showControls2, setShowControls2] = useState(false);
  const [showControls3, setShowControls3] = useState(false);
  const [showControls4, setShowControls4] = useState(false);

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
    'LIGNA 2025 ha celebrado 50 años',
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
      <div
        className="relative overflow-hidden shadow-lg mx-auto w-full max-w-screen-lg rounded-2xl"
        style={{ width: '100%', height: '309px' }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
        >
          {importantContents.map(content => (
            <div
              key={content.id}
              className="min-w-full flex flex-col relative rounded-2xl"
              style={{ height: '309px' }}
            >
              <Link
                to={`/contenido/${content.slug}`}
                className="block w-full h-80 md:h-[500px] overflow-hidden"
              >
                <img
                  src={content.main_image_url}
                  alt={content.title}
                  className="w-full h-full rounded-2xl"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
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
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'backIn' }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full mt-10 bg-[#323c96] pb-10 mb-4 rounded-3xl lg:rounded-none shadow-xl"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-6 md:px-10 lg:px-8">
          <h1 className="text-white font-medium text-2xl sm:text-3xl pt-3 my-5 text-center">
            Contenidos Interactivos
          </h1>

          <div className="flex flex-col md:flex-col lg:flex-row gap-4 lg:h-[500px]">
            {/*  Video grande */}
            <div className="w-full lg:flex-[0_0_70%] h-full">
              <div
                className="relative w-full h-full rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => setShowControls1(true)}
                onMouseLeave={() => setShowControls1(false)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  Arequipa - Documental
                </div>
                <ReactPlayer
                  url="https://backend-destinos.impplac.com/public/uploads/videos/AREQUIPA - Documental.mp4"
                  width="100%"
                  height="100%"
                  controls={showControls1}
                  playing={true}
                  muted={true}
                  loop={true}
                />
              </div>
            </div>

            {/* Videos pequeños */}
            <div className="w-full flex flex-col gap-4 md:flex-row md:h-[200px] lg:flex-col lg:flex-[0_0_30%] lg:h-full">
              <div
                className="relative flex-1 rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => setShowControls2(true)}
                onMouseLeave={() => setShowControls2(false)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  Cuba - Video General
                </div>
                <ReactPlayer
                  url="https://backend-destinos.impplac.com/public/uploads/videos/CUBA - Video General.mp4"
                  width="100%"
                  height="100%"
                  controls={showControls2}
                />
              </div>

              <div
                className="relative flex-1 rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => setShowControls3(true)}
                onMouseLeave={() => setShowControls3(false)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  Mapping Turístico - Miraflores
                </div>
                <ReactPlayer
                  url="https://backend-destinos.impplac.com/public/uploads/videos/Mapping turistico  - Mirtaflores.mp4"
                  width="100%"
                  height="100%"
                  controls={showControls3}
                />
              </div>

              <div
                className="relative flex-1 rounded-xl overflow-hidden bg-black shadow-xl"
                onMouseEnter={() => setShowControls4(true)}
                onMouseLeave={() => setShowControls4(false)}
              >
                <div className="absolute top-2 left-2 bg-[rgba(47,59,92,0.8)] text-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur max-w-[80%] break-words whitespace-normal">
                  Piura - Documental
                </div>
                <ReactPlayer
                  url="https://backend-destinos.impplac.com/public/uploads/videos/Piura - Documental Destinos Peru (2).mp4"
                  width="100%"
                  height="100%"
                  controls={showControls4}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'backIn' }}
        viewport={{ once: true, amount: 0.05 }}
        className="my-1 w-full px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <h1 className="text-[#111C85] font-bold text-2xl sm:text-3xl max-w-sm text-center mx-auto mb-6 sm:mb-9 mt-6">
          Nuestras Noticias
        </h1>

        {/* Contenedor principal con SocialShareBar y Grid */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex gap-4 lg:gap-8 items-start">
            {/* SocialShareBar - visible desde xl */}
            <div className="hidden xl:block sticky top-24 z-10 flex-shrink-0">
              <SocialShareBar size="medium" />
            </div>

            {/* Grid de noticias con responsive mejorado */}
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

          {/* SocialShareBar móvil/tablet - fixed en la derecha */}
          <div className="xl:hidden fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50">
            <SocialShareBar mobile={true} />
          </div>
        </div>
      </motion.section>
    </section>
  );
}
