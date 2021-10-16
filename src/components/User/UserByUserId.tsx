import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { UsersType } from "src/types/types";

export const UserByUserId = (props: { id: string }) => {
  const { data, error } = useSWR<UsersType, Error>(
    props.id ? `https://jsonplaceholder.typicode.com/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data?.name}</div>;
};
