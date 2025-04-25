import "./card.css";
import React from 'react';

function Card({ 
    name, 
    tag, 
    price, 
    imageSrc, 
    available , 
    onUpdateTotal , 
    onUpdateArticles, 
    articles , 
    total
  }) {
  const handleClick = () =>{
    onUpdateTotal(total +price);
    onUpdateArticles([...articles, name]);
  };
  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} />
      <h2>{name}</h2>
      <p className="tag">{tag}</p>
      <p>Prix : {price} €</p>
      <p>{available ? "Disponible" : "En rupture"}</p>
      <button onClick={handleClick}>Ajouter</button>
    </div>
  );
}

export default Card;