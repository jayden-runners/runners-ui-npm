import { cn } from "@/app/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React, { PropsWithChildren } from "react"

const badgeVariants = cva("w-fit px-1.5 py-0.5 text-12", {
  variants: {
    color: {
      primary: "bg-primary-100 text-primary",
      red: "bg-error-100 text-error-500",
      gray: "bg-gray-100 text-gray-500",
      green: "bg-success-100 text-success-500",
      /**
       * legacy design guide
       */
      purple: "bg-[#F2EDFF] text-[#3C0BC9]",
      "blue-green": "bg-[#E9FCFF] text-[#03B0C8]",
    },
    outlineColor: {
      primary: "border border-primary bg-white text-primary",
      red: "border border-error-400 bg-white text-error-400",
      gray: "border border-gray-500 bg-white text-gray-500",
      green: "border border-success-500 bg-white text-success-500",
      /**
       * legacy design guide
       */
      purple: "border border-[#3C0BC9] bg-white text-[#3C0BC9]",
      "blue-green": "border border-[#03B0C8] bg-white text-[#03B0C8]",
    },
  },
})

type BadgePropsBase = Omit<React.HTMLAttributes<HTMLDivElement>, "color">
// type BadgePropsBase = React.HTMLAttributes<HTMLDivElement>

export interface BadgeProps
  extends Omit<VariantProps<typeof badgeVariants>, "outlineColor">,
    BadgePropsBase,
    PropsWithChildren {
  outline?: boolean
}

/**
 * D-Day, 상품정보 등 포인트를 주기위한 컴포넌트
 */
const Badge = ({
  children,
  color = "primary",
  outline = false,
  className,
  ...props
}: BadgeProps) => {
  return (
    <div
      className={cn(
        badgeVariants({
          color,
          ...(outline ? { outlineColor: color } : { color }),
        }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Badge
