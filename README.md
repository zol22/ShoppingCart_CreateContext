# 🛒 Simple Shopping Cart App (React + useReducer)

This is a beginner-friendly shopping cart web app built using **React**, **TypeScript**, and the **Context API** with `useReducer`. It demonstrates how to manage complex state in a clean and scalable way — like adding/removing products, updating quantities, and calculating totals in a shopping cart.

---

## ⚙️ Features

- 🧾 **Add items to cart**
- ➕ **Increase item quantity**
- ➖ **Decrease item quantity**
- ❌ **Remove items from cart**
- 🧹 **Clear entire cart**
- 💰 **Display total item cost**
- 🔢 **Show total item count in cart icon**

---

## 🧠 What I Learned

- How to use **`useReducer`** for managing complex state logic
- How to define **action types and payloads**
- How to share state across components using **`createContext`**
- How to calculate **derived values** like total cost and item count using `.reduce()`
- The importance of **clean data structures** and separating UI from logic

---

## 🏗️ Tech Stack

- React
- TypeScript
- Context API
- useReducer
- Tailwind CSS (optional for styling)

---

## 📦 Project Structure
src/
├── CartContext.tsx # Global cart state using useReducer + Context
├── Cart.tsx # UI to display and interact with cart items
├── ProductList.tsx # (Optional) Add product items
├── App.tsx # Main app component

---


## 📐 Data Structure
```ts
{
  id: number;
  name: string;
  price: number;
  quantity: number;
}
```

The cart state looks like:
```ts
{
  items: CartItem[];
}
```
---

## 🔁 Reducer Actions
```ts
type Action =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" }
  | { type: "INCREASE_QUANTITY"; payload: number }
  | { type: "DECREASE_QUANTITY"; payload: number };
```

## 🙌 Credits

Built by Solange Ormeño — for learning and practicing advanced React concepts like useReducer and global state management.