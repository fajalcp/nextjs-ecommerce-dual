'use client'
import { useEffect, useState } from 'react'
import { useCart } from '../../context/CartContext'

type Props = {
  params: { id: string }
}

type Product = {
  id: number
  title: string
  price: number
  description: string
  image: string
}

export default function ProductDetail({ params }: Props) {
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json())
      .then(setProduct)
  }, [params.id])

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width={200} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button className="btn btn-success" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  )
}
