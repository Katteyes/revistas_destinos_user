import Logo1 from "/destinos.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center">
      <div className="bg-[#f5ecdc] h-[auto] p-16 rounded-3xl flex shadow-lg w-[1200px] max-w-full">
        {/* Lado Izquierdo */}
        <div className="w-1/2 pr-10 flex flex-col justify-center ">
          <img
            src={Logo1}
            alt="Destinos Perú"
            className="w-[380px] h-auto max-w-none mb-4 -ml-16 "
          />
          <h2 className="text-xl font-apple-system mb-2 ">Registrarse</h2>
          <p className="text-sm text-gray-600 ">
            Ingresa tus datos correctamente
          </p>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 flex flex-col justify-center p-5">
          <input
            type="text"
            placeholder="Ingrese tu nombre completo"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
          />
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
          />

          <div className="flex space-x-4 mb-4">
            <select
              id="select1"
              name="select1"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
            >
              <option value="" disabled selected>
                País
              </option>
              <option value="opcion1">Opción 1</option>
              <option value="opcion2">Opción 2</option>
              <option value="opcion3">Opción 3</option>
            </select>

            <select
              id="select2"
              name="select2"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
            >
              <option value="" disabled selected>
                Cuidad
              </option>
              <option value="opcionA">Opción A</option>
              <option value="opcionB">Opción B</option>
              <option value="opcionC">Opción C</option>
            </select>
          </div>

          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Compañía"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
            />
            <input
              type="text"
              placeholder="Cargo"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
            />
          </div>

          <input
            type="text"
            placeholder="Teléfono"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
          />
          <input
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
          />
          <button
            className="bg-blue-900 text-white font-semibold py-3 w-80 ml-22 cursor-pointer"
            onClick={() => alert("¡Te registraste! 🎉")}
          >
            REGISTRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
