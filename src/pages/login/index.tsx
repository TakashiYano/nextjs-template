import Head from "next/head";
import Link from "next/link";
import { Button } from "src/components/Button";
import { Layout } from "src/components/layout";

const LogInPage = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-5 py-8 md:px-10">
        <h1 className="text-xl font-bold dark:text-white">Logoにログイン</h1>
        <Link href="/login/email">
          <a className="block px-4 py-2 mt-4 font-bold text-center text-white bg-green-400 rounded-xl hover:bg-green-500">
            <p>メールアドレスでログイン</p>
          </a>
        </Link>

        <button
          className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-blue-400 rounded-xl"
          type="submit"
        >
          <div>Twitterでログイン</div>
        </button>

        <button className="w-full px-4 py-2 mt-4 font-bold text-center text-white bg-red-400 rounded-xl" type="submit">
          <div>Sign in with Google</div>
        </button>

        <p className="mt-4 text-xs dark:text-white">
          サインインすることにより、当社の
          <Button linkProps={{ href: "/terms" }} variant="link">
            利用規約
          </Button>
          および
          <Button linkProps={{ href: "/" }} variant="link">
            プライバシー規約
          </Button>
          に同意したとみなされます。
        </p>
        <div className="mt-8 text-center">
          <Button linkProps={{ href: "/" }} className="text-sm dark:text-green-500" variant="link">
            新規登録はこちら
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default LogInPage;
