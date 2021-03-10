import Head from "next/head";
import { AuthLayout } from "src/components/AuthLayout";
import { Button } from "src/components/Button";

const Home = () => {
  return (
    <AuthLayout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-8 md:px-10">
        <h2 className="dark:text-white">Home</h2>
        <Button
          className="px-5 py-2 font-bold"
          variant="outline"
          button
          onClick={() => {
            window.alert("Hello, World!");
          }}
        >
          Button
        </Button>
      </div>
    </AuthLayout>
  );
};

export default Home;
