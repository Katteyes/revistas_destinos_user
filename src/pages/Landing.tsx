import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import Hero from '../components/LandingPage/Hero';
import CookieConsent from '../components/LandingPage/CookieConsent';

function LandingPage() {
  return (
    <>
      <section className="bg-[#FFF8F8] min-h-screen">
        <Header />
        <article className="flex mx-auto gap-8 justify-center items-start mt-20 p-12 lg:p-0 mb-20">
          <Hero />
        </article>
        <Footer />
      </section>
      <CookieConsent />
    </>
  );
}

export default LandingPage;
