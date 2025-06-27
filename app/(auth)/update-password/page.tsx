"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Eye, 
  EyeSlash, 
  Lock, 
  ArrowRight3,
  Shield,
  TickCircle
} from 'iconsax-react';

const UpdatePasswordPage = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password update attempt:', formData);
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 rounded-full px-4 py-2 mb-4">
            <TickCircle size={16} />
            <span className="text-sm font-medium">Password Updated</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Success!
          </h1>
          <p className="text-gray-600">
            Your password has been updated successfully
          </p>
        </div>

        {/* Success Message */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <TickCircle size={32} className="text-green-600" />
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Password Updated
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Your password has been successfully updated. You can now use your new password to sign in to your account.
          </p>

          <Link 
            href="/login"
            className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Continue to Login
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
          <Lock size={16} />
          <span className="text-sm font-medium">Update Password</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Set new password
        </h1>
        <p className="text-gray-600">
          Create a strong password to secure your account
        </p>
      </div>

      {/* Update Password Form */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Password must be at least 8 characters long
            </p>
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={20} className="text-gray-400" />
              </div>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
                className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                placeholder="Confirm new password"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
              >
                {showConfirmPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Password Requirements */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3">Password Requirements:</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className={`flex items-center gap-2 ${formData.password.length >= 8 ? 'text-green-600' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                At least 8 characters long
              </li>
              <li className={`flex items-center gap-2 ${/[A-Z]/.test(formData.password) ? 'text-green-600' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${/[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                Contains uppercase letter
              </li>
              <li className={`flex items-center gap-2 ${/[a-z]/.test(formData.password) ? 'text-green-600' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${/[a-z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                Contains lowercase letter
              </li>
              <li className={`flex items-center gap-2 ${/\d/.test(formData.password) ? 'text-green-600' : ''}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${/\d/.test(formData.password) ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                Contains number
              </li>
            </ul>
          </div>

          {/* Update Button */}
          <button
            type="submit"
            disabled={isLoading || formData.password !== formData.confirmPassword || formData.password.length < 8}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Updating password...
              </>
            ) : (
              <>
                Update Password
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
            <span>Secure update</span>
          </div>
          <div className="flex items-center gap-1">
            <Lock size={14} className="text-blue-500" />
            <span>Encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePasswordPage; 