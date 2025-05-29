import React from 'react';
import { Toaster } from 'sonner';
import AppRouter from './components/routes/AppRouter';
function App() {
  return (
    <>
      <AppRouter />

      {/* Toasters */}
      <Toaster richColors position='top-right' />
    </>
  );
}

export default App;