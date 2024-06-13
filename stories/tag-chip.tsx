import { cn } from "@/app/lib/utils"
import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const tagChipVariants = cva(
  "flex w-fit cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-4 transition-all duration-200 ease-in-out",
  {
    variants: {
      color: {
        primary: "bg-gray-100 text-gray-600",
        dark: "bg-gray-100 text-gray-600",
      },
      isActive: {
        true: "font-bold",
        false: "",
      },
      size: {
        "24": "py-[3px] text-12",
        "28": "py-[5px] text-12",
        "32": "py-1.5 text-14",
        "40": "py-2 text-16",
      },
    },
    compoundVariants: [
      {
        color: "dark",
        isActive: true,
        className: "bg-gray-800 text-white",
      },
      {
        color: "dark",
        isActive: false,
        className: "bg-gray-100 text-gray-600",
      },
      {
        color: "primary",
        isActive: true,
        className: "bg-primary text-white",
      },
      {
        color: "primary",
        isActive: false,
        className: "bg-gray-100 text-gray-600",
      },
    ],
  },
)

type ButtonPropsBase = React.ButtonHTMLAttributes<HTMLButtonElement>

export interface TagChipProps
  extends ButtonPropsBase,
    VariantProps<typeof tagChipVariants> {
  isActive?: boolean
  color: "primary" | "dark"
  size: "24" | "28" | "32" | "40"
  className?: string
}

/**
 * 필터링을 하거나, 주소 입력 등 자주 사용되는 Pill 태그
 */
const TagChip = ({
  color,
  size,
  isActive,
  children,
  className,
  ...props
}: TagChipProps) => {
  return (
    <button
      className={cn(tagChipVariants({ color, isActive, size }), className)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}

export default TagChip
