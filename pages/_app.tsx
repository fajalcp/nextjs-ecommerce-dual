import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar />
      <div className="container mt-5 pt-4">
        <Component {...pageProps} />
      </div>
    </CartProvider>
  );
}
