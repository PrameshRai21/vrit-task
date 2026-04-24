import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../api";

export const useUserById = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
    enabled: !!userId,
  });
};
