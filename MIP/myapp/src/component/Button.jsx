import React from "react";
import "./button.css";
function button({ ele, setCart }) {
  const addToCart = (product) => {
    setCart((prev) => [...prev, ele]);
  };

  return (
    <div className="button_">
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default button;
