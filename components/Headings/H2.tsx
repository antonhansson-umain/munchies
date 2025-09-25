import { cn } from "@/lib/cn";
import { HeadingProps } from "./HeadingProps";

export default function H2({ children, className }: HeadingProps) {
  return <h2 className={cn("text-2xl", className)}>{children}</h2>;
}
