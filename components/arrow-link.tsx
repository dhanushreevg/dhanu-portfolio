import { Slot } from "@radix-ui/react-slot"
import { ArrowUpRight } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

interface ArrowLinkProps extends React.HTMLAttributes<HTMLElement> {
  asChild?: boolean
}

export const ArrowLink = React.forwardRef<HTMLElement, ArrowLinkProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : "span") as React.ElementType
    return (
      <Comp
        ref={ref}
        className={cn(
          "group inline-flex items-center text-sm text-muted-foreground transition-colors duration-200 group-hover:text-foreground",
          className,
        )}
        {...props}
      >
        {children}
        <span
          className={cn(
            "ml-2 inline-flex size-[30px] items-center justify-center rounded-full border border-line bg-secondary transition-colors duration-200 group-hover:border-primary/50",
          )}
        >
          <ArrowUpRight
            className={cn(
              "size-4 text-primary transition-all duration-200 group-hover:rotate-45 group-hover:text-foreground",
            )}
          />
        </span>
      </Comp>
    )
  },
)
ArrowLink.displayName = "ArrowLink"
