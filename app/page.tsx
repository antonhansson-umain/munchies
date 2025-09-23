import Restaurants from "@/components/Restaurants";

export default async function Home() {
  return (
    <>
      <aside className="card">Filters</aside>
      <main className="flex flex-col gap-10">
        <div>Filters</div>
        <Restaurants />
      </main>
    </>
  );
}
