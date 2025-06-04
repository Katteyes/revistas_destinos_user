import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';

interface Magazine {
  id: number;
  title: string;
  issue_number: number;
  publication_date: string;
  cover_image_url: string;
  pdf_url: string;
  is_physical: boolean;
}

export default function RevistaDetail() {
  const { id } = useParams();
  const [magazine, setMagazine] = useState<Magazine | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://backend-destinos.impplac.com/api/magazines/${id}`)
      .then(res => res.json())
      .then(data => {
        setMagazine(data.data);
        setLoading(false);
      });
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-PE', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  if (loading) {
    return (
      <>
        <section className="bg-[#FFF8F8]">
          <Header />
          <div className="text-center my-16">Cargando revista...</div>
          <Footer />
        </section>
      </>
    );
  }

  if (!magazine) {
    return (
      <>
        <section className="bg-[#FFF8F8]">
          <Header />
          <div className="text-center my-16 text-red-600">Revista no encontrada.</div>
          <Footer />
        </section>
      </>
    );
  }

  return (
    <>
      <section className="bg-[#FFF8F8]">
        <Header />
        <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto mt-0 md:mt-5 lg:mt-5">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna izquierda - detalles */}
            <div className="lg:w-1/4 bg-[#ece9e9] rounded-3xl shadow-lg mx-14 md:mx-28 lg:mx-0 p-4 md:p-6 flex flex-col justify-center lg:h-[600px] animate-[fadeInLeft_1s_ease-out_forwards]">
              <div className="flex flex-col md:flex-row lg:flex-col items-center md:items-center lg:items-center m-1 my-4 gap-4 md:gap-10">

                {/* Imagen */}
                <div className="flex-shrink-0 flex justify-center md:justify-start lg:justify-center">
                  <img
                    src={magazine.cover_image_url}
                    alt={magazine.title}
                    className="rounded-xl h-40 md:h-48 lg:h-60 object-contain shadow-xl"
                  />
                </div>

                {/* Texto */}
                <div className="space-y-2 w-full">
                  <h2 className="text-md font-extrabold text-[#111C85] text-center md:text-left lg:text-center mb-3">
                    {magazine.title.toUpperCase()}
                  </h2>
                  <section className="space-y-1.5 text-xs lg:text-sm text-gray-600 text-left px-3 md:px-0 lg:px-5">
                    <p>
                      <strong>Edición:</strong> N.º {magazine.issue_number}
                    </p>
                    <p>
                      <strong>Publicado:</strong> {formatDate(magazine.publication_date)}
                    </p>
                    <p>
                      <strong>Formato:</strong> {magazine.is_physical ? 'Física' : 'Digital'}
                    </p>
                  </section>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4 w-full rounded-3xl shadow-lg animate-[fadeInLeft_1s_ease-out_forwards]">
              <iframe
                allowFullScreen
                className="fp-iframe rounded-3xl h-dvw md:h-[600px] lg:h-[600px] w-full"
                src={magazine.pdf_url}
              ></iframe>
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
