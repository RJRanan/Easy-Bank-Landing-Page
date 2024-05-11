import { introDesktop } from "../assets/images";

const Hero = () => {
  return (
    <section className="flex mt-0 px-10">
      <div className="flex w-full justify-center items-center">
        <div className="flex-col">
          <h1>Next generation digital banking</h1>
          <h4>
            Take your financial life online. Your Easybank account will be a
            one-stop for spending, saving, budgeting, investing, and much more.
          </h4>
          <div className="md:block hidden">
            <button className="text-white text-md font-medium bg-gradient-to-r from-lime-green to-bright-cyan md:py-2 px-4 rounded-full cursor-pointer ">
              Request Invite
            </button>
          </div>
        </div>

        <div>
          <img
            src={introDesktop}
            className="object-fill absolute right-0  top-0 -z-20"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
