"use client"

import {createSlice, nanoid} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        todoAdd: (state, action) => {
            state.push(action.payload)
        },
        todoDelete: (state, action) => {
            
        }
    }
})

export const {todoAdd, todoDelete} = todoSlice.actions

export default todoSlice.reducer