import React from 'react';
import './TShirt.css'
const TShirt = ({tshirt,handleAddToCart}) => {
    const {name, picture, gender, price, index} =tshirt;
    return (
        <div className='t-shirt'>
           <img src={picture} alt="" /> 
           <h4>{name}</h4>
           <p>Price: <span>${price}</span></p>
           <p><small>Gender:{gender}</small></p>
           <button onClick={() => handleAddToCart(tshirt)} className="buy">Buy Now</button>
        </div>
    );
};

export default TShirt;