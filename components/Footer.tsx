"use client";
import React from "react";
import Link from "next/link";
import {
  BuiltWith,
  Footer as FooterComponent,
  Icons,
} from "@vivekkv178/library";

const Footer = () => {
  return (
    <>
      <FooterComponent
        copyrightText=""
        NavigationComponent={Link}
        socials={{
          github: "string",
        }}
      />
      <BuiltWith
        techStack={[
          { icon: Icons.ts, name: "Typescript" },
          { icon: Icons.react, name: "React.js" },
          { icon: Icons.tailwind, name: "Tailwind CSS" },
          { icon: Icons.storybook, name: "Storybook" },
          { icon: Icons.vite, name: "Vite" },
        ]}
      />
    </>
  );
};

export default Footer;
