import { Poppins } from "next/font/google";
import SiteHeader from "./(client-components)/(Header)/SiteHeader";
import ClientCommons from "./ClientCommons";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import SideBar from "@/components/SideBar";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import "./globals.css";
import UserProvider from "@/context";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
            <div className="flex">
              <SideBar />
              {children}
            </div>
            <FooterNav />
            <Footer />
          </UserProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
