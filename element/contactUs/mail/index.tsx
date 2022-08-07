import { Input,Image, Button } from "@mantine/core";

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
    return(
        <div className="lg:flex max-w-[1200px] m-auto">
            <div className="lg:w-3/5 p-10">
            <div>
                <h2 className="w-full font-bold text-[15px] mb-4 text-ct-primary-01">
                Vui lòng nhập chính xác các thông tin dưới đây để thuận tiện cho SPEAKWEll liên hệ lại với bạn, toàn bộ thông tin của bạn sẽ được bảo mật
                </h2>
            </div>
            <div className="text-center lg:text-start">
                <div className="flex">
                    <div className="w-1/2 mr-5">
                        <Input.Wrapper  label="Họ tên của phụ huynh" required>
                            <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Họ tên của phụ huynh" />
                        </Input.Wrapper>
                    </div>
                    <div className="w-1/2 mr-5">
                        <Input.Wrapper  label="Số điện thoại" required>
                            <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Số điện thoại" />
                        </Input.Wrapper>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 mr-5">
                        <Input.Wrapper  label="Email" required>
                            <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Email của bạn" />
                        </Input.Wrapper>
                    </div>
                    <div className="w-1/2 mr-5">
                        <Input.Wrapper  label="Họ tên học viên" required>
                            <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Họ tên học viên" />
                        </Input.Wrapper>
                    </div>
                </div>
                <div className=" mr-5">
                        <Input.Wrapper  label="Năm sinh học viên" required>
                            <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Năm sinh học viên" />
                        </Input.Wrapper>
                    </div>
                <div>
                    <Input.Wrapper className="mr-5"  label="Lời nhắn của Speak Well" required>
                        <Input classNames={{
                                input: 'p-8 '
                            }} placeholder="Lời nhắn của Speak Well" />
                    </Input.Wrapper>
                </div >
                    <Button className="bg-ct-primary-01 text-white mt-5">
                        Đăng ký ngay
                    </Button>
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