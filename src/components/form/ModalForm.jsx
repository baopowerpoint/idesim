import React from "react";
import { Modal } from "flowbite-react";
import { useState } from "react";
import DefaultButton from "../button/DefaultButton";

function ModalForm({ children, action }) {
  const [isShown, setIsShown] = useState(false);
  const handleOpen = () => {
    setIsShown(true);
  };
  const handleClose = () => {
    setIsShown(false);
  };
  return (
    <React.Fragment>
      {/* <DefaultButton
        name={action}
        color="blue"
        onClick={() => {
          handleOpen();
        }}
      /> */}
      <button
        type="button"
        onClick={handleOpen}
        className={`text-white w-full space-no-wrap focus:outline-none focus:ring-4 font-500 rounded-lg text-caption2  bg-blue-700  px-2 border-b-blue-700`}
      >
        {action}
      </button>
      <Modal
        show={isShown}
        size="md"
        popup={true}
        onClose={() => {
          handleClose();
        }}
      >
        <Modal.Header className="!bg-dark2 border border-dark4" />
        <Modal.Body className="!bg-dark2 border border-dark4">
          {children}
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
}

export default ModalForm;
