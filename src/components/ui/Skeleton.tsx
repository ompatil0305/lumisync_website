interface SkeletonProps {
  className?: string;
}

export default function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div className={`skeleton ${className}`} />
  );
}

export function SkeletonCard() {
  return (
    <div className="card p-8 flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <Skeleton className="w-12 h-12 rounded-full flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="h-4 w-1/3 rounded" />
          <Skeleton className="h-3 w-1/4 rounded" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <Skeleton className="h-3 w-full rounded" />
        <Skeleton className="h-3 w-5/6 rounded" />
        <Skeleton className="h-3 w-4/6 rounded" />
      </div>
    </div>
  );
}
