import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@vivekkv178/library";
import { Input } from "@vivekkv178/library";
import { Label } from "@vivekkv178/library";
import { Button } from "@vivekkv178/library";
import { useComponentContext } from "../context/context";
import { constants } from "../utils/constants";
import { Icon } from "@iconify/react";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Ex: Laptop",
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Ex: Laptop description",
  },
  {
    id: "price",
    label: "Price",
    placeholder: "Ex: 123.34",
  },
];

const EditOrganization = () => {
  const { commonState } = useComponentContext();
  return (
    <Dialog
      open={commonState?.editDialog}
      onOpenChange={() =>
        commonState?.dialogCloseHandler(constants.EDIT_DIALOG)
      }
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Organization</DialogTitle>
          <DialogDescription>
            You have selected : {commonState?.selectedItem?.name}
          </DialogDescription>
        </DialogHeader>
        {commonState?.getLoading ? (
          <div className="tw-grid tw-place-items-center">
            <Icon
              icon="lucide:loader-circle"
              className="tw-h-12 tw-w-12 tw-animate-spin"
            />
          </div>
        ) : (
          <div className="grid gap-4 py-4 tw-overflow-y-scroll tw-max-h-[70vh]">
            {formFields.map((formField, index) => (
              <div className="grid grid-cols-4 items-center gap-4" key={index}>
                <Label htmlFor={formField.id} className="text-right">
                  {formField.label}
                </Label>
                <Input
                  id={formField.id}
                  name={formField.id}
                  placeholder={formField.placeholder}
                  className="col-span-3"
                  value={commonState?.selectedItem?.[formField.id]}
                  onChange={commonState?.onChangeHandler}
                />
              </div>
            ))}
          </div>
        )}
        <DialogFooter>
          <Button type="submit" onClick={commonState?.updateHandler}>
            {commonState?.saveLoading ? (
              <Icon
                icon="lucide:loader-circle"
                className="h-4 w-4 animate-spin"
              />
            ) : (
              "Save"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditOrganization;
