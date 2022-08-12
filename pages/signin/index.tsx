import AuthLayout from "../../layout/auth";

import { Divider, Image, PasswordInput, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { Eye, EyeSlash } from "iconsax-react";
import Link from "next/link";
import * as Yup from "yup";

const SignIn = () => {
  const mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const schema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(mailRegExp, "Vui lòng nhập email chính xác")
      .required("Username / Email không được để trống"),
    password: Yup.string().required("Mật khẩu không được để trống").trim(),
  });
  const signInForm = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: yupResolver(schema),
  });
  const handleSubmit = (value: any) => {
    console.log(value);
    // signInForm.setFieldError("email", "Invalid email");
  };
  return (
    <div className="w-[480px] mx-auto self-start shadow-01 rounded-[30px] px-8 py-12 bg-ct2-neutral-01 font-nunito">
      <Image
        src="/AuthModules/ICANlogo.png"
        alt=""
        width="100%"
        className="px-5"
      />
      <p className="bodytext-16px-regular my-4 mx-12 text-center ">
        Xin chào, vui lòng đăng nhập để sử dụng các dịch vụ của ICAN CONNECT.
      </p>
      <form onSubmit={signInForm.onSubmit((value) => handleSubmit(value))}>
        <TextInput
          {...signInForm.getInputProps("email")}
          classNames={{
            input: "rounded-[10px] font-nunito",
            label: "bodytext-14px-regular text-ct2-neutral-04 mb-2 font-nunito",
          }}
          size="md"
          label="Username / Email đăng nhập"
          type="email"
        />
        <PasswordInput
          {...signInForm.getInputProps("password")}
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
                  color={signInForm.errors?.password ? "#E22020" : "#C4C4C4"}
                />
              </div>
            ) : (
              <div className="mr-4">
                <Eye
                  size="24"
                  color={signInForm.errors?.password ? "#E22020" : "#C4C4C4"}
                />
              </div>
            );
          }}
        />
        <p className="w-fit cursor-pointer ml-auto text-right text-ct2-primary-01 bodytext-button mt-2">
          Quên mật khẩu
        </p>
        <button
          type="submit"
          className="cursor-pointer bodytext-button bg-ct2-primary-01 rounded-lg py-[13px] w-full mt-4 text-center text-ct2-neutral-01"
        >
          Đăng nhập
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
        <span className="mr-2">Bạn chưa có tài khoản?</span>
        <Link href="/signup" className="inline ml-2">
          <a className="text-ct2-primary-01">Đăng ký ngay</a>
        </Link>
      </div>
    </div>
  );
};
SignIn.Layout = AuthLayout;
export default SignIn;
