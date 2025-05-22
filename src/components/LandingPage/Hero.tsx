<<<<<<< HEAD
import { useEffect, useState, useRef } from "react";
=======
import { useEffect, useState } from 'react';
import ContentCard from './ContentCard.tsx';
>>>>>>> miguel

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
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    fetch("https://backend-destinos.impplac.com/api/contents")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener las noticias");
        return response.json();
      })
      .then((data) => setContents(data.data))
      .catch((error) => console.error(error));
  }, []);

  const importantTitles = [
    "Viajes educativos a la ciudad de Madrid",
    "Cómo visitar Roma y el Vaticano durante el funeral del papa Francisco",
    "Turismo: Naturaleza que sorprende",
  ];

  const importantContents = contents.filter((content) =>
    importantTitles.includes(content.title)
  );

  const totalSlides = importantContents.length;

  useEffect(() => {
    if (totalSlides === 0) return;

    if (!isPaused) {
      autoplayInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [isPaused, totalSlides]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
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
        className="relative w-full max-w-6xl mx-auto overflow-hidden shadow-lg mt-8 mb-8 rounded-3xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {importantContents.map((content) => (
<div key={content.id} className="min-w-full relative rounded-3xl overflow-hidden">
  <a href={`/posts/${content.slug}`} className="block w-full h-full">
    <img
      src={content.main_image_url}
      alt={content.title}
      className="w-full h-full object-cover"
      loading="lazy"
    />
{/* Fondo semi-transparente y contenedor de descripción responsivo */}
<div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-white/40 to-transparent backdrop-blur-sm rounded-md p-4 z-10">
  <h2 className="text-[#1a1a1a] text-lg sm:text-xl md:text-2xl font-bold">
    {content.title}
  </h2>
  <p className="mt-2 text-sm sm:text-base md:text-lg text-[#333333]">
    {content.subtitle}
  </p>
</div>
  </a>
</div>
          ))}
        </div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-3xl font-bold select-none transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-3xl font-bold select-none transition"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-4 gap-3">
        {importantContents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a la diapositiva ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-[#111C85]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Noticias */}
      <section className="my-16 w-full max-w-6xl px-8 sm:px-8 mx-auto">
        <h1 className="text-[#111C85] font-medium text-3xl max-w-sm text-center mx-auto mb-8">
          Nuestras Noticias
        </h1>
<<<<<<< HEAD
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-6">
          {contents.map((content) => (
            <div
              key={content.id}
              className="bg-[#C783175E] rounded-3xl p-4 flex flex-col h-full"
            >
              {content.main_image_url && (
                <>
                  <div className="overflow-hidden h-48 rounded-lg mb-3">
                    <img
                      src={content.main_image_url}
                      alt={content.title}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                  </div>
                  <span className="text-[#111C85] text-[12px] font-bold">
                    {content.title}
                  </span>
                </>
              )}
            </div>
=======
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-6 px-15 sm:px-8 max-w-6xl mx-auto">
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
>>>>>>> miguel
          ))}
        </div>
      </section>
    </section>
  );
}
