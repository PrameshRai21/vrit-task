import { useQuery } from "@tanstack/react-query";
import { getPostByUserId } from "../api";
import { useDashboardStore } from "../stores/dashboardStore";
import type { PostTypes } from "../types/posts";
import { useEffect } from "react";

export const usePosts = (userId: number) => {
  const { posts, setPosts } = useDashboardStore();

  const query = useQuery({
    queryKey: ["posts", userId],
    queryFn: () => getPostByUserId(userId),
    enabled: !!userId,
  });

  useEffect(() => {
    if (!query.data) return;

    const stored: PostTypes[] = JSON.parse(
      localStorage.getItem("localPost") || "[]",
    );

    const localForUser = stored.filter((p) => p.userId === userId);
    setPosts([...localForUser, ...query.data]);
  }, [query.data, userId, setPosts]);

  return {
    ...query,
    posts,
    isLoading: query.isLoading,
    error: query.error,
  };
};
