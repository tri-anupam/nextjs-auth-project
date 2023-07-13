"use client";
import  Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';


export default function SignupPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
        username:"",
    })

    const onSignup = async () =>{

    }


    return(
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
           <h1>Signup</h1>
           <hr/>
           <label htmlFor="username">Username</label>
           <input
            className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='username'
            type='text'
            value={user.username}
            onChange={(e)=> setUser({...user,username:e.target.value})}
            placeholder='username'
           />
           <label htmlFor="email">email</label>
           <input
            className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='email'
            type='email'
            required
            value={user.email}
            onChange={(e)=> setUser({...user,email:e.target.value})}
            placeholder='email'
           />
           <label htmlFor="password">Password</label>
           <input
            className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='password'
            type='password'
            value={user.password}
            onChange={(e)=> setUser({...user,password:e.target.value})}
            placeholder='password'
           />
           <button 
            onClick={onSignup}
            className='p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md'
            >Sign Up</button>
            <Link href="/login">Visit Login Page</Link>
        </div>
    )
}