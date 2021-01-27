import Head from "next/head";
import { AuthLayout } from "src/components/auth-layout";
import RegisterForm from "src/components/form/RegisterForm";

const SignUpPage = () => {
  return (
    <AuthLayout>
      <Head>
        <title>ユーザー登録</title>
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
              会員登録
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignUpPage;
