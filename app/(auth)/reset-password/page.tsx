"use client";
import Button from '@/components/Micro/Button'
import ControlledInput from '@/components/Micro/ControlledInput'
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'

const page = () => {

    const [form, setForm] = useState({
        email: "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    }

    const formItems = [
        {
            label: "Email Address",
            name: "email",
            placeholder: "Enter your Email Adress"
        },
        {
            label: "Password",
            name: "password",
            placeholder: "Password"
        }
    ]
    return (
        <div className='bg-[#FBFBFB] w-11/12 sm:w-fit lg:w-1/3 p-10 flex flex-col gap-3 rounded-3xl'>
            <h1 className='text-[32px] font-[600]'>Reset Password</h1>
            <p className="text-sm">Enter the email address you used to register this account.</p>

            <form action="" className='flex flex-col gap-3'>

                <ControlledInput label={"Email Address"} name={"email"} placeholder="Enter your Email Adress" type="email" value={form["email"]} onChange={handleChange} />

                <Button onClick={() => console.log(form)}>
                    Get Reset Link
                </Button>
            </form>
        </div>
    )
}

export default page