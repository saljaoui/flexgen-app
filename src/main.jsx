import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/main.css';
import App from './App.jsx';
import { LayoutProvider } from './store/layoutContext';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </React.StrictMode>
);
