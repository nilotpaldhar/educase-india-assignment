import { cn } from '../lib/utils';

const Description = ({ children, className }: React.ComponentProps<'p'>) => {
  return <p className={cn('text-lg font-normal opacity-60 leading-7', className)}>{children}</p>;
};

export { Description };
