import { Skeleton } from "@/components/ui/skeleton";

// Home page loading state. Fixed to the visible area below the navbar, so it does not scroll.
export default function HomeLoading() {
  return (
    <div className="mx-auto grid h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 overflow-hidden px-6 lg:grid-cols-2">
      {/* Left: badge, headline, subtitle, buttons */}
      <div className="flex flex-col gap-6">
        <Skeleton className="h-7 w-64 rounded-md" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-14 w-full" />
          <Skeleton className="h-14 w-4/5" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-12 w-40 rounded-md" />
          <Skeleton className="h-12 w-32 rounded-md" />
        </div>
      </div>

      {/* Right: skills line, then three image cards */}
      <div className="flex flex-col gap-8">
        <Skeleton className="h-5 w-full" />
        <div className="flex items-center justify-center gap-4">
          <Skeleton className="hidden aspect-2/3 w-[28%] rounded-2xl sm:block" />
          <Skeleton className="aspect-2/3 w-[36%] rounded-2xl" />
          <Skeleton className="hidden aspect-2/3 w-[28%] rounded-2xl sm:block" />
        </div>
      </div>
    </div>
  );
}