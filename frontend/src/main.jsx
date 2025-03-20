import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AuthProvider } from "./context/AuthProvider.jsx"; // Corrected import
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
    </StrictMode>
  </BrowserRouter>
);
