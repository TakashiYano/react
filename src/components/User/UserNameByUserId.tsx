import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

type Props = {
  id: string | undefined;
};

export const UserNameByUserId: React.FC<Props> = (props) => {
  const { data, error, isLoading } = useFetch(
    props.id ? `${API_URL}/users/${props.id}` : null
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div className="text-lg">Created by {data?.name}</div>;
};
