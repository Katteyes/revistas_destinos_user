import { useState, useEffect, useRef } from 'react';
import React from 'react';

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const Divider = () => <div className="h-3.5 md:h-5 w-0.5 bg-blue-800" aria-hidden="true" />;

  const navigationItems = [
    { label: 'INICIO', href: '/' },
    { label: 'ACERCA DE', href: '/acerca-de' },
    { label: 'REVISTAS', href: '/revistas' },
    { label: 'CONTACTO', href: '/contacto' },
  ];
 
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


return (  
<header role="banner">
<nav className="w-full px-5 md:px-32 pt-10" aria-label="Principal">
  <div className="relative w-full flex items-center py-2">

  <div className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 mb-10">
    <div className="h-18 w-22 md:h-30 md:w-35 lg:h-18 lg:w-40 flex items-center justify-center mr:2 md:mr-5  mt-15">
      <img src="/logoPerú.png" alt="Logo Perú" className="h-full object-contain" />
    </div>

    <a href="/" className="h-25 w-28 md:h-30 md:w-40 lg:h-40 lg:w-50 flex items-center justify-center">
      <img src="/logoDestinos.png" alt="Logo destinos" className="h-full object-contain" />
    </a>

    <div className="h-18 w-22 md:h-30 md:w-35 lg:h-33 lg:w-42 flex items-center justify-center ml:2 md:ml-5 mt-13">
      <img src="/logoCuba.png" alt="Logo Cuba" className="h-full object-contain" />
    </div>
  </div>

    <div className="ml-auto hidden xl:flex">
      <a
        href="/login"
        className="flex text-sm items-center gap-1.5 px-4 py-2 hover:bg-[#f8f0e3]/30 bg-[#FFFFFF] border-[0.1rem] border-[#111C85] rounded-3xl transition-all duration-300 whitespace-nowrap "
      >
        <span className="text-[#000000] hover:text-[#111C85]">Iniciar sesión</span>
        <img
          src="/icons/user.svg"
          className="w-auto h-7 p-0.5 bg-[#111C85] rounded-full"
          alt="user"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</nav>

<nav
  className="flex flex-row items-center justify-between gap-5 md:gap-8 top-15 md:top-20 lg:top-15 px-5 bg-transparent relative z-50 p-0 w-full "
  aria-label="Secundaria"
>

  <ul className="flex flex-row items-center py-3 gap-1 max-w-4xl mx-auto">
    {navigationItems.map((item, index) => (
      <React.Fragment key={item.label}>
        {index > 0 && (
          <div className="block">
            <Divider />
          </div>
        )}

      <li className="relative group">
        <a
          href={item.href}
          className={`text-[9px] md:text-base lg:text-[18px] py-5 px-[3px] md:px-4 lg:px-6 rounded-sm transition-colors duration-300 ${
          window.location.pathname === item.href
          ? "bg-[#f8f0e3]/20 text-[#111C85]"
          : "text-[#000000] hover:bg-[#f8f0e3]/30 hover:text-[#111C85]"
          }`}
        >
          {item.label}
          <span
            className={`block absolute -bottom-1 h-[2px] bg-[#111C85]/80 rounded-full transition-all duration-300 ${
            window.location.pathname === item.href
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
            }`}
          ></span>
        </a>
      </li>
      </React.Fragment>
    ))}
  </ul>

  {/* Iniciar sesión responsive */}
  <div className="flex xl:hidden items-center pr-1 md:pr-6 lg:pr-12">
    <a href="/login" aria-label="Iniciar sesión" >
      <img
        src="/icons/user.svg"
        className="h-7 w-7 sm:h-9 sm:w-9 md:h-10 md:w-10 ml-2 bg-[#111C85] rounded-full"
        alt="Iniciar sesión"
      />
    </a>
  </div>
</nav>
</header>
);
}