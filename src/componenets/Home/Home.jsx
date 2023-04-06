import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const tShirts = useLoaderData();
   const [cart, setCart]= useState([])
   const handleAddToCart = (tShirt) =>{
    const exists = cart.find(ts=> ts._id === tShirt._id);
    if(exists){
toast('It is already added. Try other one.')
    }
    else{

        const newCart = [...cart,tShirt];
        setCart(newCart);
    }
    }
    const removeFromCart = id =>{
const remaining = cart.filter(ts=> ts._id !== id);
setCart(remaining);
    }
    return (
        <div className='home-container'>
          <div className="t-shirts-container">
          {
            tShirts.map(tshirt => <TShirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></TShirt>)
           }
          </div>
          <div className="cart-container">
            <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            ></Cart>
              <ToastContainer />
          </div>
        </div>
    );
};

export default Home;