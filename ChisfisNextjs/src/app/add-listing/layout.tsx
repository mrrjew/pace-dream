import SiteHeader from "../(client-components)/(Header)/SiteHeader";


export const metadata = {
  title: "PaceDream - Add listing",
  description: "Add listing page for PaceDream",
};

export default function AddListingRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
         <div className="h-screen">
            <SiteHeader />
            {children}
        </div>
  );
}
