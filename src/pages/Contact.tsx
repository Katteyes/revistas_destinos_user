import React from 'react';
import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
     {/* TÍTULO CON FONDO CON OVERLAY + FADE-IN */}
<div className="relative mt-15">
  <div
    className="bg-cover bg-center py-24 md:py-40 px-4 text-center"
    style={{
      backgroundImage: "url('/fondoclaro.jpg')",
    }}
  >
    {/* Overlay azul oscuro */}
    <div className="absolute inset-0 bg-[#111C85]/60 z-0"></div>

    {/* Contenido encima con animación */}
    <div className="relative z-10 text-white duration-1000 fade-in">
      <h1 className="text-3xl md:text-5xl font-bold mb-6">Contacto</h1>
      <p className="text-base md:text-xl">Destinos Turismo Revista</p>
    </div>
  </div>
</div>

      {/* CONTENIDO */}
      <section className="bg-[#FFF8F8]">
        <main className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* IZQUIERDA: DESCRIPCIÓN */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111C85] mb-6">Somos Destinos Turismo</h2>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Somos una plataforma dedicada a la promoción de turismo y el desarrollo global, con proyección nacional e internacional.
              En Destinos Turismo conectamos, promovemos y proyectamos lo mejor de nuestra tierra hacia el mundo.
            </p>
          </div>

          {/* DERECHA: INFORMACIÓN DE CONTACTO */}
          <div className="grid grid-cols-1 gap-6">
            {/* CENTRAL */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Central</h3>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="https://wa.me/51990047528" target="_blank" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    +51 990 047 528
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="mailto:destinosperu.revistaturismo@gmail.com" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    destinosperu.revistaturismo@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* CHILE */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Chile</h3>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="https://wa.me/56992038781" target="_blank" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    +56 992 038 781
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="mailto:areamanagerchile@destinosrevistaturismo.com" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    areamanagerchile@destinosrevistaturismo.com
                  </a>
                </div>
              </div>
            </div>

            {/* EUROPA */}
            <div className="border border-gray-200 p-6 rounded-lg shadow-sm bg-white">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Europa</h3>
              <div className="flex flex-col items-start space-y-3">
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="https://wa.me/34664349972" target="_blank" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    +34 664 349 972
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-[#111C85]" />
                  <a href="mailto:redaccioneuropa@destinosrevistaturismo.com" className="text-blue-600 hover:underline break-all text-sm sm:text-base">
                    redaccioneuropa@destinosrevistaturismo.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
