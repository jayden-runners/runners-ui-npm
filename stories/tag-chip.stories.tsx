import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import TagChip, { TagChipProps } from "./tag-chip"

const meta: Meta<typeof TagChip> = {
  title: "Components/Tag(Chip)",
  component: TagChip,

  argTypes: {
    size: {
      control: { type: "select" },
      options: ["24", "28", "32", "40"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "dark"],
    },
    isActive: {
      control: { type: "boolean" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TagChip>

export default meta

type Story = StoryObj<typeof meta>

const Template: Story = {
  render: (args) => {
    const [isActive, setIsActive] = useState(args.isActive)

    const handleClick = () => {
      setIsActive((prev) => !prev)
    }

    return (
      <TagChip {...args} isActive={isActive} onClick={handleClick}>
        {args.children}
      </TagChip>
    )
  },
}

export const Primary40: Story = {
  ...Template,
  args: {
    children: "Primary Tag",
    color: "primary",
    isActive: false,
    size: "40",
  },
}
export const Primary32: Story = {
  ...Template,
  args: {
    children: "Primary Tag",
    color: "primary",
    isActive: false,
    size: "32",
  },
}
export const Primary28: Story = {
  ...Template,
  args: {
    children: "Primary Tag",
    color: "primary",
    isActive: false,
    size: "28",
  },
}
export const Primary24: Story = {
  ...Template,
  args: {
    children: "Primary Tag",
    color: "primary",
    isActive: false,
    size: "24",
  },
}

export const Dark: Story = {
  ...Template,
  args: {
    children: "Dark Tag",
    color: "dark",
    isActive: false,
    size: "40",
  },
}
