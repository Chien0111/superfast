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
    <div className="max-w-[793px] h-[auto] sm:min-w-[1920px] sm:min-h-[1206px] bg-[url('/images/BG.png')] sm:py-40 py-5 relative m-auto">
      <div className="flex justify-center items-center">
        <div className="relative hidden sm:block">
          <Image src="/images/Border.png" width="100%" height="100%" />
          <div className="">
            <Image
              src="/images/iconactive1.png"
              width="91px"
              height="133px"
              className="absolute top-[-120px] left-[-20px]"
            />
            <Image
              src="/images/iconactive2.png"
              width="81px"
              height="77px"
              className="absolute top-[20px] left-[60px]"
            />
            <Image
              src="/images/iconactive3.png"
              width="47px"
              height="150px "
              className="absolute top-[30px] left-[-60px]"
            />
            <Image
              src="/images/iconactive4.png"
              width="135px"
              height="104px"
              className="absolute top-[760px] left-[-60px]"
            />
            <Image
              src="/images/iconactive5.png"
              width="166px"
              height="110px"
              className="absolute top-[760px] left-[30px]"
            />
            <Image
              src="/images/iconactive6.png"
              width="194px"
              height="218px"
              className="absolute top-[720px] right-[-40px]"
            />
            <Image
              src="/images/iconactive7.png"
              width="79px"
              height="127px"
              className="absolute top-[780px] right-[-80px]"
            />
            <Image
              src="/images/iconactive8.png"
              width="146px"
              height="150px"
              className="absolute top-[350px] right-[-140px] hidden 2xl:block"
            />
            <Image
              src="/images/iconactive9.png"
              width="91px"
              height="177px"
              className="absolute top-[-220px] right-[-80px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="w-[333px] h-[130px] rounded-[19px] py-4 sm:py-0 sm:w-[1205px] sm:h-[130px] Secondary-500 sm:rounded-[64px] border-4 border-white sm:absolute sm:top-[105px] text-center text-white px-6 sm:px-10">
          {" "}
          <p className="sm:mt-10 sm:Heading-Desktop-Heading8 Body-Mobile-Small-bold ">
            Ba mẹ vui lòng nhập đúng thông tin để SPEAKWELL liên hệ với mình
            trong thời gian sớm nhất
          </p>
          <p className="mt-2 sm:text-xl Body-Mobile-Small1">
            *Toàn bộ thông tin của phụ huynh đều được bảo mật
          </p>
        </div>
      </div>
      <div className="sm:hidden">
        <form
          className="mt-5 max-w-[333px] m-auto"
          onSubmit={form.onSubmit((value) => handleUploadData(value))}
        >
          <TextInput
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[38px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
            {...form.getInputProps("name")}
            // required
            className="mb-4"
            label="Họ và tên phụ huynh:"
            // placeholder="Họ và tên phụ huynh"
          />
          <TextInput
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[38px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
            {...form.getInputProps("phone")}
            // required
            label="Số điện thoại:"
            className="my-2"
            // placeholder="Số điện thoại"
          />
          <TextInput
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[38px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
            {...form.getInputProps("studentName")}
            className="my-2"
            label="Họ và tên học viên:"
            // placeholder="Họ và tên học viên"
          />
          <TextInput
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[38px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
            {...form.getInputProps("nam_sinh")}
            className="my-4 "
            label="Năm sinh học viên:"
            // placeholder="Năm sinh học viên"
          />
          <TextInput
            {...form.getInputProps("email")}
            label="Email:"
            type="email"
            // placeholder="Email"
            className="my-2"
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[38px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
          />
          <Textarea
            classNames={{
              label: "Body-Mobile-Small-Bold text-ct-primary-1000",
              input: "h-[120px] mt-2 bg-ct2-neutral-06 rounded-[10px] border-2",
            }}
            {...form.getInputProps("note")}
            className="my-2"
            // placeholder="Lời nhắn cho SpeakWell"
            label="Lời nhắn cho SpeakWell:"
          />
          <div className="w-[232px] h-[46px] m-auto mt-6">
            <div className="flex justify-center">
              <button
                type="submit"
                className="Button-Desktop-Medium text-ct-primary-1000 border-2 border-white flex bg-ct-tertiary-500 p-2 px-4 rounded-[50px]"
              >
                <span className="mr-2">Đăng ký ngay</span>{" "}
                <ArrowCircleRight size="24" color="#0056B8" />
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex justify-center ">
        <div className="Rectangle-27 absolute top-[303px] min-w-[1233px] h-[598px] hidden sm:block">
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
