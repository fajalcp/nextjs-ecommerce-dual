import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from '../context/CartContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}
