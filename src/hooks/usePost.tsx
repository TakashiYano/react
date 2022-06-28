import { PostType } from "src/types/types";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = (id: string | string[] | undefined) => {
  const { data, error } = useSWR<PostType, Error>(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
