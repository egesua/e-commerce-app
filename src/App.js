import { useState, useEffect } from 'react';
import Main from './layout/Main';
import axios from 'axios';

import './components/Counter.css';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { ToastContainer } from 'react-toastify';
function App() {
  const [userName, setUserName] = useState("Anonymus");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <>
  <Main userName={userName} products={products}/>
  <ToastContainer/>
  </>
  );
}

export default App;
