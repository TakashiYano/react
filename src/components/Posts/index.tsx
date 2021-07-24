import { usePosts } from "src/hooks/usePosts";

export const Posts: React.VFC = () => {
  const { data, error, isLoading, isEmpty } = usePosts();

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ol>
      {data?.map(({ id, title }) => {
        return <li key={id}>{title}</li>;
      })}
    </ol>
  );
};
