import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { Product } from "./productsSlice"

export interface CartState {
    id: number,
    quantity: number
}

const initialState: CartState[] = [
    {
        id: 0,
        quantity: 1
    }
]

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartState[]>) => {
            return action.payload
        },
        getCartItems: (state) => {
            state
        },
        updateItemQuantity: (state, action: PayloadAction<{quantity: number, id: number, index: number}>) => {
            let currentItems = state;
            let productToUpdate = currentItems.filter((item) => item.id === action.payload.id)[0];
            currentItems[action.payload.index] = {
                ...productToUpdate,
                quantity: action.payload.quantity
            }
            return currentItems
        },
        removeItem: (state, action: PayloadAction<{id: number}>) => {
            console.log('ID to remove', action.payload.id);
            let currentItems = state;
            let newItems = currentItems.filter((item) => item.id !== action.payload.id);
            return newItems;
        }
    }
})

export const { setCart, updateItemQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;