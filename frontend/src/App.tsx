import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import SignIn from './Pages/Auth/SignIn/SignIn';
import SignUp from './Pages/Auth/SignUp/SignUp';
import Chat from './Pages/Chat/Chat';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
