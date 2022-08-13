import React from "react";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemPrice = cartItems.reduce(
    (prev, current) => prev + current.qty * current.price,
    0
  );
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 20;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      {cartItems.length === 0 && <div>Cart is Empty</div>}
      {cartItems.map((item) => (
        <div key={item.id} className="row">
          <div className="col-1">{item.name}</div>
          <div className="col-1">
            <button onClick={() => onRemove(item)} className="remove">
              -
            </button>
            <button onClick={() => onAdd(item)} className="add">
              +
            </button>
          </div>
          <div className="col-1 text-right">
            {item.qty} x ${item.price.toFixed(2)}
          </div>
        </div>
      ))}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="row">
            <div className="col-2">Item Price</div>
            <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Tax Price</div>
            <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">Shipping Price</div>
            <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
          </div>
          <div className="row">
            <div className="col-2">
              <strong>Total Price</strong>
            </div>
            <div className="col-1 text-right">
              <strong>${totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
          <button
            className="caryAdd"
            onClick={() => alert("next process here...")}
          >
            CheckOut
          </button>
        </>
      )}
    </aside>
  );
};

export default Basket;
