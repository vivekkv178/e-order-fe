import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import useCommonState from "../hooks/useCommonState";
import { Organization } from "../utils/types";

type CommonState = {
  // Define the structure of your common state here
  listLoading: boolean;
  getLoading: boolean;
  saveLoading: boolean;
  deleteLoading: boolean;
  organizations: Organization[];
  addDialog: boolean;
  setAddDialog: Dispatch<SetStateAction<boolean>>;
  editDialog: boolean;
  setEditDialog: Dispatch<SetStateAction<boolean>>;
  deleteDialog: boolean;
  refreshHandler: () => void;
  dialogCloseHandler: (type: string) => void;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  editHandler: (org: Organization) => void;
  updateHandler: () => void;
  deleteHandler: (org: Organization) => void;
  selectedItem: any;
  addHandler: () => void;
  onDeleteHandler: () => void;
};

type OrganizationsContextType = {
  commonState: CommonState;
};

type OrganizationsProviderProps = {
  children: React.ReactNode;
};

const OrganizationsContext = createContext<OrganizationsContextType | null>(
  null
);

export const OrganizationsProvider: React.FC<OrganizationsProviderProps> = ({
  children,
}) => {
  const commonState = useCommonState(); // Assuming this returns CommonState
  return (
    <OrganizationsContext.Provider value={{ commonState }}>
      {children}
    </OrganizationsContext.Provider>
  );
};

export const useOrganizationsContext = () => {
  const context = useContext(OrganizationsContext);
  if (!context) {
    throw new Error(
      "useOrganizationsContext must be used within an OrganizationsProvider"
    );
  }
  return context;
};
