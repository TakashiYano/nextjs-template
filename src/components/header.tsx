import Link from "next/link";
import { useTheme } from "next-themes";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header
      className="bg-white dark:bg-gray-800 px-4 pt-3 md:pt-4 md:px-0"
      style={{ minWidth: 420 }}
    >
      <div
        className="flex justify-between bg-white dark:bg-gray-800 md:my-0 md:mx-auto"
        style={{ maxWidth: 720 }}
      >
        <div className="flex items-center">
          <h1 className="dark:text-white items-center">
            <Link href="/">
              <a className="font-bold text-2xl">Share</a>
            </Link>
          </h1>
          <button
            className="ml-2 p-2 text-white dark:text-gray-900 bg-gray-800 dark:bg-white"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            Change Theme
          </button>
        </div>
        <div>
          <Link href="/sign_up">
            <a
              style={{ display: "inline-block", padding: 12 }}
              className="text-gray-800 dark:text-gray-100"
            >
              ユーザー登録
            </a>
          </Link>
          <Link href="/sign_in">
            <a
              style={{ display: "inline-block", padding: 12 }}
              className="text-gray-800 dark:text-gray-100"
            >
              ログイン
            </a>
          </Link>
        </div>
      </div>
      <nav className="mt-3">
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a
                style={{ display: "inline-block", padding: 12 }}
                className="text-gray-800 dark:text-gray-100"
              >
                {label}
              </a>
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
