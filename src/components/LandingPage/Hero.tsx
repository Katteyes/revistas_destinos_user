import { useEffect, useState, useRef } from "react";

interface Content {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  publication_date: string;
  main_image_url: string;
  slug: string;
  category_id: number;
  content_type_id: number;
}

export default function Hero() {
  const [contents, setContents] = useState<Content[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  // Función para construir la URL de la imagen optimizada
  function getImageUrl(imageName: string, width: number) {
    return `/assets/optimized/${imageName}-${width}.jpg`;
  }

  // Fetch contents
  useEffect(() => {
    fetch("https://backend-destinos.impplac.com/api/contents")
      .then((response) => {
        if (!response.ok) throw new Error("Error al obtener las noticias");
        return response.json();
      })
      .then((data) => setContents(data.data))
      .catch((error) => console.error(error));
  }, []);

  // Autoplay: cambia slide cada 5 segundos si no está pausado
  useEffect(() => {
    if (contents.length === 0) return;

    if (!isPaused) {
      autoplayInterval.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayInterval.current) clearInterval(autoplayInterval.current);
    };
  }, [isPaused, contents]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? contents.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === contents.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Swipe handlers
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const minSwipeDistance = 50; // mínimo en px para detectar swipe

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
        // swipe izquierda => siguiente
        nextSlide();
      } else {
        // swipe derecha => anterior
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
      {/* Carrusel - ancho total */}
      <div
        className="relative w-full overflow-hidden shadow-lg"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
{contents.map((content) => {
  console.log('Imagen original URL:', content.main_image_url);
  // Extraemos el nombre base de la imagen desde la URL original:
  const urlParts = content.main_image_url.split("/");
  const originalFileName = urlParts[urlParts.length - 1]; // ej. imagen1.jpg
  const imageName = originalFileName.replace(/\.\w+$/, ""); // "imagen1"
  
  // Logs adicionales
  console.log("Nombre base extraído:", imageName);
  console.log("URL src 720:", getImageUrl(imageName, 720));
  console.log("URL src 1280:", getImageUrl(imageName, 1280));
  console.log("URL src 1920:", getImageUrl(imageName, 1920));

  return (
    <div
      key={content.id}
      className="min-w-full h-[250px] sm:h-[350px] md:h-[400px] relative"
    >
      <a href={`/posts/${content.slug}`} className="block w-full h-full">
        <img
          src={getImageUrl(imageName, 1920)} // versión grande fallback
          srcSet={`
            ${getImageUrl(imageName, 720)} 720w,
            ${getImageUrl(imageName, 1280)} 1280w,
            ${getImageUrl(imageName, 1920)} 1920w
          `}
          sizes="(max-width: 640px) 720px, (max-width: 1024px) 1280px, 1920px"
          alt={content.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-6 left-6 bg-black bg-opacity-50 p-4 rounded-md max-w-[70%] text-white">
          <h2 className="text-2xl font-semibold">{content.title}</h2>
          <p className="mt-2 text-sm">{content.subtitle}</p>
        </div>
      </a>
    </div>
  );
})}
        </div>

        {/* Botones con fondo pálido */}
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

      {/* Indicadores (dots) */}
      <div className="flex justify-center mt-4 gap-3">
        {contents.map((_, index) => (
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
    </section>
  );
}
