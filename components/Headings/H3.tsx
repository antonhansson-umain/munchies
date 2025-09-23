import { cn } from "@/lib/cn";
import { HeadingProps } from "./HeadingProps";

export default function H3({ children, className }: HeadingProps) {
  return <h3 className={cn("text-sm", className)}>{children}</h3>;
}
