import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import { useEffect, useState } from 'react';

interface Revista {
  id: number;
  title: string;
  issue_number: number; // Número de edición
  publication_date: string; // Fecha de publicación en formato ISO
  cover_image_url: string; // URL de la imagen de portada
  pdf_url: string; // URL del PDF
  is_physical: boolean; // Indica si es físico o no
}

export default function Revistas() {
  const [revistas, setRevistas] = useState<Revista[]>([]);

  useEffect(() => {
    fetch('https://backend-destinos.impplac.com/api/magazines')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las revistas');
        }
        return response.json();
      })
      .then(data => setRevistas(data.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <Header />
      <section className="my-16 ">
        <h1 className="text-[#111C85] font-medium text-3xl max-w-sm text-center mx-auto mb-8">
          REVISTAS DESTINOS TURISMO
        </h1>
        <div className=" justify-center items-center grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-16 px-4 lg:px-12 max-w-7xl mx-auto">
          {' '}
          {revistas.map(revista => (
            <div
              key={revista.id}
              className="bg-[#C783175E] h-92 p-4 rounded-3xl justify-center items-center flex flex-col"
            >
              {revista.cover_image_url && (
                <>
                  <img
                    src={revista.cover_image_url}
                    className=""
                    alt={`Revista ${revista.title}`}
                  />

                  <span className="text-[#111C85] text-[12px] font-bold">{revista.title}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
