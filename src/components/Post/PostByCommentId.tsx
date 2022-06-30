import Link from "next/link";
import { usePost } from "src/hooks/usePost";

type Props = {
  id: string | undefined;
};

export const PostByCommentId: React.FC<Props> = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a className="text-lg hover:text-blue-500">{data?.title}</a>
    </Link>
  );
};
