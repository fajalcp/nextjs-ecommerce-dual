import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';
import Navbar from '../../components/Navbar';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>{product.title}</h2>
        <img src={product.image} className="img-fluid" style={{ maxHeight: '300px' }} />
        <p className="mt-3">{product.description}</p>
        <h4>${product.price}</h4>
        <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </>
  );
}
