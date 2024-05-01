import React from "react";
import { Plus, RefreshCcw, Settings as SettingsIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@vivekkv178/library";

import { Button } from "@vivekkv178/library";
import { useOrganizationsContext } from "../context/context";

const Settings = () => {
  const { commonState } = useOrganizationsContext();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => commonState?.setAddDialog(true)}>
            <Plus className="mr-2 h-4 w-4" />
            <span>Add Organization</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={commonState?.refreshHandler}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            <span>Sync Data</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Settings;
