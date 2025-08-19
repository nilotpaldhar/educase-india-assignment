import { Slot } from '@radix-ui/react-slot';
import { cn } from '../lib/utils';

const Title = ({
  children,
  className,
  asChild,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement> & {
  asChild?: boolean;
}) => {
  const Comp = asChild ? Slot : 'h1';
  return (
    <Comp className={cn('text-[28px] font-medium leading-snug', className)} {...props}>
      {children}
    </Comp>
  );
};

export { Title };
