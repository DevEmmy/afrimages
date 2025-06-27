import type { Metadata } from "next";
import { Inter, Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Afrimages",
  description: "Discover AfrImage's diverse collection, showcasing Africa's beauty. Bring it into your space with high-res downloads, sharing globally. Embark on a visual journey effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${outfit.className}`}>{children}</body>
    </html>
  );
}
