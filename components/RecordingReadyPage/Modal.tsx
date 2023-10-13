import React from 'react'
import Image from 'next/image'

interface ModalProps {
  setShowModal: (showModal: boolean) => void
  email: string
}

const Modal: React.FC<ModalProps> = ({ setShowModal, email }) => {
  return (
    <div className="w-full h-full absolute top-0">
      <div className="w-full h-full relative flex justify-center items-center md:py-16 px-3 ss:px-0">
        <div
          id="modal"
          className="w-full h-auto z-[101] sm:w-[600px] bg-[#F2F4F7] rounded-[12px] ss:rounded-[24px] ss:p-[64px]"
        >
          <div className="w-full h-auto py-[48px] px-2 xs:px-5 ss:px-0 flex flex-col justify-center items-center gap-[40px]  relative">
            <Image
              src="/assets/video-repo/success-kite.svg"
              alt="success"
              width="200"
              height="200"
              className="w-[120px] h-auto md:w-[200px]"
            />
            <Image
              src="/assets/video-repo/close-circle.svg"
              alt="close-circle"
              width="32"
              height="32"
              className="absolute top-[48px] right-[32px] ss:right-[64px] cursor-pointer"
              onClick={() => setShowModal(false)}
            />
            <h2 className="font-Work-Sans text-[18px] font-[400] text-gray-400 text-center ss:mb-[64px]">
              Your video link has been sent to
              <span className="text-primary-600 font-[500]"> {email}</span>
            </h2>
            <h3 className="font-Sora font-[400] text-[18px] text-black-600 w-full text-center">
              Would you need to view this video later? Save to your account now!
            </h3>
            <button className="font-Work-Sans text-[16px] font-[500px] text-white bg-primary-600 px-[32px] py-[16px] rounded-[8px]">
              Save Video
            </button>
            <h2 className="font-Sora text-[14px] ss:text-[16px] font-[400] text-gray-400 text-center ss:mb-[64px]">
              Don’t have an account?{' '}
              <span className="text-primary-600 underline font-[600]">
                Create account
              </span>
            </h2>
          </div>
        </div>
        <div className="bg-black-400 absolute h-full w-full opacity-50" />
      </div>
    </div>
  )
}

export default Modal
