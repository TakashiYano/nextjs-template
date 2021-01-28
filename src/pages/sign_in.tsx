import Head from "next/head";
import { AuthLayout } from "src/components/auth-layout";
import { LoginForm } from "src/components/form/LoginForm";

const SignInPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>ログイン</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="c-register">
        <div className="md-container">
          <div
            className="border-2 rounded-md bg-gray-50 my-10 mx-auto"
            style={{ maxWidth: 720, minWidth: 420 }}
          >
            <h1
              className="pt-10 text-gray-700 text-center font-bold"
              style={{ fontSize: 24 }}
            >
              ログイン
            </h1>
            <LoginForm />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
