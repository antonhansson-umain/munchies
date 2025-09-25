import { cn } from "@/lib/cn";
import { HeadingProps } from "./HeadingProps";

export default function H1({ children, className }: HeadingProps) {
  return <h1 className={cn("text-[40px]", className)}>{children}</h1>;
}
