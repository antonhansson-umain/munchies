import Image, { ImageProps } from "next/image";

type LogoProps = Omit<ImageProps, "src" | "alt">;

export default function Logo({ className, ...props }: LogoProps) {
  return (
    <Image
      src={"/logo.svg"}
      alt="Munchies Logo"
      width={273.42}
      height={40}
      className={className}
      draggable={false}
      {...props}
    />
  );
}
