import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const UserLayout = ({ children }: Props) => {
  return <div className="">{children}</div>;
};
