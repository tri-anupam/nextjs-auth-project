"use client";
import axios from 'axios';
import Link from "next/link";
import { toast, Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = React.useState("")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success("Logout Successful")
            router.push("/login")
        } catch (error: any) {
            toast.error("Something went wrong. Try Again")
            console.log(error.message)
        }
    }

    const getUserDetails = async () => {
        try{
            const res = await axios.get('/api/users/me')
            console.log(res.data);
            setData(res.data.data._id)
        }catch(error:any){
            console.log(error.message)
            toast.error(error.message)  
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Toaster />
            <h1>Profile Page</h1>
            <hr />
            <h2 className='p-2 rounded bg-green-500'>
                {data === "" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}
            </h2>
            <button className="border border-white rounded-sm bg-blue-500 hover:bg-blue-600 font-bold p-1 m-2"
                onClick={logout}>
                Logout
            </button>
            <button className="border border-white rounded-sm bg-purple-500 hover:bg-purple-600 font-bold p-1 m-2"
                onClick={getUserDetails}>
                Get User Details
            </button>
        </div>
    )
}