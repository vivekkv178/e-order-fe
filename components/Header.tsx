'use client';

import { useAppSelector } from '@/lib/reduxHooks';
import { MarketingHeader, Theme } from '@vivekkv178/library';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const path = usePathname();
  const [hash, setHash] = useState('');
  const params = useParams();
  const authState = useAppSelector((state) => state.auth);

  useEffect(() => {
    const hash = window.location.hash;
    setHash(hash);
  }, [params]);

  const provideData = authState?.user?.providerData
    ? authState?.user?.providerData[0]
    : null;

  return (
    <MarketingHeader
      logoProps={{
        logoUrl:
          'https://raw.githubusercontent.com/vivekkv178/cdn/main/portfolio/logo.png',
        NavigationComponent: Link,
      }}
      navbarProps={{
        marketingRoutes: [
          // { path: "/", name: "home" },
          { path: '/#arch', name: 'Architecture' },
          { path: '/#storybook', name: 'Storybook' },
          {
            path: '#',
            name: 'More',
            nested: true,
            subRoutes: [
              { path: '/home', name: 'home' },
              { path: '/projects', name: 'my projects' },
              { path: '/contact', name: 'contact' },
            ],
          },
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
      loginProps={{
        NavigationComponent: Link,
        loginRedirect: authState?.user ? '/home' : '/login',
        loggedIn: authState?.user ? true : false,
        userImage: provideData?.photoURL,
      }}
    />
  );
};

export default Header;
