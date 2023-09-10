'use client'

import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            
        }, // Action
        deleteProduct: (state, action) => {

        } // Action
    }
})

export const { addProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer