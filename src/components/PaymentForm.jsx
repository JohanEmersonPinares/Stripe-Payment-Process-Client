import { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

// eslint-disable-next-line react/prop-types
const PaymentForm = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Crear el Payment Intent en el backend
    try {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency: 'usd' }), // Asegúrate de que la cantidad se pase correctamente
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en la solicitud al servidor');
      }

      const { clientSecret } = await response.json();

      // Confirmar el pago
      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (stripeError) {
        setError(stripeError.message);
      } else {
        setPaymentSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pagar
      </button>
      {paymentSuccess && <p>Pago realizado con éxito</p>}
      {error && <p>{error}</p>}
    </form>
  );
};

export default PaymentForm;
