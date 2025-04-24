import "./App.css";
import Header from "./Components/Header/Header";
import List from "./Components/List/List";
import Footer from "./Components/Footer/Footer";
import Basket from "./Components/Basket/Basket";
import React, { useState } from 'react';

function App() {
  const [total, setTotal] = useState(0);
  
  const onAdd = (price) => {
    setTotal(total + price);
  };

  return (
    <>
      <Header />
      <div className="main-container">
      <List onAdd={onAdd} />
      <Basket  total={total} />
      </div>
      <Footer />
    </>
  );
}

export default App;