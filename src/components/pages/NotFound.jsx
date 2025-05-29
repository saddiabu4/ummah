import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <h1 className='text-5xl font-bold text-red-600'>404</h1>
      <p className='text-lg mt-4'>Sahifa topilmadi</p>
      <Link to='/' className='mt-4 text-blue-500 underline'>
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
