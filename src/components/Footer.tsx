import Link from "next/link";

const items = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms/transaction-law", label: "特定商取引法に基づく表記" },
  { href: "/", label: "お問い合わせ" },
];

export const Footer = () => {
  return (
    <footer className="py-10 bg-white border-t dark:bg-gray-800 dark:border-gray-900">
      <div className="px-5 md:px-10">
        <h1 className="dark:text-white">
          <Link href="/">
            <a className="text-3xl font-bold">Logo</a>
          </Link>
        </h1>
        <ul>
          {items.map(({ href, label }) => {
            return (
              <li key={label} className="mt-4 dark:text-gray-400">
                {label === "お問い合わせ" ? (
                  <Link href={href}>
                    <a target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {label}
                    </a>
                  </Link>
                ) : (
                  <Link href={href}>
                    <a className="hover:underline">{label}</a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-6">
          <small className="dark:text-white" lang="en">
            copyright LOGO All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};
