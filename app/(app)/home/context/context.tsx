import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
} from "react";
import useCommonState from "../hooks/useCommonState";
import { MainItem } from "../utils/types";

type CommonState = {
  // Define the structure of your common state here
  listLoading: boolean;
  // getLoading: boolean;
  // saveLoading: boolean;
  // deleteLoading: boolean;
  mainItems: MainItem[];
  // cart: MainItem[];
  // addDialog: boolean;
  // setAddDialog: Dispatch<SetStateAction<boolean>>;
  // editDialog: boolean;
  // setEditDialog: Dispatch<SetStateAction<boolean>>;
  // deleteDialog: boolean;
  // refreshHandler: () => void;
  // dialogCloseHandler: (type: string) => void;
  // onCartChangeHandler: (mainItem: MainItem, type: string) => void;
  getProductQuantityFromCart: (mainItem: MainItem) => number;
  // editHandler: (mainItem: MainItem) => void;
  // updateHandler: () => void;
  // deleteHandler: (mainItem: MainItem) => void;
  // selectedItem: any;
  // addHandler: () => void;
  // onDeleteHandler: () => void;
};

type ComponentContextType = {
  commonState: CommonState;
};

type ComponentProviderProps = {
  children: React.ReactNode;
};

const ComponentContext = createContext<ComponentContextType | null>(null);

export const ComponentProvider: React.FC<ComponentProviderProps> = ({
  children,
}) => {
  const commonState = useCommonState(); // Assuming this returns CommonState
  return (
    <ComponentContext.Provider value={{ commonState }}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useComponentContext = () => {
  const context = useContext(ComponentContext);
  if (!context) {
    throw new Error(
      "useComponentContext must be used within an ComponentProvider"
    );
  }
  return context;
};
