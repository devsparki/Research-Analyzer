import * as React from 'react'
import { cva } from 'class-variance-authority'

const button = cva(
  'px-4 py-2 rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 bg-white hover:bg-gray-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

export const Button: React.FC<ButtonProps> = ({ variant, className, ...props }) => {
  return <button className={button({ variant, className })} {...props} />
}
