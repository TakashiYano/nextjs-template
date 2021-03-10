import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "src/components/Button";

export const Header = () => {
  const router = useRouter();
  const [pastSplash, setPastSplash] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleScroll = () => {
    if (window.scrollY > Math.round(window.innerHeight / 13)) {
      setPastSplash("fixed w-full z-50 px-5 md:px-10 border-b dark:border-gray-500 top-0 left-0");
    } else {
      setPastSplash("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  // After mounting, we have access to the theme
  useEffect(() => {
    return setMounted(true);
  }, []);

  return (
    <header className="bg-white border-b dark:bg-gray-800 dark:border-gray-900">
      <div className="flex items-center justify-between h-16 px-5 md:px-10">
        <h1 className="dark:text-white">
          <Link href="/">
            <a className="py-1 text-4xl font-bold">Logo</a>
          </Link>
        </h1>

        <div className="flex items-center">
          <Link key="/search" href="/search">
            <a aria-label="検索" className="text-gray-400 hover:text-gray-600">
              <svg viewBox="0 0 27 27" fill="currentColor" stroke="currentColor" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.56 3.43a8.26 8.26 0 000 16.52 8.18 8.18 0 005-1.72l4.7 4.7a1.1 1.1 0 001.56 0 1.09 1.09 0 000-1.55l-4.7-4.7a8.18 8.18 0 001.72-5 8.28 8.28 0 00-8.28-8.25zm0 2.2a6.06 6.06 0 11-6.06 6.06 6 6 0 016.06-6.06z"
                />
              </svg>
            </a>
          </Link>

          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 ml-5 bg-gray-200 rounded dark:bg-gray-800"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 text-gray-800 dark:text-gray-200"
              >
                {theme === "light" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
              </svg>
            )}
          </button>

          <Button linkProps={{ href: "/login" }} className="px-5 py-2 ml-5 font-bold" variant="solid">
            Login
          </Button>
        </div>
      </div>
      <div className="px-5 border-b dark:border-gray-900 md:px-10">
        <nav className={`bg-white dark:bg-gray-800 ${pastSplash}`}>
          <Link key="/" href="/">
            <a
              className={`hover:text-green-400 font-bold py-2 mr-7 ${
                router.pathname == "/" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"
              }`}
            >
              Home
            </a>
          </Link>
          <Link key="/about" href="/about">
            <a
              className={`hover:text-green-400 font-bold py-2 mr-7 inline-block ${
                router.pathname == "/about" ? "text-green-400 border-b-2 border-green-400" : "text-gray-400"
              }`}
            >
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};
