import { useRouter } from "next/dist/client/router";
import { UserType } from "src/types/types";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR<UserType, Error>(
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
