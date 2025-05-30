import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import PDFViewer from '../components/MagazinesPage/PDFViewer.tsx';

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
            <div className="lg:w-1/3 bg-[#ece9e9] rounded-3xl shadow-lg p-6 space-y-6 flex flex-col justify-center lg:h-screen">
              <div className="flex justify-center">
                <img
                  src={magazine.cover_image_url}
                  alt={magazine.title}
                  className="rounded-xl max-h-80 object-contain shadow-xl mt-4"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#111C85] text-center mb-5">
                  {magazine.title.toUpperCase()}
                </h2>
                <section className="mx-10">
                  <p className="text-md text-gray-600">
                    <strong>Edición: </strong> N.º {magazine.issue_number}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Publicado:</strong> {formatDate(magazine.publication_date)}
                  </p>
                  <p className="text-md text-gray-600">
                    <strong>Formato:</strong> {magazine.is_physical ? 'Física' : 'Digital'}
                  </p>
                </section>
              </div>
            </div>

            {/* Columna derecha - visor PDF */}
            <div className="lg:w-2/3 w-full rounded-3xl shadow-lg">
              <PDFViewer pdfUrl={magazine.pdf_url} />
            </div>
          </div>
        </section>
        <Footer />
      </section>
    </>
  );
}
