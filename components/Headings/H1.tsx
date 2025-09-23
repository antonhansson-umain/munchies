import { HeadingProps } from "./HeadingProps";

export default function H1({ children }: HeadingProps) {
  return <h1 className="text-[40px]">{children}</h1>;
}
