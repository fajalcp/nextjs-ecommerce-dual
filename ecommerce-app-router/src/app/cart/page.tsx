'use client'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart()

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cartItems.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <strong>{item.title}</strong><br />
                ${item.price}
              </div>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
