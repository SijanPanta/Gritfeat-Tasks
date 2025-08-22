export default function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (value: string) => void;
}) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="border p-2 rounded w-full mb-4"
    />
  );
}
