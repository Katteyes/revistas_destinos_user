import { memo, useState  } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const [logoSrc, setLogoSrc] = useState('/logoDestinosFondoB.png');

  const cambiarLogo = () => {
    setLogoSrc(prev =>
      prev === '/logoDestinosFondoB.png' ? '/ruc.png' : '/logoDestinosFondoB.png'
    );
  };
  return (
    <footer className="min-h-[5rem] bg-[#323c96] text-white py-5">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between gap-8 md:gap-24" >
        {/*col-1*/}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src={logoSrc}
            className="w-auto h-20 cursor-pointer ::   transition duration-300 rounded-md"
            alt="Logo Destinos"
            loading="lazy"
            onClick={cambiarLogo}
          />
          <span className="mt-1 text-[0.8rem] sm:font-normal">Explora. Inspírate. Descubre el mundo.</span>
        </div>

        {/*col-2*/}
        <ul className="text-[0.8rem] font-semibold sm:font-bold space-y-2 sm:space-y-3 text-center sm:text-left text-[#fffdfd62] sm:text-white ">
          <li>©{currentYear} Destinos Turismo</li>
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
