"use client";

import React from "react";

import Add from "./components/Add";
import Settings from "./components/Settings";
import Main from "./components/Main";
import Edit from "./components/Edit";
import Delete from "./components/Delete";
import { ComponentProvider, useComponentContext } from "./context/context";
import { Icon } from "@iconify/react";

function Products() {
  const { commonState } = useComponentContext();

  return (
    <>
      <Add />
      <Edit />
      <Delete />
      <div className="tw-flex tw-flex-row-reverse">
        <Settings />
      </div>
      {commonState?.listLoading ? (
        <div className="tw-grid tw-place-items-center">
          <Icon
            icon="lucide:loader-circle"
            className="tw-h-12 tw-w-12 tw-animate-spin"
          />
        </div>
      ) : (
        <div className="tw-max-w-[85rem] tw-px-4 tw-py-10 sm:tw-px-6 lg:tw-px-8 lg:tw-py-14 tw-mx-auto">
          <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 sm:tw-gap-6">
            {commonState?.mainItems?.map((mainItem, index) => (
              <Main key={index} mainItem={mainItem} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const Manage = () => {
  return (
    <ComponentProvider>
      <Products />
    </ComponentProvider>
  );
};

export default Manage;
