import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';

export default function Contacto() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center max-w-4xl mx-auto px-4 py-8 my-12">
        <div className="space-y-6 w-full max-w-md">
          <div className="flex flex-col space-y-2 items-center">
            <h2 className="font-bold">Teléfono</h2>
            <div className="bg-[#111C85] text-white px-4 py-2 w-full max-w-[12rem] text-center">
              <a href="tel:+34664349972" className="block">
                +34 664 34 99 72
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <h2 className="font-bold">Correo</h2>
            <div className="bg-[#111C85] text-white px-2 py-2 w-full max-w-md text-center overflow-hidden">
              <a href="mailto:areamanager@destinosrevistaturismo.com" className="block">
                areamanager@destinosrevistaturismo.com
              </a>
            </div>
          </div>
        </div>

        <article className="flex flex-col  max-w-[794px] mt-14">
          <h1 className="text-3xl text-[#111C85] font-extrabold mb-4 text-center">
            Somos Destinos Turismo
          </h1>
          <p className="font-light mb-2">
            Somos una plataforma dedicada a la promoción de turismo y el desarrollo global, con
            proyección nacional e internacional.En Destinos Turismo conectamos, promovemos y
            proyectamos lo mejor de nuestra tierra hacia el mundo.
          </p>
        </article>

        <div className="flex gap-4 mt-10 justify-center">
          <a
            href="https://www.facebook.com/destinosturism?locale=es_LA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <div className="w-12 h-12 bg-[#111C85] rounded-full hover:bg-[#1a2aa0] transition-colors flex items-center justify-center">
              <img src="/socials/facebook.svg" className="w-10 h-10 p-1.5" alt="Facebook" />
            </div>
          </a>
          <a
            href="https://instagram.com/destinosturismo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <div className="w-12 h-12 bg-[#111C85] rounded-full hover:bg-[#1a2aa0] transition-colors flex items-center justify-center">
              <img src="/socials/instagram.svg" className="w-10 h-10 p-1.5" alt="Instagram" />
            </div>
          </a>
          <a
            href="https://wa.me/34664349972"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <div className="w-12 h-12 bg-[#111C85] rounded-full hover:bg-[#1a2aa0] transition-colors flex items-center justify-center">
              <img src="/socials/whatsapp.svg" className="w-10 h-10 p-1.5" alt="WhatsApp" />
            </div>
          </a>
          <a href="mailto:areamanager@destinosrevistaturismo.com" aria-label="Email">
            <div className="w-12 h-12 bg-[#111C85] rounded-full hover:bg-[#1a2aa0] transition-colors flex items-center justify-center">
              <img src="/socials/gmail.svg" className="w-10 h-10 p-1.5" alt="Email" />
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
