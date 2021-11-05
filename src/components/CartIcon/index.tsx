import { useContext } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

import { Container } from "./styles";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  console.log("cart::::", cart);
  return (
    <Container>
      <span>
        {" "}
        {cart.totalProductsCount ? cart.totalProductsCount : "00,00"}
      </span>
      <span className="icon">
        {" "}
        <FaCartArrowDown />
        <div className="quantity">
          {cart.totalProductsPrice ? cart.totalProductsPrice : "0"}
        </div>
      </span>
    </Container>
  );
};

export default CartIcon;
