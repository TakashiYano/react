import { FetchArrayType } from "src/types/types";
import { fetcher } from "src/utils/fetcher";
import useSWR, { Key } from "swr";

export const useFetchArray = (url: Key) => {
  const { data, error } = useSWR<FetchArrayType, Error>(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id: string | undefined) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id: string | undefined) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
