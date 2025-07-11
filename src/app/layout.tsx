import "./globals.css";
import TopLoader from "@/components/shared/TopLoader";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/header/Navbar";
import { getMetaTags } from "@/lib/metatags";
import { MetaTagsType } from "@/types/alltype";

export async function generateMetadata() {
  const metaData: MetaTagsType[] = await getMetaTags();

  const defaultMeta = metaData.find((meta) => meta.title.toLowerCase() === 'Home') || {
    meta_title: 'Home meta title',
    meta_description: 'Home meta desc',
    meta_keyword: 'Home meta keyword',
    
  };
  
  return {
    title: defaultMeta.meta_title,
    description: defaultMeta.meta_description,
    keywords: defaultMeta.meta_keyword,
    openGraph: {
      title: defaultMeta.meta_title,
      description: defaultMeta.meta_description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      type: 'website',
    },
  };
}

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