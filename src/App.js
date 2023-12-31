import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greetings />} />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
