import React from 'react';
import './Cart.css'

const Cart = ({cart, removeFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some product.</p>
    }
    return (
        <div>
            <h2 className={cart.length < 3 ? "red" : "green"}>Order summary:{cart.length}</h2>
            {cart.length > 2 ? <span className='green'>Buy some more.</span> : <span className='red'>Poor Man!</span>}
            {message}
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=> removeFromCart(tshirt._id)}> X </button>
                </p>)
            }
            {
                cart.length === 2 && <p className='yellow'>Don't miss a chance to win lucky offer - Bike.</p> 
            }{
                cart.length === 4 || <h3  className={`bold bordered ${cart.length < 3 ? 'red' : 'green'}`}>Try a little more .</h3>
            }
        </div>
    );
};

export default Cart;

/*
* conditional rendering
1. use if or if else to set a variable  that will contain an element, or components.card
*ternary operator 
1.there will be a condition ? 'true' : 'false'
*Logical && : if the condition is true then displayed.
*logical or || : if the condition is false then displayed. 
*
*/ 

/*
*CONDITIONAL CSS:
*
ternary inside template string**/ 