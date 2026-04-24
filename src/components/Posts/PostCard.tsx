import type { PostTypes } from "../../types/posts";

interface PostCardProps {
  post: PostTypes;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:bg-gray-200">
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-gray-900 font-outfit capitalize leading-snug">
          {post.title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed font-outfit">
        {post.body}
      </p>
    </div>
  );
}

export default PostCard;
