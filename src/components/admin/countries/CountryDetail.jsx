import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Uzbekistan from './uzbekistan/Uzbekistan'

function CountryDetail() {
	const { id } = useParams()
	const [country, setCountry] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		fetch('https://api.ummah.uz/v19f82c6e1a4bd53c7e90f1d5a8b32cd4e/all')
			.then(res => res.json())
			.then(data => {
				const found = data.countries.find(c => String(c.id) === id)
				if (found) {
					setCountry(found)
				} else {
					setError('Mamlakat topilmadi')
				}
				setLoading(false)
			})
			.catch(err => {
				console.error(err)
				setError('Xatolik yuz berdi')
				setLoading(false)
			})
	}, [id])

	if (loading) return <div className='text-center p-6'>Yuklanmoqda...</div>
	if (error) return <div className='text-center text-red-600'>{error}</div>

	if (country.id === 1) {
		return (
			<Link to={Uzbekistan}>
				{' '}
				{/* Bu yerda Link yordamida yo‘naltirish */}
				<div className='text-center text-2xl'>Uzbekistan sahifasiga o‘tish</div>
			</Link>
		)
	} else {
		return (
			<div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-xl shadow-lg'>
				<h1 className='text-4xl font-bold mb-4 text-indigo-700'>
					{country.name}
				</h1>
				<div className='text-6xl mb-4'>{country.flag}</div>
				<p className='text-gray-700'>Mamlakat ID: {country.id}</p>
				<p className='text-gray-500 mt-4'>
					Bu sahifa {country.name} uchun maxsus dizayn bilan ishlayapti.
				</p>
			</div>
		)
	}
}

export default CountryDetail
