import { Poppins } from "next/font/google";
import SiteHeader from "@/app/(client-components)/(Header)/SiteHeader";
import Footer from "@/components/Footer";
// import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import ReduxProvider from "@/store/providers";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "./globals.css";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "PaceDream - The best place to find your hotel",
  description: "The best place to find your hotel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#F6F4F6] text-base text-neutral-900 pt-[64px] overflow-x-hidden max-w-screen flex flex-col">
        <ReactQueryClientProvider>
          <ReduxProvider>
            <SiteHeader />
            <section className="flex-1">{children}</section>
            <Footer />
          </ReduxProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
