import { useRouter } from "next/dist/client/router";
import { UserType } from "src/types/types";
import { fetcher } from "src/utils/fetcher";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWRImmutable<UserType, Error>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
