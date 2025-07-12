import { useCart } from "./CartContext.tsx";

const products = [
    { id: 1, name: "🍕 Pizza", price: 15 },
    { id: 2, name: "🍔 Burger", price: 10 },
    { id: 3, name: "🍣 Sushi", price: 20},
  ];
  

  export default function ProductList() {
    const { dispatch, state } = useCart();
  
    console.log("Cart State:", state);
     return (
      <div className="p-5">
        <h2>Products</h2>
        {products.map(product => (
          <div key={product.id}>
            {product.name}
            { product.price ? ` - $${product.price}` : null }
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } })
              }
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    );
  }