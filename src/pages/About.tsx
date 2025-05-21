import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col ">
        <section className="px-8 py-32 max-w-4xl mx-auto font-sans">
          <h2 className="text-3xl font-medium text-center text-blue-900 mb-10">SOBRE NOSOTROS</h2>

          <div className="flex items-start gap-6 mb-10">
            <div className="flex gap-48">
              <img src="/solPeruano.png" alt="Icono inca" className="w-22 h-20 ml-21" />
              <div className="transform -translate-x-40">
                <h3 className="text-xl font-extrabold w-20 text-blue-900">NOSOTROS</h3>
                <p className="text-justify mt-2">
                  Informar sobre temas relevantes a nivel internacional, pero también brindar
                  herramientas de gestión para el desarrollo sostenible de los diversos paises, con
                  el objetivo de contribuir a un mercado cada vez más globalizado y competitivo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex gap-48">
              <img src="/solPeruano.png" alt="Icono inca" className="w-20 h-20 ml-21" />
              <div className="transform -translate-x-40">
                <h3 className="text-xl font-extrabold w-22 text-blue-900">EDICIONES</h3>
                <p className="text-justify mt-2">
                  Diseñamos ediciones especiales dedicadas a países y regiones que celebran
                  aniversarios o eventos significativos, incluyendo información sobre sus
                  principales productos, atractivos turísticos, hotelería, gastronomía, cultura,
                  fiestas tradicionales, desarrollo integral, proyecciones, oportunidades de negocio
                  y otros temas de interés local e internacional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
