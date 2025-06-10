import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
   
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

     
      <div className="relative w-full max-w-4xl mx-4 md:mx-auto m-6 rounded-lg bg-white p-7 shadow-lg z-50 md:flex md:items-center md:justify-between md:gap-6 animate-fadeIn">
        {/* Texto */}
        <div className="text-sm md:text-base text-gray-800 mb-4 md:mb-0">
          <p>
            Utilizamos cookies para mejorar tu experiencia en nuestra plataforma de
            noticias, turismo y revistas. Estas nos ayudan a entender mejor tus
            intereses para ofrecerte contenido relevante. Puedes aceptar o rechazar
            su uso. Consulta nuestra{" "}
            <a
              href="/politica-de-cookies"
              className="text-blue-900 underline hover:text-blue-800"
            >
              Política de cookies
            </a>
            .
          </p>
        </div>

        {/* Botones */}
        <div className="flex gap-3 justify-end flex-shrink-0">
          <button
            onClick={() => handleConsent(false)}
            className="px-6 py-3 text-sm rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
          >
            Rechazar
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-6 py-3 text-sm rounded-full bg-[#323c96] text-white hover:bg-blue-700 transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
