import React, { ReactNode, Suspense } from "react";
import Loader from "./loader";

interface Props {
  children: ReactNode;
}
export default function UserLayout({ children }: Props) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-2.5 lg:px-20">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}
