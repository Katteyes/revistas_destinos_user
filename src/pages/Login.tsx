import { useNavigate } from 'react-router-dom';
import { useLoginStore } from '../stores/authStore';

export default function Login() {
  const { email, password, setEmail, setPassword, login } = useLoginStore();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login();
      navigate('/');
    } catch (error) {
      console.error('Error en inicio de sesión:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center">
      <div className="bg-[#f5ecdc] p-40 rounded-3xl flex shadow-lg w-[1100px] max-w-full">
        {/* Lado Izquierdo */}
        <div className="w-1/2 pr-10 flex flex-col justify-center">
          <img
            src="/logoDestinos.png"
            alt="Destinos Perú"
            className="w-80 mb-4 transform -translate-x-14"
          />
          <h2 className="text-xl font-apple-system mb-2">Inicia Sesión</h2>
          <p className="text-sm text-gray-600">Ingresa tus datos correctamente</p>
        </div>

        {/* Lado Derecho */}
        <div className="w-1/2 flex flex-col justify-center">
          <input
            type="email"
            placeholder="Ingrese tu correo electrónico"
            className="mb-4 p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="mb-4 p-3 border rounded-xl w-full bg-[#FFFFFF] border-gray-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="bg-blue-900 text-white py-2 font-semibold p-12 ml-20 w-[220px] mb-5"
            onClick={handleLogin}
          >
            INICIAR SESIÓN
          </button>

          <button
            className="bg-blue-900 text-white py-2 font-semibold p-12 ml-20 w-[220px]"
            onClick={() => navigate('/register')}
          >
            REGISTRARSE
          </button>
        </div>
      </div>
    </div>
  );
}
