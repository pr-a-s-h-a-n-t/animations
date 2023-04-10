import "./styles.css";
import React from "react";
import Card from "./component/Card";
import Button from "./component/Button";

export default function App() {
  const [cart, setCart] = React.useState(() => []);

  const cardData = [
    {
      label: "BTC",
      path: "../assets/Ui.jpg",
      price: 50
    },
    {
      label: "DOOGE",
      path: "./assets/UI.jpg",
      price: 100
    },
    {
      label: "apple",
      path: "./assets/UI.jpg",
      price: 200
    }
  ];
  return (
    <div className="App">
      <h1> Our Top Products</h1>
      <div className="cards_wrapper">
        {cardData.map((ele, index) => {
          return (
            <div key={index} className="card_wrapper">
              <Card label={ele.label} price={ele.price} path={ele.path} />
              <Button ele={ele} setCart={setCart} />
            </div>
          );
        })}
      </div>

      <hr />

      <h1>Cart Item </h1>
      <div className="Carts_wrapper">

        {cart.map((ele, index) => {
          return (
            <div key={index} className="Cart_wrapper">
              <Card label={ele.label} price={ele.price} path={ele.path} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Q. Make a web page, add a product cards and
 * add to card functionility. using react JS.
 *
 */
