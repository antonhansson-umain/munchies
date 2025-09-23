import { cn } from "@/lib/cn";

type ChipProps = React.HTMLAttributes<HTMLDivElement>;

export default function Chip({ className, children, ...props }: ChipProps) {
  return (
    <div
      className={cn(
        "card flex items-center justify-center w-max px-3 !rounded-full !leading-[100%] h-7",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
