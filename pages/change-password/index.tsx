import AuthLayout from "../../layout/auth";

import { Image, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import * as Yup from "yup";
import { changePasswordRequest } from "../../api/auth";
import Modal from "../../components/Modal";

const ChangePassword = () => {
  const [opened, setOpened] = useState(true);
  const schema = Yup.object().shape({
    username: Yup.string()
      .trim()
      .required("Username / Email không được để trống"),
    password: Yup.string().trim().required("Mật khẩu không được để trống"),
    newPassword: Yup.string()
      .trim()
      .required("Mật khẩu mới không được để trống"),
    confirmPassword: Yup.string()
      .trim()
      .required("Xác nhận mật khẩu mới không được để trống")
      .oneOf(
        [Yup.ref("newPassword"), null],
        "Xác nhận mật khẩu mới không chính xác"
      ),
  });
  const changePasswordForm = useForm({
    initialValues: {
      username: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate: yupResolver(schema),
  });
  const handleSubmit = async (value: any) => {
    const payload = {
      ...value,
      grant_type: "password",
      client_id: "stg.sso.icanconnect.vn",
    };
    changePasswordRequest(payload)
      .then((res) => {
        if (res.error) {
          showNotification({
            title: "Đã có lỗi xảy ra!",
            message: res.error_description,
            color: "red",
          });
        }
      })
      .catch((err) => {});
  };
  return (
    <div className="w-full md:w-[480px] mx-auto self-start lg:shadow-01 rounded-[30px] px-8 py-12 bg-ct2-neutral-01 font-nunito">
      <Image
        src="/AuthModules/ICANlogo.png"
        alt=""
        width="100%"
        className="px-5"
      />
      <p className="bodytext-16px-regular my-4 mx-12 text-center ">
        Nhập thông tin tài khoản, mật khẩu cũ và mật khẩu mới để tiến hành đổi
        mật khẩu.
      </p>
      <form
        onSubmit={changePasswordForm.onSubmit((value) => handleSubmit(value))}
      >
        <TextInput
          {...changePasswordForm.getInputProps("username")}
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Username / Email đăng nhập"
          type="text"
        />
        <PasswordInput
          {...changePasswordForm.getInputProps("password")}
          className="mt-4"
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Mật khẩu"
          visibilityToggleIcon={({ reveal, size }: any) => {
            return reveal ? (
              <div className="mr-4">
                <EyeSlash
                  size="24"
                  color={
                    changePasswordForm.errors?.password ? "#E22020" : "#C4C4C4"
                  }
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={
                    changePasswordForm.errors?.password ? "#E22020" : "#C4C4C4"
                  }
                />
              </div>
            );
          }}
        />
        <PasswordInput
          {...changePasswordForm.getInputProps("newPassword")}
          className="mt-4"
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Mật khẩu mới"
          visibilityToggleIcon={({ reveal, size }: any) => {
            return reveal ? (
              <div className="mr-4">
                <EyeSlash
                  size="24"
                  color={
                    changePasswordForm.errors?.newPassword
                      ? "#E22020"
                      : "#C4C4C4"
                  }
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={
                    changePasswordForm.errors?.newPassword
                      ? "#E22020"
                      : "#C4C4C4"
                  }
                />
              </div>
            );
          }}
        />
        <PasswordInput
          {...changePasswordForm.getInputProps("confirmPassword")}
          className="mt-4"
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Nhập lại mật khẩu mới"
          visibilityToggleIcon={({ reveal, size }: any) => {
            return reveal ? (
              <div className="mr-4">
                <EyeSlash
                  size="24"
                  color={
                    changePasswordForm.errors?.confirmPassword
                      ? "#E22020"
                      : "#C4C4C4"
                  }
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={
                    changePasswordForm.errors?.confirmPassword
                      ? "#E22020"
                      : "#C4C4C4"
                  }
                />
              </div>
            );
          }}
        />
        <button
          type="submit"
          className="cursor-pointer bodytext-button bg-ct2-primary-01 rounded-lg py-[13px] w-full mt-4 text-center text-ct2-neutral-01"
        >
          Xác nhận
        </button>
      </form>

      <Modal opened={opened} handleClose={() => setOpened(false)}>
        <p className="font-bold text-[24px] text-center mb-10">
          Đổi mật khẩu thành công
        </p>
        <p className="text-center">
          Nhấn <span className="text-ct2-primary-01">Xác nhận</span> để đăng
          nhập sử dụng mật khẩu mới Nhấn Xác nhận
        </p>
        <button
          onClick={() => setOpened(false)}
          className="cursor-pointer bodytext-button bg-ct2-primary-01 rounded-lg py-[13px] w-full mt-10 text-center text-ct2-neutral-01"
        >
          Xác nhận
        </button>
      </Modal>
    </div>
  );
};
ChangePassword.Layout = AuthLayout;

export default ChangePassword;
