import { cn } from "@/lib/utils"
import { CrafterStationLogo } from "./crafter-station-logo"

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
      aria-label="Sanjay S"
    >
      {showIcon ? <CrafterStationLogo className="h-4 w-4" /> : null}
      <span className="wordmark-crafter text-sm tracking-[0.08em] text-foreground">
        Sanjay S
      </span>
    </span>
  )
}
