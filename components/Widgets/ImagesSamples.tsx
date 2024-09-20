import Image from 'next/image'
import React from 'react'
import H_ImagesContainer from '../Reusables/H_ImagesContainer'

const ImagesSamples = () => {
    return (
        <div className='grid grid-cols-4 gap-5 items-start '>
            <div className='bg-green400 relative pt-10  rounded-3xl flex-center flex-col text-center gap-10'>
                <div className='flex-col gap-2 flex-center px-5'>
                    <p className='text-white text-[32px] font-semibold'>
                        Oh Yes! Uploading your Photographs.
                    </p>
                    <p className='text-sm text-white'>Preserve every moment, frame your story.</p>
                    <button className='bg-white py-2 px-5 rounded-full w-fit text-sm'>
                        Create Account
                    </button>
                </div>

                <Image src={"/./images/ads.png"} alt="Image" width={0} height={0} className='w-full h-full' unoptimized />
            </div>

            <div className='col-span-3'>
            <H_ImagesContainer />
            </div>
        </div>
    )
}

export default ImagesSamples