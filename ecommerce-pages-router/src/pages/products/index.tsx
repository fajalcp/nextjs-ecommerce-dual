import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { Product } from '../../types';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Product List</h2>
        <div className="row">
          {products.map(product => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" style={{ height: '200px', objectFit: 'contain' }} />
                <div className="card-body">
                  <h5 className="card-title">{product.title.slice(0, 40)}...</h5>
                  <p>${product.price}</p>
                  <Link href={`/products/${product.id}`} className="btn btn-primary btn-sm">
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

