/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Button,
  CardFooter,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@vivekkv178/library";
import { useComponentContext } from "../context/context";
import { Icon } from "@iconify/react";
import { Card, CardContent, CardHeader, CardTitle } from "@vivekkv178/library";
import { MainItem } from "../utils/types";
import { constants } from "../utils/constants";
import { useAppDispatch } from "@/lib/reduxHooks";
import { onCartChangeHandler } from "@/lib/reducers/cart";

type MainProps = {
  mainItem: MainItem;
};

const MainComp: React.FC<MainProps> = ({ mainItem }) => {
  const { commonState } = useComponentContext();
  const dispatch = useAppDispatch();

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {/* <img
            className="h-8 w-8 text-muted-foreground tw-rounded-full"
            src={
              mainItem?.image_url ||
              "https://graphicsfamily.com/wp-content/uploads/edd/2018/11/free-circular-logo-999x999.jpg"
            }
          /> */}
          <div className="text-xl font-bold">{mainItem?.uuid}</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xs text-muted-foreground">
          No.of Items : {mainItem?.orderItem.length}
        </p>
      </CardContent>
      <CardFooter className="tw-flex-col items-center justify-between pt-2">
        <div className="flex tw-w-full tw-justify-between">
          <p>Item</p>
          <p>Price</p>
          <p>Quantity</p>
        </div>
        {mainItem?.orderItem?.map((item: any, index: number) => (
          <div
            className="flex border tw-border-2 tw-w-full tw-justify-between tw-mt-2"
            key={index}
          >
            <p>{item?.product?.name}</p>
            <p>{item?.product?.price}</p>
            <p>{item?.quantity}</p>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
};

export default MainComp;
