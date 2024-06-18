import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offer from './pages/Offer';
import Office from './pages/Office';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/office" element={<Office />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);