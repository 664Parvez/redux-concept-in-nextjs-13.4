"use client"

import React, {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { todoAdd } from '@/redux/slices/Todoslice' 

const Blog = () => {

  const [inputValue, setInputValue] = useState()

  const dispatch = useDispatch()

  const todoItem = useSelector((state) => state.todo)

  return (
    <>
        <h1>Blog page</h1>

        <input type="text" placeholder='Add your items . . . ' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => dispatch(todoAdd(inputValue))}>Add Items</button>

        {
          todoItem.map((item, index) => {
            return(
              <>
                <div key={index}>
                  <h3>{item}</h3>
                  <button>Delete</button>
                </div>
              </>
            )
          })
        }
    </>
  )
}

export default Blog