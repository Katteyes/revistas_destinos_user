import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Revistas from './pages/Revistas';
import Contacto from './pages/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/revistas" element={<Revistas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
