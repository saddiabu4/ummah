import React, { useEffect, useState } from 'react';
import { Edit, Trash2, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
	const navigate = useNavigate();
	
	

  useEffect(() => {
    setLoading(true);
    fetch('https://api.ummah.uz/v19f82c6e1a4bd53c7e90f1d5a8b32cd4e/all', {
      method: 'GET',
      headers: {
        'accept': 'application/json'
      }
    })
      .then(res => res.text())
      .then(text => {
        try {
          const data = JSON.parse(text);
          setCountries(data.countries || []);
        } catch (error) {
          console.error('Xatolik: Javobni JSON ga parse qilishda muammo:', error);
          setError('Ma\'lumotlarni yuklashda xatolik yuz berdi');
        } finally {
          setLoading(false);
        }
      })
      .catch(error => {
        console.error('Xatolik:', error);
        setError('Ma\'lumotlarni yuklashda xatolik yuz berdi');
        setLoading(false);
      });
  }, []);

  const handleCountryClick = (countryId) => {
    console.log(`Country ${countryId} clicked - navigating to details page`);
    // Actual navigation would use router, e.g.:
    // router.push(`/countries/${countryId}`);
		navigate(`/admin/dashboard/countries/${countryId}`);
  };

  const handleEdit = (e, countryId) => {
    e.stopPropagation();
    console.log(`Edit country ${countryId}`);
    // Implement edit functionality
    // For example: router.push(`/countries/edit/${countryId}`);
  };

  const handleDelete = (e, countryId) => {
    e.stopPropagation();
    console.log(`Delete country ${countryId}`);
    // Implement delete functionality
    // For example: show confirmation modal then delete
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-indigo-800 tracking-tight">
          <span className="inline-block mr-3">🌎</span>
          Mamlakatlar Ro'yxati
        </h1>
        <div className="bg-white shadow-sm rounded-full px-4 py-2 text-sm font-medium text-indigo-600">
          {countries.length} ta mamlakat
        </div>
      </div>
      
      {countries.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-500 text-lg">Mamlakatlar topilmadi</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <div 
              key={country.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer group"
              onClick={() => handleCountryClick(country.id)}
            >
              <div className="p-1 bg-gradient-to-r from-blue-500 to-gray-500"></div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <span className="text-4xl mr-4">{country.flag}</span>
                  <span className="font-bold text-xl text-gray-800">{country.name}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div className="flex space-x-1">
                    <button 
                      onClick={(e) => handleEdit(e, country.id)}
                      className="p-2 text-indigo-600 hover:bg-indigo-100 rounded-lg transition-colors flex items-center"
                      aria-label="Tahrirlash"
                    >
                      <Edit size={16} className="mr-1" />
                      <span className="text-sm">Tahrirlash</span>
                    </button>
                    
                    <button 
                      onClick={(e) => handleDelete(e, country.id)}
                      className="p-2 text-pink-600 hover:bg-pink-100 rounded-lg transition-colors flex items-center"
                      aria-label="O'chirish"
                    >
                      <Trash2 size={16} className="mr-1" />
                      <span className="text-sm">O'chirish</span>
                    </button>
                  </div>
                  
                  <div className="bg-indigo-100 rounded-full p-2 transform translate-x-2 group-hover:translate-x-0 transition-transform">
                    <ChevronRight size={18} className="text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountriesList;