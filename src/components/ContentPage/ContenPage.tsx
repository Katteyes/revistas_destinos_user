import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SocialShareBar from '../../components/SocialShareBar/SocialShareBar';

interface ContentBlock {
  id: number;
  type: string;
  display_order: number;
  data: string;
}

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
  blocks: ContentBlock[];
}

export default function ContenidoDetalle() {
  const { slug } = useParams<{ slug: string }>();
  const [contenido, setContenido] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`https://backend-destinos.impplac.com/api/contents/slug/${slug}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener el contenido');
        }
        return response.json();
      })
      .then(data => {
        setContenido(data.data);
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p>Cargando contenido...</p>;
  if (!contenido) return <p>No se encontró el contenido.</p>;

  return (
    <div className="w-full">
      <div
        className="relative h-[6ovh] md:h-[55vh] overflow-hidden
            opacity-0 translate-x-[-0px]
            animate-[fadeInLeft_1s_ease-out_forwards]"
      >
        <img
          src={contenido.main_image_url}
          alt={contenido.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col bg-[rgba(30,64,175,0.6)] ">
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 am:px-6 md:px-25 text-white">
            <h1 className="text-base md:text-4xl lg:text-4xl font-bold mb-4  hover:scale-103 duration-300">
              {contenido.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-200 font-semibold italic hover:scale-103 duration-300">
              {contenido.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center relative">
        <div className="fixed bottom-31 right-4 z-30 lg:hidden">
          <SocialShareBar mobile />
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-60 z-30">
            <SocialShareBar />
          </div>
        </div>
        <div
          className="max-w-5xl mt-[-2rem] pt-3 md:pt-1 px-4 md:px-8 space-y-3 text-gray-800 font-sans overflow-hidden
             opacity-0 translate-y-[40px]
             animate-[fadeInLeft_1s_ease-out_forwards]"
        >
          {contenido.blocks.map(block => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={block.id} className="text-sm md:text-base leading-relaxed text-justify">
                    {block.data}
                  </p>
                );
              case 'subtitle':
                return (
                  <h2
                    key={block.id}
                    className="text-lg md:text-2xl font-bold text-blue-800 text-justify relative mb-4 pl-4 
                       before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 
                       before:bg-[rgba(199,131,23,0.37)] animate-fade-in"
                  >
                    {block.data}
                  </h2>
                );
              case 'note':
                return (
                  <p
                    key={block.id}
                    className="italic text-sm md:text-base text-white text-justify 
                       bg-[rgba(30,64,175,100)] px-6 py-4 my-3"
                  >
                    {block.data}
                  </p>
                );
              case 'image':
                return (
                  <div
                    key={block.id}
                    className="w-full max-h-80 md:max-h-100 flex justify-center overflow-hidden py-4"
                  >
                    <img
                      src={block.data}
                      alt="Contenido visual"
                      className="max-h-95 w-auto object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                );
              case 'list':
                return (
                  <ul
                    key={block.id}
                    className="list-disc list-inside pl-4 space-y-1 text-justify text-sm md:text-base"
                  >
                    {block.data.split('|').map((item, index) => (
                      <li key={index}>{item.trim()}</li>
                    ))}
                  </ul>
                );
              case 'bold':
                return (
                  <p key={block.id} className="font-bold text-sm md:text-base text-justify">
                    {block.data}
                  </p>
                );
              default:
                return (
                  <p key={block.id} className="text-red-600 text-justify">
                    Tipo de bloque desconocido: {block.type}
                  </p>
                );
            }
          })}
        </div>
      </div>
    </div>
  );
}
