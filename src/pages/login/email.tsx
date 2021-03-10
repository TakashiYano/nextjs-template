import Head from "next/head";
import { Button } from "src/components/Button";
import { LoginForm } from "src/components/form/LoginForm";
import { Layout } from "src/components/layout";

const Email = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-8 md:px-10">
        <p className="text-base text-center text-gray-500 dark:text-white">
          メールアドレスとパスワードを
          <br />
          入力してください。
        </p>
        <LoginForm />
        <div className="text-center mt-9">
          <Button linkProps={{ href: "/" }} variant="link">
            パスワードを忘れた方はこちら
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Email;
