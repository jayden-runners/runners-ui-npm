import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import Input from "./input"

const meta = {
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
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

const placeholder = "placeholder..."

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    size: "32",
    placeholder,
  },
}

export const Medium: Story = {
  args: {
    size: "40",
    placeholder,
  },
}

export const Big: Story = {
  args: {
    size: "48",
    placeholder,
  },
}
