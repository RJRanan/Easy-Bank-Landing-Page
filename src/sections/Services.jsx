import Cards from "../components/Cards";
import { services } from "../constant";

const Services = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center py-20 px-40 bg-light-grayish-blue gap-20">
      <div className="  w-full ">
        <div className="flex flex-col gap-8">
          <h1 className="text-dark-blue">Why choose Easybank?</h1>
          <p className="text-grayish-blue">
            We leverage Open Banking to turn your bank account into your
            financial hub. <br /> Control your finances like never before.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-between w-full gap-10">
        {services.map((service) => (
          <div key={service.id}>
            <Cards
              iconURL={service.iconURL}
              label={service.label}
              caption={service.caption}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
