import {React, useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // const [category, setCategory] = useState()
  const [filterItem, setFilter]= useState("All")
  
  const handleFilterChange=(event)=>{
    return setFilter(event.target.value)

  }
  const foodsToDisplay = items.filter((tem) => {
    if (filterItem === "All") {
      return tem;
    } else {
      return tem.category === filterItem;
    }
  });

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
