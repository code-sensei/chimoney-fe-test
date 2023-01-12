import { createSlice } from "@reduxjs/toolkit"

export interface Product {
    available: boolean
    countries: any
    created_at: string
    currency: string
    discount: {
        name: string, 
        percentOff: number
    }
    handle: string
    id: number
    images: string[]
    name: string
    price: number
    product_type: string
    sizes: string[]
    status: string
    tags: string[]
    type: string
    variants: {
        created_at: string
        name: string
        price: number
    }[]
    vendor: string
}

export const initialState: Product[] = [];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export const {} = productsSlice.actions;
export default productsSlice.reducer;