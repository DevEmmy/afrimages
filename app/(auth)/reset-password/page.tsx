"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Message, 
  ArrowRight3,
  Shield,
  Lock
} from 'iconsax-react';

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Reset password request for:', email);
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-md">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-4">
            <Message size={16} />
            <span className="text-sm font-medium">Check your email</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Reset link sent!
          </h1>
          <p className="text-gray-600">
            We've sent a password reset link to your email address
          </p>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Message size={32} className="text-green-600" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Check your inbox
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            We've sent a secure password reset link to <span className="font-semibold text-gray-900">{email}</span>. 
            Click the link in the email to reset your password.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send another email
            </button>
            
            <Link 
              href="/login"
              className="block w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Back to login
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Didn't receive the email? Check your spam folder or{' '}
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-600 rounded-full px-4 py-2 mb-4">
          <Lock size={16} />
          <span className="text-sm font-medium">Reset Password</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Forgot your password?
        </h1>
        <p className="text-gray-600">
          No worries! Enter your email and we'll send you reset instructions
        </p>
      </div>

      {/* Reset Form */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Message size={20} className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Sending reset link...
              </>
            ) : (
              <>
                Send reset link
                <ArrowRight3 size={20} />
              </>
            )}
          </button>
        </form>

        {/* Back to Login */}
        <div className="text-center mt-8 pt-6 border-t border-gray-100">
          <p className="text-gray-600">
            Remember your password?{' '}
            <Link 
              href="/login"
              className="text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-300"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Shield size={14} className="text-green-500" />
            <span>Secure reset</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock size={14} className="text-blue-500" />
            <span>24h expiry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage; 