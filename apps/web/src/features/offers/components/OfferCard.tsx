import type { Offer } from "../api/offers.client";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="rounded-2xl shadow p-4 flex gap-4">
      <img src={offer.imageUrl} alt={offer.title} className="w-40 h-24 object-cover rounded-xl" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{offer.title}</h3>
        <p className="text-sm opacity-80">{offer.merchantName} — {offer.city}</p>
        <div className="mt-2 text-xl font-bold">{offer.price.toFixed(2)} €</div>
      </div>
    </div>
  );
}
