import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Product from './pages/Product/Product';
import React from 'react';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
