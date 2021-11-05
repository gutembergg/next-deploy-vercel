// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createInmotionUsers } from "../../services/inmotionApi/woocommerceApi";
import axios from "axios";

const handleUsers = async () => {
  const response = await createInmotionUsers();
  console.log("response==>", response);

  return response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await createInmotionUsers();
  console.log("re===========", response);
  res.status(200).json(response);
}
