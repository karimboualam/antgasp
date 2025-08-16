import { useState } from "react";

// Stub d'auth — remplacé plus tard par Keycloak
export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const login = async () => setToken("dev-token");
  const logout = () => setToken(null);
  return { token, login, logout, isAuthenticated: !!token };
}
