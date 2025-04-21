import { memo } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="min-h-[24rem] bg-[#111C85] text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-24">
        <div className="flex flex-col items-center text-center">
          <img
            src="/logodestinos.webp"
            className="w-auto h-32 md:h-44"
            alt="Logo Destinos Perú"
            loading="lazy"
          />
          <span className="mt-2">Noticias de turismo para exploradores</span>
        </div>

        <ul className="font-bold space-y-4 md:space-y-6 text-center md:text-left">
          <li>© {currentYear} Destinos Perú Turismo</li>
          <li>Todos los derechos reservados</li>
          <li>
            <a
              href="/politicas-privacidad"
              className="hover:underline focus:underline focus:outline-none"
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
