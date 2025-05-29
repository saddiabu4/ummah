import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginRegisterButtons from './ui/LoginRegisterButton';
const Home = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate('/signin');
  };
  const handleSignUp = () => {
    navigate('/signup');
  };
  return (
    <div>
      <div className='min-h-screen bg-gray-50'>
        {/* Navbar */}
        <nav className='bg-white shadow-sm border-b border-gray-200'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              {/* Logo */}
              <div className='flex-shrink-0 flex items-center space-x-2'>
                <h1 className='text-2xl font-bold text-gray-900'>Ummah</h1>
              </div>

              {/* Navigation buttons */}
              <LoginRegisterButtons
                handleSignIn={handleSignIn}
                handleSignUp={handleSignUp}
              />
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className='flex items-center justify-center min-h-full pt-16 pb-12'>
          <div className='text-center space-y-8 max-w-md mx-auto px-4'>
            <div className='space-y-4'>
              <h2 className='text-4xl font-light text-gray-900'>
                Xush kelibsiz
              </h2>
              <p className='text-lg text-gray-600'>
                Ummah jamiyatiga qo'shiling
              </p>
            </div>
            {/* Navigation buttons */}
            <LoginRegisterButtons
              handleSignIn={handleSignIn}
              handleSignUp={handleSignUp}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
