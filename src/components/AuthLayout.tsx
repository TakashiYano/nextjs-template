import type { ReactNode } from "react";
import { Header } from "src/components/AuthHeader";
import { Footer } from "src/components/Footer";

export const AuthLayout = (props: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="bg-green-100 dark:bg-gray-700">{props.children}</main>
      <Footer />
    </>
  );
};
