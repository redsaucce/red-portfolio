import { Skeleton } from "@/components/ui/skeleton";

// Projects page loading state. Fixed to the visible area below the navbar, so it does not scroll.
export default function ProjectsLoading() {
  return (
    <section className="mx-auto h-[calc(100dvh-4rem)] max-w-7xl overflow-hidden px-6 py-8 md:py-10 lg:py-12">
      {/* Header: title and subtitle */}
      <div className="flex flex-col gap-3">
        <Skeleton className="h-10 w-48" />
        <Skeleton className="h-6 w-96 max-w-full" />
      </div>

      {/* Two zigzag rows: image and text alternate sides on desktop */}
      <div className="mt-16 flex flex-col gap-20">
        {[0, 1].map((row) => (
          <div key={row} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Skeleton
              className={`aspect-video w-full rounded-xl ${row === 1 ? "lg:order-2" : ""}`}
            />
            <div className={`flex flex-col gap-5 ${row === 1 ? "lg:order-1" : ""}`}>
              <Skeleton className="h-9 w-2/3" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-20 rounded-md" />
                <Skeleton className="h-6 w-24 rounded-md" />
                <Skeleton className="h-6 w-16 rounded-md" />
              </div>
              <div className="flex gap-3">
                <Skeleton className="h-10 w-28 rounded-md" />
                <Skeleton className="h-10 w-24 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}