import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative flex size-10 shrink-0 overflow-hidden rounded-sm border border-primary/30 transition-transform duration-200 ease-out hover:scale-105",
        className
      )}
      aria-label="Dhanu Shree logo"
    >
      <Image
        src="/sanjay-logo.png"
        alt="Dhanu Shree"
        fill
        sizes="40px"
        className="object-cover"
        priority
      />
    </span>
  )
}
