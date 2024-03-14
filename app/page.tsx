"use client";

import Hero from "@/components/Hero";
import Architecture from "@/components/Architecture";
import Storybook from "@/components/Storybook";
import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    const response = await fetch("https://open-api-be-vivekkv.vercel.app/");
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Hero />
      <Architecture />
      <Storybook />
    </>
  );
}
