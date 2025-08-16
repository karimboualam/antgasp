import { Request, Response, NextFunction } from "express";

const buckets = new Map<string, { count: number; ts: number }>();
export function rateLimit(maxPerMin = 120) {
  return (req: Request, res: Response, next: NextFunction) => {
    const key = req.ip || "global";
    const now = Date.now();
    const b = buckets.get(key) ?? { count: 0, ts: now };
    if (now - b.ts > 60_000) { b.count = 0; b.ts = now; }
    b.count += 1; buckets.set(key, b);
    if (b.count > maxPerMin) return res.status(429).json({ error: "Too Many Requests" });
    next();
  };
}
