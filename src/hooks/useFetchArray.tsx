import { CommentsType } from "src/types/types";
import useSWR, { Key } from "swr";

export const useFetchArray = (url: Key) => {
  const { data, error } = useSWR<CommentsType[], Error>(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const useCommentsByPostsId = (id: string) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
