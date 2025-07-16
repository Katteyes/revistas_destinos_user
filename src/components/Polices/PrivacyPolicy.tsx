import Footer from '../LandingPage/Footer';
import Header from '../LandingPage/Header';

const PrivacyPolicy = () => {
  return (
    <>
      

    <section className=" bg-[#fff8f8fa] ">
     <Header /> 
      <div className='px-6 md:px-20 lg:px-40 py-8 text-justify text-sm leading-relaxed text-gray-800 '>
        <h1 className=" text-[28px] font-bold text-center mb-6 mt-12 text-[#111C85] ">Política de Privacidad</h1>

        <p>En Revista Destinos Turismo, nos comprometemos con la protección de tu privacidad y al tratamiento responsable de tus datos personales. Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos como usuario.</p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Responsable del Tratamiento</h2>
        <p>Atocha Corporation S.A.C., RUC 20392664662, con domicilio en Las Trinitarias 174 - Piso 6, Salamanca de Monterrico - Lima, es responsable del tratamiento de los datos personales conforme al RGPD, la LOPDGDD y la Ley N.º 29733.</p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Datos Recopilados</h2>
        <ul className="list-disc list-inside pl-3">
            <li>Nombre completo</li>
            <li>Correo electrónico</li>
            <li>Teléfono</li>
            <li>País y ciudad</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Finalidad del Tratamiento</h2>
        <ul className="list-disc list-inside pl-3">
            <li>Atención de consultas y contacto con lectores, anunciantes o patrocinadores.</li>
            <li>Envío de boletines, promociones o novedades editoriales.</li>
            <li>Publicación de contenido con previo consentimiento.</li>
            <li>Distribución de la revista en formato físico y/o digital.</li>
        </ul>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Base Legal</h2>
        <p>El tratamiento se basa en tu consentimiento expreso o en el interés legítimo para fines editoriales o relacionados con el sector turístico.</p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Conservación de Datos</h2>
        <p>Conservamos tus datos mientras exista una relación activa contigo o haya interés en nuestros servicios. Luego serán eliminados de forma segura.</p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Comunicación de Datos</h2>
        <p>No compartimos tus datos con terceros, salvo obligación legal o consentimiento explícito para colaboraciones o publicaciones.</p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Tus Derechos</h2>
        <ul className="list-disc list-inside pl-3">
            <li >Acceder a tus datos personales</li>
            <li>Solicitar rectificación, supresión o limitación del tratamiento</li>
            <li>Oponerte al tratamiento</li>
            <li>Solicitar portabilidad de tus datos</li>
            <li>Presentar reclamación ante la Autoridad Nacional de Protección de Datos Personales</li>
        </ul>

        <p className="mt-2">Puedes ejercer tus derechos escribiendo a: <a href="mailto:areamanager@destinosrevistaturismo.com" className="text-blue-600 underline">areamanager@destinosrevistaturismo.com</a></p>

        <h2 className="text-lg font-semibold mt-6 mb-2 text-[#111C85]">Veracidad de los Datos</h2>
        <p>El usuario garantiza que los datos proporcionados son veraces y actualizados. En caso de proporcionar datos de terceros, asegura haber obtenido su consentimiento previo e informado.</p>

        <hr className="my-6 border-gray-300" />

        <p className="text-center text-sm text-gray-600">Última actualización: [07/06/2025]</p>
      </div>
    </section>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;