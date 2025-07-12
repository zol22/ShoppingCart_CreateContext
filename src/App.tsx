import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import './App.css'
import ProductList from './ProductList'

function App() {

  return (
    <CartProvider>
    <h1>🛍 Simple Shopping Cart</h1>
    <ProductList />
    <Cart />
  </CartProvider>
  )
}

export default App
