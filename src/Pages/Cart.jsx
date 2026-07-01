import React, { useContext } from 'react';
import { CartContext } from '../Providers/CartContext';
import CartDetails from '../Components/CartDetails';


const Cart = () => {
    const {cart, setCart} = useContext(CartContext);
    return (
      <div>
        {cart.length === 0 ? (
          <p className='text-gray-400 font-bold text-3xl text-center mt-5'>Please add a Tree</p>
        ) : (
          <div>
            {cart.map((plant) => (
              <CartDetails key={plant.id} plant={plant}></CartDetails>
            ))}
          </div>
        )}
      </div>
    );
};

export default Cart;