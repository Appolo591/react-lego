import "./basket.css";
import React from 'react';

function Basket({total}) {
    return (
        <>
            <h1 >Panier</h1>
            <p>Aucun produit n'a été ajouté</p>
            <p>Le compteur est à : {total}</p>
        </>
    );
}

export default Basket ;

