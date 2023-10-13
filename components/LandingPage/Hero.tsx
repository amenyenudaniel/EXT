import Image from 'next/image'
const Hero = () => {
  return (
    <div
      className="h-auto regular:h-[777px] md:h-[577px] w-full md:px-[80px] px-4 xs:px-5 ss:px-12 container font-Sora md:justify-between 
     flex flex-col py-32 md:py-0  md:flex-row items-center justify-center ss:gap-32 gap-20 md:gap-0"
    >
      <div className="sm:w-auto sm:[448px] lg:w-[548px] flex justify-start">
        <div className="sm:w-[448px] lg:w-[548px] h-auto">
          <h1 className="lg:text-h2 text-[40px] ss:text-[48px] text-center md:text-left text-black-600 leading-[100%] font-[700] mb-[20px]">
            Show Them Don’t Just Tell
          </h1>
          <p className="text-black-100 text-[20px] text-center md:text-left font-Inter mb-[48px]">
            {' '}
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            {' '}
            <a
              href="https://drive.google.com/file/d/1t2mgIO4mYdZwI2Ex41Sqz-iWuWUPKUnc/view?usp=drive_link"
              className="px-[24px] py-[22px] bg-primary-600 rounded-[8px] flex items-center gap-[10px] text-pastel-bg text-[18px]"
            >
              {' '}
              <p>Install HelpMeOut</p>
              <Image
                src="/assets/home/arrow-right.svg"
                alt="arrow-right"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>{' '}
      <div className="w-full h-auto flex flex-row gap-3 md:gap-[20px] ss:px-[40px] relative">
        <div className="hidden ss:flex">
          <Image
            src="/assets/home/grey-grid.svg"
            alt=""
            className="absolute right-[11px] z-[1] top-[-35px]"
            width={200}
            height={200}
          />
          <Image
            src="/assets/home/blue-grid.svg"
            alt=""
            className="absolute left-[16px] z-[1] bottom-[-53px]"
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-0  justify-between z-[2]">
          <Image
            src="/assets/home/hero (2).png"
            alt="Woman"
            className="rounded-[8px]"
            width={1000}
            height={1000}
          />
          <Image
            src="/assets/home/hero (3).png"
            alt="man"
            className="rounded-[8px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="z-[2] ">
          <Image
            src="/assets/home/hero (1).png"
            alt="woman-using-smartphone"
            className="rounded-[8px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}
export default Hero
