'use client'

import Image from "next/image"
import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux"
import { addCart, deleteCart } from "@/redux/slices/Cartslice"

const Products = () => {

    const dispatch = useDispatch()

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setProducts(data)
        })
    }, [])


  return (
    <>
        <h1>Products Page</h1>

        {
            products.map((items) => {
                console.log(items);
                return (
                    <> 
                        <div key={items.id}>
                            <img src={items.images[0]} alt="" />
                            <h5>{items.title}</h5>
                            <button onClick={() => dispatch(addCart(items))}>Add to Cart</button>
                        </div>
                    </>
                )
            })
        }
    </>
  )
}

export default Products