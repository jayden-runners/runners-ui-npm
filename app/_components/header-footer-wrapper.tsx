import React, { PropsWithChildren } from "react"
import { cn } from "../lib/utils"

interface HeaderFooterWrapperProps extends PropsWithChildren {
  topUpButton?: boolean
  layoutClassName?: string
  className?: string
  clearGap?: boolean
}

/**
 * The HeaderFooterWrapper component wraps its children with a specified layout
 * and optionally renders a TopUpButton at the bottom.
 *
 * @param {HeaderFooterWrapperProps} props - Component props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className] - 내부 클래스네임 (별로 안씀)
 * @param {string} [props.layoutClassName] - 외부 div의 padding, margin 등을 커스텀 해야할때 사용
 * @param {boolean} [props.topUpButton] - 탑업버튼 여부
 * @param {boolean} [props.clearGap] - 외부 div의 최소한의 width, height를 제외하고 나머지 스타일을 지움
 *
 * dfdf
 */
const HeaderFooterWrapper = (props: HeaderFooterWrapperProps) => {
  const { children, className, layoutClassName, clearGap } = props

  return (
    <div
      className={cn(
        // default
        "min-h-[calc(100vh-81px-145px)] w-full overflow-y-auto mobile:min-h-[calc(100vh-60px)]",

        // margin padding
        {
          "mt-[81px] pb-[120px] pt-14": !clearGap,
          "mobile:mt-[61px] mobile:px-5 mobile:pb-[74px] mobile:pt-6":
            !clearGap,
        },
        layoutClassName,
      )}
    >
      <div className={cn("max-w-5xl", className)}>{children}</div>
    </div>
  )
}

export default HeaderFooterWrapper
