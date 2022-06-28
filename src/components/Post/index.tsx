import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { usePost } from "src/hooks/usePost";

export const Post: React.FC = () => {
  const router = useRouter();
  const { data, error, isLoading } = usePost(router.query.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
