import { useUsers } from "../../hooks/useUser";
import UserList from "./UserList";
import SearchBar from "../common/SearchBar";

export function UsersPage() {
  const { isLoading, isError, error, data: users } = useUsers();

  if (isLoading)
    return (
      <p className="text-center font-nohemi text-2xl font-bold">Loading...</p>
    );

  if (isError) {
    return (
      <p className="text-center text-red-500 text-2xl font-bold">
        {error instanceof Error ? error.message : "Something went wrong"}
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold font-outfit text-gray-900">
            Users - {users?.length}
          </h2>
        </div>
        <SearchBar />
      </div>
      <UserList />
    </div>
  );
}
