import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";
import { CommentsByPostIdType } from "src/types/types";

export const CommentsByPostId: React.FC<CommentsByPostIdType> = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No comments found.</p>;
  }

  return (
    <ol>
      {data?.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
