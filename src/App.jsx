// App.jsx
import React, { useState } from 'react';
import './App.css';

const dresses = [
  { id: 1, name: 'Floral Dress', price: 29.99 },
  { id: 2, name: 'Summer Dress', price: 39.99 },
  { id: 3, name: 'Party Dress', price: 49.99 },
  { id: 4, name: 'Maxi Dress', price: 59.99 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (dress) => {
    setCart([...cart, dress]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="app-container">
      <h1>Dress Shopping Cart</h1>
      <div className="dresses">
        {dresses.map((dress) => (
          <div key={dress.id} className="dress-item">
            <h2>{dress.name}</h2>
            <p>${dress.price}</p>
            <button onClick={() => addToCart(dress)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <strong>Total: ${calculateTotal()}</strong>
        </div>
      </div>
    </div>
  );
};

export default App;
