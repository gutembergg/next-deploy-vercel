import CartIcon from "../CartIcon";
import { Container, NavBar, CartInfo } from "./styles";

const Header = () => {
  return (
    <Container>
      <NavBar>
        <span>Logo</span>
        <span>Menu 1</span>
        <span>Menu 2</span>
        <span>Menu 3</span>
      </NavBar>

      <CartInfo>
        <CartIcon />
      </CartInfo>
    </Container>
  );
};

export default Header;
