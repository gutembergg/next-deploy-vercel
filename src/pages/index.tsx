import type {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Link from "next/link";
import Layout from "../components/Layout";

import ReactPlayer from "react-player";
import MainComponent from "../components/MainCompoent";
import Slider from "../components/Slider";
import {
  createInmotionUsers,
  getProducts2,
} from "../services/inmotionApi/woocommerceApi";
import { getProducts } from "../services/woocommerceApi/Products";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

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

export interface IUser {
  email: string;
  name: string;
  password: string;
}

const Home: NextPage<IProducts> = ({ products }) => {
  const [model, setModel] = useState<IUser>({} as IUser);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const postUser = await createInmotionUsers(model);
    console.log("postUser::::::", postUser);

    setModel({} as IUser);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="password"
        />

        <button type="submit">Users</button>
      </form>
      {/* <MainComponent products={products} /> */}

      {/*  <ReactPlayer
        url="https://www.youtube.com/watch?v=MjicRl4TffQ&t=1s"
        controls
      /> */}
      <Slider products={products} />

      {/*   <Link href={`categories/accessoire/t`}>
        <a>Go to other page</a>
      </Link> */}
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await getProducts2();
  const products = response.data;

  /*  const _createInmotionUsers = await createInmotionUsers();
  console.log("createInmotionUsers===>", _createInmotionUsers); */

  return {
    props: {
      products,
    },
  };
};
