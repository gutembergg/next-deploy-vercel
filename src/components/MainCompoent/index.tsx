import ProductCard from "../ProductCard";
import { Container } from "./styles";

interface IImage {
  id: number;
  src: string;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  images: IImage[];
  price: string;
  description?: string;
  slug?: string;
  qty: number;
}

export interface IProducts {
  products: IProduct[];
}

const MainComponent = ({ products }: IProducts) => {
  return (
    <Container>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </Container>
  );
};

export default MainComponent;
