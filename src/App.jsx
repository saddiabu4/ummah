import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/pages/auth/SignUp";
import SigninForm from './components/pages/auth/SignIn'; 
import Home from "./components/Home";

// admin panel
import Admin from "./components/layouts/Admin";
// user panel
import User from "./components/layouts/User";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/signin" element={<SigninForm />} />
          {/* <Admin /> */}
          <Route path="/admin" element={<Admin />} />
          {/* <User /> */}
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
