// app/layout.tsx
import './globals.css'
import { CartProvider } from './context/CartContext'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <nav style={{ padding: '1rem', background: '#f8f9fa' }}>
            <Link href="/">Home</Link> |{" "}
            <Link href="/products">Products</Link> |{" "}
            <Link href="/cart">Cart</Link> |{" "}
            <Link href="/about">About</Link> |{" "}
            <Link href="/contact">Contact</Link>
          </nav>
          <main className="container mt-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
