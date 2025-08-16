import express from "express";
import pinoHttp from "pino-http";
import cors from "cors";
import { offersRouter } from "./routes/offers.route.js";

export function createServer() {
  const app = express();
  app.use(express.json());
  app.use(pinoHttp());

  const origins = (process.env.CORS_ORIGINS || "").split(",").filter(Boolean);
  app.use(cors({ origin: origins.length ? origins : true, credentials: true }));

  app.get("/health", (_req, res) => res.json({ ok: true }));
  app.use("/offers", offersRouter);

  app.use((_req, res) => res.status(404).json({ error: "Not Found" }));
  app.use((err: any, _req: any, res: any, _next: any) => {
    console.error(err); res.status(500).json({ error: "Internal Server Error" });
  });
  return app;
}
