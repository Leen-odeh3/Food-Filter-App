import React, { useState } from "react";
import { food } from './Data/food';
import Menu from './Component/Menu.jsx';
import Button from './Component/Button.jsx';

function App() {
  const [category, setCategory] = useState("All");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredFood = category === "All" ? food : food.filter(item => item.category === category);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>Our Menu</h1>
      <Button onCategoryChange={handleCategoryChange} />
      <Menu food={filteredFood} />
    </div>
  );
}

export default App;

