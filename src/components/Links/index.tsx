import toast from "react-hot-toast";
import classes from "src/components/Links/Links.module.css";

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

export const Links = () => {
  const handleClick = () => {
    toast.success("Got the data");
  };

  return (
    <div className={classes.grid}>
      <button onClick={handleClick} className={classes.card}>
        <h3 className={classes.title}>Documentation &rarr;</h3>
        <p className={classes.description}>
          Find in-depth information about Next.js features and API.
        </p>
      </button>

      {ITEMS.map((item) => {
        return (
          <a key={item.href} href={item.href} className={classes.card}>
            <h3 className={classes.title}>{item.title}</h3>
            <p className={classes.description}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
