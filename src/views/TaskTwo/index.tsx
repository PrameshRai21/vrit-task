import { Routes, Route } from "react-router-dom";
import { UsersPage } from "../../components/Users/UserPage";
import { UserPostsPage } from "../../components/Users/UserPostPage";

function TaskTwo() {
  return (
    <div>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <h1 className="text-xl font-bold font-outfit  text-green-color">
            User & Posts Dashboard
          </h1>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="users/:id" element={<UserPostsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default TaskTwo;
