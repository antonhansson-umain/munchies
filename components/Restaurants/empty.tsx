import Image from "next/image";
import H3 from "../Headings/H3";
import Link from "next/link";

export default function Empty() {
  return (
    <div className="w-full col-span-2 justify-center flex flex-col items-center gap-4">
      <H3 className="text-2xl">No restaurants found</H3>
      <Image
        src={"/empty.png"}
        alt={"Person looking for something through magnifying glass."}
        width={160}
        height={160}
      />
      <Link
        href={"/"}
        className="bg-primary-green-400 px-3 py-2 rounded-lg text-white hover:bg-primary-green-500 transition-colors"
      >
        Reset Filters
      </Link>
    </div>
  );
}
