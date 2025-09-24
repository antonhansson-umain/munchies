export default function FilterGroupTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h3 className="font-semibold uppercase text-black/40">{children}</h3>;
}
