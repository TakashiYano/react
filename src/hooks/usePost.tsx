import { useRouter } from "next/dist/client/router";
import { PostType } from "src/types/types";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR<PostType, Error>(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
