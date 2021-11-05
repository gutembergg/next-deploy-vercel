import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { IProduct } from "../../pages";
import { CartContext } from "../context/CartContext";
import { Container, Card, ImageBox, ImageContent } from "./styles";

interface Props {
  product: IProduct;
}
const ProductCard = ({ product }: Props) => {
  const { cartItem, addToCart } = useContext(CartContext);

  const handleAddToCart = (product: IProduct) => {
    const productExist = cartItem.find((item) => item.id === product.id);

    if (productExist) {
      const newCart = [...cartItem];

      const cart = newCart.map((item) =>
        item.id === product.id
          ? { ...productExist, qty: productExist.qty + 1 }
          : item
      );

      addToCart(cart);
    } else {
      addToCart([...cartItem, { ...product, qty: 1 }]);
    }
  };

  console.log("cartItem::", cartItem);
  return (
    <Container>
      {product && (
        <Card>
          <ImageBox>
            <Link href={`/product/${product.slug}-${String(product.id)}`}>
              <a>
                <ImageContent>
                  <Image
                    width={200}
                    height={200}
                    src={product.images[0].src}
                    alt="product"
                    objectFit="cover"
                  />
                </ImageContent>
              </a>
            </Link>
          </ImageBox>
          <div className="infos">
            {product.description && (
              <div dangerouslySetInnerHTML={{ __html: product?.description }} />
            )}

            <div>Price: {product.price}</div>
          </div>

          <button type="button" onClick={() => handleAddToCart(product)}>
            AddToCart
          </button>
        </Card>
      )}
    </Container>
  );
};

export default ProductCard;
