import { useRouter } from "next/dist/client/router";
import { PostType } from "src/types/types";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR<PostType, Error>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
