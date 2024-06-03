"use client"

import React from "react"
import { cn } from "../lib/utils"
import {
  CalendarIcon,
  FeedIcon,
  HomeIcon,
  SenseBetaLogo,
  StoreIcon,
} from "@/public/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/stories"

export const NAVIGATION_MENU = [
  {
    name: "홈",
    gaProps: "home",
    path: "/",
    icon: <HomeIcon className="size-6" />,
  },
  {
    name: "스토리",
    gaProps: "feed",
    path: "/feed",
    icon: <FeedIcon className="size-6" />,
  },
  {
    name: "내 이벤트",
    gaProps: "calendar",
    path: "/calendar",
    icon: <CalendarIcon className="size-6" />,
  },
  {
    name: "쇼핑",
    gaProps: "store",
    path: "/store",
    icon: <StoreIcon className="size-6" />,
  },
]

interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const {} = props

  const pathname = usePathname()

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[11] flex h-[81px] w-screen justify-center border-b border-gray-300 bg-white px-6 py-4 transition-all mobile:hidden",
      )}
    >
      <div className="z-[1] flex w-full max-w-5xl items-center justify-between">
        <div className="mobile:hidden flex items-center gap-6">
          <div className="box-content flex h-12 w-[118px] cursor-pointer">
            <SenseBetaLogo className={cn("size-full text-primary")} />
          </div>

          <div className="flex flex-col">
            <div className="mobile:hidden flex gap-3">
              {NAVIGATION_MENU.filter((item) => item.name !== "홈").map(
                (item) => {
                  return (
                    <Link scroll={false} key={item.name} href={item.path}>
                      <div
                        className={cn(
                          "flex cursor-pointer items-center justify-center p-3 transition-all duration-300 ease-in-out",
                          {
                            "text-primary": pathname.includes(item.path),
                            "text-gray-900": !pathname.includes(item.path),
                          },
                        )}
                      >
                        <p className="text-16">{item.name}</p>
                      </div>
                    </Link>
                  )
                },
              )}
            </div>
          </div>
        </div>

        <div className="flex">
          <Button color="primary" className="">
            로그인
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
