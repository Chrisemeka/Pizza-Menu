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
    ) 
}

function Header() {
    // const style = {color: 'red', fontSize: '40px', textTransform: 'uppercase'}

    return (
        <header className="header">
            <h1>
                Fast React Pizza Co
            </h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData;
    let numPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {
                numPizzas > 0 ? (
                    <>
                        <p>Freshly Made Pizza From Our Traditional Style Stone Oven</p>

                        <ul className="pizzas">
                            {pizzaData.map(pizza => 
                                <Pizza pizzaObj={pizza} key={pizza.name}/>
                            )}
                        </ul>
                    </>
                ) : <p>Menu not avaiable yet</p>
            }
        </main>
    )
}

function Pizza({pizzaObj}) {
    console.log(pizzaObj);

    // if (pizzaObj.soldOut) return null

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price + 3}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 22;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour
    console.log(isOpen);

    return (
        <footer className="footer">
            {isOpen ? <Orders isCloseHour={closeHour}/> : <p>We are happy to welcome you between {openHour}:00 and {closeHour}:00</p>
            }
        </footer>
    )
}

function Orders({isCloseHour}) {
    return (
        <div className="order">
            <p>We're open until {isCloseHour}: 00. Come visit us or order online</p>
            <button type="submit" className="btn">Order</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);