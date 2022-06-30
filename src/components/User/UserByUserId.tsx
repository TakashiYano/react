import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { UserType } from "src/types/types";
import { API_URL } from "src/utils/const";

export type Props = {
  id: string | undefined;
};

export const UserByUserId: React.FC<Props> = (props) => {
  const { data, error } = useSWR<UserType, Error>(
    props.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );

  if (!data && !error) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return <div className="text-lg">Created by {data?.name}</div>;
};
