import { useEffect, useState } from "react";

export type Geo = { lat: number; lng: number } | null;
export function useGeo() {
  const [geo, setGeo] = useState<Geo>(null);
  useEffect(() => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      p => setGeo({ lat: p.coords.latitude, lng: p.coords.longitude }),
      () => setGeo(null),
      { enableHighAccuracy: true, timeout: 5000 }
    );
  }, []);
  return geo;
}
