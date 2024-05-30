import { Poppins } from "next/font/google";
import SiteHeader from "@/app/(client-components)/(Header)/SiteHeader";
import ClientCommons from "@/app/ClientCommons";
import Footer from "@/components/Footer";
import ReactQueryClientProvider from "@/components/ReactQueryClientProvider";
import UserProvider from "@/context";
import ReduxProvider from "@/app/redux/providers";

// import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import "./globals.css";

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
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-[#F6F4F6] text-base text-neutral-900">
        <ReduxProvider>
          <ReactQueryClientProvider>
            <UserProvider>
              <ClientCommons />
              <div>
                <SiteHeader />
                <div className="flex overflow-x-hidden max-w-screen">
                  {/* <div className="hidden md:block" >
                <SideBar/>
                </div> */}
                  <div className="flex-1">{children}</div>
                </div>
              </div>
              {/* <FooterNav /> */}
              <Footer />
            </UserProvider>
          </ReactQueryClientProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
