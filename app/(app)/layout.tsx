"use client";

import { AppLayout, getUserInfo, logout } from "@vivekkv178/library";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import Link from "next/link";
import { onLoginSuccess, onLogout } from "@/lib/reducers/auth";
import { FE_ROUTES } from "@/lib/constants";
import { useEffect } from "react";

const Layout = (props: any) => {
  const router = useRouter();
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout();
    dispatch(onLogout());
    router.push(FE_ROUTES.LOGIN);
  };

  const checkUser = async () => {
    const user = await getUserInfo();
    if (user) dispatch(onLoginSuccess(user));
    else router.push(FE_ROUTES.LOGIN);
  };

  useEffect(() => {
    checkUser();
  }, []);

  const provideData = authState?.user?.providerData
    ? authState?.user?.providerData[0]
    : null;

  return (
    <AppLayout
      NavigationComponent={Link}
      navbarProps={{
        navs: [
          {
            icon: "lucide:home",
            path: "/home",
            title: "Home",
          },
          {
            customClick: true,
            icon: "lucide:bell",
            path: "#",
            title: "Notifications",
          },
        ],
      }}
      profileProps={{
        email: authState?.user?.email,
        name: provideData?.displayName,
        userImage: provideData?.photoURL,
        logoutHandler: handleLogout,
      }}
      sidebarProps={{
        logo: "https://raw.githubusercontent.com/vivekkv178/cdn/main/portfolio/logo.png",
        logoStyles: "h-8 w-3/4",
      }}
    >
      {props.children}
    </AppLayout>
  );
};

export default Layout;
