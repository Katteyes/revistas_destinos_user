import { memo } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-[3rem] bg-[#323c96] text-white py-2 md:py-5 px-5">
      <div className="max-w-2xl mx-auto flex flex-col sm:flex-row justify-between gap-2 md:gap-20" >
        {/*col-1*/}
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="/logoDestinosBlanco.png"
            className="w-auto h-15 sm:h-20 rounded-md"
            alt="Logo Destinos"
          />

          <span className="mt-1 text-[0.8rem] sm:text-[1rem]">Explora. Inspírate. Descubre el mundo.</span>
        </div>

        {/*col-2*/}
        <ul className="text-[0.8rem] sm:text-[1rem] font-semibold sm:font-bold space-y-1 sm:space-y-3 text-center sm:text-left text-[#fffdfd62] sm:text-white mt-1.5">
          <li>©{currentYear} Destinos Turismo</li>
          <li>Todos los derechos reservados</li>
          <li>
          <a href="/politicas-de-privacidad" className="mt-1 text-[0.8rem] sm:text-[1rem]  hover:text-[#fffdfd62]">
            Políticas de Privacidad
          </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default memo(Footer);
