import { Link } from "react-router-dom";
import type { UserTypes } from "../../types/users";

function UserCard({ user }: { user: UserTypes }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex flex-col gap-3 hover:bg-gray-200">
      <div className="flex items-center gap-3">
        <div>
          <h2 className="font-semibold text-gray-900 font-outfit">
            {user.name}
          </h2>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600 border-t pt-3 font-outfit">
        <span>{user.company.name}</span>
      </div>

      <div className="flex w-full justify-center">
        <Link
          to={`users/${user.id}`}
          className="w-[70%] text-center font-outfit bg-green-color text-white text-sm font-medium py-2 rounded-lg"
        >
          View Posts
        </Link>
      </div>
    </div>
  );
}

export default UserCard;
