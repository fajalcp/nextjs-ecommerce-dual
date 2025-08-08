'use client'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

type Product = {
  id: number
  title: string
  price: number
  image: string
  // add other fields as needed
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const { addToCart } = useCart()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
  }, [])

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products.map(product  => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.title} height={200} />
              <div className="card-body">
                <h5 className="card-title">
                  <Link href={`/products/${product.id}`}>{product.title}</Link>
                </h5>
                <p>${product.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
