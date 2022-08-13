import React, { useDeferredValue, useTransition } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import data from "./data";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      const newCartItem = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCartItems(newCartItem);
      localStorage.setItem("cartItems", JSON.stringify(newCartItem));
    } else {
      const newCartItem = [...cartItems, { ...product, qty: 1 }];
      setCartItems(newCartItem);
      localStorage.setItem("cartItems", JSON.stringify(newCartItem));
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      const newCartItem = cartItems.filter((x) => x.id !== product.id);
      setCartItems(newCartItem);
      localStorage.setItem("cartItems", JSON.stringify(newCartItem));
    } else {
      const newCartItem = cartItems.map((x) =>
        x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCartItems(newCartItem);
      localStorage.setItem("cartItems", JSON.stringify(newCartItem));
    }
  };

  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      setCartItems(
        localStorage.getItem("cartItems")
          ? JSON.parse(localStorage.getItem("cartItems"))
          : []
      );
    });
  }, []);

  const countCartItem = useDeferredValue(cartItems.length);

  return isPending ? (
    <div>Loading...</div>
  ) : (
    <div className="App">
      <Header countCartItems={countCartItem} />
      <div className="row">
        <Main
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          products={products}
        />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default App;
