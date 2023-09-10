'use client'

import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incrementNum: (state, action) => {
            return state = state + 1
        },
        decrementNum: (state, action) => {
            if (state < 1) {
                return state = 0
            }
            return state = state - 1
        }
    }
})

export const {incrementNum, decrementNum} = CounterSlice.actions

export default CounterSlice.reducer