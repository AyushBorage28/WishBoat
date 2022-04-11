import React from 'react'
import { AiFillPlusCircle, AiFillMinusCircle, } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import Link from 'next/link'



const Checkout = ({ cart, subTotal, addToCart, removeFromCart }) => {
  return (
    <div className='container px-2 sm:m-auto '>
      <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
      <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Mobile No.</label>
            <input type="tel" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
      </div>

      <div className='px-2 w-full'>
        <div className=" mb-4">
          <label htmlFor="city" className="leading-7 text-sm text-gray-600">Address</label>
          <textarea name="Address" id="Address" cols="30" rows="3" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2
             focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
        </div>
      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Email(Optional)</label>
            <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

      </div>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">State</label>
            <input type="text" id="State" name="State" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

        <div className='px-2 w-1/2'>
          <div className=" mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input type="number" id="Pincode" name="Pincode" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>

      </div>
      <h2 className='font-semibold text-xl'>2. Cart Details</h2>
      <div className=" sidecart   bg-red-200 p-6 m-2 ">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold text-gray-700'>You cart is empty!</div>}
          {Object.keys(cart).map((k) => {
            return <li key={k}>
              <div className="item flex my-5">
              <div className="w-2/3 ">{cart[k].name}({cart[k].size}/{cart[k].variant}) </div>
                <div className=" flex items-center justify-center w-1/3 text-lg  ">
                  <AiFillMinusCircle onClick={() => { removeFromCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }} className='text-red-500 cursor-pointer' />
                  <span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle onClick={() => { addToCart(k, 1, cart[k].price, cart[k].name, cart[k].size, cart[k].variant) }}
                    className='cursor-pointer text-red-500' /></div>
              </div>
            </li>
          })}
        </ol>

        <div className='font-medium text-gray-500'>Total MRP: {subTotal}</div>
        <div className='font-medium text-gray-500'>Discount on MRP: 0</div>
        <div className='font-medium text-gray-500'>Coupon Discount (If any): </div>
        <div className='font-medium text-gray-500'>Convenience Fee: 0</div>
        <span className='font-bold'>Total Amount: {subTotal}</span>
       
        
      </div>
      <div className='mx-2'>
        <Link href={'/order'}><button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2
   focus:outline-none hover:bg-red-600 rounded text-lg">Place Order</button></Link>
      </div>
    </div>
  )
}

export default Checkout