"use client";
import Button from '@/components/Micro/Button'
import ControlledInput from '@/components/Micro/ControlledInput'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link'
import React, { ChangeEvent, useState } from 'react'

const page = () => {

    const [form, setForm] = useState({
        confirmPassword: "",
        password: ""
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
            label: "Create Password",
            name: "password",
            placeholder: "Enter password (min of 8 characters)"
        },
        {
            label: "Confirm Password",
            name: "password",
            placeholder: "Enter password (min of 8 characters)"
        }
    ]
    return (
        <div className='bg-[#FBFBFB] w-11/12 sm:w-fit lg:w-1/3 p-10 flex flex-col gap-5 rounded-3xl'>
            <div className=''>
                <h1 className='text-[32px] font-[600]'>Update Password</h1>
                <p className=''>A new set of characters to login your account.</p>
            </div>

            <form action="" className='flex flex-col gap-3'>
                {
                    formItems.map((item, index) => {
                        return (
                            <ControlledInput label={item.label} name={item.name} placeholder={item.placeholder} key={index} type={item.name} value={form[item.name as "confirmPassword" | "password"]} onChange={handleChange} />
                        )
                    })
                }

                <Button onClick={() => console.log(form)}>
                    Update Password
                </Button>
            </form>
        </div>
    )
}

export default page