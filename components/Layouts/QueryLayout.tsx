"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import AuthBootstrap from '../Auth/AuthBootstrap';

const queryClient = new QueryClient();

const QueryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthBootstrap />
      {children}
    </QueryClientProvider>
  )
}

export default QueryLayout