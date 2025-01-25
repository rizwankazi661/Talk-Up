import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router';
import ChatComponent from './Pages/Chat/Chat.component';
import SignUpComponent from './Pages/Auth/SignUp/SignUp.component';
import SignInComponent from './Pages/Auth/SignIn/SignIn.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/signin" element={<SignInComponent />} />
        <Route path="/auth/signup" element={<SignUpComponent />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
