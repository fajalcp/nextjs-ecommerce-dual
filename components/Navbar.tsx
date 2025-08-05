import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">E-Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/cart">Cart ({cart.length})</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
