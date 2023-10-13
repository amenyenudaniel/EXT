import React, { useRef, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { VideoPageContentProps } from '@/types/video-repo'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VideoContentMobile: React.FC<VideoPageContentProps> = ({
  displayModal,
  videoID,
  email,
  setEmail,
}) => {
  // to get the videoID
  const videoRef = useRef<HTMLVideoElement>(null)
  const router = useRouter()

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

  useEffect(() => {
    const currentVideoID = videoID || (router.query.videoID as string)
    if (currentVideoID && videoRef.current) {
      videoRef.current.src = `https://www.cofucan.tech/srce/api/video/${videoID}.mp4`
    }
  }, [videoID, router.query.videoID])

  const [error, setError] = useState<boolean>(false)
  const isEmailValid = (mail: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailRegex.test(mail)
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
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
    <div className="w-full h-auto block ss:hidden">
      {/* Name container */}
      <h4 className="text-[16px] text-gray-400 mb-[9px]">Name:</h4>
      <div className="flex items-center w-full justify-between gap-[24px] mb-[12px]">
        <input
          type="text"
          placeholder={placeHolder}
          value={customFileName}
          onChange={(e) => setCustomFileName(e.target.value)}
          className="border-none outline-none rounded-md p-2 mb-2 w-full text-[13px] xs:text-[16px] ss:text-[24px] text-primary-400 font-[600]"
        />
        <Image
          className="w-[16px] h-auto xs:h-[24px] xs:w-[24px]"
          src="/assets/video-repo/edit.svg"
          alt="edit"
          width="32"
          height="32"
        />
      </div>

      {/* Video demo */}
      {videoID ? (
        <video
          ref={videoRef}
          controls
          className="w-full h-full mb-[24px] rounded-lg"
        >
          <source type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="w-full h-full mb-10">
          <Image
            src="/assets/video-repo/video-demo.svg"
            alt="demo"
            width="200"
            height={200}
            className="w-full h-full"
          />
        </div>
      )}
      {/* Email input and send button */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="py-[12px] mb-[12px] px-[8px] bg-primary-50 rounded-[12px] h-[64px] w-full flex items-center justify-between"
        >
          <input
            type="email"
            name="receiverEmail"
            placeholder="Enter email of receiver"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-black-400 text-[13px] xs:text-[16px] ss:text-[18px] font-[400] w-full bg-transparent outline-none"
          />
          <button type='submit' className="xs:px-[18px] px-[10px] py-[10px] cursor-pointer text-[13px] xs:text-[16px] rounded-[8px] bg-primary-400 text-pastel-bg font-Work-Sans">
            Send
          </button>
        </form>
        <div className="h-[20px] mb-[12px]">
          <p className={`${error ? 'flex' : 'hidden'} text-[#FF0000]`}>
            Email form cannot be empty!
          </p>
        </div>
      </div>
      <h2 className="font-Work-Sans mb-[12px] text-[14px] font-[400] text-gray-400 text-center ss:mb-[64px]">
        Your video to johnmark@gmail.com is now ready.
        <span className="text-primary-600 font-[500] underline">
          {' '}
          Not the receiver?
        </span>
      </h2>
      {/* Share options */}
      <div className="mt-[44px] flex flex-wrap gap-3 items-center">
        <div
          onClick={copyToClipboard}
          className={`w-[177px] py-[10px] rounded-[8px] border-[1px] border-primary-400 font-[500] 
          flex justify-center items-center gap-[8px] text-primary-600 font-Work-Sans cursor-pointer $`}
        >
          <Image
            src="/assets/video-repo/copy.svg"
            alt=""
            width="20"
            height="20"
          />
          <h3>Copy video link</h3>
        </div>
        <div className="w-auto flex gap-2">
          <a href="https://api.whatsapp.com/send?text=">
            <Image
              src="/assets/video-repo/whatsapp.svg"
              alt="whatsapp"
              width="40"
              height="40"
            />
          </a>
          <a href="https://t.me/share/url?url=">
            <Image
              src="/assets/video-repo/telegram.svg"
              alt="telegram"
              width="40"
              height="40"
            />
          </a>
          <a href="https://www.facebook.com/sharer/sharer.php?u=">
            <Image
              src="/assets/login/Facebook.svg"
              alt="facebook"
              width="40"
              height="40"
            />
          </a>
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

export default VideoContentMobile
