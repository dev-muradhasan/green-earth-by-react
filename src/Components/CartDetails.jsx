import { Trash2 } from "lucide-react";
import React, { useContext } from "react";
import { CartContext } from "../Providers/CartContext";

const CartDetails = ({ plant }) => {
  const { cart, setCart } = useContext(CartContext);
  const handleDeleteBtn = (id) => {
    const remainingCart = cart.filter((plant) => plant.id !== id);
    setCart(remainingCart);
  };
  const { image, name, price, id } = plant;
  return (
    <div className="flex justify-between items-center rounded-2xl border-2 border-green-500 p-2 md:p-4  my-4">
      <div className="flex gap-3 md:gap-10 items-center ">
        <div className="w-28 md:w-48 h-28 md:h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={image}
            alt=""
          />
        </div>
        <div>
          <p className="text-md md:text-3xl font-medium md:font-bold">
            Name: <br />
            {name}
          </p>
          <p className="text-md md:text-2xl font-medium md:font-bold mt-3">
            Price: {price}
          </p>
        </div>
      </div>
      <div className="text-red-500">
        <Trash2
          onClick={() => handleDeleteBtn(id)}
          className="size-7 md:size-12"
        ></Trash2>
      </div>
    </div>
  );
};

export default CartDetails;
