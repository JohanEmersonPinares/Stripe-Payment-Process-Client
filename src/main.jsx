import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Carga tu clave pública de Stripe
const stripePromise = loadStripe('pk_test_51QCrf1AkBxBtmGSKT4JQjwxB2j6Q0dookSsWq6XAZAUOQp9AYUf1hxiwSrNZHh4IiPV6HUmVSSmjsZqIxlJgfFuo00rft3cnO3');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
