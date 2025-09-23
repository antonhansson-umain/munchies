import { HeadingProps } from "./HeadingProps";

export default function H2({ children }: HeadingProps) {
  return <h2 className="text-2xl">{children}</h2>;
}
