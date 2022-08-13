import React from "react";

const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div className="row block">
      <div>
        <b>Simple Shopping Cart</b>
      </div>
      <div>
        <a href="#">
          Cart
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>{" "}
        &nbsp; &nbsp; <a href="#">SignIn</a>
      </div>
    </div>
  );
};

export default Header;
