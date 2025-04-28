import { useNavigate } from 'react-router-dom';
import { useRegisterStore } from '../stores/authStore';

export default function Register() {
  const {
    fullName,
    email,
    country,
    city,
    company,
    position,
    phone,
    password,
    setFullName,
    setEmail,
    setCountry,
    setCity,
    setCompany,
    setPosition,
    setPhone,
    setPassword,
    register,
  } = useRegisterStore();
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register();
      navigate('/login');
    } catch (error) {
      console.error('Error en registro:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center">
      <div className="bg-[#f5ecdc] h-[auto] p-16 rounded-3xl flex shadow-lg w-[1200px] max-w-full">
        {/* Lado Izquierdo */}
        <div className="w-1/2 pr-10 flex flex-col justify-center ">
          <img
            src="/logoDestinos.png"
            alt="Destinos Perú"
            className="w-[380px] h-auto max-w-none mb-4 -ml-16 "
          />
          <h2 className="text-xl font-apple-system mb-2 ">Registrarse</h2>
          <p className="text-sm text-gray-600 ">Ingresa tus datos correctamente</p>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 flex flex-col justify-center p-5">
          <input
            type="text"
            placeholder="Ingrese tu nombre completo"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <div className="flex space-x-4 mb-4">
            <input
              id="select1"
              name="select1"
              placeholder="Pais"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
              value={country}
              onChange={e => setCountry(e.target.value)}
            ></input>

            <input
              id="select2"
              name="select2"
              placeholder="Ciudad"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
              value={city}
              onChange={e => setCity(e.target.value)}
            ></input>
          </div>

          <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="Empresa"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Cargo"
              className="p-3 border rounded-xl w-1/2 bg-[#FFFFFF] border-gray-400"
              value={position}
              onChange={e => setPosition(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Teléfono"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ingresa tu nueva contraseña"
            className="p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400 mb-4"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-900 text-white font-semibold py-3 w-80 ml-22 cursor-pointer"
            onClick={handleRegister}
          >
            REGISTRAR
          </button>
        </div>
      </div>
    </div>
  );
}
