import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})

    // add to cart
    const addToCart = (itemId) => {
        // check if any item is already in cart
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    // remove from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }

    useEffect(() => {
        console.log("cartItems", cartItems)
    },[cartItems])

    return (
        <StoreContext.Provider value={contextValue} >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider