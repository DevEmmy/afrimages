import Link from "next/link";
import { RiFacebookLine, RiInstagramLine, RiTwitterLine } from "react-icons/ri";

const Footer = () => {
  const footerContent = [
    {
      title: "Content",
      sub: [
        {
          title: "New Asset",
          link: "/",
        },
        {
          title: "Search Trends",
          link: "/",
        },
        {
          title: "Popular Content",
          link: "/",
        },
        {
          title: "Blogs",
          link: "/",
        },
      ],
    },
    {
      title: "Information",
      sub: [
        {
          title: "About Us",
          link: "/",
        },
        {
          title: "Become a Contributor",
          link: "/",
        },
        {
          title: "Sell your Content",
          link: "/",
        },
      ],
    },
    {
      title: "Legal",
      sub: [
        {
          title: "Terms and Condition",
          link: "/",
        },
        {
          title: "License agreement",
          link: "/",
        },
        {
          title: "Copyright Information",
          link: "/",
        },
        {
          title: "Privacy Policy",
          link: "/",
        },
      ],
    },
  ];
  return (
    <footer className="bg-black pt-14 pb-8 px-[5%] w-full mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 text-white">
        {/* Footer columns */}
        {footerContent.map((item, i) => (
          <div key={item.title}>
            <h2 className="text-lg font-[500] mb-4 border-l-4 border-orange-500 pl-3">
              {item.title}
            </h2>
            <ul className="flex flex-col gap-3">
              {item.sub.map((sub) => (
                <li key={sub.title}>
                  <a href={sub.link} className="text-gray-300 hover:text-orange-400 transition">
                    {sub.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Social & Signup */}
        <div className="flex flex-col gap-4 md:col-span-2">
          <h2 className="text-lg font-[500] mb-4 border-l-4 border-orange-500 pl-3">Social & Updates</h2>
          <div className="flex gap-4 mb-2">
            <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-orange-500 hover:shadow-[0_0_16px_4px_rgba(251,160,55,0.7)] transition">
              <RiFacebookLine size={28} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-orange-500 hover:shadow-[0_0_16px_4px_rgba(251,160,55,0.7)] transition">
              <RiTwitterLine size={28} />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 text-white hover:bg-orange-500 hover:shadow-[0_0_16px_4px_rgba(251,160,55,0.7)] transition">
              <RiInstagramLine size={28} />
            </a>
          </div>
          <p className="text-gray-400 mb-2">Get exclusive updates just for you</p>
          <Link href={"/account/register"}>
            <span className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semi[500] py-3 px-8 rounded-full shadow-lg transition cursor-pointer text-base">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/10 my-8"></div>
      <p className="text-gray-400 text-center text-sm tracking-wide">
        Afrimages &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
