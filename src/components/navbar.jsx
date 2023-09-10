"use client"

import React from 'react'
import Link from "next/link"

import { useSelector } from 'react-redux'

const Navbar = () => {

  const itemCount = useSelector((state) => state.cartArray)

  return (
    <>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li>Items: {itemCount.length}</li>
        </ul>
    </>
  )
}

export default Navbar