"use client";
import axios from "axios";
import React from "react";

export default function UserProfil() {
    const [data, setData] = React.useState({
        username:'',
        email:''
    })
    React.useEffect(()=>{
        const getUserDetails = async () => {
            try {
                const res = await axios.get('/api/users/me');
                // console.log(res.data)
                // const userData = await res.json();
                setData(res.data.data)
                console.log(res.data.data)
            } catch (error: any) {
                console.log(error.message)
            }
        }
        getUserDetails();
    },[])

   

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
            {/* <h1 className="text-4xl">Profile Page<br />
                <span className="p-2font-bold text-gray-100">{params.id}</span>
            </h1> */}
            <h2>User Detail</h2>
                <p>UserId-<span className="font-bold lowercase text-3xl text-[#f87de5] ml-3">{data.username}</span> </p>
            <div >
                <p>Email- <span className="font-bold lowercase text-3xl text-[#f87de5] ml-3">{data.email}</span> </p>
            </div>
        </div>
    )
}
