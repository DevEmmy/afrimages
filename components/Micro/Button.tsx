import Link from 'next/link';
import React from 'react'

interface ButtonProps {
    className?: string,
    link?: string,
    onClick?: () => void;
    children: React.ReactNode
}

const Button = ({ className, link, onClick, children }: ButtonProps) => {
    return (
        <>
            {
                link ?

                    <Link href={link}>
                        <button className={`bg-green700 text-white rounded-full p-3 ${className}`} onClick={onClick}>
                            {children}
                        </button>
                    </Link>
                    :

                    <button className={`bg-green700 text-white rounded-full p-3 ${className}`} onClick={onClick}>
                        {children}
                    </button>
            }
        </>
    )
}

export default Button