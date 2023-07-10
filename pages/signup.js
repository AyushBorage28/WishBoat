import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const router=useRouter() 
  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  
    
  }, [])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleChange = (e) => {
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    else if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    else if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { name, email, password }
    let res = await fetch(`/api/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      
    })
    let response = await res.json()
    setEmail('')
    setName('')
    setPassword('')
    toast.success('Your account has been created!', {
      position: "top-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }



  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-24 w-auto" src="tab3.png" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={'/login'}><a href="#" className="font-medium text-red-600 hover:text-red-500"> Login </a></Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input value={name} onChange={handleChange} id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">email</label>
              <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="email" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">password</label>
              <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password (At least 6 characters)" />
            </div>


          </div>



          <div className="flex items-center justify-between">



          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg className="h-5 w-5 text-red-500 group-hover:text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup