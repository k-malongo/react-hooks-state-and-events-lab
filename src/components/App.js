// import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {React, useState} from "react"
function App() {
  const [darkMode, setDarkMode] = useState(false)

  const appClass = darkMode ? "App dark" : "App light"
  const displayText = darkMode ? "Light" : "Dark"

  function clickButton(){
    setDarkMode((darkMode)=>!darkMode)
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clickButton} >{displayText} Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
