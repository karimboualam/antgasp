import { http } from "@/api/http";

export type Offer = {
  id: string;
  title: string;
  price: number;
  merchantName: string;
  city: string;
  imageUrl: string;
};

export async function listOffers(params?: { city?: string; q?: string }) {
  const res = await http.get<{ items: Offer[] }>("/offers", { params });
  return res.data.items;
}
