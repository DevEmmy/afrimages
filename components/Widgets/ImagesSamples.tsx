import Image from 'next/image'
import React from 'react'
import H_ImagesContainer from '../Reusables/H_ImagesContainer'
import Link from 'next/link'

const ImagesSamples = () => {
    return (
        <div className='lg:grid grid-cols-4 gap-5 lg:items-start items-center justify-center flex flex-wrap'>
            <div className='bg-black/90 rounded-lg relative pt-10  flex-center flex-col text-center gap-10'>
                <div className='flex-col gap-2 flex-center px-5'>
                    <p className='text-white text-[32px] font-semi[500]'>
                        Oh Yes! Uploading your Photographs.
                    </p>
                    <p className='text-sm text-white'>Preserve every moment, frame your story.</p>
                    <Link href={"/sign-up"} className='bg-white py-2 px-5 rounded-full w-fit text-sm'>
                        Create Account
                    </Link>
                </div>

                <Image src={"/./images/ads.png"} alt="Image" width={0} height={0} className='w-full lg:h-full h-0' unoptimized />
            </div>

            <div className='col-span-3 px-2 mb-10'>
                <div className='flex flex-col gap-2 items-center justify-center text-center pb-5'>
                    <h2 className='text-[32px] font-[600]'>Get Inspired</h2>
                    <p className='text-[18px] text-gray-500'>Discover AfrImage's diverse collection, showcasing Africa's beauty</p>
                </div>
            <H_ImagesContainer />
            </div>
        </div>
    )
}

export default ImagesSamples