import type { ReactNode } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/header";

export const Layout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-green-100 dark:bg-gray-700">{props.children}</main>
      <Footer />
    </>
  );
};
