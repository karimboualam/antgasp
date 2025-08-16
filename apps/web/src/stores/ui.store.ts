import { useState } from "react";

// Micro-store simple (tu pourras remplacer par Zustand si tu veux)
export function useUiStore() {
  const [theme, setTheme] = useState<"light"|"dark">("light");
  return { theme, setTheme };
}
