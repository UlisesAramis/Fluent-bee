import ButtonBee from "../ui/ButtonBee";

const FreeTrail = () => {
  return (
    <div className="bg-white flex  justify-center items-center py-5">
      <div className="text-center flex flex-col items-center">
        <h1 className="uppercase text-2xl text-black font-bold">
          Unlock Your Free Trial
        </h1>
        <p className="text-1xl text-black">
          Sign Up Now and Explore Our Platform!
        </p>

        <ButtonBee className="mt-4 w-52">GO!</ButtonBee>
      </div>
    </div>
  );
};

export default FreeTrail;
