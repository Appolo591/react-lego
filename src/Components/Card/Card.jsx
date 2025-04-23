import "./card.css";

function Card({imageSrc,title,tag,price,status,addBtn}) {
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

