import { useEffect, useState } from "react";
import { constants } from "../utils/constants";
import { useSelector } from "react-redux";
import { toast } from "@vivekkv178/library";
import useApi from "@/lib/useApi";
import { BE_ROUTES, HttpMethod } from "@/lib/constants";
import { useAppSelector } from "@/lib/reduxHooks";
import { Organization } from "../utils/types";
import { replaceUrl } from "@vivekkv178/library";

const useOrganizationsState = () => {
  const [contacts, setContacts] = useState([]);
  const [addDialog, setAddDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [deleteContactEvent, setDeleteContactEvent] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any | null>(
    null || {
      name: "Acme Corporation",
      email: "info@acme.com",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      country: "US",
      postal_code: "12345",
      phone_number: "+1-234-567-8901",
      website: "https://www.acme.com",
      logo: "https://graphicsfamily.com/wp-content/uploads/edd/2018/11/free-circular-logo-999x999.jpg",
    }
  );
  const [listLoading, setListLoading] = useState(false);
  const [getLoading, setGetLoading] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const authState = useAppSelector((state) => state.auth);

  const [organizations, setOrganizations] = useState([]);
  const api = useApi();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelectedItem = { ...selectedItem };
    newSelectedItem[event.target.name] = event.target.value;
    setSelectedItem(newSelectedItem);
  };

  const editHandler = async (organization: Organization) => {
    setEditDialog(true);
    setGetLoading(true);
    try {
      const orgDetails = await api.callApi({
        url: replaceUrl(BE_ROUTES.GET_ORG, { uuid: organization?.uuid || "" }),
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

  const deleteHandler = (org: Organization) => {
    setDeleteDialog(true);
    setSelectedItem(org);
  };

  const addHandler = async () => {
    setSaveLoading(true);
    try {
      const orgData = await api.callApi({
        url: BE_ROUTES.CREATE_ORG,
        method: HttpMethod.POST,
        data: selectedItem,
      });
      setOrganizations(orgData);
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

  const updateHandler = async () => {
    setSaveLoading(true);
    try {
      const orgData = await api.callApi({
        url: BE_ROUTES.UPDATE_ORG,
        method: HttpMethod.PUT,
        data: selectedItem,
      });
      setOrganizations(orgData);
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

  const onDeleteHandler = async () => {
    setDeleteLoading(true);
    try {
      const orgData = await api.callApi({
        url: replaceUrl(BE_ROUTES.DELETE_ORG, { uuid: selectedItem?.uuid }),
        method: HttpMethod.DELETE,
      });
      setOrganizations(orgData);
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

  const dialogCloseHandler = (type: string) => {
    setSelectedItem(null);
    if (type === constants.ADD_DIALOG) setAddDialog(false);
    if (type === constants.EDIT_DIALOG) setEditDialog(false);
    if (type === constants.DELETE_DIALOG) {
      setDeleteDialog(false);
      setDeleteContactEvent(false);
    }
  };

  const listData = async () => {
    try {
      setListLoading(true);
      const orgData = await api.callApi({
        url: BE_ROUTES.GET_ORGS,
        method: HttpMethod.GET,
      });
      setOrganizations(orgData);
    } catch (error) {
      console.error("Error fetching data:", error);
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
    organizations,
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

export default useOrganizationsState;
