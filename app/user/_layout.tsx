import React from "react";
import { Slot, usePathname } from "expo-router";
import { useLayout } from "@hooks/index";
import { ROUTES } from "@constants/index";

export default (): JSX.Element => {
  const pathname = usePathname();
  const { setShowHeaderNav, setShowFooterNav } = useLayout();

  const checkRoutesForHeader = () => {
    const routesWithoutHeader = [
      ROUTES.USER_CREATE_BOOKING,
      ROUTES.USER_SELECT_BOOKING_ROUTE,
      ROUTES.USER_TERMS_CONDITIONS,
      ROUTES.USER_PRECONFIRM_BOOKING,
      ROUTES.USER_CONFIRMED_BOOKING,
    ];

    if (routesWithoutHeader.some((route) => pathname.includes(route))) {
      setShowHeaderNav(false);
    } else {
      setShowHeaderNav(true);
    }
  };

  const checkRoutesForFooter = () => {
    const routesWithoutFooter = [
      ROUTES.USER_EMERGENCIES,
      ROUTES.USER_RATE_US,
      ROUTES.USER_SELECT_BOOKING_ROUTE,
      ROUTES.USER_TERMS_CONDITIONS,
      ROUTES.USER_PRECONFIRM_BOOKING,
      ROUTES.USER_CONFIRMED_BOOKING,
    ];

    if (routesWithoutFooter.some((route) => pathname.includes(route))) {
      setShowFooterNav(false);
    } else {
      setShowFooterNav(true);
    }
  };

  React.useEffect(() => {
    checkRoutesForHeader();
    checkRoutesForFooter();
  }, [pathname]);

  return <Slot />;
};
