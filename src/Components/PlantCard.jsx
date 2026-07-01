import React from 'react';
import { Link } from 'react-router';

const PlantCard = ({ plant }) => {
    const {id,name,image,price,description} = plant;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="h-60 overflow-hidden">
        <img className="w-full h-full object-cover" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p className="font-semibold">Price: {price} Tk</p>
        <div className="card-actions justify-end">
            <Link state={plant} to={`/plant-details/${id}`} className="btn btn-primary">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;