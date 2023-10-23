import './App.css';
import './components/Counter.css';

import { useState, useEffect } from 'react';
import Main from './layout/Main';
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState("AŞŞŞŞKO");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return <Main userName={userName} products={products}/>;
}

export default App;
