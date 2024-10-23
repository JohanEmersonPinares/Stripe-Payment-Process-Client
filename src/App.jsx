import  { useState } from 'react';
import Product from './components/Product';
import PaymentForm from './components/PaymentForm';

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setTotalAmount(totalAmount + product.price); // Actualiza el total
  };

  return (
    <div>
      <h1>Mi tienda</h1>
      <Product
        product={{ name: "Producto de Prueba", price: 1000 }}
        onAddToCart={() => handleAddToCart({ name: "Producto de Prueba", price: 1000 })}
      />
      <h2>Total: ${totalAmount / 100}</h2>
      {cart.length > 0 && <PaymentForm amount={totalAmount} />}
    </div>
  );
};

export default App;
