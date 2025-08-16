import axios from "axios";

const baseURL = process.env.PRODUCTS_API || "http://localhost:8081";
const http = axios.create({ baseURL, timeout: 5000 });

export type ProductDTO = {
  id: string;
  title: string;
  price: number;
  merchantName: string;
  city: string;
  imageUrl: string;
};

export async function listProducts(params: { city?: string; q?: string }) {
  const res = await http.get<{ items: ProductDTO[] }>("/products", { params });
  return res.data.items;
}
