import { createSlice, PayloadAction } from "@reduxjs/toolkit"

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
        }
    }
})

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;