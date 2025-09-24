import React from 'react';
import ReactDOM from 'react-dom';

const ProductCards = ({product}) => {

  const{images, title, category, rating, stock, description, availabilityStatus} = product

  console.log(product.images);

  return (
  <div className="card">
    <img src={images} alt={title} />
    <div className="card-content">
      <h3>{title}</h3>
      <h3>{category}</h3>
      <p>{description}</p>
      <h4>Rating: {rating}</h4>
      <h4>In Stock: {stock}</h4>
      <h4>Availability Status: {availabilityStatus}</h4>
    </div>
  </div>
);
}


export default ProductCards;