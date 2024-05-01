import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@vivekkv178/library";
import { Button } from "@vivekkv178/library";
import { useComponentContext } from "../context/context";
import { constants } from "../utils/constants";
import { Icon } from "@iconify/react";

const DeleteContact = () => {
  const { commonState } = useComponentContext();

  return (
    <Dialog
      open={commonState?.deleteDialog}
      onOpenChange={() =>
        commonState?.dialogCloseHandler(constants.DELETE_DIALOG)
      }
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Organization</DialogTitle>
          <DialogDescription>
            Are you sure, you want to delete
            <span className="tw-ml-1 font-bold text-black">
              {commonState?.selectedItem?.name}
            </span>
            ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            variant="secondary"
            onClick={() =>
              commonState?.dialogCloseHandler(constants.DELETE_DIALOG)
            }
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="destructive"
            onClick={() => commonState?.onDeleteHandler()}
          >
            {commonState?.deleteLoading ? (
              <Icon
                icon="lucide:loader-circle"
                className="h-4 w-4 animate-spin"
              />
            ) : (
              "Delete"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteContact;
