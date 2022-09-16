import { Modal as ModalMantine } from "@mantine/core";

type ModalType = {
  opened: boolean;
  handleClose: () => void;
  children: any;
};
const Modal = ({ opened, handleClose, children }: ModalType) => {
  return (
    <ModalMantine
      opened={opened}
      onClose={handleClose}
      centered
      withCloseButton={false}
      radius={20}
      classNames={{
        root: "font-nunito  max-w-[440px] mx-auto",
        modal: "px-[34px] py-10",
      }}
    >
      {children}
    </ModalMantine>
  );
};

export default Modal;
