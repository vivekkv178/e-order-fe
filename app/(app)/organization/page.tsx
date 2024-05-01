"use client";

import React from "react";

import AddOrganization from "./components/AddOrganization";
import Settings from "./components/Settings";
import Organization from "./components/Organization";
import EditOrganization from "./components/EditOrganization";
import DeleteOrganization from "./components/DeleteOrganization";
import {
  OrganizationsProvider,
  useOrganizationsContext,
} from "./context/context";
import { Loader2 } from "lucide-react";

function Organizations() {
  const { commonState } = useOrganizationsContext();

  return (
    <>
      <AddOrganization />
      <EditOrganization />
      <DeleteOrganization />
      <div className="tw-flex tw-flex-row-reverse">
        <Settings />
      </div>
      {commonState?.listLoading ? (
        <div className="tw-grid tw-place-items-center">
          <Loader2 className="tw-h-12 tw-w-12 tw-animate-spin" />
        </div>
      ) : (
        <div className="tw-max-w-[85rem] tw-px-4 tw-py-10 sm:tw-px-6 lg:tw-px-8 lg:tw-py-14 tw-mx-auto">
          <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-3 sm:tw-gap-6">
            {commonState?.organizations?.map((organization, index) => (
              <Organization key={index} organization={organization} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

const ManageOrganizations = () => {
  return (
    <OrganizationsProvider>
      <Organizations />
    </OrganizationsProvider>
  );
};

export default ManageOrganizations;
