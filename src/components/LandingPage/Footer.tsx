import { memo } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-[5rem] bg-[#0f197a]/90 text-white px-1 sm:px-12 py-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
       
        {/*col-1*/}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="/logoDestinos.png"
            className="w-auto h-20 "
            alt="Logo Destinos"
            loading="lazy"
          />
          <span className="mt-1 text-[0.8rem] sm:font-semibold">Explora. Inspírate. Descubre el mundo.</span>
        </div>

        {/*col-2*/}
        <ul className='space-y-2 sm:space-y-3 text-center sm:text-left md:max-w-md'>
          <li className=' text-[0.8rem] sm:text-[1rem] font-bold'>Contáctanos</li>
          <li >
            <a 
              href="tel:+34664349972" 
              className="text-[0.8rem] hover:font-semibold focus:font-bold focus:outline-none transition-all duration-200"
              > 
             📲 ​+34 664349972 
            </a>
          </li>
          <li className='text-[0.8rem] '>📧 areamanager@destinosrevistaturismo.com</li>
        </ul>

        {/*col-3*/}
        <ul className="text-[0.8rem] font-semibold sm:font-bold space-y-2 sm:space-y-3 text-center sm:text-left text-[#fffdfd62] sm:text-white ">
          <li>©{currentYear} Destinos Perú Turismo</li>
          <li>Todos los derechos reservados</li>
          <li>
            <a
              href="/politicas-privacidad"
              className="font-normal hover:font-semibold focus:font-bold focus:outline-none transition-all duration-200"
              aria-label="Ver nuestras políticas de privacidad"
            >
              Políticas de Privacidad
            </a>
          </li>
        </ul>
        </div>
    </footer>
  );
};

export default memo(Footer);
