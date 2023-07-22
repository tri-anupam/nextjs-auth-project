"use client";
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);


    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success")
            router.push("/profile")
        } catch (error: any) {
            toast.error("Invalid Email Id or Password")
            console.log("Login failed", error.message);

        } finally {
            setLoading(false);
        }
    }
    React.useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className='flex justify-center items-center h-screen'>
            <Toaster />
            <div className='text-center p-2 drop-shadow-2xl shadow-lg shadow-indigo-500/40 rounded-lg'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-white font-bold text-3xl border border-pink-700 p-2 mb-3 rounded stroke-cyan-500 shadow-md shadow-red-600 bg-black w-fit'>{loading ? "Processing" : "Login"}</h1>
                </div>
                

                <div className='my-3'>
                    <label htmlFor="email" className='text-[18px] font-bold mr-4'>Email:</label>
                    <input
                        className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-[280px]'
                        id='email'
                        type='email'
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        placeholder='emailid'
                    />
                </div>

                <div className='my-3'>
                    <label htmlFor="password" className='text-[18px] font-bold mr-3'>Password:</label>
                    <input
                        className='p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-[260px]'
                        id='password'
                        type='password'
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder='password'
                    />
                </div>

                <button
                    onClick={onLogin}
                    className={`p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md ${buttonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >Login</button>
                <div className='my-2'>
                    <Link href="/forgot" className='text-red-500 mr-3 underline'>forgot Password?</Link>
                    <Link href="/signup" className='text-blue-600 underline'>have not SignIn</Link>
                </div>


            </div>

        </div>
    )
}