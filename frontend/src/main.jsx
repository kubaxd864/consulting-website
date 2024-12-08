import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/404';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Offer from './pages/Offer';
import Office from './pages/Office';
import Reservation from './pages/Reservation';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="offer" element={<Offer />} />
        <Route path="office" element={<Office />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);