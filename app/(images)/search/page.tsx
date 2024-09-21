"use client"
import H_ImagesContainer from '@/components/Reusables/H_ImagesContainer';
import { useParams, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const query = useSearchParams()
  let searchQuery = query.get("query");
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-[24px] '>Results for <span className='font-semibold'>{searchQuery}</span></h2>
        <H_ImagesContainer />
    </div>
  )
}

export default page