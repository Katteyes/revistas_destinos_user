import Header from '../components/LandingPage/Header';
import Footer from '../components/LandingPage/Footer';

const REVISTAS = [
  { id: 1, image: '/magazine/magazineArequipa.webp', title: 'REVISTAS DESTINOS - AREQUIPA' },
  { id: 2, image: '', title: '' },
  { id: 3, image: '', title: '' },
  { id: 4, image: '', title: '' },
  { id: 5, image: '', title: '' },
  { id: 6, image: '', title: '' },
  { id: 7, image: '', title: '' },
  { id: 8, image: '', title: '' },
];

export default function Revistas() {
  return (
    <>
      <Header />
      <section className="my-16 ">
        <h1 className="text-[#111C85] font-medium text-3xl max-w-sm text-center mx-auto mb-8">
          REVISTAS DESTINOS TURISMO
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 px-4 lg:px-12 max-w-7xl mx-auto">
          {REVISTAS.map(revista => (
            <div
              key={revista.id}
              className="bg-[#C783175E] h-92 rounded-3xl justify-center items-center flex flex-col"
            >
              {revista.image && (
                <>
                  <img src={revista.image} className="p-4" alt={`Revista ${revista.title}`} />
                  <span className="text-[#111C85] -mt-2 text-[12px] font-bold">
                    {revista.title}
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
