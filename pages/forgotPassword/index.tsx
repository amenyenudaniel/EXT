import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

interface User {
  uid: string
  email: string | null
  displayName: string | null
}

const ForgotPassword: React.FC = () => {
  const [userExist, setUserExist] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [message, setMessage] = useState<boolean | string>(false)

  const history = useRouter()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [password2, setPassword2] = useState<string>('')
  const [err, setErr] = useState<boolean>(false)
  const errMsg = 'Passwords do not match'

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUsername(value)
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
  }

  const handlePassChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword2(value)
    if (password !== value) {
      setErr(true)
    } else {
      setErr(false)
    }
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = { username, password }
    try {
      const response = await fetch(
        'https://www.cofucan.tech/srce/api/change_password/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      )

      console.log(response)
      const result = await response.json()
      console.log(result)
      if (result.status_code === 200) {
        console.log('Password Changed Successfully!')
        toast.success('Password Changed Successfully', {
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
        history.push('/videos')
        // You can handle success here, e.g., redirect to a success page
      } else {
        console.error('Password Change failed', result.message)
        toast.error(`Password Change failed`, {
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
        // Handle the error, show an error message, etc.
      }
    } catch (error) {
      console.error('An error occurred:', error)
      toast.error(`Error: ${error}`, {
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

  return (
    <section className="px-[1rem] xs:px-[10%] py-[3rem] md-px[2rem] md-py[2.5rem] ">
      <Link
        href={'/'}
        className="flex items-center gap-[10px] cursor-pointer mb-[2rem]"
      >
        <Image
          src={'/assets/shared/logo.svg'}
          alt="logo"
          width={40}
          height={40}
        />
        <h3 className="font-Sora font-bold">HelpMeOut</h3>
      </Link>

      <div className="flex flex-col justify-center items-center">
        <section className="mt-[2rem] flex flex-col items-center mb-[2rem]">
          <h1 className="text-primary-400 font-semibold font-Sora text-[32px] mb-[8px] tracking-wide">
            Forgot Password?
          </h1>
          <p className="text-primary-300 text-center text-[15px] font-Work-Sans font-medium tracking-tight mb-[32px]">
            Enter a new password to continue
          </p>
        </section>
        <form
          className="flex flex-col w-full ss:w-[475px]"
          onSubmit={handleSubmit}
        >
          <div>
            <p className="text-[16px] font-Sora font-medium mb-[14px]">
              Username
            </p>
            <input
              type="text"
              placeholder="Enter your username"
              required
              value={username}
              onChange={handleNameChange}
              className="w-full h-[50px] rounded-lg border-2 border-solid border-black-400 outline-none pl-[1rem] mb-[1rem] font-Sora font-medium text-[14px] xs:text-[16px]"
            />
          </div>
          <div>
            <p className="text-[16px] font-Sora font-medium mb-[14px]">
              New Password
            </p>
            <input
              type="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={handlePassChange}
              minLength={5}
              className="w-full h-[50px] rounded-lg border-2 border-solid border-black-400 outline-none pl-[1rem] mb-[1rem] font-Sora font-medium text-[14px] xs:text-[16px]"
            />
          </div>

          <div>
            <p className="text-[16px] font-Sora font-medium mb-[14px]">
              Confirm Password
            </p>
            <input
              type="password"
              placeholder="Enter your Password"
              required
              value={password2}
              onChange={handlePassChange2}
              minLength={5}
              className="w-full h-[50px] rounded-lg border-2 border-solid border-black-400 outline-none pl-[1rem] mb-[1rem] font-Sora font-medium text-[14px] xs:text-[16px]"
            />
          </div>
          {err && (
            <p className="text-[16px] text-red-400 font-Sora font-medium mb-[14px]">
              {errMsg}
            </p>
          )}
          <button
            // onClick={login}
            className="mt-[1rem] input__tag border-2 border-primary-600 rounded-md h-[50px] hover:btn-hover font-Sora text-[16px]  text-[14px] xs:text-[16px] bg-primary-600 text-white "
          >
            Update Password
          </button>

          {message && (
            <p className="mt-[0.5rem] text-center text-[19px] font-semibold">
              {message}
            </p>
          )}
          <h2 className="mt-[1rem] text-center text-[16px] text-primary-400 tracker-medium font-semibold font-Work-Sans">
            Don&apos;t Have Account?{' '}
            <Link href={'/signUp'}>
              <span className="font-bold hover:underline cursor-pointer font-Work-Sans">
                Sign Up
              </span>
            </Link>
          </h2>
        </form>
      </div>
      <ToastContainer
        position="top-center" // Position the toast container at the bottom-center
        autoClose={1500} // Close after 3 seconds (adjust as needed)
        style={{
          width: 'fit-content', // Adjust the width as needed
          textAlign: 'center', // Center-align the container's content
        }}
      />
    </section>
  )
}

export default ForgotPassword
