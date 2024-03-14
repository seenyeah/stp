import { skyBg, homePark } from "../assets";

const Hero = () => {
  return (
    <section className="overflow-hidden pt-0 pb-4 md:pb-14 mt-0 mb-0 bg-white text-tertiary relative z-[20] border-b border-gray-200">
      <div className="">
        <div className="relative aspect-[1440/2800] overflow-hidden sm:aspect-[1440/1220] lg:aspect-[1440/920]">
          <div className="absolute inset-0 w-full transform-none">
            <img
              alt="sky"
              className="mt-[-20px] w-full object-cover bg-transparent"
              src={skyBg}
            />
          </div>

          <div className="pointer-events-none absolute bottom-0 w-full">
            <div className="flex justify-center sm:block transform-none">
              <img
                alt="park"
                className="w-[210%] max-w-none sm:w-full sm:max-w-full bg-transparent"
                src={homePark}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
