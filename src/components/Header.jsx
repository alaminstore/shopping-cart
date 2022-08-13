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
          Cart <sup className="cartItem">{countCartItems}</sup>
        </a>{" "}
        &nbsp; &nbsp; <a href="#">SignIn</a>
      </div>
    </div>
  );
};

export default Header;
