import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-8">
        <h1 className="text-3xl font-light text-gray-900">
          Xush kelibsiz
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/signup"
            className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
          >
            Ro'yxatdan o'tish
          </Link>
          
          <Link
            to="/signin"
            className="px-8 py-3 bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200"
          >
            Tizimga kirish
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;