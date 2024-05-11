import introDesktop from "../assets/images/bg-intro-desktop.svg";

const Hero = () => {
  return (
    <section
      className="flex-col w-full justify-center items-center mt-0 px-10 bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${introDesktop})` }}
    ></section>
  );
};

export default Hero;

// <h1>Next generation digital banking</h1>
// <h4>
//   Take your financial life online. Your Easybank account will be a
//   one-stop for spending, saving, budgeting, investing, and much more.
// </h4>

// <button className="text-white text-md font-medium bg-gradient-to-r from-lime-green to-bright-cyan md:py-2 px-4 rounded-full cursor-pointer ">
//   Request Invite
// </button>
