import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Menu() {
  //Parent Component

  const isPizaData = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {isPizaData > 0 ? ( // Conditional rendering using ternary operator
        <ul className="pizzas">
          {pizzaData.map((Piza) => (
            <Pizza pizzaObj={Piza} key={Piza.name} />
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu please come back later</p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // Destructuring props
  // Child component
  console.log(pizzaObj);
  return (
    <div className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.namee}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span>{pizzaObj.price + 3}</span>
      </div>
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "45px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Pizza Resturant</h1>;
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>Sorry We are closed Comeback later!</p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        we are open until {props.closeHour}. Please order online or visit us
      </p>

      <button className="btn">Order now </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
