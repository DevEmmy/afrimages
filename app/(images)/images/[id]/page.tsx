import Button from '@/components/Micro/Button'
import Image from 'next/image'
import React from 'react'
import { RiCalendar2Line, RiCamera2Line, RiDownload2Line } from 'react-icons/ri'

const page = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex gap-3 items-center'>
        <Image src={"/./images/banner.jpg"} alt='Profile' width={100} height={100} className='rounded-full h-[70px] w-[70px] object-cover' />
        <div>
          <p className='font-[600]'>Emmanuel Olaosebikan</p>
          <p className='text-xs'>Photographer at Afrimages</p>
        </div>
      </div>

      <div className='grid grid-cols-[2fr_1fr]'>
        <div className='flex flex-col gap-3'>
          <Image src="/./images/banner.jpg" width={500} height={500} alt='Image' className='w-full' />
          <p className='font-[500]'>A Man having nice time with his woman</p>
          <p className='text-sm text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe est incidunt consectetur amet beatae sint totam voluptate iste. Aliquid, voluptatum.
          </p>
          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <RiCalendar2Line />
            <p>Published on June 2, 2022</p>
          </div>

          <div className='flex items-center gap-2 text-sm text-gray-500'>
            <RiCamera2Line />
            <p>Shot by Iphone 15</p>
          </div>

          <Button className='w-fit rounded-sm flex items-center gap-2'>Download <RiDownload2Line /></Button>
        </div>


      </div>


    </div>
  )
}

export default page