import { createSlice } from "@reduxjs/toolkit"

export interface CartState {
    productID: string,
    quantity: number
}

const initialState: CartState[] = [
    {
        productID: "dummy-product",
        quantity: 1
    }
]

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

    }
})

export const {} = cartSlice.actions;
export default cartSlice.reducer;