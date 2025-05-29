import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  { segment: 'home', title: 'Home' },
  { segment: 'inbox', title: 'Inbox' },
  { kind: 'divider' },
  {
    kind: 'header',
    title: 'Analytics',
  },
  { segment: 'calendar', title: 'Calendar' }, 
  { segment: 'search', title: 'Search' }, 
  { segment: 'settings', title: 'Settings' },
];

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

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props) {
  const { window } = props;
  const router = useDemoRouter('/home');
  const demoWindow = window ? window() : undefined;

  const renderPageContent = () => {
    switch (router.pathname) {
      case '/home':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
          
            </Grid>
          </Grid>
        );
      case '/inbox':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
        );
      case '/navbar':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
        );
      case '/calendar':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
        
            </Grid>
          </Grid>
        );
      case '/search':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
        
            </Grid>
          </Grid>
        );
      case '/settings':
        return (
          <Grid container spacing={2}>
            <Grid item xs={12}>
            
            </Grid>
          </Grid>
        );
      default:
        return (
          <Grid container spacing={1}>
            <Grid item xs={12}>

            </Grid>
          </Grid>
        );
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
