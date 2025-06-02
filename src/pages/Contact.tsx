import Footer from '../components/LandingPage/Footer';
import Header from '../components/LandingPage/Header';
import React, { memo } from 'react';

interface ContactItemProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

const ContactItem = memo<ContactItemProps>(({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] mx-auto max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow mt-2.5 mx-auto tracking-tight text-gray-900 max-md:mt-10">
      <div className="flex gap-5 text-2xl font-bold leading-9">
        <img
          src={icon}
          alt={`${title} icon`}
          className="shrink-0 aspect-square w-[54px]"
          loading="lazy"
        />
        <h3 className="flex-auto self-start">{title}</h3>
      </div>
      <div className="pr-2px flex-auto self-start text-xl leading-8 px-20 w-auto">{content}</div>
    </div>
  </div>
));

ContactItem.displayName = 'ContactItem';

const CONTACT_DATA = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/18179b6ac038d84423d4ee4c96386281587fa212096dec52fd422ee065082649',
    title: 'Llámanos',
    content: '+34 664 349 972',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c9791065adc6c16870ff4a2dc0b81db91ca10e8583d26b74df0f342958a2a420',
    title: 'Envíanos un email',
    content: 'areamanager@destinosrevistaturismo.com',
  },
] as const;

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12 mt-17 mb-16">
        <section className="flex flex-col text-center text-[#111C85] max-w-[1266px] mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter leading-[64.8px] max-md:text-4xl">
            Somos Destinos Turismo
          </h1>
          <p className="mt-8 text-xl tracking-normal text-black leading-8 max-w-[650px] mx-auto">
            Somos una plataforma dedicada a la promoción de turismo y el desarrollo global, con
            proyección nacional e internacional. En Destinos Turismo conectamos, promovemos y
            proyectamos lo mejor de nuestra tierra hacia el mundo.
          </p>
        </section>

        <section className="py-16">
          <div className="flex gap-8 max-md:flex-col max-md:gap-0">
            {CONTACT_DATA.map(item => (
              <ContactItem
                key={item.title}
                icon={item.icon}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
