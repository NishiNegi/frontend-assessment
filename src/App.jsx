import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <div className="App">

    <Navbar />
    <main className="App__container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  </div>
);

export default App;
