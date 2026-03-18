function Cart({ cart }) {
  return (
    <div className="container mt-4">
      <h2>🛒 Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="card mb-3 p-3">
            <img
              src={item.image}
              alt={item.title}
              style={{ height: "120px", objectFit: "contain" }}
            />
            <h6>{item.title}</h6>
            <p>Price: ₹ {item.price}</p>
            <p>
              Quantity: <b>{item.qty}</b>
            </p>
            <p>Total: ₹ {item.price * item.qty}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
