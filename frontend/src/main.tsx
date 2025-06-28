import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/app.tsx';
import { BrowserRouter } from 'react-router';
import { AppProvider } from '@/app/providers';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
          <App />
      </AppProvider>
    </BrowserRouter>
  </StrictMode>,
);
