import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';

const products = [
  { id: 1, name: 'Snake Plant', price: 25, category: 'Low Light', image: 'https://example.com/snake-plant.jpg' },
  { id: 2, name: 'Monstera', price: 35, category: 'Indoor', image: 'https://example.com/monstera.jpg' },
  // Add 4 more plants...
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Shop Plants</h1>
      {['Indoor', 'Outdoor', 'Low Light'].map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {products
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
                  <img src={plant.image} alt={plant.name} width="100" />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}