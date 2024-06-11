import { cn } from "@/app/lib/utils"
import React, { PropsWithChildren } from "react"

export interface CardProps extends PropsWithChildren {
  className?: string
}

const Card = (props: CardProps) => {
  const { children, className } = props
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[670px] rounded-4 border border-gray-300 bg-white p-14",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
