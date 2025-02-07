import ControlledInput, { ControlledInputProps } from '@/components/Micro/ControlledInput'
import Footer from '@/components/Widgets/Footer'
import Nav from '@/components/Widgets/Nav'
import React from 'react'

const page = () => {
    const formItems : ControlledInputProps[] = [
        {
            label: "First Name",
            type: "text",
            name: "firstName",
            
        }
    ]
    
  return (
    <div>
        <Nav transparent={false}/>

        <div className='grid grid-cols-[2fr_1fr] my-32 mx-[5%]'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-[48px]'>Contact us</h2>
                <p className='text-[18px] w-1/2'>
                    Email, call, or complete the form to learn how to navigate your photopgraphic life in Africa!
                </p>
                <p>
                    info@afrimages.com 
                </p>
                <p>
                    +234-904-8988-583
                </p>
            </div>

            <div>
                <h2>Get in Touch</h2>
                <p>You can reach us anytime</p>

                <form action="">
                    
                        
                </form>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default page