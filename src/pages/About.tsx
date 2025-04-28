import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col ">
        <section className="px-8 py-32 max-w-5xl mx-auto font-sans flex-grow">
          <h2 className="text-3xl font-medium text-center text-blue-900 mb-10">SOBRE NOSOTROS</h2>

          <div className="flex items-start gap-6 mb-10">
            <div className="flex gap-48">
              <img src="/solPeruano.png" alt="Icono inca" className="w-22 h-20 ml-21" />
              <div className="transform -translate-x-40">
                <h3 className="text-xl font-extrabold w-22 text-blue-900">ALCANCE</h3>
                <p className="text-justify mt-2">
                  Informar sobre temas relevantes a nivel nacional, pero también brindar
                  herramientas de gestión para el desarrollo sostenible de las regiones, con el
                  objetivo de contribuir al posicionamiento del Perú en un mercado cada vez más
                  globalizado y competitivo.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex gap-48">
              <img src="/solPeruano.png" alt="Icono inca" className="w-22 h-20 ml-21" />
              <div className="transform -translate-x-40">
                <h3 className="text-xl font-extrabold w-22 text-blue-900">EDICIONES</h3>
                <p className="text-justify mt-2">
                  Diseñamos una edición especial dedicada a la región que cumple aniversario o con
                  motivo de algún evento o fecha significativa para la zona, lo cual incluye:
                  principales productos y atractivos turísticos, hotelería, gastronomía, folklore,
                  cultura, fiestas patronales, desarrollo integral, proyecciones, negocios y otros
                  de interés para la zona.
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
