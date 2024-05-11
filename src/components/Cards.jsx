// eslint-disable-next-line react/prop-types
const Cards = ({ iconURL, label, caption }) => {
  return (
    <div className="flex flex-col gap-8 w-[300px] justify-center ">
      <img src={iconURL} className="rounded-full h-20 w-20" alt="" />

      <h4 className="text-dark-blue text-2xl">{label}</h4>
      <p className="text-grayish-blue text-lg text-wrap">{caption}</p>
    </div>
  );
};

export default Cards;
