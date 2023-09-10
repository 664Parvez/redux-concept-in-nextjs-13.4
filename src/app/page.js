'use client'

import Image from 'next/image'
import styles from './page.module.css'

import { useSelector, useDispatch } from 'react-redux'
import { incrementNum, decrementNum } from '@/redux/slices/Counterslice'

import logo from "/public/next.svg"

export default function Home() {

  const dispatch = useDispatch()

  const counter = useSelector((state) => state.counter)

  return (
    <>
      <Image src={logo} alt='' />
      <h1>This is home page</h1>

      <button onClick={() => dispatch(incrementNum())}><h1>+</h1></button>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(decrementNum())}><h1>-</h1></button>
    </>
  )
}
