import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDashboardStore } from "../stores/dashboardStore";
import { getUsers } from "../api";

export const useUsers = () => {
  const setUsers = useDashboardStore((state) => state.setUsers);

  const query = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (query.data) setUsers(query.data);
  }, [query.data, setUsers]);

  return {
    ...query,
    isLoading: query.isLoading,
  };
};
