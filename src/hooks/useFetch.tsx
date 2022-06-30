import { FetchType } from "src/types/types";
import { Key } from "swr";
import useSWRImmutable from "swr/immutable";

export const useFetch = (url: Key) => {
  const { data, error } = useSWRImmutable<FetchType, Error>(url);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
