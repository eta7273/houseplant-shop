import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './features/cartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Total Items: {cart.length}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      {cart.map((item) => (
        <div key={item.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <img src={item.image} alt={item.name} width="50" />
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      <button onClick={() => alert('Coming Soon!')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}