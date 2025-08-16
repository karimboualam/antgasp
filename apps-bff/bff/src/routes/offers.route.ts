import { Router } from "express";
import { z } from "zod";
import { listProducts } from "../clients/products.client.js";

export const offersRouter = Router();

const Query = z.object({
  city: z.string().min(1).optional(),
  q: z.string().min(1).optional()
});

offersRouter.get("/", async (req, res, next) => {
  try {
    const { city, q } = Query.parse(req.query);
    const items = await listProducts({ city, q });
    res.json({ items });
  } catch (e) { next(e); }
});
