import { createContext, useReducer, useContext} from "react";
import type { ReactNode } from "react";


// Cart Item Type
interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
  }

const initialState: CartState = { items: [] };

interface CartContextType {
    state: CartState,
    dispatch: React.Dispatch<any>,
}

//payload just means: 👉 "the data you are sending along with an action."
type Action = 
| { type: "ADD_ITEM"; payload: CartItem } // payload = full product object (like a CartItem)
| { type: "REMOVE_ITEM"; payload: number } // payload is the item id
| { type: "CLEAR_CART" } // No payload, just a signal to clear the cart
| { type: "INCREASE_QUANTITY"; payload: number } // payload is the item id
| { type: "DECREASE_QUANTITY"; payload: number } // payload is the item id


// This part of the code runs when someone clicks "Add to Cart".
function cartReducer(state: CartState, action: Action): CartState { 
    switch (action.type) {
        case "ADD_ITEM": {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {   // Increase quantity
               return {
                items: state.items.map(item => item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }  // 👈 increase quantity
                    : item
                ),
               }
            } else {   // Add new item with quantity 1
                return {
                    items: [...state.items, { ...action.payload, quantity: 1 }] // Take all the current cart items (...state.items), Add this new product (...action.payload) with quantity: 1
                };
            }
        }  
        
        case "REMOVE_ITEM": { 
            return {
                items: state.items.filter(item => item.id !== action.payload) // Remove the item with the given id
            };
        }

        case "CLEAR_CART": {
            return {
                items: [] // Clear the cart by returning an empty array
            };
        }

        case "INCREASE_QUANTITY": {
            return {
                items: state.items.map(item => 
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        }

        case "DECREASE_QUANTITY": {
            return {
                items: state.items.map(item => 
                    item.id === action.payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
                )
            };
        }
        default:
            return state
    }
}

const CartContext = createContext<CartContextType>({
    state: initialState ,
    dispatch: () => {},
})

// Provider
export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
      <CartContext.Provider value={{ state, dispatch }}>
        {children}
      </CartContext.Provider>
    );
  }
  
  // Custom hook
export function useCart() {
    return useContext(CartContext);
  }