import { useEffect, useState } from "react";

export function useToast() {
  const [msg, setMsg] = useState<string | null>(null);
  useEffect(() => { if (msg) setTimeout(() => setMsg(null), 2500); }, [msg]);
  return {
    Toast: () => msg ? <div className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-xl">{msg}</div> : null,
    notify: (m: string) => setMsg(m)
  };
}
