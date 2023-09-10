'use client'

import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)
        }, // Action

        deleteCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        } // Action
    }
})

export const { addCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer