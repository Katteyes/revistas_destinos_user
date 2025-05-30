import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Revistas from './pages/Magazines';
import Contacto from './pages/Contact';
import ContentPage from './pages/Content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // Removed unused Placeholder component
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/revistas" element={<Revistas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contenido/:slug" element={<ContentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
