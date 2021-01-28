import Link from "next/link";

const items = [
  { href: "/support/terms", label: "利用規約" },
  { href: "/support/privacy-policy", label: "プライバシーポリシー" },
  { href: "/support/commerce", label: "特定商取引法に基づく表記" },
  { href: "/", label: "お問い合わせ" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="bg-white pt-10 h-80 dark:bg-gray-800">
      <div className="pl-5 md:my-0 md:mx-auto" style={{ maxWidth: "760px", minWidth: "420px" }}>
        <h1 className="mb-5 dark:text-white">
          <Link href="/">
            <a className="font-bold text-2xl">Share</a>
          </Link>
        </h1>
        <ul>
          {items.map(({ href, label }) => {
            return (
              <li key={label} className="mt-4 dark:text-white">
                {label === "お問い合わせ" ? (
                  <a target="_blank" rel="noopener noreferrer" href={href}>
                    {label}
                  </a>
                ) : (
                  <Link href={href}>
                    <a>{label}</a>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-8">
          <small className="text-gray-800 dark:text-white" lang="en">
            copyright SHERE All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};
