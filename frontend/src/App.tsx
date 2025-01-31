import React from 'react';
import Auth from './pages/Auth/Auth';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
