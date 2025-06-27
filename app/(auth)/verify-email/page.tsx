"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  Message, 
  ArrowRight3,
  Refresh,
  TickCircle,
  Clock
} from 'iconsax-react';
import { FcGoogle } from "react-icons/fc";

const VerifyEmailPage = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input if a digit is entered
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResendCode = () => {
    if (resendCountdown === 0) {
      setResendCountdown(60);
      console.log("Resend code clicked");
    }
  };

  const handleVerifyCode = async () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      alert('Please enter the complete 6-digit code');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("OTP Code:", otpCode);
      setIsLoading(false);
      setIsVerified(true);
    }, 2000);
  };

  const openGmail = () => {
    window.open('https://gmail.com', '_blank');
  };

  if (isVerified) {
    return (
      <div className="w-full max-w-md">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-4">
            <TickCircle size={16} />
            <span className="text-sm font-medium">Email Verified</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome to Afrimages!
          </h1>
          <p className="text-gray-600">
            Your email has been verified successfully
          </p>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <TickCircle size={32} className="text-green-600" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Account Verified
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your email address has been successfully verified. You can now access all features of your Afrimages account.
          </p>

          <Link 
            href="/explore"
            className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Start Exploring
            <ArrowRight3 size={20} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 rounded-full px-4 py-2 mb-4">
          <Message size={16} />
          <span className="text-sm font-medium">Email Verification</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Check your email
        </h1>
        <p className="text-gray-600">
          We've sent a 6-digit verification code to your email address
        </p>
      </div>

      {/* Verification Form */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
        {/* Email Info */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">
            Enter the code sent to <span className="font-semibold text-gray-900">your.email@example.com</span>
          </p>
          
          <button
            onClick={openGmail}
            className="inline-flex items-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300"
          >
            <FcGoogle size={16} />
            <span className="text-sm font-medium">Open Gmail</span>
          </button>
        </div>

        {/* OTP Input */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-4 text-center">
            Verification Code
          </label>
          <div className="flex justify-between gap-3">
            {otp.map((digit, index) => (
              // @ts-ignore
              <input
                key={index}
                // @ts-ignore
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                className="w-12 h-12 text-center text-2xl font-semibold border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
              />
            ))}
          </div>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerifyCode}
          disabled={isLoading || otp.join('').length !== 6}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Verifying...
            </>
          ) : (
            <>
              Verify Code
              <ArrowRight3 size={20} />
            </>
          )}
        </button>

        {/* Resend Code */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">Didn't receive the code?</p>
          <button
            onClick={handleResendCode}
            disabled={resendCountdown > 0}
            className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mx-auto"
          >
            <Refresh size={16} className={resendCountdown > 0 ? 'animate-spin' : ''} />
            {resendCountdown > 0 ? `Resend in ${resendCountdown}s` : 'Resend Code'}
          </button>
        </div>

        {/* Support */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Having issues? Contact our{' '}
            <Link href="/contact" className="text-orange-600 hover:text-orange-700 font-medium">
              support team
            </Link>
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock size={14} className="text-blue-500" />
            <span>10 min expiry</span>
          </div>
          <div className="flex items-center gap-1">
            <Message size={14} className="text-green-500" />
            <span>Secure delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailPage; 