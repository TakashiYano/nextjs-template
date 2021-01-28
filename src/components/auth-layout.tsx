import type { ReactNode } from "react";
import { AuthHeader } from "src/components/auth-header";
import { Footer } from "src/components/footer";

export const AuthLayout = (props: { children: ReactNode }) => {
  return (
    <>
      <AuthHeader />
      <main className="bg-red-100 dark:bg-gray-700">{props.children}</main>
      <Footer />
    </>
  );
};
