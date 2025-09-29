import Image from "next/image";
import H3 from "../Headings/H3";
import ResetFiltersButton from "../ResetFiltersButton";

export default function Empty() {
  return (
    <div className="w-full col-span-full justify-center flex flex-col items-center gap-4">
      <H3 className="text-2xl">No restaurants found</H3>
      <Image
        src={"/empty.png"}
        alt={"Person looking for something through magnifying glass."}
        width={160}
        height={160}
        priority={true}
      />
      <ResetFiltersButton />
    </div>
  );
}
