import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { MainItem } from "../utils/types";
import { replaceUrl } from "@vivekkv178/library";
import { selectCart } from "@/lib/reducers/cart";

const useCommonState = () => {
  const [listLoading, setListLoading] = useState(false);
  const dispatch = useAppDispatch();

  const authState = useAppSelector((state) => state.auth);

  const [mainItems, setMainItems] = useState([]);
  const api = useApi();

  const cartState = useAppSelector((state) => state.cart);

  const getProductQuantityFromCart = (mainItem: MainItem) => {
    return cartState?.cart?.[mainItem?.uuid]?.quantity || 0;
  };

  const listData = async () => {
    try {
      setListLoading(true);
      const data = await api.callApi({
        url: BE_ROUTES.GET_PRODUCTS,
        method: HttpMethod.GET,
      });
      setMainItems(data);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while fetching.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setListLoading(false);
    }
  };

  useEffect(() => {
    if (authState?.user) listData();
  }, [authState?.user]);

  const refreshHandler = () => {
    listData();
  };

  return {
    listLoading,
    mainItems,
    refreshHandler,
    getProductQuantityFromCart,
  };
};

export default useCommonState;
