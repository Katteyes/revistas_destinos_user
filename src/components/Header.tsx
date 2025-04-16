import React from "react";

function Header() {
  const links = ["INICIO", "ACERCA DE", "REVISTAS", "CONTACTO"];

  return (
    <header className="w-full justify-center">
      <nav
        className="text-xl text-black space-x-8 font-inter flex items-center"
        style={{ fontWeight: 400 }}
      >
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href="">{link}</a>
            {index < 3 && <div className="bg-[#111c85] w-0.5 h-6"></div>}
          </React.Fragment>
        ))}
      </nav>
    </header>
  );
}

export default Header;
