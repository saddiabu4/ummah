import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus, User, Mail, Lock } from 'lucide-react'

export default function SignUp() {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		setSuccess('')
		setIsLoading(true)

		const params = new URLSearchParams()
		params.append('username', username)
		params.append('mail', email)
		params.append('password', password)

		try {
			const response = await fetch(
				'https://api.ummah.uz/key9f82c6e1a4bd53c7e90f1d5a8b32cd4e/signup',
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
				setSuccess(data.message || 'Ro‘yxatdan o‘tish muvaffaqiyatli!')
				setTimeout(() => navigate('/signin'), 1500)
			} else {
				setError(data.message || 'Xatolik yuz berdi')
			}
		} catch (err) {
			setError('Tarmoq xatosi: ' + err.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 p-4'>
			<div className='w-full max-w-md rounded-2xl bg-white shadow-xl'>
				<div className='rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-600 py-8'>
					<div className='mb-2 flex justify-center'>
						<div className='rounded-full bg-white/30 p-3'>
							<UserPlus size={32} className='text-white' />
						</div>
					</div>
					<h1 className='text-center text-2xl font-bold text-white'>
						Ro‘yxatdan o‘tish
					</h1>
				</div>

				<form onSubmit={handleSubmit} className='p-6 space-y-6'>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<User className='h-5 w-5 text-gray-400' />
						</div>
						<input
							type='text'
							placeholder='Username'
							value={username}
							onChange={e => setUsername(e.target.value)}
							className='w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200'
							required
						/>
					</div>

					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<Mail className='h-5 w-5 text-gray-400' />
						</div>
						<input
							type='email'
							placeholder='E-mail'
							value={email}
							onChange={e => setEmail(e.target.value)}
							className='w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200'
							required
						/>
					</div>

					<div className='relative'>
						<div className='absolute inset-y-0 left-0 flex items-center pl-3'>
							<Lock className='h-5 w-5 text-gray-400' />
						</div>
						<input
							type='password'
							placeholder='Parol'
							value={password}
							onChange={e => setPassword(e.target.value)}
							className='w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200'
							required
						/>
					</div>

					<button
						type='submit'
						disabled={isLoading}
						className='w-full rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-4 text-sm font-medium text-white hover:from-blue-600 hover:to-indigo-700 disabled:opacity-70'
					>
						{isLoading ? 'Yuborilmoqda...' : 'Ro‘yxatdan o‘tish'}
					</button>

					{error && <p className='text-red-600 text-sm mt-2'>{error}</p>}
					{success && <p className='text-green-600 text-sm mt-2'>{success}</p>}
				</form>
			</div>
		</div>
	)
}
