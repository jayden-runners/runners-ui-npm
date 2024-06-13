import { cn } from "@/app/lib/utils"
import React, { PropsWithChildren } from "react"

export interface CardProps extends PropsWithChildren {
  className?: string
}

/**
 * 모바일 브레이크포인트에서는 흰색 div
 * PC버전에서는 패딩 56px의 border 있는 카드 컴포넌트
 */
const Card = (props: CardProps) => {
  const { children, className } = props
  return (
    <div
      className={cn(
        "mx-auto w-full rounded-4 bg-white",
        "md:max-w-[670px] md:border md:border-gray-300 md:p-14",
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
