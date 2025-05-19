import { useState, useEffect, useRef } from 'react';
export default function Header() {
  const [searchText, setSearchText] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

 //BÚSQUEDA 
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscando:', searchText);
  };

  // ITEMS 
  const navigationItems = [
    { label: 'INICIO', href: '/' },
    { label: 'ACERCA DE', href: '/acerca-de' },
    { label: 'REVISTAS', href: '/revistas' },
    { label: 'CONTACTO', href: '/contacto' },
  ];
 
  // Función para detectar clicks fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Función para cerrar el menú
    useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Función para detectar cada vez que se hace scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        const currentScrollY = window.scrollY;
        setIsVisible(lastScrollY > currentScrollY || currentScrollY < 10);
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // LINKS LATERALES 
  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/destinosturism?locale=es_LA', iconSrc: '/socials/facebook.svg'  },
    { label: 'Instagram', href: 'https://instagram.com', iconSrc: '/socials/instagram2.svg' },
    { label: 'Youtube', href: 'https://www.youtube.com/@RevistaDestinosPer%C3%BA', iconSrc: '/socials/youtube.svg' },
  ];

  return (  
    <header role="banner">
      {/* nav principal */} 
      <nav className="flex justify-between items-center px-5 md:px-32 pt-8" aria-label="Principal">
        {/* REDES SOCIALES */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center w-10 h-10 mx-5 p-2 cursor-pointer bg-[#111C85] border rounded-[0.2rem] border-[#ffffffdd] hover:bg-[#1a2aa0] transition-colors"
            aria-label="Mostrar redes sociales"
            aria-expanded={dropdownOpen}
          >
            <img src="/icons/plus.svg" alt="Redes Sociales" aria-hidden="true"  />
          </button>

          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-38 bg-white/98 border border-gray-300 rounded-lg shadow-lg z-[60]">
              <ul className="flex flex-col">
                {socialLinks.map(({ label, href, iconSrc }) => (
                  <li key={label} className="flex items-center">
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-4 w-full text-gray-800 transition-all duration-300 hover:bg-[#FFD54F] hover:backdrop-blur-md rounded-md"
                    >
                      <img src={iconSrc} alt={label} className="w-6 h-6 " />
                      <span className="hover:text-[#111C85]">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* LOGO */}
        <a href="/">
          <img src="/logoDestinos.png" className="w-auto h-18 md:h-24 " alt="Destinos Logo" />
        </a>
        {/* INCIO DE SESIÓN */}
        <button aria-label="Iniciar sesión">
          <a href="/login" className="hidden md:flex text-sm items-center gap-2 px-4 py-2 hover:bg-[#f0f4ff] bg-[#FFFFFF] border-[0.1rem] border-[#111C85] rounded-3xl  overflow-hidden transition-all duration-300">
            <span className="text-[#111C85] hover:text-[#2c3052]">Iniciar sesión</span>
            <img
              src="/icons/user.svg"
              className="w-auto h-7 p-1 bg-[#111C85] rounded-full"
              alt=""
              aria-hidden="true"
            />
          </a>
        </button>
        {/* BOTÓN MENÚ */}
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" className="md:hidden flex flex-shrink-0 items-center justify-center w-10 h-10 mx-5 p-2 cursor-pointer border rounded-[0.2rem] border-[#ffffffdd] bg-[#111C85] hover:bg-[#1a2aa0] transition-colors">
          <img src="/icons/menu.svg" alt="Menú" />
        </button>
      </nav>

      {/* nav secundario */}       
      <nav className={`flex flex-col items-center justify-center gap-30 py-3 md:top-6 transform transition-transform duration-600
        ${menuOpen && isVisible|| 'hidden'} fixed top-25 right-0 md:flex md:flex-row md:gap-30 md:bg-transparent md:relative left-0 z-50 p-4 md:p-0`} 
        aria-label="Secundaria"
      >
      {/* BARRA DE NAVEGACIÓN */}
        <ul className="flex flex-col md:flex-row items-end md:items-center w-full md:w-auto gap-3 md:justify-center px-5 md:px-2  ">
          {navigationItems.map((item  ) => (    
            <>            
              <li key={item.label} className="relative group ">
              <a
                href={item.href}
                className={`md:text-sm text-[0.7rem] py-2 px-4 rounded-xl transition-colors duration-300 ${
                  window.location.pathname === item.href
                    ? "bg-[#f0f4ff] text-[#111C85]"
                    : "bg-blue-900 text-white hover:bg-[#f0f4ff] hover:text-[#111C85]"
                }`}
              >
              {item.label}
              </a>
              </li>
            </>
          ))}
        </ul>
        {/* BARRA DE BÚSQUEDA */}
        <form
          onSubmit={handleSearch}
          className={"lg:flex hidden items-center bg-white border-[0.1rem] border-[#111C85] rounded-xl gap-2 px-4 py-2 overflow-hidden transition-all duration-300"} 
        >
          <button type="submit" aria-label="Buscar">
            <img src="/icons/search.svg" alt="" aria-hidden="true"/>
          </button>
          
          <input
            className='outline-none w-[18rem]'
            type="text"
            placeholder="Buscar..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            aria-label="Campo de búsqueda"
          />
        </form>
      </nav>
    </header>
  );
}