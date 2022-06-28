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
    <ul className="space-y-4">
      {data?.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a className="block group">
                <h1 className="text-xl font-bold group-hover:text-blue-500">
                  {post.title}
                </h1>
                <p className="text-lg text-gray-500 group-hover:text-blue-400">
                  {post.body}
                </p>
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
