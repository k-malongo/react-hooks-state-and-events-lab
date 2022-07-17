import {React, useState} from "react"


function Item({ name, category }) {
  
  const [addItemCart, setItem] = useState(true)
  const appClass = addItemCart ? "add" : "in-cart"
  const appbutton = addItemCart ? "Add to Cart" : "Remove From Cart"


  function addItem(){
    setItem((addItemCart)=>!addItemCart)
  }
  return (
  <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>{appbutton}</button>
    </li>
  );
}

export default Item;
