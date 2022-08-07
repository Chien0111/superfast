import { Input,Image, Button, TextInput ,NumberInput,Textarea} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import * as Yup from "yup";

const GetinTouch = () => {
    const data = [
        {
            img: '/images/Banner 11.jpg',
            name: 'Chien',
            work: 'Senior Marketing Manager',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
        {
            img: '/images/Banner 11.jpg',
            name: 'Hung',
            work: 'Senior Marketing Manager',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
        {
            img: '/images/Banner 11.jpg',
            name: 'Hưng',
            work: 'Senior Marketing Manager',
            phone: '+ 844 123 456 78 90',
            email: 'contact@example.com'
        },
    ]
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
      })
      .catch((err) => {
        showNotification({
          title: "Thất bại",
          message: "Đã xảy ra lỗi, Vui lỏng thử lại sau!",
          color: "red",
        });
      });
  };
    return(
        <div className="lg:flex max-w-[1200px] m-auto">
            <div className="lg:w-3/5 p-10">
            <div>
                <h2 className="w-full font-bold text-[15px] mb-4 text-ct-primary-01">
                Vui lòng nhập chính xác các thông tin dưới đây để thuận tiện cho SPEAKWEll liên hệ lại với bạn, toàn bộ thông tin của bạn sẽ được bảo mật
                </h2>
            </div>
            <div className="text-center lg:text-start">
            <form onSubmit={form.onSubmit((value) => handleUploadData(value))}>
               <div className="flex">
          <TextInput
            {...form.getInputProps("name")}
            className="grow mr-4 "
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
            </div>
            </div>
            <div className="lg:w-2/5 mt-20">
                {data.map((item: any) => {
                    console.log(item);
                    
                    return <Contact data={item}/>
                })}
            </div>
        </div>
    );
};

const Contact = ({data}: any) => {
    return(
        <div className="px-10">
        <div className="flex items-center p-2">
            <Image
            classNames={{
                image:`w-full hover:opacity-70`,
                imageWrapper: 'w-full'}} 
            radius={999}
            src={data.img}
            width='100px'
            height='100px'
            alt="img"
            />
            <div className="mx-5">
            <h2 className="font-bold text-[20px] mb-4 text-ct-primary-01">
            {data.name}
            </h2>
            <span>{data.work}</span> <br />
            <span>Phone: {data.phone}</span> <br />
            <span>Email: {data.email}</span> <br />
            </div>
        </div>
        </div>
    )
}

export default GetinTouch;