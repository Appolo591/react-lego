import "./basket.css";
import React from 'react';


function Basket({total , articles}) {
    
    return (
        <div className="basket-container">
            <h1 >Panier</h1>
            <ul>
                {articles.map((article) => (
                <li>{article}</li>
                ))}
            </ul>
            {total > 0 ? <h2>Le compteur est à : {total} €</h2> : <h2>Aucun produit n'a été ajouté</h2>}
        </div>
    );
}

export default Basket ;

