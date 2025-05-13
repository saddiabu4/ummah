import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Lock, Mail, LogIn } from 'lucide-react'

export default function SignIn() {
	const [gmail, setGmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)
		setError('')
		setSuccess('')

		const params = new URLSearchParams()
		params.append('mail', gmail)
		params.append('password', password)

		try {
			const response = await fetch(
				'https://api.ummah.uz/key9f82c6e1a4bd53c7e90f1d5a8b32cd4e/signin',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: params.toString(),
				}
			)
			const data = await response.json()

			if (response.ok) {
				setSuccess(data.message || 'Kirish muvaffaqiyatli')
				setTimeout(() => {
					if (data.user_status === 'admin') {
						navigate('/admin/dashboard')
					} else {
						navigate('/user/dashboard')
					}
				}, 1000)
			} else {
				setError(data.message || 'Email yoki parol noto‘g‘ri!')
			}
		} catch (err) {
			setError('Tarmoq xatosi: ' + err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
			<div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
				<div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
					<div className="mb-2 flex justify-center">
						<div className="rounded-full bg-white/30 p-3">
							<User size={32} className="text-white" />
						</div>
					</div>
					<h1 className="text-center text-2xl font-bold text-white">Tizimga kirish</h1>
				</div>

				<form onSubmit={handleSubmit} className="p-6">
					<div className="mb-4 space-y-6">
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Mail className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="text"
								placeholder="E-mail"
								value={gmail}
								onChange={e => setGmail(e.target.value)}
								className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
								required
							/>
						</div>

						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Lock className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="password"
								placeholder="Parol"
								value={password}
								onChange={e => setPassword(e.target.value)}
								className="w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
								required
							/>
						</div>
					</div>

					<div className="mb-6 flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
							/>
							<label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
								Eslab qolish
							</label>
						</div>
						<button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-800">
							Parolni unutdingizmi?
						</button>
					</div>

					<button
						type="submit"
						disabled={isLoading}
						className="flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-4 text-center text-sm font-medium text-white shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-70"
					>
						{isLoading ? (
							<svg className="mr-2 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
						) : (
							<>
								<LogIn size={20} className="mr-2" />
								Kirish
							</>
						)}
					</button>

					{error && (
						<div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
							<p>{error}</p>
						</div>
					)}

					{success && (
						<div className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-600">
							<p>{success}</p>
						</div>
					)}
				</form>

				<div className="bg-gray-50 p-6 text-center">
					<p className="text-sm text-gray-600">
						Hisobingiz yo'qmi?{' '}
						<button onClick={() => navigate('/SignUp')} className="font-medium text-blue-600 hover:text-blue-800">
							Ro'yxatdan o'tish
						</button>
					</p>
				</div>
			</div>
		</div>
	)
}
