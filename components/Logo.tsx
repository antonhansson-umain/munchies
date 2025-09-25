import Image from "next/image";

type LogoProps = React.HTMLAttributes<HTMLImageElement>;

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src={"/logo.svg"}
      alt="Munchies Logo"
      width={273.42}
      height={40}
      className={className}
      draggable={false}
    />
  );
}
