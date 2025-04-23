import "./card.css";

const imageSrc ="https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1";
const title = "Titanic";
const tag = "historique" ;
const price = 199.00 ;
const status = "disponible" ;
const addBtn = "ajouter";


function Card() {
  return (
    <div className="product-card">
      <img src={imageSrc} className="img" alt={`image of ${title}`} />
      <h2 className="titre">{title}</h2>
      <p className="tag">{tag}</p>
      <p className="prix">{price} €</p>
      <p className="status">{status}</p>
      <p className="addBtn">{addBtn}</p>
    </div>
  );
}

export default Card ;