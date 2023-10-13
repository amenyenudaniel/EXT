import Image from "next/image";
import { howItWorks } from "@/data";

const HowItWorks = () => {
  return (
    <div id='how'
    className="h-auto md:h-[897px] w-full px-3 xs:px-5 ss:px-12 container md:px-[80px] py-10  font-Sora gap-[10px] flex flex-col items-center justify-center pt-[103px]">
      <h1 className="text-black-600 text-[40px] font-[700] text-center mb-[58px]">
        How it works
      </h1>
      <div className="flex flex-col md:flex-row gap-[36px] md:gap-[83px] text-white">
        {howItWorks.map((item, index) => {
          return (
            <div
              key={item.title}
              className="flex flex-col justify-center items-center"
            >
              <div className="bg-primary-600 p-[8px] rounded-full w-[67px] h-[67px] flex items-center mb-[32px] justify-center text-[32px] font-[700] font-Inter">
                {index + 1}
              </div>
              <div className="text-center w-full">
                <h2 className="font-Inter text-[20px] md:text-[28px] text-primary-600 font-[600] mb-[16px]">
                  {item.title}
                </h2>
                <p className="text-[16px] md:text-[20px] text-gray-400 leading-[151.43%] font-Work-Sans mb-[28px]">
                  {item.desc}
                </p>
              </div>
              <Image src={item.image} alt="vector" width='200' height={200} className="w-full h-auto"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;