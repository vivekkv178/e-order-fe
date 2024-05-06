"use client";

import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Storybook from "@/components/Storybook";
import DbDesign from "@/components/DbDesign";

export default function Home() {
  return (
    <>
      <Hero />
      <Architecture />
      {/* <Storybook /> */}
      <DbDesign />
    </>
  );
}
