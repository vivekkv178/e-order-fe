"use client";
import Link from "next/link";
import useAppLayoutState from "./useAppLayoutState";
import { AppLayout } from "@vivekkv178/library";
import { useAppSelector } from "@/lib/reduxHooks";
import { Toaster } from "@vivekkv178/library";

const Layout = (props: any) => {
  const { appRoutes, providerData, handleLogout } = useAppLayoutState();

  const authState = useAppSelector((state) => state.auth);

  return (
    <AppLayout
      NavigationComponent={Link}
      navbarProps={{
        navs: appRoutes,
      }}
      profileProps={{
        email: authState?.user?.email,
        name: providerData?.displayName,
        userImage: providerData?.photoURL,
        logoutHandler: handleLogout,
      }}
      sidebarProps={{
        logo: "https://raw.githubusercontent.com/vivekkv178/cdn/main/portfolio/logo.png",
        logoStyles: "h-8 w-3/4",
      }}
    >
      {props.children}
      <Toaster />
    </AppLayout>
  );
};

export default Layout;
