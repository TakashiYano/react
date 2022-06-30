import { useRouter } from "next/dist/client/router";
import { CommentType } from "src/types/types";
import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWR<CommentType, Error>(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
