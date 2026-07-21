import { ReactNode } from "react";
import Link from "next/link";
import { SearchX } from "lucide-react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  actionOnClick?: () => void;
  icon?: ReactNode;
}

export default function EmptyState({
  title = "No results found",
  description = "We couldn't find anything matching your search. Try adjusting your filters or search terms.",
  actionLabel,
  actionHref,
  actionOnClick,
  icon,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-[var(--border)] rounded-2xl bg-[var(--surface-2)]">
      <div className="w-16 h-16 bg-[var(--surface)] border border-[var(--border)] rounded-2xl flex items-center justify-center mb-6 text-[var(--text-muted)] shadow-sm">
        {icon || <SearchX size={32} />}
      </div>
      <h3 className="text-xl font-bold font-display text-[var(--text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-[var(--text-secondary)] max-w-md mb-8">
        {description}
      </p>
      
      {actionLabel && actionHref && (
        <Link href={actionHref} className="btn btn-primary">
          {actionLabel}
        </Link>
      )}
      {actionLabel && actionOnClick && !actionHref && (
        <button onClick={actionOnClick} className="btn btn-primary">
          {actionLabel}
        </button>
      )}
    </div>
  );
}
