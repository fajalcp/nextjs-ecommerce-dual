import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className="navbar-brand">MyStore</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link href="/" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link href="/products" className="nav-link">Products</Link></li>
            <li className="nav-item"><Link href="/cart" className="nav-link">Cart</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">About</Link></li>
            <li className="nav-item"><Link href="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
