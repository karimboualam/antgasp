import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-lg">Ant-Gasp</Link>
        <div className="flex gap-4 text-sm">
          <Link to="/">Offres</Link>
          <Link to="/profile">Profil</Link>
        </div>
      </nav>
    </header>
  );
}
