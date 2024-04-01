"use client";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import React from "react";

const Home = () => {
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  return (
    <div className="tw-[50vw]">
      <div className="tw-1/2 tw-overflow-scroll">
        <pre>{JSON.stringify(authState, null, 2)}</pre>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
