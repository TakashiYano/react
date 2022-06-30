import type { InferGetStaticPropsType, NextPage } from "next";
import { CommentsComponent } from "src/components/Comments";
import { Header } from "src/components/Header";
import { CommentType } from "src/types/types";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData: CommentType[] = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
  };
};

const Comments: NextPage<Props> = (props) => {
  const { fallback } = props;
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <Header />
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
