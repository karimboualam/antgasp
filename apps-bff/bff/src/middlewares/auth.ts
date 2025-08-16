import { Request, Response, NextFunction } from "express";

// Stub d'auth: extrait simplement le header Authorization si présent
export function auth(req: Request, _res: Response, next: NextFunction) {
  const authz = req.header("authorization");
  if (authz?.startsWith("Bearer ")) {
    (req as any).user = { token: authz.slice(7) }; // à remplacer par vérification JWT Keycloak
  }
  next();
}
