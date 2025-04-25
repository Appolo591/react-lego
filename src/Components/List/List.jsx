import Card from "../Card/Card";
import products from "../../data/product";
import "./list.css";
import React from "react";

function List({ articles , total , onUpdateArticles , onUpdateTotal}) {
  return (
    <div className="product-list">
      {products.map(
        (product) => (
          product.available && (
          <Card  
            key={product.id}
            onUpdateArticles={onUpdateArticles} 
            onUpdateTotal={onUpdateTotal}
            name={product.name}
            tag={product.tag}
            price={product.price}
            available={product.available}
            imageSrc={product.imageSrc}
            articles={articles}
            total={total}
          />
        )
        )
      )}
    </div>
  );
}

export default List;