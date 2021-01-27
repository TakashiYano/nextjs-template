import Head from "next/head";
import { Layout } from "src/components/layout";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-6 md:my-0 md:mx-auto" style={{ maxWidth: 720, minWidth: 420 }}>
        <h2 className="text-gray-800 dark:text-white">Home</h2>
        <button
          className="text-gray-800 dark:text-white"
          onClick={() => {
            window.alert("Hello, World!");
          }}
        >
          Button
        </button>
      </div>
    </Layout>
  );
};

export default Home;
