import AuthLayout from "../../layout/auth";

import { Image, PasswordInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { Eye, EyeSlash } from "iconsax-react";
import { useState } from "react";
import * as Yup from "yup";
import { firstSignInRequest } from "../../api/auth";
import Modal from "../../components/Modal";

const FirstSignIn = () => {
  const [opened, setOpened] = useState(true);
  const schema = Yup.object().shape({
    password: Yup.string().trim().required("Mật khẩu không được để trống"),
    confirmPassword: Yup.string()
      .trim()
      .required("Xác nhận mật khẩu không được để trống")
      .oneOf([Yup.ref("password"), null], "Xác nhận mật khẩu không chính xác"),
  });
  const FirstSignInForm = useForm({
    initialValues: {
      password: "",
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
    firstSignInRequest(payload)
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
        Chọn mật khẩu đăng nhập mới để đảm bảo bảo mật tài khoản
      </p>
      <form onSubmit={FirstSignInForm.onSubmit((value) => handleSubmit(value))}>
        <PasswordInput
          {...FirstSignInForm.getInputProps("password")}
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
                    FirstSignInForm.errors?.password ? "#E22020" : "#C4C4C4"
                  }
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={
                    FirstSignInForm.errors?.password ? "#E22020" : "#C4C4C4"
                  }
                />
              </div>
            );
          }}
        />
        <PasswordInput
          {...FirstSignInForm.getInputProps("confirmPassword")}
          className="mt-4"
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Xác nhận mật khẩu"
          visibilityToggleIcon={({ reveal, size }: any) => {
            return reveal ? (
              <div className="mr-4">
                <EyeSlash
                  size="24"
                  color={
                    FirstSignInForm.errors?.confirmPassword
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
                    FirstSignInForm.errors?.confirmPassword
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
          Đăng ký thành công
        </p>
        <p className="text-center">
          Nhấn <span className="text-ct2-primary-01">Xác nhận</span> để quay lại
          và bắt đầu sử dụng các dịch vụ của ICAN CONNECT
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
FirstSignIn.Layout = AuthLayout;
export default FirstSignIn;
