import Head from "next/head";
import { AuthLayout } from "src/components/AuthLayout";
import { Dropdown } from "src/components/Dropdown";

const About = () => {
  return (
    <AuthLayout>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-between px-5 py-8 md:px-10">
        <h2 className="dark:text-white">About</h2>
        <div>
          <Dropdown label="Options" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default About;
