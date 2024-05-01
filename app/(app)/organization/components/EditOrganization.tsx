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
import { useOrganizationsContext } from "../context/context";
import { constants } from "../utils/constants";
import { Loader2 } from "lucide-react";

const formFields = [
  {
    id: "name",
    label: "Name",
    placeholder: "Ex: Vivek",
  },
  {
    id: "email",
    label: "Email",
    placeholder: "Ex: vivek@test.com",
  },
  {
    id: "address",
    label: "Address",
    placeholder: "Ex: 123 Boon Keng",
  },
  {
    id: "city",
    label: "City",
    placeholder: "Ex: Singapore",
  },
  {
    id: "state",
    label: "State",
    placeholder: "Ex: Singapore",
  },
  {
    id: "country",
    label: "Country",
    placeholder: "Ex: Singapore",
  },
  {
    id: "postal_code",
    label: "Postal Code",
    placeholder: "Ex: 123456",
  },
  {
    id: "phone_number",
    label: "Phone Number",
    placeholder: "Ex: +65 98765432",
  },
  {
    id: "website",
    label: "Website",
    placeholder: "Ex: https://google.com",
  },
  {
    id: "logo",
    label: "Logo",
    placeholder: "Ex: https://cdn.com",
  },
];

const EditOrganization = () => {
  const { commonState } = useOrganizationsContext();
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
            <Loader2 className="tw-h-12 tw-w-12 tw-animate-spin" />
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
              <Loader2 className="h-4 w-4 animate-spin" />
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
