import React, { useState, useEffect, useContext } from "react";
import "./HomePage.css";
import data from "./data/data";

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);

  const increment = (id) => {
    let index = cart.findIndex((e) => e.id === id);
    let newCart = [...cart];
    newCart[index].qty += 1;
    console.log(newCart);
    setCart(newCart);
  };

  const getQty = (id) => {
    let index = cart.findIndex((e) => e.id === id);
    let q = cart[index].qty;
    console.log(q);
    return q;
  };
  function addToCart(e) {
    console.log("print the cart");
    setCart([
      ...cart,
      { id: e.id, img: e.thumbnail, title: e.title, price: e.price, qty: 1 },
    ]);
  }

  const decrement = (id) => {
    let index = cart.findIndex((e) => e.id === id);
    let newCart = [...cart];
    if (newCart[index].qty > 1) {
      newCart[index].qty = newCart[index].qty - 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };
  //React.
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div>
    { displayCart ?<p>this is the cart</p>:
      <div className="container">
        <>
          {data.products.map((e) => (
            <div>
              <img src={e.thumbnail} />
              <h1>{e.title}</h1>
              <p>{e.description}</p>
              <h4>
                <i className="fas fa-star"></i>
                {e.rating}
              </h4>
              <h5>${e.price}</h5>
              <h3> {e.discountPercentage}% Off</h3>
              <div className="buttons">
                {cart.some((pro) => pro.id === e.id) ? (
                  <button>
                    <>
                      <i
                        className="fas fa-minus"
                        onClick={() => decrement(e.id)}
                      ></i>
                      <p>{getQty(e.id)}</p>
                      <i
                        className="fas fa-plus"
                        onClick={() => increment(e.id)}
                      ></i>
                    </>
                  </button>
                ) : (
                  <button onClick={() => addToCart(e)}>{"Add to Cart"}</button>
                )}
                <button
                  type="submit"
                  onClick={() => setDisplayCart(!displayCart)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </>
      </div>}
    </div>
  );
};

export default HomePage;
