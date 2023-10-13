import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { VideoPageContentProps } from '@/types/video-repo'
import { Share } from '../SingleViewPage/share'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VideoInfo: React.FC<VideoPageContentProps> = ({
  displayModal,
  videoID,
  setEmail,
  email,
}) => {
  // to get the videoID
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const router = useRouter();

  // useEffect(() => {
  //   const currentVideoID = videoID || (router.query.videoID as string);
  //   if (currentVideoID && videoRef.current) {
  //     videoRef.current.src = `http://web-02.cofucan.tech/srce/api/video/stream/${currentVideoID}`;
  //   }
  // }, [videoID, router.query.videoID]);

  //custom file name
  const [customFileName, setCustomFileName] = useState('')
  const placeHolder = `Untitled_Video_${videoID}`

  //get current window/tab url
  const [currentURL, setCurrentURL] = useState<string>('')

  //copy the url using COPY btn
  const [clicked, setClicked] = useState<boolean>(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentURL)
    setClicked(true)
    setTimeout(() => {
      setClicked(false)
    }, 3000)
  }

  useEffect(() => {
    setCurrentURL(window.location.href)
  }, [])

  const [error, setError] = useState<boolean>(false)
  const isEmailValid = (mail: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(mail)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const valid = isEmailValid(email)
    if (!valid) {
      setError(true)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 3000)
    } else {
      try {
        const response = await fetch(`https://www.cofucan.tech/srce/api/send-email/${videoID}?receipient=${email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (response.status === 200) {
          const result = await response.json()
          console.log(response)
          console.log(result.message)
          toast.success(`${result.message}`, {
            style: {
              background: 'white', // Change the background color as needed
              color: 'green', // Change the text color as needed
              borderRadius: '8px', // Rounded corners for the toast
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
              padding: '12px 24px', // Adjust padding as needed
              fontSize: '16px', // Adjust font size as needed
              textAlign: 'center',
            },
          })
          displayModal()
        } else {
          toast.error(`Unable to send to Email!`, {
            style: {
              background: 'white', // Change the background color as needed
              color: 'red', // Change the text color as needed
              borderRadius: '8px', // Rounded corners for the toast
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
              padding: '12px 24px', // Adjust padding as needed
              fontSize: '16px', // Adjust font size as needed
              textAlign: 'center',
            },
          })
        }
      } catch (error) {
        toast.error(`${error}`, {
          style: {
            background: 'white', // Change the background color as needed
            color: 'red', // Change the text color as needed
            borderRadius: '8px', // Rounded corners for the toast
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
            padding: '12px 24px', // Adjust padding as needed
            fontSize: '16px', // Adjust font size as needed
            textAlign: 'center',
          },
        })
      }
    }
  }

  return (
    <div className="hidden ss:flex flex-col items-start ss:gap-[36px] md:gap-[64px] w-full md:w-[1/2]">
      {/* Header */}
      <div className="w-full">
        <h2 className="text-black-600 text-[32px] xs:text-[45px] font-[700] mb-[48px]">
          Your video is ready!
        </h2>
        {/* Name container */}
        <div className="w-full">
          <h4 className="text-[16px] text-gray-400 mb-[9px]">Name:</h4>
          <div className="flex items-center justify-between w-full">
            <input
              type="text"
              placeholder={placeHolder}
              value={customFileName}
              onChange={(e) => setCustomFileName(e.target.value)}
              className="border-none outline-none rounded-md p-2 mb-2 w-full text-[13px] xs:text-[16px] ss:text-[24px] text-primary-400 font-[600]"
            />
            <Image
              className="w-[16px] h-auto xs:h-[32px] xs:w-[32px]"
              src="/assets/video-repo/edit.svg"
              alt="edit"
              width="32"
              height="32"
            />
          </div>
        </div>
      </div>
      {/* Email input and send button */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="py-[12px] mb-[12px] px-[10px] xs:px-[24px] bg-primary-50 rounded-[16px] h-[64px] w-full flex items-center justify-between"
        >
          <input
            type="email"
            name="receiverEmail"
            placeholder="Enter email of receiver"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black-400 text-[13px] xs:text-[16px] ss:text-[18px] font-[400] w-full bg-transparent outline-none"
          />
          <button className="xs:px-[18px] px-[10px] py-[10px] cursor-pointer text-[13px] xs:text-[16px] rounded-[8px] bg-primary-400 text-pastel-bg font-Work-Sans">
            Send
          </button>
        </form>
        <div className="h-[20px]">
          <p
            className={`${error ? 'flex' : 'hidden'} text-[#FF0000] font-[500]`}
          >
            Email form cannot be empty!
          </p>
        </div>
      </div>
      {/* Video URL */}
      <div className="w-full pt-[12px]">
        <h2 className="text-black-600 font-Sora text-[20px] mb-[16px] font-[600] ">
          Video Url
        </h2>
        <div className="w-full">
          <div className="py-[12px] mb-[12px] md:px-[12px] px-[12px] border-[1px] border-primary-200 rounded-[16px] h-[64px] w-full flex items-center gap-2 justify-between">
            <p className="text-black-400 text-[14px] ss:w-full w-[150px]  xs:w-[250px] ss:text-[16px] font-[400] leading-[24.8px] font-Work-Sans overflow-x-hidden">
              {currentURL}
            </p>
            <div
              onClick={copyToClipboard}
              className={`w-[104px] py-[10px] rounded-[8px] border-[1px]  font-[500] flex justify-center 
            items-center gap-[8px]  font-Work-Sans cursor-pointer 
                border-primary-400 text-primary-600 `}
            >
              <Image
                src="/assets/video-repo/copy.svg"
                alt=""
                width="20"
                height="20"
              />
              <h3>Copy</h3>
            </div>
          </div>
          <div className="h-[20px]">
            <p
              className={`${clicked ? 'flex' : 'hidden'
                } font-[500] text-primary-600`}
            >
              Copied!
            </p>
          </div>
        </div>
      </div>
      {/* Share options */}
      <Share text='#' />
      <ToastContainer
        position="top-center" // Position the toast container at the bottom-center
        autoClose={1500} // Close after 3 seconds (adjust as needed)
        style={{
          width: 'fit-content', // Adjust the width as needed
          textAlign: 'center', // Center-align the container's content
        }}
      />
    </div>
  )
}

export default VideoInfo
