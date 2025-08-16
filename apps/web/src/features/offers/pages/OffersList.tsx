import { useEffect, useState } from "react";
import { listOffers, type Offer } from "../api/offers.client";
import OfferCard from "../components/OfferCard";

export default function OffersList() {
  const [items, setItems] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);
  const [q, setQ] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    setLoading(true);
    listOffers({ q: q || undefined, city: city || undefined })
      .then(setItems)
      .finally(() => setLoading(false));
  }, [q, city]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Offres disponibles</h1>
      <div className="flex gap-3 mb-6">
        <input className="border rounded-xl px-3 py-2 flex-1" placeholder="Recherche…" value={q} onChange={e => setQ(e.target.value)} />
        <input className="border rounded-xl px-3 py-2 w-48" placeholder="Ville" value={city} onChange={e => setCity(e.target.value)} />
      </div>
      {loading ? <p>Chargement…</p> :
        items.length === 0 ? <p>Aucune offre.</p> :
        <div className="grid gap-4">{items.map(o => <OfferCard key={o.id} offer={o} />)}</div>}
    </div>
  );
}
