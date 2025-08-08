// context/CartContext.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export type Product = {
  id: number
  title: string
  price: number
  image: string
}

type CartContextType = {
  cartItems: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([])

  const addToCart = (product: Product) => {
    setCartItems(prev =>
      prev.some(p => p.id === product.id)
        ? prev // do not add duplicates
        : [...prev, product]
    )
  }

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
