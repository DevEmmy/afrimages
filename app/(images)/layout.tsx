import Layout from '@/components/Reusables/Layout';
import React from 'react'

const layout =({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <Layout>
        {children}
    </Layout>
  )
}

export default layout