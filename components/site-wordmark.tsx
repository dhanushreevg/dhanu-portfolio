import { cn } from "@/lib/utils"
import { BrandLogo } from "./brand-logo"

export function SiteWordmark({
  className,
  showIcon = true,
}: {
  className?: string
  showIcon?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 select-none",
        className,
      )}
      aria-label="Dhanu Shree"
    >
      {showIcon ? <BrandLogo className="h-6 w-auto shrink-0" /> : null}
      <span className="wordmark-crafter truncate text-sm tracking-[0.08em] text-foreground">
        Dhanu Shree
      </span>
    </span>
  )
}
