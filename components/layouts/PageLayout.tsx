import React, { PropsWithChildren } from "react";
import { Props as HeaderNavProps } from "./../screens/navigations/HeaderNav";

type Props = PropsWithChildren<{
  hasHeader: boolean;
  headerAttributes: {
    variant: HeaderNavProps["variant"];
  };
}>;

export const PageLayout: React.FC<Props> = (props) => {
  return <div>PageLayout</div>;
};
