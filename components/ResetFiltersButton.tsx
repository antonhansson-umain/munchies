import { cn } from "@/lib/cn";
import Link, { LinkProps } from "next/link";
import React from "react";

// interface ResetProps extends React.ComponentProps<typeof Link> {
//   children?: React.ReactNode;
//   href?: string
// }

type ResetProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

export default function ResetFiltersButton({
  children,
  href = "/",
  className,
}: ResetProps) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-primary-green-400 px-3 py-2 rounded-lg text-white hover:bg-primary-green-500 transition-colors",
        className
      )}
    >
      {children ? children : "Reset Filters"}
    </Link>
  );
}
