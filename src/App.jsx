import { Routes, Route } from 'react-router-dom'
// register
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
// admin dashboard
import AdminDashboard from './components/admin/Dashboard'
// countries Detail
import CountryDetail from './components/admin/countries/CountryDetail'
// countries
import Uzbekistan from './components/admin/countries/uzbekistan/Uzbekistan'
function App() {
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/SignUp' element={<SignUp />} />
			<Route path='/admin/dashboard' element={<AdminDashboard />} />
			<Route path='/uzbekistan' element={<Uzbekistan />} />
			<Route path='/admin/dashboard/countries/:id' element={<CountryDetail />} />
		</Routes>
	)
}

export default App
