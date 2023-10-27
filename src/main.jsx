import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App.jsx'; 
import './styles.css';
import { UserProvider } from './context/UserProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
