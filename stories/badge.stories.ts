import type { Meta, StoryObj } from "@storybook/react"
import Badge from "./badge"

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "gray", "red", "purple", "blue-green"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

const children = "이 안을 채우면 됩니다"

export const Default: Story = {
  args: {
    children,
  },
}
