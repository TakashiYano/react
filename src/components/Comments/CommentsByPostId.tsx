import Link from "next/link";
import { useCommentsByPostsId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props: { id: string }) => {
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
      {data?.map(({ id, body }) => {
        return (
          <li key={id}>
            <Link href={`/comments/${id}`}>
              <a>{body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
