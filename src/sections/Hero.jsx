import introDesktop from "../assets/images/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <section
      className="bg-white flex flex-col justify-center  items-start px-48 bg-no-repeat bg-right h-screen "
      style={{ backgroundImage: `url(${introDesktop})` }}
    >
      <div className="absolute left-52 right-0  grid gap-6">
        <h1 className="text-dark-blue">
          Next generation <br /> digital banking
        </h1>
        <h4 className="text-grayish-blue text-justify text-xl ">
          Take your financial life online. Your Easybank account <br />
          will be a one-stop for spending, saving, <br /> budgeting, investing,
          and much more.
        </h4>
        <button className="text-white text-md font-medium bg-gradient-to-r from-lime-green to-bright-cyan md:py-2 px-4 w-40 rounded-full cursor-pointer ">
          Request Invite
        </button>
      </div>
    </section>
  );
};

export default Hero;
