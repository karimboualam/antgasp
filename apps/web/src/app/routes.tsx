import { createBrowserRouter } from "react-router-dom";
import OffersList from "@/features/offers/pages/OffersList";

export const router = createBrowserRouter([{ path: "/", element: <OffersList /> }]);
