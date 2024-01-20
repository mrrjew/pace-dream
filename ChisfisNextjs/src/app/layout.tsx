import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import "./globals.css";
import UserProvider from "@/context";


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false,
  weight: ['300', '400', '500', '600', '700']
});

export const metadata = {
  title: "Olaven - The best place to find your hotel",
  description: "The best place to find your hotel",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  
  
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <ReactQueryClientProvider>
          <UserProvider>
            <ClientCommons />
            <SiteHeader />
            <div className='flex overflow-x-hidden max-w-screen'>
              {/* <div className="hidden md:block" >
              <SideBar/>
              </div> */}
              <div className='flex-1'>
                {children}
              </div>
            </div>
            <FooterNav />
            <Footer />
          </UserProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
