"use client";

import ControlledInput from '@/components/Micro/ControlledInput'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'
import Button from '@/components/Micro/Button';

const page = () => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e:  ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    const formItems = [
        {
            label : "Email Address",
            name: "email",
            placeholder: "Enter your Email Adress"
        },
        {
            label : "Password",
            name: "password",
            placeholder: "Password"
        }
    ]
  return (
    <div className='bg-[#FBFBFB] w-11/12 sm:w-fit lg:w-1/3 p-10 flex flex-col gap-3 rounded-3xl'>
        <h1 className='text-[32px] font-[600]'>Welcome back</h1>

        <form action="" className='flex flex-col gap-3'>
            {
                formItems.map((item, index)=>{
                    return(
                       <ControlledInput label={item.label} name={item.name} placeholder={item.placeholder} key={index} type={item.name} value={form[item.name as "email" | "password"]} onChange={handleChange}/>
                    )
                })
            }

            <div className='flex items-start justify-between text-sm'>
                <div className='flex gap-2'>
                    <input type="checkbox" name="" id=""/>
                    <label htmlFor="check">Remember me</label>
                </div>

                <Link href={"/reset-password"}>
                Forgot Password
                </Link>
            </div>

            <Button onClick={()=> console.log(form)}>
                Sign in
            </Button>
        </form>

        <p className='text-center'>Or</p>

        <div className=' gap-5 items-center justify-between'>
            <div className='flex-center gap-2 py-3 px-5 bg-white rounded-full cursor-pointer'>
                <FcGoogle />
                <p>Google</p>
            </div>
        </div>
    </div>
  )
}

export default page