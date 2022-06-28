import Link from "next/link";
import { usePost } from "src/hooks/usePost";
import { PostByCommentIdType } from "src/types/types";

export const PostByCommentId: React.FC<PostByCommentIdType> = (props) => {
  const { data, error, isLoading } = usePost(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Link href={`/posts/${data?.id}`}>
      <a>{data?.title}</a>
    </Link>
  );
};
