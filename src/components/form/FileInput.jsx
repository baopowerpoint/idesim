import React from "react";
import { Label, FileInput } from "flowbite-react";

function FileInput() {
  return (
    <div id="fileUpload">
      <div className="mb-2 block">
        <Label htmlFor="file" value="Upload file" />
      </div>
      <FileInput
        id="file"
        className="!bg-dark2"
        helperText="A profile picture is useful to confirm your are logged into your account"
      />
    </div>
  );
}

export default FileInput;
