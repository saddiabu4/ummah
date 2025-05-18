import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SigninForm() {
	const [formData, setFormData] = useState({
		identifier: '',
		password: '',
	})
	const navigate = useNavigate()
	const [message, setMessage] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async e => {
		e.preventDefault()
		setIsLoading(true)
		setMessage('')

		try {
			const response = await fetch(
				'https://system.ummah.uz/keyf8Jd9LxQ2vRmT3gWyZpCa4N1BhUEk7oM/signin',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				}
			)

			if (!response.ok) {
				throw new Error('Kirishda xatolik yuz berdi')
			}

			const data = await response.json()
			console.log('Javob:', data)

			setMessage('Tizimga muvaffaqiyatli kirildi!')

			// Bu yerda user statusni tekshiramiz
			const userRole = data.user.status

			if (userRole === 'admin') {
				navigate('/admin')
			} else if (userRole === 'user') {
				navigate('/user')
			} else {
				navigate('/') // nomaʼlum rol bo‘lsa bosh sahifaga
			}
		} catch (error) {
			setMessage(error.message)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
			<div className='w-full max-w-md'>
				<div className='bg-white shadow-sm border border-gray-200 rounded-lg px-8 py-10'>
					<h2 className='text-2xl font-semibold text-gray-900 text-center mb-8'>
						Tizimga kirish
					</h2>

					<form onSubmit={handleSubmit} className='space-y-6'>
						<div>
							<label
								htmlFor='identifier'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								Foydalanuvchi nomi yoki Email
							</label>
							<input
								id='identifier'
								type='text'
								name='identifier'
								placeholder='username@example.com'
								value={formData.identifier}
								onChange={handleChange}
								className='w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200'
								required
								disabled={isLoading}
							/>
						</div>

						<div>
							<label
								htmlFor='password'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								Parol
							</label>
							<input
								id='password'
								type='password'
								name='password'
								placeholder='••••••••'
								value={formData.password}
								onChange={handleChange}
								className='w-full px-3 py-3 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-200'
								required
								disabled={isLoading}
							/>
						</div>

						<button
							type='submit'
							disabled={isLoading}
							className='w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium'
						>
							{isLoading ? 'Kirmoqda...' : 'Kirish'}
						</button>
					</form>

					{message && (
						<div
							className={`mt-6 p-3 rounded-md text-sm text-center ${
								message.includes('muvaffaqiyatli')
									? 'bg-green-50 text-green-700 border border-green-200'
									: 'bg-red-50 text-red-700 border border-red-200'
							}`}
						>
							{message}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default SigninForm
