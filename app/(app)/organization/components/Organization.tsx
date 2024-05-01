/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Edit, Trash2 } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@vivekkv178/library";
import { useOrganizationsContext } from "../context/context";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@vivekkv178/library";
import { Organization } from "../utils/types";

type OrganizationProps = {
  organization: Organization;
};

const OrganizationComp: React.FC<OrganizationProps> = ({ organization }) => {
  const { commonState } = useOrganizationsContext();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <img
            className="h-8 w-8 text-muted-foreground tw-rounded-full"
            src={
              organization?.logo ||
              "https://graphicsfamily.com/wp-content/uploads/edd/2018/11/free-circular-logo-999x999.jpg"
            }
          />
        </CardTitle>
        <div className="flex tw-gap-2">
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  icon="lucide:edit"
                  className="h-4 w-4 text-muted-foreground"
                  onClick={() => commonState?.editHandler(organization)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger>
                <Icon
                  icon="lucide:trash-2"
                  className="h-4 w-4 text-muted-foreground"
                  color="red"
                  onClick={() => commonState?.deleteHandler(organization)}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{organization?.name}</div>
        <p className="text-xs text-muted-foreground">{organization?.email}</p>
      </CardContent>
    </Card>
  );
};

export default OrganizationComp;
