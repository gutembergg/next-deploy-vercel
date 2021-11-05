import React, { ReactNode } from "react";
import CartProvider from "../context/CartContext";
import Footer from "../Footer";
import Header from "../Header";

import { Container, HeaderBox, FooterBox } from "./styles";

interface Children {
  children: ReactNode;
}

const Layout = ({ children }: Children) => {
  return (
    <CartProvider>
      <Container>
        <HeaderBox>
          <Header />
        </HeaderBox>

        <main>{children}</main>
        <FooterBox>
          <Footer />
        </FooterBox>
      </Container>
    </CartProvider>
  );
};

export default Layout;
