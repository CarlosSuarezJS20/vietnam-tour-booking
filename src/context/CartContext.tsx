"use client";

import { createContext, useContext, useReducer } from "react";

export interface CartItem {
  uid:       string;
  productId: string;
  title:     string;
  imageUrl:  string;
  date:      string;
  time:      string;
  partySize: number;
  price:     number;
}

type Action =
  | { type: "ADD_ITEM";    payload: Omit<CartItem, "uid"> }
  | { type: "REMOVE_ITEM"; uid: string }
  | { type: "OPEN" }
  | { type: "CLOSE" };

interface State {
  items:  CartItem[];
  isOpen: boolean;
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        isOpen: true,
        items: [...state.items, { ...action.payload, uid: `${action.payload.productId}-${Date.now()}` }],
      };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter(i => i.uid !== action.uid) };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    default:
      return state;
  }
};

interface CartContextValue extends State {
  addItem:    (item: Omit<CartItem, "uid">) => void;
  removeItem: (uid: string) => void;
  openCart:   () => void;
  closeCart:  () => void;
  itemCount:  number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { items: [], isOpen: false });

  const value: CartContextValue = {
    ...state,
    addItem:    (item) => dispatch({ type: "ADD_ITEM", payload: item }),
    removeItem: (uid)  => dispatch({ type: "REMOVE_ITEM", uid }),
    openCart:   ()     => dispatch({ type: "OPEN" }),
    closeCart:  ()     => dispatch({ type: "CLOSE" }),
    itemCount:  state.items.length,
    totalPrice: state.items.reduce((sum, i) => sum + i.price, 0),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
