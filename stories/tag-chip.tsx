import { VariantProps, cva } from "class-variance-authority"
import React from "react"

const tagChipVariants = cva("")

type ButtonPropsBase = React.ButtonHTMLAttributes<HTMLButtonElement>

export interface TagChipProps
  extends ButtonPropsBase,
    VariantProps<typeof tagChipVariants> {}

const TagChip = (props: TagChipProps) => {
  const {} = props
  return <button>TagChip</button>
}

export default TagChip
