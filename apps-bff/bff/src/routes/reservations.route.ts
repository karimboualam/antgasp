import { Router } from "express";
export const reservationsRouter = Router();

// Stub endpoints; implémentation réelle viendra avec le service reservations
reservationsRouter.post("/", async (_req, res) => {
  res.status(501).json({ error: "Not implemented" });
});
reservationsRouter.get("/:id", async (req, res) => {
  res.json({ id: req.params.id, status: "PENDING" });
});
