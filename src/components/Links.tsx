import toast from "react-hot-toast";
import classes from "../styles/Links.module.css";

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

      <a href="https://nextjs.org/learn" className={classes.card}>
        <h3 className={classes.title}>Learn &rarr;</h3>
        <p className={classes.description}>
          Learn about Next.js in an interactive course with quizzes!
        </p>
      </a>

      <a
        href="https://github.com/vercel/next.js/tree/master/examples"
        className={classes.card}
      >
        <h3 className={classes.title}>Examples &rarr;</h3>
        <p className={classes.description}>
          Discover and deploy boilerplate example Next.js projects.
        </p>
      </a>

      <a
        href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={classes.card}
      >
        <h3 className={classes.title}>Deploy &rarr;</h3>
        <p className={classes.description}>
          Instantly deploy your Next.js site to a public URL with Vercel.
        </p>
      </a>
    </div>
  );
};
