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
          { icon: Icons.tailwind, name: "Tailwind CSS" },
          { icon: Icons.next, name: "Next.js" },
          { icon: Icons.nest, name: "Nest.js" },
          { icon: Icons.pg, name: "PostgreSQL" },
        ]}
      />
    </>
  );
};

export default Footer;
