import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-12 min-h-[680px] p-4">
        {/* Card 1 */}
        <div
          style={{
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          className="flex flex-col max-w-md w-full align-center justify-between border border-solid border-gray-200 dark:border-dark bg-white dark:bg-dark-80 rounded-xl"
        >
          <div className="flex flex-col px-6 pt-8 mb-10 space-y-5 hover:scale-105 transition duration-300">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-A400 text-[#111C85] fill-current"
            >
              <path
                d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"
              ></path>
            </svg>
            <p className="body-medium m-0 dark:text-dark-contrastText" style={{ hyphens: 'auto' }}>
              Informar sobre temas relevantes a nivel internacional, pero también brindar
              herramientas de gestión para el desarrollo sostenible de los diversos países, con el
              objetivo de contribuir a un mercado cada vez más globalizado y competitivo.
            </p>
          </div>
          <div className="flex space-x-2 bg-gray-50 dark:bg-dark-70 dark:text-dark-contrastText px-6 pt-6 pb-5 rounded-b-xl">
            <div className="flex flex-col justify-center">
              <p className="heading-six m-0 font-bold  text-[#111C85] ">NOSOTROS</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          className="flex flex-col max-w-md w-full align-center justify-between border border-solid border-gray-200 dark:border-dark bg-white dark:bg-dark-80 rounded-xl"
        >
          <div className="flex flex-col px-6 pt-8 mb-10 space-y-5 hover:scale-105 transition duration-300">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-A400 text-[#111C85] fill-current"
            >
              <path
                d="M24 7.3h-5.1L22.3.4H17l-3.4 6.9v10.3H24V7.3zM10.3 17.6V7.3H5L8.6.4H3.4L0 7.3v10.3h10.3z"
                fill="current"
              ></path>
            </svg>
            <p className="body-medium m-0 dark:text-dark-contrastText" style={{ hyphens: 'auto' }}>
              Diseñamos ediciones especiales dedicadas a países y regiones que celebran aniversarios
              o eventos significativos, incluyendo información sobre sus principales productos,
              atractivos turísticos, hotelería, gastronomía, cultura, fiestas tradicionales,
              desarrollo integral, proyecciones, oportunidades de negocio y otros temas de interés
              local e internacional.
            </p>
          </div>
          <div className="flex space-x-2 bg-gray-50 dark:bg-dark-70 dark:text-dark-contrastText px-6 pt-6 pb-5 rounded-b-xl">
            <div className="flex flex-col justify-center">
              <p className="heading-six m-0 font-bold  text-[#111C85] ">EDICIONES</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
