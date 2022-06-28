import Link from "next/link";
import { usePosts } from "src/hooks/useFetchArray";

export const Posts: React.FC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

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
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
