import React, { useState, useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  auth,
  facebookProvider,
  googleProvider,
} from '../../components/Auth/firebase'
import { signInWithPopup } from 'firebase/auth'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import { GlobalContext } from '@/context/GlobalContext'

const LogIn: React.FC = () => {
  const [userExist, setUserExist] = useState<boolean>(false)
  const { setUser, setLogged } = useContext(GlobalContext)
  const [message, setMessage] = useState<boolean | string>(false)

  const history = useRouter()

  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setUsername(value)
    console.log(value)
  }

  const handlePassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPassword(value)
    console.log(value)
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const data = { username, password }
    try {
      const response = await fetch('https://www.cofucan.tech/srce/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      console.log(response)
      const result = await response.json()
      console.log(result)
      if (result.status_code === 200) {
        console.log('Login Successful!')
        toast.success('Welcome Back', {
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
        setLogged(true)
        localStorage.setItem('user', result.username)
        const num = Number(true)
        localStorage.setItem('logged', JSON.stringify(num))
        setUser(result.username)
        history.push('/videos')
        // You can handle success here, e.g., redirect to a success page
      } else {
        console.error('Sign-up failed with status code', result.message)
        toast.error(`Login failed`, {
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

  const loginWithGoogle = async () => {
    try {
      // Send a POST request to the logout endpoint without a request body
      const response = await fetch(
        'https://www.cofucan.tech/srce/api/google/login/',
        {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      // Check if the request was successful (status code 200)
      if (response.status === 200) {
        // Logout was successful, so update your local state
        setLogged(true)
        history.push('/videos')
      } else {
        // Handle error cases, e.g., if the API returns an error message
        console.error('Logout failed. Status code: ' + response.status)
        // You can also handle the error in a user-friendly way here
      }
    } catch (error) {
      // Handle network errors
      console.error('Network error: ')
      // You can also provide a user-friendly message for network errors
    }
  }

  const logInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((userCredential) => {
        const newUser = userCredential.user
        console.log(newUser)

        setUserExist(true) // Change to true
        toast.success('Successfully Logged In Facebook Account', {
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
        setLogged(true)
        history.push('/videos')
      })
      .catch((error) => {
        const errorCode = error.code
        toast.error(`Error: ${errorCode}`, {
          style: {
            background: 'red', // Change the background color as needed
            color: 'white', // Change the text color as needed
            borderRadius: '8px', // Rounded corners for the toast
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
            padding: '12px 24px', // Adjust padding as needed
            fontSize: '16px', // Adjust font size as needed
            textAlign: 'center',
          },
        })
      })
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
        <section className="mt-[2rem] flex flex-col items-center">
          <h1 className="text-primary-400 font-semibold font-Sora text-[32px] mb-[8px] tracking-wide">
            Log in
          </h1>
          <p className="text-primary-300 text-center text-[15px] font-Work-Sans font-medium tracking-tight mb-[32px]">
            Join millions of others in sharing successful
            <br /> moves on{' '}
            <span className="text-primary-600 font-semibold">HelpMeOut</span>.
          </p>
          <div
            onClick={loginWithGoogle}
            className="rounded-lg border-2 border-black-600 
            w-[230px] xs:w-[300px] ss:w-[475px]  bg-white flex justify-center items-center gap-[0.5rem] xs:gap-[1rem] py-[0.8rem] px-[0] mb-[30px] cursor-pointer"
          >
            <Image
              src={'/assets/login/Google.svg'}
              alt="google__logo"
              width={20}
              height={20}
            />
            <p className="mb-[-0.2rem] font-Work-Sans  text-[14px] xs:text-[16px] font-medium tracking-tight">
              Continue with Google
            </p>
          </div>

          <div
            onClick={logInWithFacebook}
            className="rounded-lg border-2 border-black-600 w-[230px] xs:w-[300px] ss:w-[475px]  bg-white flex justify-center items-center gap-[0.5rem] xs:gap-[1rem] py-[0.8rem] px-[0] mb-[30px]"
          >
            <div className="flex gap-[1rem] ml-[1.5rem] cursor-pointer">
              <Image
                src={'/assets/login/Facebook.svg'}
                alt="facebook__logo"
                width={20}
                height={20}
              />
              <p className="mb-[-0.2rem] font-Work-Sans  text-[14px] xs:text-[16px] font-medium tracking-tight">
                Continue with Facebook
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[1rem] mb-[1rem]">
            <div className="w-[100px] ss:w-[200px] h-[1px] bg-black-100 "></div>
            <p className="font-medium text-primary-500 mt-[-10px]">or</p>
            <div className="w-[100px] ss:w-[200px] h-[1px] bg-black-100 "></div>
          </div>
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
              Password
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

          <button
            // onClick={login}
            className="mt-[1rem] input__tag border-2 border-primary-600 rounded-md h-[50px] hover:btn-hover font-Sora text-[16px]  text-[14px] xs:text-[16px] bg-primary-600 text-white "
          >
            Log In
          </button>
          <Link href={'/forgotPassword'}>
            <p className="text-[16px] font-Sora mt-2 font-medium mb-[14px]">
              Forgot Password?
            </p>
          </Link>

          {message && (
            <p className="mt-[0.5rem] text-center text-[19px] font-semibold">
              {message}
            </p>
          )}
          <h2 className="mt-[1rem] text-center text-[16px] text-primary-400 tracker-medium font-semibold font-Work-Sans">
            Don&apos;t Have Account?{' '}
            <Link href={'/signUp'}>
              <span className="font-bold hover:underline cursor-pointer font-Sora">
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

export default LogIn
