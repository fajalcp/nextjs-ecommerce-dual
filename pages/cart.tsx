import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) return <h3>Your cart is empty.</h3>;

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map((item:any) => (
        <div key={item.id} className="d-flex justify-content-between align-items-center border p-3 mb-2">
          <div>
            <h5>{item.title}</h5>
            <p>${item.price} x {item.quantity}</p>
          </div>
          <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
