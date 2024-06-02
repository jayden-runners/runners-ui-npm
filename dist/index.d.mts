import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import React, { PropsWithChildren } from 'react';

declare const buttonVariants: (props?: ({
    color?: "gray" | "dark" | "primary" | null | undefined;
    outlineColor?: "gray" | "dark" | "primary" | null | undefined;
    size?: "56" | "48" | "40" | "36" | "32" | "30" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type ButtonPropsBase = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">;
interface ButtonProps extends ButtonPropsBase, VariantProps<typeof buttonVariants>, PropsWithChildren {
    outline?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface CardProps extends PropsWithChildren {
}
declare const Card: (props: CardProps) => React.JSX.Element;

export { Button, Card };
