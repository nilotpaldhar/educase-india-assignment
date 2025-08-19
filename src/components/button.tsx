import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../lib/utils';

const buttonVariants = cva(
  'py-2.5 px-4 cursor-pointer inline-flex items-center justify-center hover:shadow-md gap-2 whitespace-nowrap text-base font-medium transition-all disabled:pointer-events-none disabled:bg-[##CBCBCB] rounded-md outline-none focus-visible:ring-[1px] focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'text-white bg-primary hover:bg-primary/90 focus-visible:border-primary focus-visible:ring-primary',
        secondary:
          'text-t bg-primary/30 hover:bg-primary/40 focus-visible:border-primary focus-visible:ring-primary',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

const Button = ({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : 'button';

  return <Comp className={cn(buttonVariants({ variant, className }))} {...props} />;
};

export { Button };
