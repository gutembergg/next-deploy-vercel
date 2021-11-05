import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import axios from "axios";
import { IUser } from "../../pages";

export const wooCommerce = new WooCommerceRestApi({
  url: "https://dx7l6anesh.preview.infomaniak.website",
  consumerKey: process.env.NEXT_PUBLIC_CONSUMER_KEY as string,
  consumerSecret: process.env.NEXT_PUBLIC_CONSUMER_SECRET as string,
  version: "wc/v3",
  axiosConfig: { headers: {} },
  queryStringAuth: true,
});

export const getProducts2 = async () => {
  const response = await wooCommerce.get("products");

  return response;
};

export const createInmotionUsers = async (model: IUser) => {
  const _user = {
    email: model.email,
    name: model.name,
    password: model.password,
    wcb2b_group: "24",
    wcb2b_status: "0",
  };

  try {
    const response = await axios.post(
      "https://dx7l6anesh.preview.infomaniak.website/wp-json/api/inmotion/users",
      _user
    );

    return response;
  } catch (error) {
    console.log("error:::", error);
  }
};

// My credentials
//  url: "http://localhost/wordpress",
// consumerKey: "ck_e3e1a2bdbf3e2fa64a37db156423bce13da7646e",
//  consumerSecret: "cs_1b8ccdf4b1448080fde4aa593c58bff6cb41fe6b",
