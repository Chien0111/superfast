import { Input,Image } from "@mantine/core";

const GetinTouch = () => {
    return(
        <div className="lg:flex">
            <div className="lg:w-3/5 p-10">
            <div>
                <p className=" font-['Dancing_Script'] text-ct-secondary-02 text-[30px]">
                Get In Touch
                </p>
                <h2 className="font-bold text-[40px] mb-4 text-ct-primary-01">
                We love to hear from you
                </h2>
            </div>
            <div>
            <div className="flex">
                <div className="w-1/2 mr-5">
                    <Input.Wrapper  label="Your Name" required>
                        <Input classNames={{
                            input: 'p-8 '
                        }} placeholder="Your Name" />
                    </Input.Wrapper>
                </div>
                <div className="w-1/2 mr-5">
                    <Input.Wrapper  label="Your Email" required>
                        <Input classNames={{
                            input: 'p-8 '
                        }} placeholder="Your Email" />
                    </Input.Wrapper>
                </div>
            </div>
            <div className="flex">
                <div className="w-1/2 mr-5">
                    <Input.Wrapper  label="Your Phone" required>
                        <Input classNames={{
                            input: 'p-8 '
                        }} placeholder="Your Phone" />
                    </Input.Wrapper>
                </div>
                <div className="w-1/2 mr-5">
                    <Input.Wrapper  label="Subject" required>
                        <Input classNames={{
                            input: 'p-8 '
                        }} placeholder="Subject" />
                    </Input.Wrapper>
                </div>
            </div>
            <div>
                <Input.Wrapper className="mr-5"  label="Your Message" required>
                    <Input classNames={{
                            input: 'p-8 '
                        }} placeholder="Your Message" />
                </Input.Wrapper>
            </div>
            </div>
            </div>
            <div className="lg:w-2/5 mt-20">
<Contact/>
<Contact/>
<Contact/>
            </div>
        </div>
    );
};

const Contact = () => {
    return(
        <div className="px-10">
        <div className="lg:flex items-center p-2">
            <Image
            classNames={{
                image:`w-full hover:opacity-70`,
                imageWrapper: 'w-full'}} 
            radius={999}
            className={` `}
            src="/images/about-01.jpg"
            width='100px'
            height='100px'
            alt="img"
            />
            <div className="mx-5">
            <h2 className="font-bold text-[20px] mb-4 text-ct-primary-01">
            John Doe
            </h2>
            <span>Senior Marketing Manager</span> <br />
            <span>Phone: + 844 123 444 77 88</span> <br />
            <span>Email: contact@example.com</span> <br />
            </div>
        </div>
        </div>
    )
}

export default GetinTouch;