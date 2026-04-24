import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts";
import { useUserById } from "../../hooks/useUserById";
import PostCard from "../Posts/PostCard";
import AddPostForm from "../Posts/AddPostForm";
import Pagination from "../common/Pagination";
import { ArrowLeft } from "lucide-react";

const POSTS_PER_PAGE = 5;

export function UserPostsPage() {
  const { id } = useParams<{ id: string }>();
  const userId = parseInt(id ?? "0", 10);

  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: user,
    isLoading: userLoading,
    isError: userError,
  } = useUserById(userId);

  const {
    posts,
    isLoading: postsLoading,
    isError: postsError,
  } = usePosts(userId);

  if (userLoading || postsLoading) {
    return (
      <p className="text-center font-nohemi text-2xl font-bold text-green-color">
        Loading...
      </p>
    );
  }

  if (userError || postsError) {
    return (
      <p className="text-center font-nohemi text-2xl font-bold text-red-500">
        Something went wrong!!!
      </p>
    );
  }

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const paginated = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Link
        to="/taskTwo"
        className="inline-flex items-center gap-1 text-sm text-green-color font-outfit mb-6"
      >
        <ArrowLeft /> Go Back
      </Link>

      {user && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      <AddPostForm userId={userId} />

      {posts.length === 0 ? (
        <p className="text-gray-400 font-outfit text-center py-12">
          No posts found.
        </p>
      ) : (
        <>
          <p className="text-sm font-outfit font-bold text-gray-500 mb-4">
            {posts.length} Post{posts.length !== 1 ? "s" : ""}
          </p>
          <div className="flex flex-col gap-4">
            {paginated.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}
