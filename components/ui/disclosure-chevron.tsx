import { cn } from "@/lib/utils"

export function DisclosureChevron({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      className={cn(
        "mt-0.5 size-3 shrink-0 text-muted-foreground motion-disclosure-chevron group-hover:text-foreground group-data-[open]:rotate-90",
        className
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3.5 8.5 7 5 10.5" />
    </svg>
  )
}
