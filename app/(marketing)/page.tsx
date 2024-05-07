"use client";

import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Storybook from "@/components/Storybook";
import DbDesign from "@/components/DbDesign";
import Stats from "@/components/Stats";
import Usecase from "@/components/Usecase";

export default function Home() {
  return (
    <>
      <Hero />
      <Architecture />
      <Stats />
      <Usecase />
      {/* <Storybook /> */}
      <DbDesign />
    </>
  );
}
