import Banner from "@/components/Widgets/Banner";
import Categories from "@/components/Widgets/Categories";
import Footer from "@/components/Widgets/Footer";
import ImagesSamples from "@/components/Widgets/ImagesSamples";
import Showcase from "@/components/Widgets/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="px-[5%] flex flex-col gap-20 my-20">
        <Categories />
        <ImagesSamples />
        <Showcase />
      </div>
      <Footer />
    </>
  );
}
