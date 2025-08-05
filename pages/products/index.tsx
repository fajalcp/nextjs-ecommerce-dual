import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {products.map((p) => (
          <div className="col-md-4 mb-4" key={p.id}>
            <div className="card h-100">
              <img src={p.image} className="card-img-top p-3" style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">${p.price}</p>
                <Link href={`/products/${p.id}`} className="btn btn-primary me-2">View</Link>
                <button onClick={() => addToCart(p)} className="btn btn-warning">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
