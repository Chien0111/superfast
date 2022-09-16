import { TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ArrowCircleRight } from "iconsax-react";
import { useState } from "react";

const Subscribe = () => {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  const [email, setEmail] = useState("");
  const handleUploadData = () => {
    const result = email.match(regexEmail);
    if (result != null) {
      fetch("https://api-contact.hocmaidev.tk/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            showNotification({
              title: "Thành công",
              message: "Chúng tôi sẽ phản hồi trong thời gian sớm nhất!",
              color: "teal",
            });
            setEmail("");
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
    } else {
      showNotification({
        title: "Đã có lỗi",
        message: "Vui lòng nhập đầy đủ email!",
        color: "red",
      });
    }
  };
  return (
    <div className="w-full bg-ct-secondary-500">
      <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col lg:flex-row items-center z-10 pb-2">
        <div className="text-ct-white text-center lg:text-left font-bold text-4xl pt-2 lg:pt-0 lg:ml-20 md:w-1/3 flex justify-center lg:justify-end">
          <h1 className="uppercase Heading-Desktop-Heading7 lg:Heading-Desktop-Heading5 text-white ">
            Nhận thông tin mới nhất
          </h1>
        </div>
        <div className="flex lg:p-6 pt-3 px-4 md:w-3/5 w-full">
          <TextInput
            required
            type="email"
            className="lg:w-4/5 h-11 w-full"
            radius={49}
            placeholder="Enter your e-mail ..."
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rightSection={
              <ArrowCircleRight
                size="32"
                color="currentColor"
                className="text-ct-secondary-300 pr-2"
                onClick={handleUploadData}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
