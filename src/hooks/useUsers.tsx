import { UsersType } from "src/types/types";
import useSWR from "swr";

export const useUsers = () => {
  const { data, error } = useSWR<UsersType[], Error>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};