"use client";

import ControlledInput from '@/components/Micro/ControlledInput';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react';
import Button from '@/components/Micro/Button';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter();
    
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        brandName: "",
        userType: "user",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const formItems = [
        { label: "First Name", name: "firstName", placeholder: "Enter your First Name" },
        { label: "Last Name", name: "lastName", placeholder: "Enter your Last Name" },
        { label: "Email Address", name: "email", placeholder: "e.g. yourname@gmail.com" },
        { label: "Phone Number", name: "phoneNumber", placeholder: "+234" },
        { label: "Brand Name", name: "brandName", placeholder: "e.g. Your Brand Name" },
        { label: "Create Password", name: "password", placeholder: "Enter password (min. of 8 characters)", type: "password" }
    ];

    return (
        <div className='bg-[#FBFBFB] w-1/2 p-10 flex flex-col gap-3 rounded-3xl'>
            <h1 className='text-[32px] font-[600] text-center'>Create an Account</h1>

            <form action="" className='flex flex-col gap-4'>
                <div className="grid grid-cols-2 gap-3">
                    {
                        formItems.slice(0, 4).map((item, index) => (
                            <ControlledInput
                                label={item.label}
                                name={item.name}
                                placeholder={item.placeholder}
                                key={index}
                                type={item.type || "text"}
                                value={form[item.name as keyof typeof form]}
                                onChange={handleChange}
                            />
                        ))
                    }
                </div>

                <div>
                    <label htmlFor="userType">user Type</label>
                    <select
                        id="userType"
                        name="userType"
                        value={form.userType}
                        onChange={(e) => setForm({ ...form, userType: e.target.value })}
                        className="border p-3 rounded-md w-full"
                    >
                        <option value="user">Baic User</option>
                        <option value="photographer">Photographer/Content Creator</option>
                    </select>
                </div>

                {
                    form.userType !== "user"

                    &&
                    <ControlledInput
                        label={formItems[4].label}
                        name={formItems[4].name}
                        placeholder={formItems[4].placeholder}
                        type={formItems[4].type || "text"}
                        value={form[formItems[4].name as keyof typeof form]}
                        onChange={handleChange}
                    />
                }

                {
                    formItems.slice(5).map((item, index) => (
                        <ControlledInput
                            label={item.label}
                            name={item.name}
                            placeholder={item.placeholder}
                            key={index}
                            type={item.type || "text"}
                            value={form[item.name as keyof typeof form]}
                            onChange={handleChange}
                        />
                    ))
                }



                {/* Terms and Conditions */}
                <div className='flex items-start justify-start gap-2'>
                    <input type="checkbox" required className='mt-1' />
                    <label>
                        By clicking on Create Account, you agree to our <Link href="/terms" className='text-blue-600'>Terms</Link> and acknowledge our company's <Link href="/conditions" className='text-blue-600'>Conditions</Link>.
                    </label>
                </div>

                {/* Submit Button */}
                <Button onClick={() =>router.push("/verify-email")}>
                    Create Account
                </Button>
            </form>

            <p className='text-center'>Or</p>

            {/* Social Login Options */}
            <div className=' gap-5 items-center justify-between'>
                <div className='flex-center gap-2 py-3 px-5 bg-white rounded-full cursor-pointer'>
                    <FcGoogle />
                    <p>Continue with Google</p>
                </div>
            </div>
        </div>
    );
};

export default page;
