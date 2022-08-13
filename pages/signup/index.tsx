import AuthLayout from "../../layout/auth";

import { Divider, Image, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import { signUpRequest } from "../../api/auth";
import Modal from "../../components/Modal";

const SignUp = () => {
  const [opened, setOpened] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().trim().required("Họ không được để trống"),
    lastName: Yup.string().trim().required("Tên không được để trống"),
    username: Yup.string()
      .trim()
      .required("Username / Email không được để trống"),
    password: Yup.string().required("Mật khẩu không được để trống").trim(),
  });
  const signUpForm = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
    },
    validate: yupResolver(schema),
  });
  const handleSubmit = async (value: any) => {
    const payload = {
      ...value,
      grant_type: "password",
      client_id: "stg.sso.icanconnect.vn",
    };
    signUpRequest(payload)
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
        Vui lòng nhập thông tin sử dụng để tiến hành đăng ký
      </p>
      <form onSubmit={signUpForm.onSubmit((value) => handleSubmit(value))}>
        <div className="flex mb-2">
          <TextInput
            {...signUpForm.getInputProps("firstName")}
            classNames={{
              input: "rounded-[10px] font-nunito",
              label:
                "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
            }}
            size="md"
            label="Họ"
            type="text"
          />
          <TextInput
            {...signUpForm.getInputProps("lastName")}
            className="ml-4"
            classNames={{
              input: "rounded-[10px] font-nunito",
              label:
                "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
            }}
            size="md"
            label="Tên"
            type="text"
          />
        </div>
        <TextInput
          {...signUpForm.getInputProps("username")}
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Username / Email đăng nhập"
          type="text"
        />
        <PasswordInput
          {...signUpForm.getInputProps("password")}
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
                  color={signUpForm.errors?.password ? "#E22020" : "#C4C4C4"}
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={signUpForm.errors?.password ? "#E22020" : "#C4C4C4"}
                />
              </div>
            );
          }}
        />
        <button
          type="submit"
          className="cursor-pointer bodytext-button bg-ct2-primary-01 rounded-lg py-[13px] w-full mt-4 text-center text-ct2-neutral-01"
        >
          Đăng ký
        </button>
      </form>
      <div className="my-4">
        {/* <hr /> */}
        <Divider
          my="xs"
          label="Hoặc đăng nhập với"
          labelPosition="center"
          classNames={{
            label: "bodytext-16px-regular font-nunito text-ct2-neutral-04",
          }}
        />
      </div>
      <div className="cursor-pointer bodytext-button bg-ct2-primary-02 rounded-lg py-2 w-full my-4 flex justify-center items-center">
        <Image src="/AuthModules/googleIcon.svg" alt="googleIcon" width={32} />
        <p className="bodytext-button ml-2">Đăng nhập sử dụng Google</p>
      </div>
      <div className="bodytext-button w-fit mx-auto">
        <span className="mr-2">Bạn đã có tài khoản?</span>
        <Link href="/signin" className="inline ml-2">
          <a className="text-ct2-primary-01">Đăng nhập ngay</a>
        </Link>
      </div>
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

SignUp.Layout = AuthLayout;

export default SignUp;
