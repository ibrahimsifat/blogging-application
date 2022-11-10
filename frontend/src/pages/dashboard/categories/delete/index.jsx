import { Button } from "@windmill/react-ui";
import React from "react";
import Modal from "../../../../hooks/modal/Modal";

const DeleteModal = ({ opened, controlModal, handleDelete }) => {
  return (
    <Modal open={opened} control={controlModal}>
      <div className="flex justify-center items-center">
        <div>
          <h1 className="font-bold md:text-2xl text-xl">
            Are you Want To Delete Category{" "}
          </h1>
          <div className="flex justify-end items-start mt-10 space-x-4">
            <Button layout="outline" onClick={controlModal}>
              Cancel
            </Button>
            <Button onClick={handleDelete}>Delete</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
