import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/index.scss';
import App from './app/app.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ApiProvider } from '@/app/providers/ApiProvider';
import { MainLayoutProvider } from '@/app/providers/MainLayouProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ApiProvider>
          <MainLayoutProvider>
            <App />
          </MainLayoutProvider>
        </ApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
