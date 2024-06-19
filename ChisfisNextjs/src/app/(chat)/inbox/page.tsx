import { EmptyState } from "../components/EmptyState";

export default function InboxPage() {
  return (
    <div className="hidden lg:col-span-9 lg:block lg:border-l-2 lg:border-[#DAE0E6] h-full">
      <EmptyState />
    </div>
  );
}
