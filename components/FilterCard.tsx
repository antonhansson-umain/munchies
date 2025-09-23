type FilterCardProps = React.HTMLAttributes<HTMLDivElement>;

export default function FilterCard({ children }: FilterCardProps) {
  return <div className="card">{children}</div>;
}
