import React from 'react'
import Image from "next/image";

export const Share = ({ text }:{text:string}) => {
    //share options
    const share = [
      {
        id: 1,
        name: "Facebook",
        logo: <Image src="/assets/login/Facebook.svg" alt="facebook" width={20} height={20} />,
        href: "https://www.facebook.com/sharer/sharer.php?u=",
      },
      {
        id: 2,
        name: "Whatsapp",
        logo: <Image src="/assets/video-repo/whatsapp.svg" alt="whatsapp" width={20} height={20} />,
        href: "https://api.whatsapp.com/send?text=",
      },
      {
        id: 3,
        name: "Telegram",
        logo: <Image src="/assets/video-repo/telegram.svg" alt="telegram" width={20} height={20} />,
        href: "https://t.me/share/url?url=",
      },
    ];
  
    return (
      <div className='mt-10 mb-20'>
        <h6 className="mb-1 font-Work-Sans text-[20px] font-[500] text-primary-600">Share your video</h6>
        <div className={`flex flex-wrap gap-4 justify-start items-center`}>
          {share.map((el) => (
            <button
              onClick={() => {
                navigator.clipboard.writeText(text);
                window.open(el.href + text, "_blank");
              }}
              key={el.id}
              className={`flex gap-2 items-center justify-center border-[1px] rounded-lg border-black-600 px-4 py-2
                ${
                  el.name === "Facebook" && "hover:bg-blue-500 hover:text-white t"
                }
                ${
                  el.name === "Whatsapp" &&
                  "hover:bg-green-300 hover:text-white t"
                }
                ${
                  el.name === "Telegram" && "hover:bg-blue-300 hover:text-white t"
                }              
                `}
            >
              {el.logo} {el.name}
            </button>
          ))}
        </div>
      </div>
    );
  };