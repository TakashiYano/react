import type { NextPage } from "next";
import { Header } from "src/components/shared/Header";

const Index: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>title</h1>
      <p>JSONPlaceholder</p>
    </div>
  );
};

export default Index;
