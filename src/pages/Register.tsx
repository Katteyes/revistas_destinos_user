import { useNavigate } from 'react-router-dom';
import { useRegisterStore } from '../stores/authStore';
import { useState } from 'react';

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
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleRegister = async () => {
    try {
      await register();
      navigate('/login');
    } catch (error) {
      console.error('Error en registro:', error);
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg('Error desconocido al registrarse')
      }
    }
  };

  return (
    <div className="min-h-screen bg-[rgba(199, 131, 23, 0.12)] flex items-center justify-center px-4 px-[8%] py-12">
      <div className="bg-[#f5ecdc] rounded-3xl shadow-lg w-full max-w-6xl flex flex-col md:flex-row p-6 sm:p-10 md:p-16 md:min-h-[600px] gap-10">

        {/* Lado Izquierdo */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left gap-4">
          <img
            src="/logoDestinos.png"
            alt="Destinos Perú"
            className="w-48 md:w-[380px] md:-ml-2"
          />
          <h2 className="text-2xl font-semibold">REGISTRARSE</h2>
          <p className="text-sm text-gray-600">Ingresa tus datos correctamente</p>
        </div>

        {/* Lado Derecho */}
        <div className="flex flex-col items-center w-full">
          <div className="w-full max-w-[320px] sm:max-w-[400px] flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Ingrese tu nombre completo"
              className="p-3 border rounded-xl w-full bg-white border-gray-400"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              className="p-3 border rounded-xl w-full bg-white border-gray-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            {/* Country y City */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                placeholder="País"
                className="p-3 border rounded-xl w-full bg-white border-gray-400"
                value={country}
                onChange={e => setCountry(e.target.value)}
              />
              <input
                placeholder="Ciudad"
                className="p-3 border rounded-xl w-full bg-white border-gray-400"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
            </div>

            {/* Company y Position */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Empresa"
                className="p-3 border rounded-xl w-full bg-white border-gray-400"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
              <input
                type="text"
                placeholder="Cargo"
                className="p-3 border rounded-xl w-full bg-white border-gray-400"
                value={position}
                onChange={e => setPosition(e.target.value)}
              />
            </div>

            <input
              type="text"
              placeholder="Teléfono"
              className="p-3 border rounded-xl w-full bg-white border-gray-400"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Ingresa tu nueva contraseña"
              className="p-3 border rounded-xl w-full bg-white border-gray-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <div className="flex justify-center pt-2 mb-8">
              <button
                className="bg-blue-900 text-white font-semibold py-3 w-full max-w-[200px] sm:w-[180px] rounded-full
              transform transition duration-200 hover:scale-[0.97] active:scale-[0.95] 
              shadow-md hover:shadow-lg cursor-pointer" 
                onClick={handleRegister}
              >
                REGISTRAR
              </button>
            </div>
            {errorMsg && (
                <p className="text-red-600 text-sm text-center">{errorMsg}</p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
