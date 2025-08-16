export type Offer = {
  id: string;
  title: string;
  price: number;
  merchantName: string;
  city: string;
  imageUrl: string;
};
export type ListOffersResponse = { items: Offer[] };
