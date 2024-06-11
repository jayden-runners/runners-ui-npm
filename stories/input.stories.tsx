import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import Input, { InputProps } from "./input"
import { CalendarIcon, SearchIcon } from "./assets"

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "gray", "dark"],
    },
    size: {
      control: "select",
      options: ["32", "40", "48"],
    },
    className: {
      options: ["", "w-full"],
      control: {
        type: "select",
        labels: {
          "": "디폴트",
          "w-full": "부모요소 가득채우기",
        },
      },
    },
    disabled: {
      control: "boolean",
    },
    suffix: {
      options: ["none", "calendar", "search"], // "none" 옵션 추가
      control: {
        type: "select",
        labels: {
          none: "없음",
          calendar: "달력 아이콘",
          search: "검색 아이콘",
        },
      },
    },
  },
  args: { onClick: () => {} },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const placeholder = "placeholder..."

// 아이콘 매핑 함수
const getSuffixIcon = (suffix: string) => {
  switch (suffix) {
    case "calendar":
      return <CalendarIcon />
    case "search":
      return <SearchIcon />
    default:
      return null
  }
}

// Story에 아이콘을 추가
const Template = (args: InputProps) => (
  <Input {...args} suffix={getSuffixIcon(args.suffix as string)} />
)

export const Small: Story = {
  args: {
    size: "32",
    placeholder,
    suffix: "none", // 기본값으로 "none" 설정
  },
  render: (args) => Template(args),
}

export const Medium: Story = {
  args: {
    size: "40",
    placeholder,
    suffix: "none",
  },
  render: (args) => Template(args),
}

export const Big: Story = {
  args: {
    size: "48",
    placeholder,
    suffix: "none",
  },
  render: (args) => Template(args),
}
