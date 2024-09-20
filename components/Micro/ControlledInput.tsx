import React, { ChangeEvent, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Import eye icons

interface ControlledInputProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ControlledInput: React.FC<ControlledInputProps> = ({
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle between password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className='flex flex-col gap relative'>
      <label htmlFor={name}>{label}</label>

      <div className="relative w-full">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          id={name}
          className='p-3 rounded-[12px] border border-[#F0F2F5] w-full'
        />

        {/* If the input type is password, show the eye toggle */}
        {type === 'password' && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ControlledInput;
