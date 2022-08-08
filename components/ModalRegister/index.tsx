import { Modal, NumberInput, Textarea, TextInput } from "@mantine/core";
import React from "react";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";

import * as Yup from "yup";

const ModalRegister = ({ isOpen = false, onClose }: any) => {
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Vui lòng nhập tên phụ huynh")
      .min(2, "Vui lòng nhập đầy đủ phụ huynh")
      .trim(),
    phone: Yup.string()
      .matches(phoneRegExp, "Vui lòng nhập số điện thoại đúng quy định")
      .required("Vui lòng nhập số điện thoại"),
  });
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      studentName: "",
      birth: "",
      email: "",
      note: "",
    },
    validate: yupResolver(schema),
  });
  const handleUploadData = (value: any) => {
    fetch("https://api-contact.hocmaidev.tk/api/contact", {
      method: "POST",
      body: JSON.stringify({ ...value }),
    })
      .then((response) => response.json())
      .then((data) => {
        showNotification({
          title: "Thành công",
          message: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất!",
          color: "teal",
        });
        onClose();
      })
      .catch((err) => {
        showNotification({
          title: "Thất bại",
          message: "Đã xảy ra lỗi, Vui lỏng thử lại sau!",
          color: "red",
        });
      });
  };
  return (
    <Modal opened={isOpen} onClose={onClose} size="lg">
      <form onSubmit={form.onSubmit((value) => handleUploadData(value))}>
        <p className="my-4">
          Vui lòng nhập chính xác thông tin dưới đây để thuận tiện cho SPEAKWELL
          liên hệ với bạn, toàn bộ thông tin sẽ được bảo mật.
        </p>
        <div className="flex">
          <TextInput
            {...form.getInputProps("name")}
            className="grow mr-4"
            label="Họ và tên phụ huynh"
            placeholder="Họ và tên phụ huynh"
          />
          <TextInput
            {...form.getInputProps("phone")}
            className="grow"
            label="Số điện thoại"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="flex my-2">
          <TextInput
            {...form.getInputProps("studentName")}
            className="grow mr-4"
            label="Họ và tên học viên"
            placeholder="Họ và tên học viên"
          />
          <NumberInput
            {...form.getInputProps("birth")}
            className="grow"
            defaultValue={2016}
            label="Năm sinh học viên"
            placeholder="Năm sinh học viên"
          />
        </div>
        <TextInput
          {...form.getInputProps("email")}
          label="Email"
          type="email"
          placeholder="Email"
        />
        <Textarea
          {...form.getInputProps("note")}
          className="my-2"
          placeholder="Lời nhắn cho SpeakWell"
          label="Lời nhắn cho SpeakWell"
        />
        <button
          type="submit"
          className="capitalize px-8 py-4 mt-2 rounded-md bg-ct-secondary-01 text-sm text-ct-neutral-01"
        >
          <span>Đăng ký ngay</span>{" "}
        </button>
      </form>
    </Modal>
  );
};

export default ModalRegister;