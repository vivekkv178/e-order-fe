import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppSelector } from "@/lib/reduxHooks";
import { MainItem } from "../utils/types";
import { replaceUrl } from "@vivekkv178/library";

const useCommonState = () => {
  const [addDialog, setAddDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(
    null || {
      name: "Laptop",
      description: "Laptop Description",
      price: 100,
      is_active: true,
      image_url: "",
    }
  );
  const [listLoading, setListLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const authState = useAppSelector((state) => state.auth);

  const [mainItems, setMainItems] = useState([]);
  const api = useApi();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedItem = { ...selectedItem };
    newSelectedItem[event.target.name] = event.target.value;
    setSelectedItem(newSelectedItem);
  };

  const dialogCloseHandler = (type: string) => {
    setSelectedItem(null);
    if (type === constants.ADD_DIALOG) setAddDialog(false);
    if (type === constants.EDIT_DIALOG) setEditDialog(false);
    if (type === constants.DELETE_DIALOG) {
      setDeleteDialog(false);
    }
  };

  const listData = async () => {
    try {
      setListLoading(true);
      const data = await api.callApi({
        url: BE_ROUTES.GET_ORG_PRODUCTS,
        method: HttpMethod.GET,
      });
      setMainItems(data);
    } catch (error: any) {
      console.error("Error fetching data:", error);
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

  const addHandler = async () => {
    setSaveLoading(true);
    const item = { ...selectedItem };
    item.price = parseFloat(item.price);
    try {
      const data = await api.callApi({
        url: BE_ROUTES.CREATE_PRODUCT,
        method: HttpMethod.POST,
        data: item,
      });
      toast({
        title: "Added Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while adding.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setSaveLoading(false);
      setAddDialog(false);
    }
    listData();
  };

  const editHandler = async (mainItem: MainItem) => {
    setEditDialog(true);
    setGetLoading(true);
    try {
      const orgDetails = await api.callApi({
        url: replaceUrl(BE_ROUTES.GET_PRODUCT, { uuid: mainItem?.uuid || "" }),
        method: HttpMethod.GET,
      });
      setSelectedItem(orgDetails);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while fetching.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setGetLoading(false);
    }
  };

  const updateHandler = async () => {
    setSaveLoading(true);
    const item = { ...selectedItem };
    item.price = parseFloat(item.price);
    item.product_uuid = item.uuid;
    try {
      const data = await api.callApi({
        url: BE_ROUTES.UPDATE_PRODUCT,
        method: HttpMethod.PUT,
        data: item,
      });
      toast({
        title: "Updated Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while updating.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setSaveLoading(false);
      setEditDialog(false);
    }
    listData();
  };

  const deleteHandler = (mainItem: MainItem) => {
    setDeleteDialog(true);
    setSelectedItem(mainItem);
  };

  const onDeleteHandler = async () => {
    setDeleteLoading(true);
    try {
      const data = await api.callApi({
        url: replaceUrl(BE_ROUTES.DELETE_PRODUCT, { uuid: selectedItem?.uuid }),
        method: HttpMethod.DELETE,
      });
      toast({
        title: "Deleted Successfully",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error while deleting.",
        description: error?.response?.data?.message || "",
      });
    } finally {
      setDeleteLoading(false);
      setDeleteDialog(false);
    }
    listData();
  };

  return {
    listLoading,
    mainItems,
    addDialog,
    setAddDialog,
    refreshHandler,
    dialogCloseHandler,
    editDialog,
    setEditDialog,
    editHandler,
    deleteDialog,
    deleteHandler,
    selectedItem,
    addHandler,
    updateHandler,
    onDeleteHandler,
    onChangeHandler,
    getLoading,
    saveLoading,
    deleteLoading,
  };
};

export default useCommonState;
