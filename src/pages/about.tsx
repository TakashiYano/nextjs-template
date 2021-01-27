import Head from "next/head";
import { Layout } from "src/components/layout";
import { ClsxSample } from "src/components/sample/clsxSample";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-6 md:my-0 md:mx-auto" style={{ maxWidth: 720, minWidth: 420 }}>
        <h2 className="text-gray-800 dark:text-white">About</h2>
        <ClsxSample>clsxサンプル</ClsxSample>
        <ClsxSample bold>clsxサンプル(propsに応じてスタイル変更)</ClsxSample>
      </div>
    </Layout>
  );
};

export default About;
