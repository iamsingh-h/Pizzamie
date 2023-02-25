import React,{useState,useEffect} from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Pages/Home';
import ProductsPage from './Pages/ProductsPage';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import { CartContext } from './CartContext';
import { getCart,storeCart } from './helpers';

function App() {

  const [cart,setCart] = useState({});
  //fetch from local storage
  useEffect(()=>{
    getCart().then(cart =>{
      setCart(JSON.parse(cart));
    });
    
  },[]);

  useEffect(()=>{
    storeCart(JSON.stringify(cart));
  },[cart]);


  return (
    <>
      <BrowserRouter>
        <CartContext.Provider value={{ cart,setCart }}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/products" exact element={<ProductsPage/>}></Route>
            <Route path="/cart" exact element={<Cart/>}></Route>
            <Route path="/products/:_id" exact element={<SingleProduct/>}></Route>
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
