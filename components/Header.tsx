"use client";

import { MarketingHeader, Theme } from "@vivekkv178/library";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  const [hash, setHash] = useState("");
  const params = useParams();

  useEffect(() => {
    const hash = window.location.hash;
    setHash(hash);
  }, [params]);

  return (
    <MarketingHeader
      logoProps={{
        logoUrl:
          "https://raw.githubusercontent.com/vivekkv178/cdn/main/library/logo.png",
        NavigationComponent: Link,
      }}
      navbarProps={{
        marketingRoutes: [
          { path: "/", name: "home" },
          { path: "/#arch", name: "Architecture" },
          { path: "/#storybook", name: "Storybook" },
        ],
        NavigationComponent: Link,
        currentPath: hash ? `${path}${hash}` : path,
      }}
      themeProps={{
        theme: theme === Theme.dark ? Theme.light : Theme.dark,
        setTheme: (theme) => {
          setTheme(theme === Theme.dark ? Theme.light : Theme.dark);
        },
      }}
    />
  );
};

export default Header;
