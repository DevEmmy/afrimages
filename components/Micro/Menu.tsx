import Link from "next/link";
import { RiCloseLargeFill } from "react-icons/ri";


interface Props {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const nav = [
    {
      link: "/explore",
      text: "Explore",
    },
    {
      link: "/",
      text: "Photographers",
    },
    {
      link: "/",
      text: "Pricing",
    },
    {
      link: "/",
      text: "About us",
    },
    {
      link: "/",
      text: "Contact Us",
    },
  ];

export const Menu: React.FC<Props> = ({isOpen, setIsOpen}) => {
    const toggleNav = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
        <div
        className={`fixed top-0 left-0 h-full w-5/6 bg-white flex flex-col items-start p-3 z-50 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
              
          <Link href={"/"} className="text-[#fba037] text-[32px] font-bold text-center">
            Afrimages
          </Link>

          <div className="flex flex-col gap-5 md:text-sm lg:text-base text-[#959595]">
            {nav.map((item, i) => {
              return (
                <Link href={item.link} key={i}>
                  {item.text}
                </Link>
              );
            })}
          </div>
        </div>

        {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleNav}
        > <RiCloseLargeFill className="text-white font-bold text-2xl"/> </div>
      )}
        </>
    )
};