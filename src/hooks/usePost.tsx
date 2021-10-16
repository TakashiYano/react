import { useRouter } from "next/dist/client/router";
import { PostsType } from "src/types/types";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  const { data, error } = useSWR<PostsType, Error>(
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
