import { Image, TextInput } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { ArrowCircleRight2 } from "iconsax-react";
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
    <div className="w-full h-[240px] bg-ct-solid-red-01 relative">
      <div className="max-w-[1200px] mx-auto w-full h-full flex flex-col lg:flex-row items-center relative z-10">
        <div className="text-ct-white text-center lg:text-left font-bold text-4xl pt-2 lg:pt-0 lg:ml-20 md:w-1/3 flex justify-center">
          <h1>Nhận thông tin mới nhất</h1>
        </div>
        <div className="flex p-6 md:w-3/5 w-full">
          <TextInput
            required
            type="email"
            className="w-4/5"
            classNames={{
              input:
                "w-full h-full p-6 py-10 rounded-l-lg rounded-r-none border-none",
              wrapper: "border-none w-full",
            }}
            placeholder="Enter your e-mail ..."
            size="xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleUploadData}
            className="bg-ct-white p-6 hover:text-ct-secondary-02 font-semibold rounded-r-lg flex justify-center items-center"
          >
            <span>
              Subscribe
              <div className="flex justify-center">
                <ArrowCircleRight2 size="32" />
              </div>
            </span>
          </button>
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0 hidden md:block z-[1]"
        src="images/footer-bg2.png"
        width={300}
        height="auto"
        alt="img"
      />
    </div>
  );
};

export default Subscribe;
