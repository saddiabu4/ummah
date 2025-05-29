import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignInPage/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
    </Routes>
  );
};

export default AppRouter;
