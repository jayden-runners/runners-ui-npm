import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import Button from "./button"

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "gray", "dark"],
    },
    size: {
      control: "select",
      options: ["56", "48", "40", "36", "32", "30"],
    },
    className: {
      options: ["w-fit", "px-6", "w-full"],
      control: {
        type: "select",
        labels: {
          "w-fit": "텍스트에 맞게",
          "px-6": "기본패딩 (24px)",
          "w-full": "width 100%",
        },
      },
    },
    disabled: {
      control: "boolean",
    },
    outline: {
      control: "boolean",
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const children = "버튼"

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    color: "primary",
    size: "40",
    children,
  },
}

export const Gray: Story = {
  args: {
    color: "gray",
    size: "40",
    children,
  },
}

export const Dark: Story = {
  args: {
    color: "dark",
    size: "40",
    children,
  },
}
