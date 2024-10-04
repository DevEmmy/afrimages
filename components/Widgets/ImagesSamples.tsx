import Image from 'next/image'
import React from 'react'
import H_ImagesContainer from '../Reusables/H_ImagesContainer'

const ImagesSamples = () => {
    return (
        <div className='lg:grid grid-cols-4 gap-5 lg:items-start items-center justify-center flex flex-wrap'>
            <div className='bg-green400 relative pt-10  flex-center flex-col text-center gap-10 sm:rounded-xl px-3 lg:rounded-none'>
                <div className='flex-col gap-2 flex-center px-5'>
                    <p className='text-white text-[32px] font-semibold'>
                        Oh Yes! Uploading your Photographs.
                    </p>
                    <p className='text-sm text-white'>Preserve every moment, frame your story.</p>
                    <button className='bg-white py-2 px-5 rounded-full w-fit text-sm'>
                        Create Account
                    </button>
                </div>

                <Image src={"/./images/ads.png"} alt="Image" width={0} height={0} className='w-full lg:h-full h-0' unoptimized />
            </div>

            <div className='col-span-3 px-2'>
            <H_ImagesContainer />
            </div>
        </div>
    )
}

export default ImagesSamples