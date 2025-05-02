import { useEffect, useState } from 'react';

interface Content {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  publication_date: Date;
  main_image_url: string;
  slug: string;
  category_id: number;
  content_type_id: number;
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
        <div className="flex grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-16 px-4 lg:px-12 max-w-7xl mx-auto">
          {' '}
          {contents.map(content => (
            <div key={content.id} className="bg-[#C783175E] h-50 rounded-3xl p-4 flex flex-col">
              {content.main_image_url && (
                <>
                  <div className="overflow-hidden h-48">
                    <img
                      src={content.main_image_url}
                      className="aspect-video w-auto h-auto"
                      alt={`Content ${content.title}`}
                    />
                  </div>
                  <span className="text-[#111C85] text-[12px] font-bold">{content.title}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <div></div>
    </section>
  );
}
