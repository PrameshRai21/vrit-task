import { useDashboardStore } from "../../../stores/dashboardStore";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useDashboardStore();

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name or email..."
        className="w-full pl-10 pr-9 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-outfit"
      />
    </div>
  );
}

export default SearchBar;
