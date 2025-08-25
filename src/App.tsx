import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Fleet } from './pages/Fleet';
import { Contact } from './pages/Contact';
import VehicleDetail from './pages/VehicleDetail';

export const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flotte" element={<Fleet />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicule/:slug" element={<VehicleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};
