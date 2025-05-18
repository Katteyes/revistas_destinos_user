import { useEffect, useState } from 'react';
import ContentCard from './ContentCard.tsx';

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

  useEffect(() => {
    fetch('https://backend-destinos.impplac.com/api/contents')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las noticias');
        }
        return response.json();
      })
      .then(data => setContents(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="overflow-hidden h-70 max-w-[70rem] rounded-3xl">
        <img src="/imageHero.webp" className="w-300 h-auto " alt="Hero image" loading="eager" />
      </div>

      <section className="my-16 ">
        <h1 className="text-[#111C85] font-medium text-3xl max-w-sm text-center mx-auto mb-8">
          Nuestras Noticias
        </h1>
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
          ))}
        </div>
      </section>
      <div></div>
    </section>
  );
}
