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

  const [errorMsg, setErrorMsg] = useState('');
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
  });

  const isEmpty = (value: string) => value.trim() === '';
  const isValidEmail = (email: string) => /^\S+@\S+\.\S+$/.test(email);
  const isValidPassword = (password: string) => password.length >= 6;

  const isFormValid =
    !isEmpty(fullName) && isValidEmail(email) && !isEmpty(password) && isValidPassword(password);

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleRegister = async () => {
    try {
      await register();
      navigate('/login');
    } catch (error) {
      console.error('Error en registro:', error);
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg('Error desconocido al registrarse');
      }
    }
  };

  return (
    <div className="min-h-screen bg-[rgba(199, 131, 23, 0.12)] flex items-center justify-center px-4 py-12">
      <div className="bg-[#f5ecdc] rounded-3xl shadow-lg w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center p-6 sm:p-10 md:p-12 gap-10 min-h-[600px] animate-[fadeInLeft_1s_ease-out_forwards]">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center text-center gap-4">
          <img src="/logoDestinos.png" alt="Destinos Perú" className="w-48 md:w-[380px]" />
          <h2 className="text-2xl font-semibold">Registrarse</h2>
          <p className="text-sm text-gray-600">Ingresa tus datos correctamente</p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start h-full">
          <div className="w-full max-w-[320px] sm:max-w-[400px] flex flex-col gap-4">
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                placeholder="Ingrese tu nombre completo"
                className={`p-3 border rounded-xl bg-white ${
                  touched.fullName && isEmpty(fullName) ? 'border-red-500' : 'border-gray-400'
                }`}
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                onBlur={() => handleBlur('fullName')}
              />
              {touched.fullName && isEmpty(fullName) && (
                <p className="text-red-500 text-sm">Este campo es obligatorio.</p>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <input
                type="email"
                placeholder="Ingresa tu correo electrónico"
                className={`p-3 border rounded-xl bg-white ${
                  touched.email && (!isValidEmail(email) || isEmpty(email))
                    ? 'border-red-500'
                    : 'border-gray-400'
                }`}
                value={email}
                onChange={e => setEmail(e.target.value)}
                onBlur={() => handleBlur('email')}
              />
              {touched.email && isEmpty(email) && (
                <p className="text-red-500 text-sm">Este campo es obligatorio.</p>
              )}
              {touched.email && !isEmpty(email) && !isValidEmail(email) && (
                <p className="text-red-500 text-sm">Correo electrónico inválido.</p>
              )}
            </div>

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

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Empresa (opcional)"
                className="p-3 border rounded-xl w-full bg-white border-gray-400"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
              <input
                type="text"
                placeholder="Cargo (opcional)"
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

            <div className="flex flex-col space-y-1">
              <input
                type="password"
                placeholder="Ingresa tu nueva contraseña"
                className={`p-3 border rounded-xl bg-white ${
                  touched.password && (!isValidPassword(password) || isEmpty(password))
                    ? 'border-red-500'
                    : 'border-gray-400'
                }`}
                value={password}
                onChange={e => setPassword(e.target.value)}
                onBlur={() => handleBlur('password')}
              />
              {touched.password && isEmpty(password) && (
                <p className="text-red-500 text-sm">Este campo es obligatorio.</p>
              )}
              {touched.password && !isEmpty(password) && !isValidPassword(password) && (
                <p className="text-red-500 text-sm">
                  La contraseña debe tener al menos 6 caracteres.
                </p>
              )}
            </div>

            <div className="flex justify-center pt-2 w-full">
              <button
                disabled={!isFormValid}
                className={`bg-blue-900 text-white font-semibold py-3 w-full max-w-[200px] sm:w-[180px] rounded-full
                  transform transition duration-200 hover:scale-[0.97] active:scale-[0.95]
                  shadow-md hover:shadow-lg
                  ${!isFormValid ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                onClick={handleRegister}
              >
                REGISTRAR
              </button>
            </div>

            {errorMsg && <p className="text-red-600 text-sm text-center">{errorMsg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}