import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router";
import { CartContext } from "../Providers/CartContext";


const PlantDetails = () => {
  const {cart, setCart} = useContext(CartContext);
  const location = useLocation();
  // const {data} = useLoaderData();
  const { image, name, description, category, price } = location?.state || {};
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold my-6">Plant Details</h2>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <figure className="md:w-96 h-56 md:h-1/6">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <h1 className="text-lg font-medium">{description}</h1>
          <h1 className="font-medium text-2xl">Category: {category}</h1>
          <p className="font-bold text-3xl">Price: {price}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setCart((pre) => [...pre, location?.state])}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
