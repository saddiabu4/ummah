import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Box,
  Select,
  MenuItem,
  Button,
  FormControl,
  Typography,
  Stack,
  useMediaQuery,
} from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';

import data from './data.json';

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

export default function DashboardLayoutBasic(props) {
  const router = useDemoRouter('/home');
  const demoWindow = props.window ? props.window() : undefined;
  const [countries, setCountries] = useState([]);
  const [language, setLanguage] = useState('uz');
  const isMobile = useMediaQuery('(max-width:825px)');

  useEffect(() => {
    setCountries(data);
  }, []);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleAddCountry = () => {
    alert('Yangi davlat qo‘shish oynasi ochiladi.');
  };




  const renderPageContent = () => {
    switch (router.pathname) {
      case '/home':
        return (
          <>
            <Stack
              direction={isMobile ? 'column' : 'row'}
              spacing={2}
              alignItems={isMobile ? 'stretch' : 'center'}
              justifyContent='space-between'
              mb={2}
            >
              <Stack direction='row' spacing={2} alignItems='center'>
                <Typography variant='body1'>Tilni tanlang:</Typography>
                <FormControl size='small' fullWidth={isMobile}>
                  <Select value={language} onChange={handleLanguageChange}>
                    <MenuItem value='uz'>O'zbekcha</MenuItem>
                    <MenuItem value='en'>English</MenuItem>
                    <MenuItem value='ru'>Русский</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <Button
                variant='contained'
                fullWidth={isMobile}
                onClick={handleAddCountry}
              >
                + Respublika qo'shish
              </Button>
            </Stack>
            <Box overflow='auto'>
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
    </Box>
          </>
        );
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
