"use client"

import React from 'react'

import { useSelector } from 'react-redux'

const Cart = () => {

  const todoItem = useSelector((state) => state.todo)

  return (
    <>
        <h1>Cart Page</h1>
        {
          todoItem.map((item, index) => {
            return(
              <>
                <div key={index}>
                  <h4>{item}</h4>
                  <button>Delete</button>
                </div>
              </>
            )
          })
        }
    </>
  )
}

export default Cart