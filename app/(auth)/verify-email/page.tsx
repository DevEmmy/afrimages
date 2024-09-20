"use client";

import Button from '@/components/Micro/Button';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import { FcGoogle } from "react-icons/fc";

const OtpVerificationPage = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const router = useRouter()

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length <= 1 && /^\d*$/.test(value)) {  // Ensure only digits are allowed
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move focus to next input if a digit is entered
            if (value && index < otp.length - 1) {
                const nextInput = document.getElementById(`otp-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleResendCode = () => {
        console.log("Resend code clicked");
    };

    const handleVerifyCode = () => {
        const otpCode = otp.join('');
        console.log("OTP Code:", otpCode);
        // Here, you would add the logic to verify the OTP code
    };

    return (
        <div className="bg-[#FBFBFB] w-1/3 p-10 flex flex-col gap-3 rounded-3xl items-center">
            <div>
                <h1 className="text-[32px] font-[600] w-full">You’ve got mail, Dominic</h1>
                <p className="text-sm">Please, enter the 6 digit OTP code sent to your email to continue.</p>

                <button className="bg-white flex gap-2 py-2 px-5 items-center text-sm  rounded-full mt-4 cursor-pointer">
                    <FcGoogle />
                    <p>Open Gmail</p>
                </button>
            </div>

            <div className="flex justify-between gap-2 mt-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        className="border rounded-lg w-12 h-12 text-center text-2xl focus:outline-green700"
                        value={digit}
                        onChange={(e) => handleChange(e, index)}
                        maxLength={1}
                    />
                ))}
            </div>

            <Button className="mt-6 w-full" onClick={handleVerifyCode}>
                Verify Code
            </Button>

            <div className="flex justify-between mt-6 w-full items-center">
                <p>Didn't receive code?</p>
                <button className="text-green700 flex items-center gap-1" onClick={handleResendCode}>
                    <span className="underline">Resend Code</span>
                </button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
                <p className="text-center">
                    Having issues? Please reach out to our support team <a href="/support" className="text-blue-500 underline">here</a>
                </p>
            </div>
        </div>
    );
};

export default OtpVerificationPage;
