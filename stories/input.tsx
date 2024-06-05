import { cn } from "@/app/lib/utils"
import { cva } from "class-variance-authority"
import React from "react"

const inputVariants = cva(
  "rounded-1 border border-gray-300 px-4 text-gray-900 transition-colors placeholder:text-gray-500 focus:outline-2 focus:outline-state",
  {
    variants: {
      disabled: {
        true: "cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400",
      },
      isError: {
        true: "border-error-500",
      },
      size: {
        "32": "h-8 py-1.5 text-12",
        "40": "h-10 py-2.5 text-14",
        "48": "h-12 py-3 text-16",
      },
    },
  },
)

type InputPropsBase = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">

export interface InputProps extends InputPropsBase {
  size: "32" | "40" | "48"
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size, type, className, disabled, isError, ...props }: InputProps, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          inputVariants({
            size,
            disabled,
            isError,
          }),
          className,
        )}
        disabled={disabled}
        {...props}
      />
    )
  },
)

Input.displayName = "Input"

export default Input
