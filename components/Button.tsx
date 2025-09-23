import { cn } from "@/lib/cn";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "bg-primary-green text-white h-9 min-w-9 rounded-lg text-center flex items-center justify-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
