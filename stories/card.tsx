import React, { PropsWithChildren } from "react"

interface CardProps extends PropsWithChildren {}

const Card = (props: CardProps) => {
  const { children } = props
  return (
    <div className="mx-auto w-full max-w-[670px] rounded-4 border border-gray-300 bg-white p-14">
      {children}
    </div>
  )
}

export default Card
