import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="landing-page" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1485908953667-cf6d88997642')",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1>GreenLeaf Plants</h1>
        <p>We sell the freshest indoor plants to make your home beautiful!</p>
        <Link to="/products">
          <button style={{ padding: '10px 20px', fontSize: '18px', cursor: 'pointer' }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;