import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import SignInPage from '../pages/auth/SignInPage';
import SignUpPage from '../pages/auth/SignUpPage';
import DashboardLayoutBasic from '../pages/admin/DashboardLayoutBasic';
import NotFound from '../pages/NotFound';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/admin' element={<DashboardLayoutBasic />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
};

export default AppRouter;
