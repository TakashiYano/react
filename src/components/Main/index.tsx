import { VFC } from "react";
import { useCallback, useState } from "react";
import classes from "src/components/Main/Main.module.css";
import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";

type Props = {
  page: String;
};

const ITEMS = [
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://github.com/vercel/next.js/tree/master/examples",
    title: "Examples →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href:
      "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export const Main: VFC<Props> = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((items) => {
      return items.slice(0, items.length - 1);
    });
  }, []);

  return (
    <main className={classes.main}>
      <Headline
        page={props.page}
        number={111}
        array={[1, 2, 3]}
        obj={{ foo: "foo", bar: "bar" }}
        boolean
        handleReduce={handleReduce}
      >
        <code className={classes.code}>{items.length}</code>
      </Headline>
      <Links items={items} />
    </main>
  );
};
