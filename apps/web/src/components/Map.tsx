export default function Map({ lat = 48.8566, lng = 2.3522 }: { lat?: number; lng?: number }) {
  // placeholder (intégration Leaflet/Google Maps ultérieure)
  return (
    <div className="w-full h-60 rounded-xl border grid place-items-center">
      <div>Carte (lat: {lat}, lng: {lng})</div>
    </div>
  );
}
