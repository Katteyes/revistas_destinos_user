import { useState } from 'react';

const Divider = () => <div className="h-5 w-0.5 bg-blue-800" aria-hidden="true" />;

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <li>
    <a href={href} className="hover:text-[#111C85] transition-colors duration-200">
      {label}
    </a>
  </li>
);

export default function Header() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchText);
  };

  const navigationItems = [
    { label: 'INICIO', href: '/' },
    { label: 'ACERCA DE', href: '/acerca-de' },
    { label: 'REVISTAS', href: '/revistas' },
    { label: 'CONTACTO', href: '/contacto' },
  ];

  return (
    <header role="banner">
      <nav className="flex justify-between items-center px-32 pt-8" aria-label="Principal">
        <button
          className="bg-[#111C85] p-2 cursor-pointer hover:bg-[#1a2aa0] transition-colors"
          aria-label="Agregar nuevo"
        >
          <img src="/icons/plus.svg" alt="" aria-hidden="true" />
        </button>

        <a href="/">
          <img src="/logoDestinos.png" className="w-auto h-24" alt="Destinos Logo" />
        </a>

        <button aria-label="Iniciar sesión">
          <a href="/login" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-[#111C85]">INICIA SESIÓN</span>
            <img
              src="/icons/user.svg"
              className="w-auto h-7 p-1 bg-[#111C85] rounded-full"
              alt=""
              aria-hidden="true"
            />
          </a>
        </button>
      </nav>

      <nav className="flex items-center justify-center gap-36 mt-4" aria-label="Secundaria">
        <ul className="flex items-center gap-8 justify-center">
          {navigationItems.map((item, index) => (
            <>
              {index > 0 && <Divider key={`divider-${index}`} />}
              <NavItem key={item.label} href={item.href} label={item.label} />
            </>
          ))}
        </ul>

        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center bg-white py-2 border-2 border-[#111C85] rounded-lg px-4 gap-2"
        >
          <button type="submit" aria-label="Buscar">
            <img src="/icons/search.svg" alt="" aria-hidden="true" />
          </button>
          <input
            className="outline-none w-[18rem]"
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            aria-label="Campo de búsqueda"
          />
        </form>
      </nav>
    </header>
  );
}
