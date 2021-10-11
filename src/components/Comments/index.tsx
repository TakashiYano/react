import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponent: React.VFC = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
