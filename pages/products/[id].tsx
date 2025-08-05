import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductDetail() {
  const { query } = useRouter();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (query.id) {
      fetch(`https://fakestoreapi.com/products/${query.id}`)
        .then((res) => res.json())
        .then(setProduct);
    }
  }, [query.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
        <button onClick={() => addToCart(product)} className="btn btn-warning mt-3">Add to Cart</button>
      </div>
    </div>
  );
}
