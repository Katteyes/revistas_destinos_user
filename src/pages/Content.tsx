import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import Content from '../components/ContentPage/ContenPage';


function ContentPage() {
  return (
    <>
      <section className="bg-[#FFF8F8] min-h-screen">
        <Header />
        <article className="flex mx-auto gap-8 justify-center items-start my-14 flex-wrap">
          <Content />
        </article>
        <Footer />
      </section>
    </>
  );
}

export default ContentPage;
