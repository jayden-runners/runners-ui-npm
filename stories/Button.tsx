import { VariantProps, cva } from "class-variance-authority"
import React, { PropsWithChildren } from "react"
import { cn } from "@/app/lib/utils"

const buttonVariants = cva(
  "rounded-1 px-2.5 font-bold transition-colors duration-200 ease-in-out disabled:cursor-not-allowed",
  {
    variants: {
      color: {
        gray: "bg-gray-100 text-[#555] disabled:bg-gray-400",
        dark: "bg-[#555] text-white disabled:bg-gray-400",
        primary: "bg-primary text-white disabled:bg-gray-400",
      },
      outlineColor: {
        gray: "border border-gray-500 bg-white text-gray-500 disabled:border-gray-400 disabled:text-gray-400",
        dark: "border border-gray-500 bg-white text-gray-500 disabled:border-gray-400 disabled:text-gray-400",
        primary:
          "border border-primary bg-white text-primary disabled:border-gray-400 disabled:text-gray-400",
      },
      loading: {
        true: "pointer-events-none cursor-wait opacity-70",
        false: "",
      },
      size: {
        "56": "h-[56px] py-4 text-16",
        "48": "h-12 py-[14px] text-14",
        "40": "h-10 py-2.5 text-14",
        "36": "h-9 py-2 text-14",
        "32": "h-8 py-1.5 text-14",
        "30": "h-[30px] py-1.5 text-12",
      },
    },
  },
)

type ButtonPropsBase = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "color"
>

export interface ButtonProps
  extends ButtonPropsBase,
    VariantProps<typeof buttonVariants>,
    PropsWithChildren {
  outline?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      size = "40",
      color = "primary",
      outline = false,
      loading = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            size,
            loading,
            ...(outline ? { outlineColor: color } : { color }),
          }),
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  },
)
Button.displayName = "Button"

export default Button
