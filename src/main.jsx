import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider
import App from './App.jsx';
import './index.css';

const clientId = "322500728180-fft2o79o8i8h86aabc257c41orn7k4pe.apps.googleusercontent.com"; // Your Google Client ID

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}> {/* Wrap your app with GoogleOAuthProvider */}
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
