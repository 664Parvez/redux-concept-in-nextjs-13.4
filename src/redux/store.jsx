'use client'

import { configureStore } from "@reduxjs/toolkit"

import Productslice from "./slices/Productslice"
import Cartslice from "./slices/Cartslice"
import Counterslice from "./slices/Counterslice"
import Todoslice from "./slices/Todoslice"


const store = configureStore({
    reducer: {
        productArray: Productslice,
        cartArray: Cartslice,
        counter: Counterslice,
        todo: Todoslice
    }
})

export default store