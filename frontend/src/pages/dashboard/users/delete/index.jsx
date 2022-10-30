import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "@windmill/react-ui";
import React from "react";
function UserDelete({ isModalOpen, setIsModalOpen }) {
  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>modlekjr</ModalBody>
          <ModalFooter>
            <Button
              className="w-full sm:w-auto"
              layout="outline"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button className="w-full sm:w-auto">Accept</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
export default UserDelete;
