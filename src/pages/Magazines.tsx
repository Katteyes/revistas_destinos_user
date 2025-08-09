import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import { useEffect, useState } from 'react';
import MagazineCard from '../components/MagazinesPage/MagazineCard';

interface Magazine {
  id: number;
  title: string;
  issue_number: number;
  publication_date: string;
  cover_image_url: string;
  pdf_url: string;
  is_physical: boolean;
}

export default function Magazines() {
  const [magazines, setMagazines] = useState<Magazine[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://backend-destinos.impplac.com/api/magazines')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las revistas');
        }
        return response.json();
      })
      .then(data => {
        setMagazines(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setError('No se pudieron cargar las revistas');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <section className="bg-[#FFF8F8]">
          <Header />
          <section className="my-16 px-8">
            <div className="flex justify-center items-center h-64">
              <div className="text-[#111C85] text-lg">Cargando revistas...</div>
            </div>
          </section>
          <Footer />
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <section className="bg-[#FFF8F8]">
          <Header />
          <section className="my-16 px-8">
            <div className="flex justify-center items-center h-64">
              <div className="text-red-600 text-lg">{error}</div>
            </div>
          </section>
          <Footer />
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-[#FFF8F8]">
        <Header />
        <section className="my-30 px-8  ">
          <h1 className="text-[#111C85] text-center text-4xl font-semibold tracking-tighter leading-[64.8px] max-md:text-3xl mb-8">
            NUESTRAS REVISTAS
          </h1>

          {magazines.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              No hay revistas disponibles en este momento.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-12 sm:px-0 md:px-0 lg:px-0">
              {magazines.map(mag => (
                <MagazineCard
                  key={mag.id}
                  title={mag.title}
                  coverImageUrl={mag.cover_image_url}
                  route={`/revistas/${mag.id}`}
                />
              ))}
            </div>
          )}
        </section>
        <Footer />
      </section>
    </>
  );
}
