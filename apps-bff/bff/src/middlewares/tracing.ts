import { Request, Response, NextFunction } from "express";
import { randomUUID } from "crypto";

export function tracing(req: Request, res: Response, next: NextFunction) {
  const traceId = req.header("x-trace-id") || randomUUID();
  (req as any).traceId = traceId;
  res.setHeader("x-trace-id", traceId);
  next();
}
