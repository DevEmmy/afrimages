import Banner from "@/components/Widgets/Banner";
import Categories from "@/components/Widgets/Categories";
import Footer from "@/components/Widgets/Footer";
import ImagesSamples from "@/components/Widgets/ImagesSamples";
import Showcase from "@/components/Widgets/Showcase";
import Image from "next/image";
import Features from "@/components/Widgets/Features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between overflow-hidden">
      <Banner />
      <Features />
      <div className="px-[5%] flex flex-col gap-10 my-10">
        <Categories />
        <ImagesSamples />
        <Showcase />
      </div>
      <Footer />
    </main>
  );
}
