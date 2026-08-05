import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/sanjay-logo.png"
      alt="Sanjay S logo"
      width={1254}
      height={1218}
      priority
      className={cn(
        "h-10 w-auto object-contain transition-transform duration-200 ease-out hover:scale-105",
        className,
      )}
    />
  )
}
