import { PostType } from "src/types/types";
import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const usePost = (id: string | string[] | undefined) => {
  const { data, error } = useSWR<PostType, Error>(
    id ? `${API_URL}/posts/${id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
