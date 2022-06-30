import { FetchType } from "src/types/types";
import useSWRImmutable from "swr/immutable";
import { Key } from "swr";

export const useFetchArray = (url: Key) => {
  const { data, error } = useSWRImmutable<FetchType[], Error>(url);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};
