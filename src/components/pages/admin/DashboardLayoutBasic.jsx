import * as React from 'react';
import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

import data from './data.json';

// ----------- Theme -----------
const demoTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// ----------- Navigation --------
const NAVIGATION = [
  { kind: 'header', title: 'Main items' },
  { segment: 'home', title: 'Home' },
  { segment: 'inbox', title: 'Inbox' },
  { kind: 'divider' },
  { kind: 'header', title: 'Analytics' },
  { segment: 'calendar', title: 'Calendar' },
  { segment: 'search', title: 'Search' },
  { segment: 'settings', title: 'Settings' },
];

// ----------- Router -----------
function useDemoRouter(initialPath) {
  const [pathname, setPathname] = useState(initialPath);

  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    }),
    [pathname]
  );
}

// ----------- Page Component -----------
export default function DashboardLayoutBasic(props) {
  const router = useDemoRouter('/home');
  const demoWindow = props.window ? props.window() : undefined;
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(data);
  }, []);

  const renderCountryTable = () => (
    <div className='overflow-x-auto w-full mt-4'>
      <table className='min-w-full text-sm text-left border-collapse border border-gray-200'>
        <thead>
          <tr className='bg-gray-100'>
            <th className='p-3 whitespace-nowrap border border-gray-200'>
              Bayroq
            </th>
            <th className='p-3 whitespace-nowrap border border-gray-200'>
              Respublika nomi
            </th>
            <th className='p-3 whitespace-nowrap border border-gray-200'>
              Tahrirlash
            </th>
            <th className='p-3 whitespace-nowrap border border-gray-200'>
              O'chirish
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, idx) => (
            <tr key={idx} className='border-b border-gray-200 hover:bg-gray-50'>
              <td className='p-3 whitespace-nowrap border border-gray-200'>
                <img
                  src={country.flag_img}
                  alt={country.name}
                  className='w-8 h-5 object-cover'
                />
              </td>
              <td className='p-3 whitespace-nowrap font-medium border border-gray-200'>
                {country.name}
              </td>
              <td className='p-3 whitespace-nowrap border border-gray-200'>
                <button className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-xs sm:text-sm'>
                  Tahrirlash
                </button>
              </td>
              <td className='p-3 whitespace-nowrap border border-gray-200'>
                <button className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm'>
                  O'chirish
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPageContent = () => {
    switch (router.pathname) {
      case '/home':
        return renderCountryTable();
      default:
        return null;
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>{renderPageContent()}</PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
