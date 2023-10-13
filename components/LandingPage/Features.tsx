import { features } from '@/data'
import Image from 'next/image'

const Features = () => {
  return (
    <div
      id="features"
      className="h-auto md:h-[766px] w-full md:px-[80px] px-3 xs:px-5 ss:px-12 container font-Sora gap-[10px] flex flex-col items-center justify-center py-[80px]"
    >
      <h1 className="text-black-600 text-[40px] font-[700] text-center mb-[8px]">
        Features
      </h1>
      <p className="text-black-100 text-[20px] font-Inter mb-[64px]">
        Key Highlights of Our Extension
      </p>
      <div className="flex items-center flex-col md:flex-row justify-between gap-[56px] w-full ">
        <div className="flex flex-col gap-[48px] w-[1/2">
          {features.map((feature) => {
            return (
              <div
                key={feature.title}
                className="flex flex-row h-auto items-start gap-[16px] "
              >
                <div className="pt-2 w-[60px] h-[60px] md:w-auto md:pt-0">
                  <div className="bg-primary-400 p-[8px] rounded-full w-auto aspect-square flex justify-center h-auto ">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className="w-[24px]"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
                <div className="h-auto flex flex-col justify-start md:w-[484px]">
                  <h2 className="font-Inter text-[20px] ss:text-[28px] text-primary-600 font-[600]">
                    {feature.title}
                  </h2>
                  <p className="text-[16px] ss:text-[20px] text-gray-400 leading-[151.43%] font-Work-Sans">
                    {feature.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div>
          <Image
            src="/assets/home/Video-Repository.svg"
            alt="Video-Repository"
            width={20}
            height={20}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Features
