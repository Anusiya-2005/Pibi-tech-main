import Marquee from "react-fast-marquee";
import Image from "next/image";
const Slider = () => {
  return (
    <div>
      <Marquee
        speed={30}
        direction="left"
        style={{
          position: "relative",
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {[...Array(9)].map((_, index) => (
          <div className="flex flex-row items-center justify-center gap-4 mx-4">
            <Image
              src={`/${index + 1}.png`}
              alt="Partner 1"
              width={200}
              height={200}
              className="md:mr-6 mr-0 w-28 md:w-32 mx-4 object-fit brightness-0 contrast-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
