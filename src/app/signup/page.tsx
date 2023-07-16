"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLaoding] = React.useState(false);

    const onSignup = async () => {
        try {
            setLaoding(true);
            const response = await axios.post("/api/users/signup",user);
            console.log("Signup success",response.data);
            toast.success("Sign Up Successful")
            router.push("/login");
        } catch (error:any) {
            toast.error("Please fill all detail accurately")
            console.log("Signup failed",error.message)

        }finally{
            setLaoding(false);
        }
    }

    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Toaster/>
            <h1 className='text-white font-bold text-3xl border border-pink-700 p-2 mb-4 rounded stroke-cyan-500 shadow-md shadow-red-600 '>{loading ? "Processing" : "Sign Up"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input
                className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='username'
                type='text'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder='username'
            />
            <label htmlFor="email">email</label>
            <input
                className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='email'
                type='email'
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder='email'
            />
            <label htmlFor="password">Password</label>
            <input
                className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
                id='password'
                type='password'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder='password'
            />
            <button
                // {buttonDisabled?"":onclick{onSignup}}
                onClick={onSignup}
                className={`p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md
            ${buttonDisabled ? "cursor-not-allowed" : "cursor-pointer"}`}>Sign Up</button>
            <Link href="/login" className='mt-3 underline'>Visit Login Page</Link>
        </div>
    )
}