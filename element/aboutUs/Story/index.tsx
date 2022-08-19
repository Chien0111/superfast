import { Image } from "@mantine/core";

const Story = () => {
  return (
    <div>
      <div className="p-10">
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 w-full">
            <Image
              classNames={{ image: " p-2 hover:opacity-70" }}
              radius={15}
              className={`rounded-md `}
              src="/images/about-01.jpg"
              width="full"
              height="auto"
              alt="img"
            />
          </div>
          <div className="lg:w-1/2 w-full text-center p-2">
            <h3 className="text-ct-secondary-02">What we are</h3>
            <h1 className="text-ct-primary-05 font-bold text-4xl mb-6">
              Welcome to the best playschool
            </h1>
            <p className="text-ct-neutral-04 font-normal">
              A Pre-School is your child’s first experience away from you. To
              ensure, that this transition from home to school is a smooth
              process, we have Buddy, your child’s Fun Partner at EuroKids
              Pre-School.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center">
          <div className="lg:w-1/2 w-full text-center p-2">
            <h3 className="text-ct-secondary-02">What we are</h3>
            <h1 className="text-ct-primary-05 font-bold text-4xl mb-6">
              Child development & education
            </h1>
            <p className="text-ct-neutral-04 font-normal">
              With years of dedicated research, Kidzee has set unparalleled
              standards in the CDE (Child Development & Education) space. Having
              acknowledged the uniqueness of each child and their infinite
              potential. Kidzee has is its proprietary pedagogy
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Image
              classNames={{ image: " p-2 hover:opacity-70" }}
              radius={15}
              className={`rounded-md `}
              src="/images/Banner 11.jpg"
              width="full"
              height="auto"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
