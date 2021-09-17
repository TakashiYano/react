import { useRouter } from "next/dist/client/router";
import { UsersType } from "src/types/types";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR<UsersType, Error>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
