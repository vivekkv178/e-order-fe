/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@vivekkv178/library";
import { useComponentContext } from "../context/context";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@vivekkv178/library";
import { MainItem } from "../utils/types";

type MainProps = {
  mainItem: MainItem;
};

const MainComp: React.FC<MainProps> = ({ mainItem }) => {
  const { commonState } = useComponentContext();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <img
            className="h-8 w-8 text-muted-foreground tw-rounded-full"
            src={
              mainItem?.image_url ||
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
                  onClick={() => commonState?.editHandler(mainItem)}
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
                  onClick={() => commonState?.deleteHandler(mainItem)}
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
        <div className="text-2xl font-bold">{mainItem?.name}</div>
        <p className="text-xs text-muted-foreground">{`$${mainItem?.price}`}</p>
      </CardContent>
    </Card>
  );
};

export default MainComp;
