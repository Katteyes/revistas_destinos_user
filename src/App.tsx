import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/Landing';
import About from './pages/About';
import Revistas from './pages/Magazines';
import RevistaDetail from './pages/MagazineDetail';
import Contacto from './pages/Contact';
import ContentPage from './pages/Content';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

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
        <Route path="/revistas/:id" element={<RevistaDetail />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/contenido/:slug" element={<ContentPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
