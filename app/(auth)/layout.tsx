import Layout from "@/components/Auth/Layout";

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Layout>
        {children}
      </Layout>
    </>

  );
}
