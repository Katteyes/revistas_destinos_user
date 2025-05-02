import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';

function LandingPage() {
  return (
    <>
      <section className="bg-[#FFF8F8] min-h-screen">
        <Header />
        <article className="flex mx-36 gap-24 justify-center items-start my-14">
          <Hero />
        </article>
        <Footer />
      </section>
    </>
  );
}

export default LandingPage;
