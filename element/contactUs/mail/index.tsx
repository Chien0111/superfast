import { Image, NumberInput, Textarea, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { ArrowCircleRight } from "iconsax-react";
import * as Yup from "yup";

const GetinTouch = () => {
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

  const data = {};
  const form = useForm({
    initialValues: {
      phone: "",
      name: "",
      studentName: "",
      email: "",
      address: "",
      note: "",
      link: "http://conkhonlon.com",
      productCode: "",
      count: 1,
      fromSystem: "KIDS.ICANCONNECT.VN",
      nam_sinh: "",
      truong_hoc: "",
    },
    validate: yupResolver(schema),
  });
  const handleUploadData = (value: any) => {
    fetch("https://api-contact.hocmaidev.tk/api/hocmai/LandingPage/PostData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": "hocmai@2021",
      },
      body: JSON.stringify({ ...value }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          showNotification({
            title: "Thành công",
            message: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất!",
            color: "teal",
          });
        } else {
          showNotification({
            title: "Thất bại",
            message: data.message,
            color: "red",
          });
        }
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
    <div className="max-w-[1920px] h-[1006px] bg-[url('/images/BG.png')] p-20 py-40 relative m-auto">
      <div className="flex justify-center">
        <div className="w-[1440px]">
          <Image src="/images/Border.png" width="100%" />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="w-[1205px] h-[130px] Secondary-500 rounded-[64px] border-4 border-white absolute top-[105px] text-center text-white">
          {" "}
          <p className="mt-10 Heading-Desktop-Heading8 ">
            Ba mẹ vui lòng nhập đúng thông tin để SPEAKWELL liên hệ với mình
            trong thời gian sớm nhất
          </p>
          <p className="mt-2 text-xl">
            *Toàn bộ thông tin của phụ huynh đều được bảo mật
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="Rectangle-27 absolute top-[303px] ">
          <form
            className="p-20"
            onSubmit={form.onSubmit((value) => handleUploadData(value))}
          >
            <div className="flex">
              <TextInput
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[61px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
                {...form.getInputProps("name")}
                // required
                className="w-1/2 mr-20"
                label="Họ và tên phụ huynh:"
                // placeholder="Họ và tên phụ huynh"
              />
              <TextInput
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[61px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
                {...form.getInputProps("phone")}
                // required
                className="w-1/2 "
                label="Số điện thoại:"
                // placeholder="Số điện thoại"
              />
            </div>
            <div className="flex my-2">
              <TextInput
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[61px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
                {...form.getInputProps("studentName")}
                className="w-1/2 mr-20"
                label="Họ và tên học viên:"
                // placeholder="Họ và tên học viên"
              />
              <TextInput
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[61px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
                {...form.getInputProps("nam_sinh")}
                className="w-1/2 "
                label="Năm sinh học viên:"
                // placeholder="Năm sinh học viên"
              />
            </div>
            <div className="flex">
              <TextInput
                {...form.getInputProps("email")}
                label="Email:"
                type="email"
                // placeholder="Email"
                className="w-1/2 mr-20 "
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[61px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
              />
              <Textarea
                classNames={{
                  label: "Heading-Desktop-Heading5 text-ct-primary-1000",
                  input:
                    "h-[184px] mt-2 bg-ct2-neutral-06 rounded-[20px] border-2",
                }}
                {...form.getInputProps("note")}
                className="w-1/2 "
                // placeholder="Lời nhắn cho SpeakWell"
                label="Lời nhắn cho SpeakWell:"
              />
            </div>
            <div className="w-1/2 absolute bottom-16 left-4">
              <div className="flex justify-center items-center ">
                <button
                  type="submit"
                  className="Body-Desktop-Large text-ct-primary-1000 flex bg-ct-tertiary-500 p-5 rounded-[50px]"
                >
                  <span className="mr-2">Đăng ký ngay</span>{" "}
                  <ArrowCircleRight size="32" color="#0056B8" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
