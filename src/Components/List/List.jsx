import Card from "../Card/Card";
import products from "../../data/product";
import "./list.css";
import React from "react";

function List({ onAdd }) {
  return (
    <div className="product-list">
      {products.map(
        (product, index) => (
          product.available && (
          <Card   
            onAdd={onAdd} 
            key={index}
            name={product.name}
            tag={product.tag}
            price={product.price}
            available={product.available}
            imageSrc={product.imageSrc}
          />
        )
        )
      )}
    </div>
  );
}

export default List;