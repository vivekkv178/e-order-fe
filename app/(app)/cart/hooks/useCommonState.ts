import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppDispatch, useAppSelector } from "@/lib/reduxHooks";
import { MainItem } from "../utils/types";
import { replaceUrl } from "@vivekkv178/library";
import { resetCart, selectCart } from "@/lib/reducers/cart";

const useCommonState = () => {
  const [listLoading, setListLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const dispatch = useAppDispatch();

  const authState = useAppSelector((state) => state.auth);

  const [mainItems, setMainItems] = useState([]);
  const api = useApi();

  const cartState = useAppSelector((state) => state.cart);

  const getProductQuantityFromCart = (mainItem: MainItem) => {
    return cartState?.cart?.[mainItem?.uuid]?.quantity || 0;
  };

  const onOrderHandler = async () => {
    setSaveLoading(true);
    const order = { order_items: Object.values(cartState?.cart) };
    try {
      const data = await api.callApi({
        url: BE_ROUTES.CREATE_ORDER,
        method: HttpMethod.POST,
        data: order,
      });
      toast({
        title: "Order Placed Successfully",
      });
      dispatch(resetCart());
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while placing the order.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setSaveLoading(false);
    }
  };

  useEffect(() => {
    if (authState?.user && cartState?.cart)
      setMainItems(Object.values(cartState?.cart));
  }, [authState?.user, cartState?.cart]);

  return {
    listLoading,
    mainItems,
    getProductQuantityFromCart,
    onOrderHandler,
  };
};

export default useCommonState;
