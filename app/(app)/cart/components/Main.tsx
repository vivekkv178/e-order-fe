/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button, CardFooter } from "@vivekkv178/library";
import { useComponentContext } from "../context/context";
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
          <img
            className="h-8 w-8 text-muted-foreground tw-rounded-full"
            src={
              mainItem?.image_url ||
              "https://graphicsfamily.com/wp-content/uploads/edd/2018/11/free-circular-logo-999x999.jpg"
            }
          />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{mainItem?.name}</div>
        <p className="text-xs text-muted-foreground">{`$${mainItem?.price}`}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-2">
        {/* Quantity Selector */}
        <div className="flex items-center tw-gap-x-2">
          <Button
            onClick={() =>
              dispatch(
                onCartChangeHandler({
                  item: mainItem,
                  user_action: constants.REMOVE_PRODUCT,
                })
              )
            }
            variant="outline"
          >
            -
          </Button>
          <span>{commonState?.getProductQuantityFromCart(mainItem)}</span>
          <Button
            onClick={() =>
              dispatch(
                onCartChangeHandler({
                  item: mainItem,
                  user_action: constants.ADD_PRODUCT,
                })
              )
            }
            variant="outline"
          >
            +
          </Button>
          {/* <Button
            onClick={() =>
              commonState?.onCartChangeHandler(mainItem, constants.ADD_PRODUCT)
            }
            variant="default"
          >
            Add to Cart
          </Button> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MainComp;
