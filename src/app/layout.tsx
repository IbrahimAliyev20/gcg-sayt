import type { Metadata } from "next";
import "./globals.css";
import TopLoader from "@/components/shared/TopLoader";
import { Navbar } from "@/components/layout/header/Navbar";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  title: "GCG",
  description: "GCG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body>
        <TopLoader />
        <Navbar />
        <main className="min-h-screen py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}