import React from "react";
import { Slot, usePathname } from "expo-router";
import { useLayout } from "@hooks/index";
import { ROUTES } from "@constants/index";

export default (): JSX.Element => {
  const pathname = usePathname();
  const { setBaseBackground, setShowHeaderNav, setShowFooterNav } = useLayout();

  const checkRoutesForHeader = () => {
    const routesWithoutFooter = [ROUTES.USER_CREATE_BOOKING];
    if (routesWithoutFooter.some((route) => pathname.includes(route))) {
      setShowHeaderNav(false);
    } else {
      setShowHeaderNav(true);
    }
  };

  const checkRoutesForFooter = () => {
    const routesWithoutFooter = [ROUTES.USER_EMERGENCIES, ROUTES.USER_RATE_US];
    if (routesWithoutFooter.some((route) => pathname.includes(route))) {
      setShowFooterNav(false);
    } else {
      setShowFooterNav(true);
    }
  };

  React.useEffect(() => {
    checkRoutesForHeader();
    checkRoutesForFooter();
  }, []);

  return <Slot />;
};
