import React from 'react';

const Cart = ({cart, removeFromCart}) => {
    return (
        <div>
            <h2>Order summary:{cart.length}</h2>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >{tshirt.name} <button onClick={()=> removeFromCart(tshirt._id)}> X </button>
                </p>)
            }
        </div>
    );
};

export default Cart;