import type {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import { CommentDetail } from "src/components/Comment/CommentDetail";
import { CommentType } from "src/types/types";
import { API_URL } from "src/utils/const";
import { SWRConfig } from "swr";

interface Params extends ParsedUrlQuery {
  id: string;
}

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData: CommentType[] = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const { id } = ctx.params as Params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }

  const commentData: CommentType = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 10,
  };
};

const CommentsId: NextPage<Props> = (props) => {
  const { fallback } = props;
  return (
    <div>
      <SWRConfig value={{ fallback }}>
        <CommentDetail />
      </SWRConfig>
    </div>
  );
};

export default CommentsId;
