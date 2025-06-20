import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#f0f0f0' }}>
      <Link to="/">Home</Link>
      <Link to="/cart">
        🛒 Cart: <span>{cart.length}</span>
      </Link>
    </header>
  );
}