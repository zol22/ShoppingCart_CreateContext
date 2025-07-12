import { useCart } from "./CartContext";

export default function Cart() {
  const { state, dispatch } = useCart();

  // ✅ Calculate itemCount before return
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  
  return (
    <div className="p-5">
    <p className="text-right"> 🛒({itemCount}) </p>
      <h2>Cart</h2>
      { state.items.length !== 0 ? <button onClick={()=> dispatch({ type: "CLEAR_CART"})}> Clear Cart</button> : null }
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : ( 
        state.items.map(item => (
          <div key={item.id} className="p-5">
            {item.name} - Qty: {item.quantity}
            <button onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}>
              +
            </button>
            <button onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}>
              -
            </button>
            <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>
              ❌
            </button>
            <p>ItemTotal</p> { (item.price * item.quantity).toFixed(2) } 
          </div>
        ))
      )}

      <h3> Total Cost: $
        {state.items.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}

      </h3>
      
    </div>
  );
}
