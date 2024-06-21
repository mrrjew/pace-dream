export function BookingAndListingGridLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-2">{children}</div>
  );
}
