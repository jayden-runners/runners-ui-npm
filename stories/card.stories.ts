import type { Meta, StoryObj } from "@storybook/react"
import Card from "./card"

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

const children = "이 안을 채우면 됩니다"

export const Default: Story = {
  args: {
    children,
  },
}
