import H_ImagesContainer from '@/components/Reusables/H_ImagesContainer'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-3'>
        <h2 className='text-[24px] font-semibold'>Explore:</h2>
        <H_ImagesContainer />
    </div>
  )
}

export default page