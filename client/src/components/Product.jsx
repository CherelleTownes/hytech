import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom'

const Product = (props) => {




  return (
    <div className="product-container">

      <Link className="product" to={`/products/${props._id}`}>
        <h5>{props.author}</h5>
        <div className="product-name">{props.name}</div>
        <div>{props.createdAt.split('T')[0]}</div>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <div className="product-description">{props.description}</div>
        <button>Read More</button>
      </Link>
    </div>
  )
}

export default Product