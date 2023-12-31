import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    }

    const removeFromCart = (item) => {
        console.log(item)
        const newCart = cart.filter((cartItem) => cartItem.name !== item.name);
        setCart(newCart);
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
        }}>
            {children}
        </CartContext.Provider>
    );
}