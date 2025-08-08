/* eslint-disable no-irregular-whitespace */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect, useRef } from 'react';
import React from 'react';
import { motion } from "framer-motion";
import { useLoginStore } from '../../stores/authStore';
import { Link } from 'react-router-dom';

export default function Header() {
    const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
    const [userDropdownOpenDesktop, setUserDropdownOpenDesktop] = useState(false);
    const [userDropdownOpenMobile, setUserDropdownOpenMobile] = useState(false);
    const [userDropdownOpenTablet, setUserDropdownOpenTablet] = useState(false);
    
    const userDropdownRefDesktop = useRef<HTMLDivElement>(null);
    const userDropdownRefMobile = useRef<HTMLLIElement>(null);
    const userDropdownRefTablet = useRef<HTMLDivElement>(null);
    const moreDropdownRef = useRef<HTMLLIElement>(null); 
  
    const name = useLoginStore(state => state.name);
    const logout = useLoginStore(state => state.logout); 
    const Divider = () => <div className="h-3.5 md:h-5 w-[0.4px] md:w-0.5 bg-blue-800" aria-hidden="true" />;
    const navigationItems = [
      { label: 'INICIO', href: '/' },
      { label: 'ACERCA DE', href: '/acerca-de' },
      { label: 'REVISTAS', href: '/revistas' },
      { label: 'CONTACTO', href: '/contacto' }, 
    ];
   
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        const target = event.target as Node;
    
        if (
          userDropdownRefMobile.current &&
          !userDropdownRefMobile.current.contains(target)
        ) {
          setUserDropdownOpenMobile(false);
        }
    
        if (
          userDropdownRefTablet.current &&
          !userDropdownRefTablet.current.contains(target)
        ) {
          setUserDropdownOpenTablet(false);
        }
    
        if (
          moreDropdownRef.current &&
          !moreDropdownRef.current.contains(target)
        ) {
          setMoreDropdownOpen(false);
        }
      }
    
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);    
    
  
  return ( 
  <header role="banner">
  <nav className="w-full px-5 md:px-16 pt-7 sm:pt-10" aria-label="Principal">
    <div className="relative w-full flex items-center py-1">
      {/* Logos */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute left-1/2 top-5 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3"
      >
      <div className="h-18 w-22 sm:h-22 sm:w-30 md:h-30 md:w-35 lg:h-18 lg:w-40 flex items-center justify-center mr:2 md:mr-5 mt-15">
        <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }} 
            src="/logoPerú.png" alt="Logo Perú" 
            className="h-full object-contain" 
        />
      </div>

      <Link to="/" className="h-24 w-28 sm:h-28 sm:w-35 md:h-30 md:w-40 lg:h-40 lg:w-50 flex items-center justify-center"> {/* CAMBIO: to en vez de href */}
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }} 
          src="/logoCuba.png" alt="Logo Cuba" 
          className="h-full object-contain" 
        />
      </Link>

      <div className="h-18 w-22 sm:h-22 sm:w-30 md:h-30 md:w-35 lg:h-33 lg:w-42 flex items-center justify-center ml:2 md:ml-5 mt-13">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }} 
          src="/logoDestinos2.png" alt="Logo destinos " 
          className="h-full object-contain" 
        />
      </div>

      </motion.div>

      {/* Iniciar sesión para pantallas grandes*/}
      <div className="ml-auto hidden xl:flex relative" ref={userDropdownRefDesktop}> 
      {name ? (
      <>
          <button
            onClick={() => {
              setUserDropdownOpenDesktop(!userDropdownOpenDesktop);
              setMoreDropdownOpen(false); 
            }}
            className="flex text-[17px] items-center gap-1.5 px-4 py-1.5 bg-white border-[#111C85] rounded-3xl border-[0.1rem] hover:bg-[#f8f0e3]/10 transition-all duration-300"
          >
            <span className="text-[#111C85] font-semibold">Bienvenido, {name.split(' ')[0]}</span>
            <img
              src="/icons/user.svg"
              className="w-auto h-7 p-0.5 bg-[#111C85] rounded-full"
              alt="user"
              aria-hidden="true"
            />
          </button>
          {userDropdownOpenDesktop  && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-red-900 hover:bg-red-800 border border-gray-300 rounded-3xl shadow-lg z-50">
              <button
                onClick={() => {
                  logout();
                  setUserDropdownOpenDesktop(false);
                }}
                className="flex items-center gap-2 w-full text-center px-6 py-2 text-white rounded-2xl "
              >
                <img
                  src="/icons/exit.svg"
                  className="w-5 h-5"
                  alt="Cerrar sesión"
                />
                <span>Cerrar sesión</span>
              </button>
            </div>
          )}
      </>
      ) : (
          <Link 
              to="/login" 
              className="flex text-[17px] items-center gap-1.5 px-4 py-2 hover:bg-[#f8f0e3]/10 bg-[#FFFFFF] border-[0.1rem] border-[#111C85] rounded-3xl transition-all duration-300 whitespace-nowrap"
          > 
            <span className="text-[#111C85] font-semibold">Iniciar sesión</span>
            <img
              src="/icons/user.svg"
              className="w-auto h-7 p-0.5 bg-[#111C85] rounded-full"
              alt="user"
              aria-hidden="true"
            />
          </Link>
        )}
      </div> 
    </div>
  </nav>
  
  <nav className="flex flex-row items-center justify-between gap-2 top-17 sm:top-18 md:top-20 px-1.5 sm:px-5 bg-transparent relative z-50 w-full"
       aria-label="Secundaria"
  >
  <div className="flex flex-row items-center justify-between w-full ">
    {/* Menú reducido para móviles */}
    <ul className="flex pt-2 sm:hidden items-center gap-1 w-full px-1 pb-6 justify-center">
      {navigationItems.slice(0, 3).map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <Divider />}
          <li className="relative group">
            <Link 
                to={item.href} 
                className={`text-[13px] px-1 rounded-sm transition-colors duration-300 ${
                window.location.pathname === item.href
                  ? "bg-[#f8f0e3]/20 text-[#111C85]"
                  : "text-[#000000] hover:bg-[#f8f0e3]/30 hover:text-[#111C85]"
                }`}
            > 
            {item.label}
            </Link>
          </li>
        </React.Fragment>
      ))} 
      <Divider />
      <li className="relative group" ref={moreDropdownRef}> 
        <div>
          <button
            onClick={() => {
              setMoreDropdownOpen(!moreDropdownOpen);
              setUserDropdownOpenMobile(false); 
            }}
            className="text-[13px] px-1 py-1 rounded-sm hover:bg-[#f8f0e3]/10 hover:text-[#111C85] transition-all"
          >
            MÁS ▾
          </button>
        </div>
  
        {moreDropdownOpen && (
          <ul className="absolute left-[-55px] top-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-50">
            {navigationItems.slice(3).map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && (
                <li className="h-[1px] bg-blue-800 my-1 mx-2 rounded-sm" />
                )}
                <li>  
                  <Link 
                    to={item.href} 
                    onClick={() => setMoreDropdownOpen(false)}
                    className="block px-4 py-2 text-[13px] text-black hover:bg-[#f8f0e3]/50"
                  > 
                    {item.label}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        )}
      </li>
      {/* Iniciar sesión para móviles */}
      <li ref={userDropdownRefMobile} className="relative group pr-1">
        {name ? (
          <>
            <button
              onClick={() => {
                setUserDropdownOpenMobile(!userDropdownOpenMobile);
                setMoreDropdownOpen(false);
              }}
              className="flex items-center justify-center"
              aria-label="Menú de usuario móvil"
            >
              <img
                src="/icons/user.svg"
                className="h-6 w-6 bg-[#111C85] rounded-full hover:bg-[#0a1ab9]"
                alt="user"
              />
            </button>
            {userDropdownOpenMobile && (
              <div className="absolute z-50 top-full mt-1 left-[-2px]">
                <button
                  onClick={() => {
                    logout();
                    setUserDropdownOpenMobile(false);
                  }}
                  className="flex items-center justify-center h-6 w-6 pl-1 rounded-full bg-red-900 hover:bg-red-700"
                >
                  <img src="/icons/exit.svg" className="h-7 w-7" alt="Cerrar sesión" />
                </button>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <img
              src="/icons/user.svg"
              className="h-6 w-6 bg-[#111C85] rounded-full"
              alt="Iniciar sesión"
            />
          </Link>
        )}
      </li>

    </ul>
  
    {/* Menú completo para pantallas grandes */}
    <ul className="hidden sm:flex items-center gap-1 pt-10 xl:pt-0 w-full justify-center px-8 pb-15 sm:pl-23 md:pl-25 lg:pl-32 xl:pl-10 ">
      {navigationItems.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <Divider />}
          <li className="relative group">
            <Link 
                  to={item.href} 
                  className={`text-[17.5px] md:text-[19px] lg:text-[22px] px-2 md:px-4 lg:px-6 rounded-sm transition-colors duration-300 ${
                window.location.pathname === item.href
                  ? "bg-[#f8f0e3]/20 text-[#111C85]"
                  : "text-[#000000] hover:bg-[#f8f0e3]/30 hover:text-[#111C85]"
              }`}
              >
              {item.label}
            </Link>
          </li>
        </React.Fragment>
      ))}
    </ul>
  </div>

  {/* Iniciar sesión para sm+ */}
  <div className="hidden sm:flex xl:hidden relative items-center mb-20 sm:mb-6 md:mb-8 pr-3 md:pr-6 lg:pr-11" ref={userDropdownRefTablet}>
    {name ? (
      <>
        <button
          onClick={() => {
            setUserDropdownOpenTablet(!userDropdownOpenTablet);
            setMoreDropdownOpen(false);
          }}
          className="flex items-center justify-center "
          aria-label="Menú de usuario tablet"
        >
          <img
            src="/icons/user.svg"
            className="h-9 w-10 md:h-10 md:w-12 lg:h-12 lg:w-14 bg-[#111C85] rounded-full hover:bg-[#0a1ab9]"
            alt="user"
          />
        </button>
        {userDropdownOpenTablet && (
          <div className="absolute z-50 top-auto mt-1 -left-10.5 md:-left-12 lg:-left-14">
            <button
              onClick={() => {
                logout();
                setUserDropdownOpenTablet(false);
              }}
              className="h-9 w-10 md:h-9 md:w-11 lg:h-11 lg:w-13 flex items-center pl-1.5 justify-center rounded-full bg-red-900 hover:bg-red-700"
            >
              <img src="/icons/exit.svg" className="h-9 w-10 md:h-9 md:w-11 lg:h-11 lg:w-13" alt="Cerrar sesión" />
            </button>
          </div>
        )}
      </>
    ) : (
      <Link to="/login" aria-label="Iniciar sesión">
        <img
          src="/icons/user.svg"
          className="h-9 w-10 md:h-10 md:w-12 lg:h-12 lg:w-14 bg-[#111C85] rounded-full"
          alt="Iniciar sesión"
        />
      </Link>
    )}
  </div>
  </nav>
  </header>
  );
}
