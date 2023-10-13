import { footerLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <div className="md:h-[347px] py-[98px] w-full bg-primary-600">
      <div className="container px-3 xs:px-5 ss:px-12 md:px-[80px] gap-8 md:gap-0 flex flex-col md:flex-row justify-between items-start">
        <Link href="/" className="flex gap-1 items-center">
          <Image
            src="/assets/shared/white-logo.svg"
            alt="Logo"
            width={40}
            height={40}
          />
          <h1 className=" text-h6 font-[700] font-Inter text-white">
            HelpMeOut
          </h1>
        </Link>
        <div className="flex flex-col ss:flex-row w-full md:w-auto ss:justify-between md:flex-row gap-[60px] md:gap-[220px] ">
          {footerLinks.map((item) => {
            return (
              <div key={item.header} className="text-white text-[16px] ">
                <h2 className="font-Sora font-[600] mb-[26px]">
                  {item.header}
                </h2>
                <div className="font-Work-Sans flex flex-col gap-[12px] md:gap-[24px]">
                  <Link href={item.links.link1.href}>
                    {item.links.link1.title}
                  </Link>
                  <Link href={item.links.link2.href}>
                    {item.links.link2.title}
                  </Link>
                  <Link href={item.links.link3.href}>
                    {item.links.link3.title}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Footer
