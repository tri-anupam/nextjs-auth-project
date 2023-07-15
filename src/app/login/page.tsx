"use client";
import  Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';


export default function LoginPage(){
    const router = useRouter();
    const [user,setUser] = React.useState({
        email:"",
        password:"",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading,setLoading] = React.useState(false);


    const onLogin = async () =>{
        try{
            setLoading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login success",response.data);
            toast.success("Login success")
            router.push("/profile")
        }catch(error:any){
            console.log("Login failed",error.message);
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    React.useEffect(()=>{
        if(user.email.length >0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true)
        }
    },[user])
    
    return(
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
           <h1>{loading?"Processing":"Login"}</h1>
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
            className={`p-2 bg-blue-500 hover:bg-blue-600 font-bold rounded-md ${buttonDisabled?'cursor-not-allowed':'cursor-pointer'}`}
            >Login</button>
            <Link href="/signup">have not SignUp</Link>
        </div>
    )
}