import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Spinner from '../Components/Spinner';
import { CartContext } from '../Providers/CartContext';



const RootLayout = () => {
  const [cart, setCart] = useState([]);
    const navigation = useNavigation()
    return (
      <CartContext.Provider value={{cart,setCart}}>
        <Navbar></Navbar>

        {navigation.state === "loading" ? (
          <Spinner></Spinner>
        ) : (
          <main className="min-h-[calc(100vh-285px)] w-[95%] mx-auto">
            <Outlet></Outlet>
          </main>
        )}

        <Footer></Footer>
      </CartContext.Provider>
    );
};

export default RootLayout;