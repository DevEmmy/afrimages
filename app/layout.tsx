import type { Metadata } from "next";
import { Inter, Outfit, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import QueryLayout from "@/components/Layouts/QueryLayout";
import dynamic from 'next/dynamic';

import { Toaster } from 'react-hot-toast';

const outfit = Outfit({ subsets: ["latin"] });
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Afrimages",
  description:
    "Discover AfrImage's diverse collection, showcasing Africa's beauty. Bring it into your space with high-res downloads, sharing globally. Embark on a visual journey effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={` ${outfit.className}`}>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                fontFamily: outfit.className,
                borderRadius: '1rem',
                background: '#fff',
                color: '#1a1a1a',
                boxShadow: '0 4px 24px 0 rgba(0,0,0,0.08)',
                padding: '1.25rem 1.5rem',
                fontWeight: 500,
              },
            }}
          />
          <QueryLayout>
          {children}</QueryLayout>
        
      </body>
    </html>
  );
}
