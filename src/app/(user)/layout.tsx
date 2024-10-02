import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function UserLayout({ children }: Props) {
  return <div className="">{children}</div>;
}
