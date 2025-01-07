import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import HomeComponent from './Pages/Home/Home.component';
import ChatComponent from './Pages/Chat/Chat.component';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
