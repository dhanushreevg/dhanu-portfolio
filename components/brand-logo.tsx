import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("flex size-10 items-center justify-center border border-primary font-mono text-sm font-bold text-primary transition-transform duration-200 ease-out hover:scale-105", className)} aria-label="Dhanu Shree logo">DS</span>
  )
}
