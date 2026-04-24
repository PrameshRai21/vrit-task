import UserCard from "./UserCard";
import { useDashboardStore } from "../../stores/dashboardStore";

function UserList() {
  const { filteredUsers, searchQuery } = useDashboardStore();
  const users = filteredUsers();

  if (users.length === 0 && searchQuery) {
    return <p>No users match!!!</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
