import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  AiFillCloseCircle, AiFillPlusCircle, AiFillMinusCircle, } from 'react-icons/ai';
import { BsFillBagCheckFill, BsHandbag} from 'react-icons/bs';
import {GoPerson} from 'react-icons/go';
import { MdDeleteForever} from 'react-icons/md';


import { useRef } from 'react';
const Navbar = ({cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
  const togglecart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }
  const ref = useRef()
  return (
    <div className='sticky top-0 bg-white z-10'>
      <header className="text-gray-600 body-font shadow-md ">
        <div className=" mx-0 md:mx-7 flex flex-wrap p-0 flex-col md:flex-row items-center mb-0 py-0 shadow-xl ">
          <a className="flex title-font font-medium  text-gray-900 mb-4 md:mb-0 ">
            <Link href={'/'}><a><Image className="top-0 mx-0  bg-white" src="/redlogo.png" alt="" width={100} height={100} /></a></Link>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-sm md:text-xl justify-center shadow-2xl ">
            <Link href={'/Tshirts'}><a className="mr-5 ml-0 hover:text-pink-600 font-bold">T-Shirts</a></Link>
            <Link href={'/hoodies'}><a className="mr-5 hover:text-orange-600 font-bold">Hoodies</a></Link>
            <Link href={'/caps'}><a className="mr-5 hover:text-yellow-500 font-bold">Caps</a></Link>
            <Link href={'/mugs'}><a className="mr-5 hover:text-cyan-600 font-bold">Mugs</a></Link>
            <Link href={'/watches'}><a className="mr-5 hover:text-red-600 font-bold">Watches</a></Link>
            <Link href={'/shoes'}><a className="mr-0 hover:text-green-600 font-bold">Shoes</a></Link>
          </nav>


          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-0 focus:outline-none hover:bg-gray-200 rounded mt-8 mx-0
           md:mt-0 absolute right-4 text-xl md:text-2xl">
            <Link href={'/login'}><a><GoPerson className='mx-4' /></a></Link>
            < BsHandbag onClick={togglecart} />

            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            
          </button>
        </div>
        
      </header>

      <div ref={ref} className="-72 h-[100vh] sidecart overflow-y-scroll absolute top-24  -right-1  bg-red-200 py-10 
       px-8 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl text-center">Shopping Bag</h2>
        <span onClick={togglecart} className="absolute top-3 right-6 cursor-pointer text-2xl text-red-600"><AiFillCloseCircle /></span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length ==0 && 
        <div>
        <div className='my-4 font-semibold text-gray-700'>Hey, it feels so light!</div>
        <div className='my-4 font-thin text-gray-700'>There is nothing in your bag.</div>
        <div className='my-4 font-thin text-gray-700'>Lets add some items.</div>
        </div>}


          
          {Object.keys(cart).map((k)=>{ return <li key={k}>
            <div className="item flex my-5">
              <div className="w-2/3 ">{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
              <div className=" flex items-center justify-center w-1/3 text-lg  ">
                <AiFillMinusCircle onClick={() =>{removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className='text-red-500 cursor-pointer' />
                <span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={() =>{addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant )}} className='cursor-pointer text-red-500' /></div>
            </div>
          </li>})}
       
        </ol>
        <div className="flex">
          <Link href={'/checkout'}><button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2
   focus:outline-none hover:bg-red-600 rounded text-sm"><BsFillBagCheckFill className='m-1' />Checkout</button></Link>
          <button onClick={clearCart} className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2
   focus:outline-none hover:bg-red-600 rounded text-sm"><MdDeleteForever className='m-1' /> Clear Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar