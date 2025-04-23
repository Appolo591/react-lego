import Card from "../Card/Card";
import "./list.css";

function List() {
  return (
    <div className="product-list">
      <Card  
        title="Titanic" 
        price={199.00} 
        imageSrc ="https://www.lego.com/cdn/cs/set/assets/blt6cdf0b53146b5519/10294_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
        tag = "historique" 
        status = "disponible" 
        addBtn = "ajouter"
      />
    
    <Card  
        title="Millenium Falcon" 
        price={299.99} 
        imageSrc ="https://www.lego.com/cdn/cs/set/assets/blt3349f56c6f192e18/75192_Prod.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
        tag = "Star Wars" 
        status = "disponible" 
        addBtn = "ajouter"
      />


<Card  
        title="Tableau" 
        price={50.00} 
        imageSrc="https://www.lego.com/cdn/cs/set/assets/bltc6d87e5e7bacb3ae/21333.png?format=webply&fit=bounds&quality=100&width=400&height=400&dpr=1"
        tag = "art" 
        status = "indisponible" 
        addBtn = "ajouter"
      />
    </div>
  );
}

export default List;