import { createContext, ReactNode, useState } from "react";
import { IProduct } from "../../pages";

interface Children {
  children: ReactNode;
}

interface ICartContext {
  cartItem: IProduct[];
  cart: ICartState;
  addToCart: (products: IProduct[]) => void;
}

interface ICartState {
  products: IProduct[];
  totalProductsCount?: number;
  totalProductsPrice?: number;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);

const CartProvider = ({ children }: Children) => {
  const [cartItem, setCartItem] = useState<IProduct[]>([] as IProduct[]);
  const [cart, setCart] = useState<ICartState>({} as ICartState);

  const addToCart = (products: IProduct[]) => {
    const totalPrice = products.reduce(
      (acc, item) => {
        const quantity = acc.qty + item.qty;

        const total = acc.price + item.qty * parseInt(item.price);

        return {
          qty: quantity,
          price: total,
        };
      },
      { qty: 0, price: 0 }
    );

    const { qty, price } = totalPrice;

    const _cart = {
      products: products,
      totalProductsCount: price,
      totalProductsPrice: qty,
    };

    setCart(_cart);

    console.log("totalPrice", totalPrice);
    setCartItem(products);
  };

  return (
    <CartContext.Provider value={{ cartItem, addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
