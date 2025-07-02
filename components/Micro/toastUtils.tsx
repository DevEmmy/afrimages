import toast, { ToastOptions } from 'react-hot-toast';
import { Shield, TickCircle, CloseCircle } from 'iconsax-react';
import React from 'react';

const baseStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  fontSize: '1rem',
  fontWeight: 500,
  backgroundColor: '#fff',
  color: '#1a1a1a',
  boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
  padding: '1.25rem 1.5rem',
  borderRadius: '1rem',
  // width: "300px"
};

export const toastSuccess = (message: string, options?: ToastOptions) =>
  toast.custom(
    <div style={{ ...baseStyle }}>
      <TickCircle size={24} color="#22c55e" />
      <span>{message}</span>
    </div>,
    { ...options, icon: null, duration: 3500 }
  );

export const toastError = (message: string, options?: ToastOptions) =>
  toast.custom(
    <div style={{ ...baseStyle }}>
      <CloseCircle size={24} color="#ef4444" />
      <span>{message}</span>
    </div>,
    { ...options, icon: null, duration: 4000 }
  ); 