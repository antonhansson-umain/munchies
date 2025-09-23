import { HeadingProps } from "./HeadingProps";

export default function H2({ children }: HeadingProps) {
  return <h1 className="text-2xl">{children}</h1>;
}
