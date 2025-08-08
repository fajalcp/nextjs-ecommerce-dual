import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          <ul className="list-group">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.title}
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
