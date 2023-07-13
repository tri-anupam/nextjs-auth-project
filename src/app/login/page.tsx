"use client";
import  Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';


export default function LoginPage(){
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })

    const onLogin = async () =>{

    }


    return(
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
           <h1>Login</h1>
           <hr/>
           <label htmlFor="username">Username</label>
           <label htmlFor="email">email</label>
           <input
            className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
            id='email'
            type='email'
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
            onClick={onLogin}
            className='p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md'
            >Login</button>
            <Link href="/signup">have not SignUp</Link>
        </div>
    )
}