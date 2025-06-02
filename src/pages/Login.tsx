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
    <div className="min-h-screen bg-[rgba(199, 131, 23, 0.12)] flex items-center justify-center px-[8%] py-12">
      <div className="bg-[#f5ecdc] rounded-3xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row p-6 sm:p-10 md:p-20 md:min-h-[450px] gap-10">
        
        {/* Lado Izquierdo */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center md:text-left gap-4">
          <img
            src="/logoDestinos.png"
            alt="Destinos Perú"
            className="w-48 md:w-[380px] md:-ml-2"
          />
          <h2 className="text-2xl font-semibold">Inicia Sesión</h2>
          <p className="text-sm text-gray-600">Ingresa tus datos correctamente</p>
        </div>

        {/* Lado Derecho */}
        <div className="md:w-1/2 flex flex-col justify-center gap-5">
          <input
            type="email"
            placeholder="Ingrese tu correo electrónico"
            className="p-3 border rounded-xl w-full bg-white border-gray-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="p-3 border rounded-xl w-full bg-white border-gray-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <div className="flex flex-col items-center gap-4 pt-2">
            <button
              className="bg-blue-900 text-white font-semibold py-3 w-full max-w-[200px] sm:w-[250px] rounded-full"
              onClick={handleLogin}
            >
              INICIAR SESIÓN
            </button>
            <button
              className="bg-blue-900 text-white font-semibold py-3 w-full max-w-[200px] sm:w-[250px] rounded-full"
              onClick={() => navigate('/register')}
            >
              REGISTRARSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}